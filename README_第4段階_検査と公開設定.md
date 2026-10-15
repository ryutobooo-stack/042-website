# 第4版・公開前静的検査結果

- HTML内のローカル参照先欠落: 0件 ([])
- JavaScript構文チェック: PASS
- events.json: VALID
- 店舗画像: 11ファイル、画像デコード可能
- 公開URL依存のcanonical/OGP絶対URL/サイトマップ: **未設定**（実URL確定後に `configure_public_url.py` を実行）
- 実機ブラウザ・SNSカード・Googleインデックス・管理画面接続: **未検証**

## 公開後の確認
1. 公開URLを確定し、`python3 configure_public_url.py https://公開ドメイン/` を実行する。
2. 生成された `robots.txt` と `sitemap.xml` と更新済み `index.html` を公開する。
3. Google Search Consoleで所有権確認、サイトマップ登録、URL検査を行う。検索登録は保証されない。
4. Instagram/LINE等に公開URLを貼って画像・説明文を確認する。キャッシュ更新に時間がかかる場合あり。
5. iPhone Safari、Android Chrome、Mac Chrome/Safariでメニュー、画像拡大、電話、地図、Instagram、NEWSを確認する。
6. Pages CMSをGitHubリポジトリに接続し、テストイベントを登録・修正・非公開にして公開サイトへの反映を確認する。
7. カード・QR決済の別途10％の計算方法を店舗運用と照合し、料金表を確定する。

※現在は公開前の静的チェック。実環境での品質保証ではありません。
