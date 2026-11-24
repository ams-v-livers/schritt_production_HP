/* ============================================================
   SCHRITT PRODUCTION
   TALENTS

   ★ 所属ライバーの追加・修正は基本このファイルだけ編集します。

   type
   "V"    = Vライバー
   "REAL" = リアルライバー

   iriamGeneration
   IRIAM所属者だけ使用します。
   例: "1期生"
   IRIAM以外、または期生表示をしない場合は "" のままでOKです。
============================================================ */

const TALENTS = [

  {
    id: 1,
    name: "SORA",
    reading: "ソラ",
    type: "V",

    platforms: [
      "IRIAM"
    ],

    iriamGeneration: "",

    image: "",

    colorA: "#ff9700",
    colorB: "#ffc36e",

    shortDescription:
      "雑談を中心に活動するVライバー。",

    bio:
      "明るい雑談とリスナーとのコミュニケーションを中心に活動しています。",

    links: {
      IRIAM: "#",
      X: "#"
    }
  },

  {
    id: 2,
    name: "RIN",
    reading: "リン",
    type: "V",

    platforms: [
      "Mirrativ"
    ],

    iriamGeneration: "",

    image: "",

    colorA: "#7a69ee",
    colorB: "#b39bff",

    shortDescription:
      "ゲーム・雑談を中心に活動するVライバー。",

    bio:
      "ゲームや雑談を中心に活動しています。",

    links: {
      Mirrativ: "#",
      X: "#"
    }
  },

  {
    id: 3,
    name: "MIO",
    reading: "ミオ",
    type: "REAL",

    platforms: [
      "TikTok"
    ],

    iriamGeneration: "",

    image: "",

    colorA: "#ff8965",
    colorB: "#f45a75",

    shortDescription:
      "雑談・美容を中心に活動するリアルライバー。",

    bio:
      "TikTok LIVEで雑談・美容・ライフスタイルを中心に活動しています。",

    links: {
      TikTok: "#",
      X: "#"
    }
  },

  {
    id: 4,
    name: "REN",
    reading: "レン",
    type: "REAL",

    platforms: [
      "TikTok"
    ],

    iriamGeneration: "",

    image: "",

    colorA: "#4d91cb",
    colorB: "#1b3a62",

    shortDescription:
      "ゲーム・雑談を中心に活動するリアルライバー。",

    bio:
      "ゲーム・雑談・趣味を中心に活動しています。",

    links: {
      TikTok: "#"
    }
  },

  {
    id: 5,
    name: "LUNA",
    reading: "ルナ",
    type: "V",

    platforms: [
      "IRIAM",
      "TikTok"
    ],

    iriamGeneration: "",

    image: "",

    colorA: "#d076d3",
    colorB: "#6958cc",

    shortDescription:
      "IRIAM・TikTokで活動するVライバー。",

    bio:
      "雑談・歌・ショートコンテンツなどで活動しています。",

    links: {
      IRIAM: "#",
      TikTok: "#",
      X: "#"
    }
  }

];
