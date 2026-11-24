/* ============================================================
   SCHRITT PRODUCTION
   TOP LIVER

   ★ TOPページのピックアップライバー専用
   ★ 月1回の更新は基本このファイルだけでOKです。

   linkedTalentId
   → talents.js のプロフィールと紐付けるID
   → PROFILEボタンから詳細プロフィールを開くために使用します。

   nameEn
   → 大文字アルファベット表記を推奨

   birthday
   → 例 "09.21"
   → 不明・非表示の場合は ""

   platforms
   → name / url を追加できます。
   → IRIAM / Mirrativ / TikTok / YouTube / Twitch など

   image
   → TOP専用画像
============================================================ */

const TOP_LIVER = {

  linkedTalentId: 3,

  label:
    "MONTHLY PICK UP",

  name:
    "MIO",

  nameEn:
    "MIO",

  birthday:
    "",

  message:
    "雑談・美容を中心に活動中。",

  image:
    "./images/pickup/pickup-mio.png",

  xUrl:
    "#",

  platforms: [
    {
      name: "TikTok",
      url: "#"
    }
  ],

  colorA:
    "#ff8965",

  colorB:
    "#f45a75",

  showProfileButton:
    true,

  showLiveButton:
    true,

  liveUrl:
    "#"

};
