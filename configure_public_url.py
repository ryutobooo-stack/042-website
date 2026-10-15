#!/usr/bin/env python3
"""Set real public URL once hosting is decided. Example: python3 configure_public_url.py https://example.jp/"""
import sys,json,re
from pathlib import Path
from bs4 import BeautifulSoup
from urllib.parse import urlparse
if len(sys.argv)!=2: raise SystemExit('Usage: python3 configure_public_url.py https://YOUR-DOMAIN/')
u=sys.argv[1].rstrip('/')+'/'
parsed=urlparse(u)
if parsed.scheme!='https' or not parsed.netloc or parsed.username or parsed.password or parsed.query or parsed.fragment: raise SystemExit('Use the HTTPS public site root URL')
root=Path(__file__).resolve().parent
p=root/'index.html';soup=BeautifulSoup(p.read_text(encoding='utf-8'),'html.parser');h=soup.head
for name,attrs in [('canonical',{'rel':'canonical','href':u}),('og:url',{'property':'og:url','content':u}),('og:image',{'property':'og:image','content':u+'images/og-cover.jpg'}),('twitter:image',{'name':'twitter:image','content':u+'images/og-cover.jpg'})]:
 if name=='canonical':
  t=h.find('link',rel='canonical') or soup.new_tag('link');t.attrs=attrs
 else:
  t=h.find('meta',attrs={('name' if name.startswith('twitter:') else 'property'):name}) or soup.new_tag('meta');t.attrs=attrs
 if t.parent is None:h.append(t)
for tag in h.find_all('script',type='application/ld+json'):
 d=json.loads(tag.string);d['url']=u;d['image']=u+'images/og-cover.jpg';tag.string=json.dumps(d,ensure_ascii=False,separators=(',',':'))
p.write_text(str(soup),encoding='utf-8')
(root/'robots.txt').write_text('User-agent: *\nAllow: /\nSitemap: '+u+'sitemap.xml\n',encoding='utf-8')
(root/'sitemap.xml').write_text('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>'+u+'</loc></url></urlset>\n',encoding='utf-8')
print('Configured:',u)
