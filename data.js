/* ============================================================
   SCHRITT PRODUCTION
   UPDATE DATA

   ★ 基本的な日常更新はこのファイル
============================================================ */


/* ============================================================
   ① HERO PICKUP
============================================================ */

const HERO_PICKUP = {

  talentId:
    3,


  image:
    "./images/pickup/pickup-mio.png",


  label:
    "MONTHLY PICK UP",


  liveUrl:
    "#",


  showProfileButton:
    true,


  showLiveButton:
    true

};



/* ============================================================
   ② TALENTS
============================================================ */

const TALENTS = [

  {
    id: 1,

    name:
      "SORA",

    reading:
      "ソラ",

    type:
      "V",

    platforms: [
      "IRIAM"
    ],

    image:
      "",

    colorA:
      "#ff9700",

    colorB:
      "#ffc36e",

    shortDescription:
      "雑談を中心に活動するVライバー。",

    bio:
      "明るい雑談とリスナーとのコミュニケーションを中心に活動しています。",

    links: {

      IRIAM:
        "#",

      X:
        "#"

    }
  },


  {
    id: 2,

    name:
      "RIN",

    reading:
      "リン",

    type:
      "V",

    platforms: [
      "Mirrativ"
    ],

    image:
      "",

    colorA:
      "#7a69ee",

    colorB:
      "#b39bff",

    shortDescription:
      "ゲーム・雑談を中心に活動するVライバー。",

    bio:
      "ゲームや雑談を中心に活動しています。",

    links: {

      Mirrativ:
        "#",

      X:
        "#"

    }
  },


  {
    id: 3,

    name:
      "MIO",

    reading:
      "ミオ",

    type:
      "REAL",

    platforms: [
      "TikTok"
    ],

    image:
      "",

    colorA:
      "#ff8965",

    colorB:
      "#f45a75",

    shortDescription:
      "雑談・美容を中心に活動するリアルライバー。",

    bio:
      "TikTok LIVEで雑談・美容・ライフスタイルを中心に活動しています。",

    links: {

      TikTok:
        "#",

      X:
        "#"

    }
  },


  {
    id: 4,

    name:
      "REN",

    reading:
      "レン",

    type:
      "REAL",

    platforms: [
      "TikTok"
    ],

    image:
      "",

    colorA:
      "#4d91cb",

    colorB:
      "#1b3a62",

    shortDescription:
      "ゲーム・雑談を中心に活動するリアルライバー。",

    bio:
      "ゲーム・雑談・趣味を中心に活動しています。",

    links: {

      TikTok:
        "#"

    }
  },


  {
    id: 5,

    name:
      "LUNA",

    reading:
      "ルナ",

    type:
      "V",

    platforms: [
      "IRIAM",
      "TikTok"
    ],

    image:
      "",

    colorA:
      "#d076d3",

    colorB:
      "#6958cc",

    shortDescription:
      "IRIAM・TikTokで活動するVライバー。",

    bio:
      "雑談・歌・ショートコンテンツなどで活動しています。",

    links: {

      IRIAM:
        "#",

      TikTok:
        "#",

      X:
        "#"

    }
  }

];



/* ============================================================
   ③ NEWS

   ★ 新しいものを一番上へ追加
============================================================ */

const NEWS = [

  {
    id: 1,

    date:
      "2026.10.01",

    category:
      "NEWS",

    title:
      "公式サイトをリニューアルしました。",

    url:
      "#"
  },


  {
    id: 2,

    date:
      "2026.09.25",

    category:
      "RECRUIT",

    title:
      "Vライバー・リアルライバーの募集情報を更新しました。",

    url:
      "#recruit"
  },


  {
    id: 3,

    date:
      "2026.09.10",

    category:
      "EVENT",

    title:
      "所属ライバーのイベント情報を更新しました。",

    url:
      "#events"
  },


  {
    id: 4,

    date:
      "2026.09.01",

    category:
      "NEWS",

    title:
      "TikTok LIVEでのサポート情報を更新しました。",

    url:
      "#"
  }

];



/* ============================================================
   ④ EVENTS
============================================================ */

const EVENTS = [

  {
    id: 1,

    platform:
      "TikTok",

    date:
      "2026.10.05",

    status:
      "開催中",

    title:
      "TikTok LIVE 事務所イベント",

    description:
      "所属クリエイターを対象とした事務所イベントです。",

    image:
      "",

    url:
      "#"
  },


  {
    id: 2,

    platform:
      "IRIAM",

    date:
      "2026.10.18",

    status:
      "開催予定",

    title:
      "IRIAM OFFICE EVENT",

    description:
      "IRIAM所属ライバー向けの事務所イベント。",

    image:
      "",

    url:
      "#"
  },


  {
    id: 3,

    platform:
      "Mirrativ",

    date:
      "2026.11.01",

    status:
      "開催予定",

    title:
      "Mirrativ Creator Event",

    description:
      "Mirrativ所属クリエイター向けイベント。",

    image:
      "",

    url:
      "#"
  }

];



