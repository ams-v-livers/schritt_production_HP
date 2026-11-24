# Schritt Production Admin

運営専用の管理画面です。

## できること

- ライバー追加 / 編集 / 削除
- プロフィール画像アップロード
- IRIAM所属者のみ「〇期生」設定
- X / IRIAM / Mirrativ / TikTok / YouTube / Twitch URL管理
- TOPライバー選択
- TOP画像アップロード
- NEWS投稿
- 事務所イベント投稿
- PFイベント投稿
- 公開 / 非公開切り替え

## 初期設定

1. Supabaseで新規Projectを作成
2. SQL Editorで `supabase-setup.sql` を実行
3. Authentication > Users から運営ユーザーを作成
4. Project Settings > API から
   - Project URL
   - anon public key
   を確認
5. `supabase-config.js` に貼り付け
6. GitHub Pages上では `/admin/` からアクセス

## 注意

`service_role` キーはブラウザ用コードへ絶対に入れないでください。
