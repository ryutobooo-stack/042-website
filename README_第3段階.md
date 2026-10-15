# 042公式サイト 第3段階 — SEO・品質確認

## 今回追加したもの
- 共有用OG画像 `images/og-cover.jpg`（1200×630）、サイトアイコン `favicon.svg`
- OGPのサイト名・言語・画像、Twitterカードの設定
- 店舗の構造化データに営業開始時刻と説明を追加（終了時間「LAST」は数値化しない）
- モバイルメニューの不要なARIA属性を削除
- 下記の静的ファイル検査を実施

## 公開時に必須の設定（未完了）
1. 正式URLが決まったら canonical URL、`og:url`、`og:image`の絶対URL、構造化データの画像URLを設定。
2. 正式URLを元に `sitemap.xml` と `robots.txt` を作成。公開URLが決まるまでは作成しない。
3. GitHub Pages / Pages CMSを接続し、スマホから投稿→公開まで実機確認する。現段階でCMSの動作保証はしない。
4. Google Search ConsoleとGoogleビジネスプロフィールを設定し、店舗情報の一致を確認する。
5. 実際のiPhone/Androidで表示、ギャラリー、ナビ、電話、地図、Instagram、CMSを確認。Lighthouseを計測。
6. 料金表のカード・QR決済追加10%の計算方法を店舗ルールと照合。

## ローカルでの確認
`index.html` を直接開くと `fetch(events.json)` はブラウザの制約で失敗する場合があります。
Macでターミナルを開き、このフォルダで `python3 -m http.server 8000` を実行し、`http://localhost:8000` で確認できます。

## 注意
検索順位やSNSの表示は公開後に実際の検索エンジン・SNSで検証が必要です。OG画像は現段階で相対URLのため、公開URL決定後に絶対URLへ修正します。