/* ============================================================
   ⑤ INTERVIEW
============================================================ */

const INTERVIEWS = [

  {
    id: 1,

    talentId:
      1,

    title:
      "配信を始めたきっかけと、これからの目標。",

    catchCopy:
      "最初は配信経験ゼロでした。",

    thumbnail:
      "",

    questions: [

      {
        question:
          "配信を始めたきっかけは？",

        answer:
          "以前からライブ配信に興味があり、新しいことに挑戦したいと思ったことがきっかけです。"
      },


      {
        question:
          "事務所に所属してみてどうでしたか？",

        answer:
          "困った時に相談できる環境があるので、一人で活動するより安心して続けられています。"
      },


      {
        question:
          "今後の目標は？",

        answer:
          "もっと多くの方に知ってもらい、毎日遊びに来てもらえるような配信を作っていきたいです。"
      }

    ]
  },


  {
    id: 2,

    talentId:
      3,

    title:
      "TikTok LIVEで見つけた、自分らしい配信スタイル。",

    catchCopy:
      "配信を始めて、毎日が少し変わりました。",

    thumbnail:
      "",

    questions: [

      {
        question:
          "どんな配信をしていますか？",

        answer:
          "雑談を中心に、美容や日常について話しています。"
      },


      {
        question:
          "配信の好きなところは？",

        answer:
          "リアルタイムで反応が返ってくるところです。"
      }

    ]
  }

];



/* ============================================================
   ⑥ JOURNAL
============================================================ */

const JOURNAL_ARTICLES = [

  {
    id: 1,

    category:
      "EQUIPMENT",

    title:
      "配信初心者におすすめしたいマイクの選び方",

    description:
      "配信を始める時に迷いやすい機材についてご紹介。",

    date:
      "2026.10.01",

    url:
      "#"
  },


  {
    id: 2,

    category:
      "HOW TO",

    title:
      "スマホからライブ配信を始めるまで",

    description:
      "これから配信を始めたい方向けの基本ガイド。",

    date:
      "2026.09.20",

    url:
      "#"
  },


  {
    id: 3,

    category:
      "STAFF",

    title:
      "ライバー事務所の運営スタッフは何をしている？",

    description:
      "普段は見えない運営の日常をご紹介。",

    date:
      "2026.09.12",

    url:
      "#"
  }

];



/* ============================================================
   ⑦ FAQ
============================================================ */

const FAQ = [

  {
    question:
      "配信未経験でも応募できますか？",

    answer:
      "はい。配信経験がない方でもご応募いただけます。活動したい内容や目標を確認しながらご案内します。"
  },


  {
    question:
      "顔出しは必要ですか？",

    answer:
      "Vライバーとして活動する場合は顔出し不要です。リアルライバーの場合は活動内容に応じてご案内します。"
  },


  {
    question:
      "どのプラットフォームで活動できますか？",

    answer:
      "IRIAM・Mirrativ・TikTok LIVEを取り扱っています。活動スタイルや目標に合わせてご案内します。"
  },


  {
    question:
      "面談はどのように行いますか？",

    answer:
      "オンラインで実施します。応募後または公式LINEから詳細をご案内します。"
  },


  {
    question:
      "応募前に相談だけできますか？",

    answer:
      "はい。公式LINEからご相談いただけます。応募するか決めていない段階でも問題ありません。"
  },


  {
    question:
      "Vライバーとリアルライバーでサポート内容は違いますか？",

    answer:
      "活動するプラットフォームや配信スタイルに合わせてサポート内容を調整します。"
  }

];



/* ============================================================
   ⑧ REAL LIVER SAMPLE
============================================================ */

const REAL_LIVER_SAMPLES = [

  {
    name:
      "MIO",

    gender:
      "女性",

    age:
      "23歳",

    genre:
      "雑談 / 美容",

    image:
      "",

    colorA:
      "#ff8d68",

    colorB:
      "#ef5b77"
  },


  {
    name:
      "REN",

    gender:
      "男性",

    age:
      "25歳",

    genre:
      "ゲーム / 雑談",

    image:
      "",

    colorA:
      "#4f92ca",

    colorB:
      "#1a3a61"
  },


  {
    name:
      "YUNA",

    gender:
      "女性",

    age:
      "22歳",

    genre:
      "歌 / 雑談",

    image:
      "",

    colorA:
      "#cf83c5",

    colorB:
      "#6a407c"
  },


  {
    name:
      "HARU",

    gender:
      "男性",

    age:
      "24歳",

    genre:
      "趣味 / 雑談",

    image:
      "",

    colorA:
      "#60a27c",

    colorB:
      "#173a2a"
  }

];
