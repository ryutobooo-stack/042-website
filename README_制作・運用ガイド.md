# Girl’s Lounge 042 — サイト運用ガイド

## 構成
- `index.html`: ページ構造・店舗情報
- `assets/styles.css`: デザイン・スマホ対応
- `assets/main.js`: メニュー・アニメーション・イベント表示
- `images/`: 店舗写真（WebPと元のJPEG）
- `events.json`: イベント情報
- `.pages.yml`: Pages CMS用の設定

## ローカル確認
`index.html`を開くとデザインは確認できます。ただし、ブラウザのセキュリティ制限で`events.json`はローカルファイルから取得できないことがあります。Macのターミナルでこのフォルダへ移動して `python3 -m http.server 8000` を実行し、`http://localhost:8000/` を開くと動作確認できます。

## スマホからのイベント更新
GitHubへの配置、GitHub Pagesでの公開、Pages CMSの認証とリポジトリ接続が必要です。**管理画面は未接続・未検証**です。イベントを登録するまでは「現在掲載中のお知らせはありません」と表示されます。

## 公開前に要確認
- 決済時の追加10%の計算基準（現行サイトでは元料金を基準と記載）
- 表示している各メニュー料金・営業時間の最新性
- 独自ドメインとSNSシェア画像の絶対URL設定
- 公開環境でのCMS操作、iPhone/Android/PCの表示、リンクの動作
- Google Search Console、プライバシー方針等の必要性

## 更新方法
店舗情報は`index.html`、見た目は`assets/styles.css`、動作は`assets/main.js`を編集します。公開後はGitHubへの変更反映でサイトを更新します。
