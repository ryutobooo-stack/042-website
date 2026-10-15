Girl’s Lounge 042 | NEWS & EVENTS 管理画面対応版

■ 内容
index.html / images/ / events.json / .pages.yml / media/

■ スマホからの更新を有効にする（初回のみMac推奨）
1. GitHubアカウントを作る https://github.com/
2. 新しいリポジトリを作成。名前例: 042-website（公開サイトなので Public を選ぶ）
3. ZIPを解凍したフォルダの中身を、隠しファイル .pages.yml と .nojekyll も含めてGitHubのリポジトリ直下にアップロードする。
   注意: MacのFinderで隠しファイルを表示するには command + shift + .（ピリオド）
4. GitHubの Settings → Pages → Build and deployment → Deploy from a branch → main / (root) → Save
5. 公開URLは通常 https://ユーザー名.github.io/042-website/ です。反映まで数分かかることがあります。
6. スマホで https://app.pagescms.org/ を開き、GitHubでサインイン。GitHub Appのリポジトリアクセスを許可。
7. 対象リポジトリ → NEWS & EVENTS → 追加・編集 → 保存。
8. GitHub Pagesが新しいコミットを公開すると、サイトのNEWS & EVENTSに反映されます。

■ 項目の説明
タイトル、種類 NEWS / EVENT、日付、説明、画像、公開スイッチを設定できます。
掲載終了日を指定すると、その日の終わり以降はサイトから自動的に非表示になります。
削除したい場合はCMSで削除、または公開スイッチをオフにしてください。

■ 重要
・ZIPを解凍して index.html を直接ダブルクリックした file:// 表示では、ブラウザの制限で events.json を取得できないことがあります。イベントの表示はGitHub Pages公開後に確認してください。
・管理画面はサイト内に直接置いていません。Pages CMSのGitHub認証で編集します。一般の来訪者には編集できません。
・サイトはまだネットに公開されていません。公開するにはGitHub設定が必要です。
・イベント写真はmediaフォルダに保存されます。
・既存の写真、料金表、求人DM案内、電話/アクセス導線は維持しています。
・公開前に決済追加料金の表示が実際の計算ルールと一致しているか確認してください。
