if('IntersectionObserver'in window){const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}})},{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>io.observe(el))}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'))}

// GitHub Pages等のWeb公開環境で events.json を読み込みます。
(async function(){
 const list=document.getElementById('event-list');
 if(!list)return;
 try{
  const response=await fetch('events.json',{cache:'no-store'});
  if(!response.ok)throw new Error('events.json could not be loaded');
  const events=await response.json();
  if(!Array.isArray(events))throw new Error('Invalid events data');
  const now=new Date();now.setHours(0,0,0,0);
  const visible=events.filter(e=>e && e.published===true && e.title && (!e.end_date || new Date(e.end_date+'T23:59:59')>=now)).sort((a,b)=>(b.date||'').localeCompare(a.date||''));
  if(!visible.length)return;
  list.replaceChildren();
  for(const e of visible){
   const article=document.createElement('article');article.className='event-card';
   if(typeof e.image==='string' && /^(?:images|media)\/[a-zA-Z0-9_./-]+$/.test(e.image) && !e.image.includes('..')){
    const img=document.createElement('img');img.src=e.image;img.alt=e.title;img.loading='lazy';article.append(img);
   }
   const body=document.createElement('div');body.className='event-body';
   const meta=document.createElement('p');meta.className='event-meta';
   meta.textContent=(e.date||'').replaceAll('-','.')+'  /  '+(e.category==='EVENT'?'EVENT':'NEWS');
   const title=document.createElement('h3');title.textContent=e.title;
   const desc=document.createElement('p');desc.className='event-desc';desc.textContent=e.description||'';
   body.append(meta,title,desc);article.append(body);list.append(article);
  }
 }catch(error){console.info('NEWS: 公開サーバーで events.json を読み込んでください。',error)}
})();

// Accessible responsive navigation.
const menuButton=document.querySelector('.menu-toggle');
const primaryNav=document.querySelector('#primary-nav');
if(menuButton && primaryNav){
 const closeMenu=()=>{primaryNav.classList.remove('is-open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','メニューを開く')};
 menuButton.addEventListener('click',()=>{const open=primaryNav.classList.toggle('is-open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'メニューを閉じる':'メニューを開く')});
 primaryNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
 document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
 document.addEventListener('click',e=>{if(!e.target.closest('header'))closeMenu()});
}

// Accessible image viewer. Native dialog traps focus and supports Escape.
const galleryDialog=document.querySelector('#gallery-dialog');
if(galleryDialog && typeof galleryDialog.showModal==='function'){
 const display=galleryDialog.querySelector('img');
 document.querySelectorAll('.gallery-open').forEach(button=>{
  button.addEventListener('click',()=>{display.src=button.dataset.image;display.alt=button.dataset.alt||'店内写真';galleryDialog.showModal()});
 });
 galleryDialog.querySelector('.gallery-close').addEventListener('click',()=>galleryDialog.close());
 galleryDialog.addEventListener('click',e=>{if(e.target===galleryDialog)galleryDialog.close()});
 galleryDialog.addEventListener('close',()=>{display.removeAttribute('src')});
}
