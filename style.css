/* =========================================================
   HERO PICK UP CREATOR
========================================================= */

.hero-visual {
  min-height: 620px;

  position: relative;
}


/* オレンジ背景 */

.hero-shape {
  width: 455px;
  height: 490px;

  position: absolute;

  top: 55px;
  right: 10px;

  border-radius:
    48% 52% 58% 42%
    /
    45% 40% 60% 55%;

  background:
    linear-gradient(
      145deg,
      var(--orange),
      var(--orange-light)
    );

  box-shadow:
    0 40px 90px
    rgba(255,135,0,.27);

  animation:
    heroPickupBlob
    9s ease-in-out
    infinite;
}


@keyframes heroPickupBlob {

  0%,
  100% {

    border-radius:
      48% 52% 58% 42%
      /
      45% 40% 60% 55%;

  }

  50% {

    border-radius:
      56% 44% 44% 56%
      /
      39% 55% 45% 61%;

    transform:
      translateY(-8px)
      rotate(2deg);

  }

}


/* 黄色い丸 */

.hero-yellow-circle {
  width: 185px;
  height: 185px;

  position: absolute;

  top: 22px;
  right: -2px;

  border-radius: 50%;

  background:
    var(--yellow);

  animation:
    heroPickupYellow
    5.5s ease-in-out
    infinite;
}


@keyframes heroPickupYellow {

  50% {

    transform:
      translateY(-13px)
      scale(1.03);

  }

}


/* 白リング */

.hero-pickup-ring {
  width: 300px;
  height: 300px;

  position: absolute;

  right: 115px;
  bottom: 30px;

  border:
    2px solid
    rgba(255,255,255,.35);

  border-radius: 50%;
}


/* PICK UPタグ */

.hero-pickup-label {
  position: absolute;

  top: 55px;
  left: 10px;

  z-index: 8;

  padding: 9px 14px;

  display: flex;

  align-items: center;

  gap: 7px;

  color:
    var(--navy);

  background:
    white;

  border:
    1px solid
    rgba(255,151,0,.15);

  border-radius:
    999px;

  box-shadow:
    0 14px 35px
    rgba(80,45,12,.11);

  font-family:
    "Montserrat",
    sans-serif;

  font-size: 8px;

  font-weight: 900;

  letter-spacing: .08em;

  animation:
    heroPickupLabelFloat
    5s ease-in-out
    infinite;
}


.hero-pickup-label span {
  color:
    var(--orange);

  font-size: 14px;
}


@keyframes heroPickupLabelFloat {

  50% {

    transform:
      translateY(-8px)
      rotate(-2deg);

  }

}


/* ライバー画像 */

.hero-pickup-image-wrap {
  width: 390px;
  height: 500px;

  position: absolute;

  right: 47px;
  bottom: 20px;

  z-index: 4;

  display: flex;

  align-items: flex-end;
  justify-content: center;

  overflow: hidden;

  border-radius:
    0 0
    38% 38%;
}


.hero-pickup-image {
  width: 100%;
  height: 100%;

  object-fit:
    contain;

  object-position:
    center bottom;

  filter:
    drop-shadow(
      0 22px 26px
      rgba(87,45,10,.18)
    );

  animation:
    heroCreatorFloat
    6s ease-in-out
    infinite;
}


@keyframes heroCreatorFloat {

  0%,
  100% {

    transform:
      translateY(0);

  }

  50% {

    transform:
      translateY(-6px);

  }

}


/* 画像なし */

.hero-pickup-placeholder {
  width: 260px;
  height: 260px;

  margin-bottom: 100px;

  display: grid;

  place-items: center;

  color:
    white;

  border:
    1px solid
    rgba(255,255,255,.3);

  border-radius: 50%;

  font-family:
    "Montserrat",
    sans-serif;

  font-size: 100px;

  font-weight: 900;
}


/* ライバー情報 */

.hero-pickup-info {
  min-width: 255px;

  padding: 20px;

  position: absolute;

  z-index: 10;

  left: 0;
  bottom: 43px;

  border:
    1px solid
    rgba(255,255,255,.65);

  border-radius: 24px;

  background:
    rgba(255,255,255,.94);

  backdrop-filter:
    blur(18px);

  box-shadow:
    0 22px 55px
    rgba(76,42,13,.15);

  transform:
    rotate(-2deg);
}


.hero-pickup-platforms {
  display: flex;

  flex-wrap: wrap;

  gap: 5px;
}


.hero-pickup-platforms span {
  padding: 5px 8px;

  color:
    white;

  background:
    var(--navy);

  border-radius:
    999px;

  font-family:
    "Montserrat",
    sans-serif;

  font-size: 7px;

  font-weight: 900;
}


.hero-pickup-info h2 {
  margin:
    13px 0
    0;

  font-family:
    "Montserrat",
    "Noto Sans JP",
    sans-serif;

  font-size: 34px;

  line-height: 1;

  letter-spacing: -.055em;
}


.hero-pickup-reading {
  display: block;

  margin-top: 5px;

  color:
    var(--muted);

  font-size: 8px;
}


/* ボタン */

.hero-pickup-actions {
  margin-top: 17px;

  display: flex;

  gap: 7px;
}


.hero-profile-button,
.hero-live-button {
  min-height: 37px;

  padding: 0 12px;

  display: inline-flex;

  align-items: center;
  justify-content: center;

  gap: 8px;

  border-radius:
    999px;

  font-family:
    "Montserrat",
    sans-serif;

  font-size: 7px;

  font-weight: 900;

  transition:
    transform .2s ease;
}


.hero-profile-button {
  color:
    white;

  background:
    var(--orange);

  border: 0;
}


.hero-live-button {
  color:
    white;

  background:
    var(--navy);
}


.hero-profile-button:hover,
.hero-live-button:hover {

  transform:
    translateY(-2px);

}


/* 装飾 */

.hero-pickup-star,
.hero-pickup-note {
  position: absolute;

  z-index: 8;

  font-weight: 900;

  pointer-events: none;
}


.star-one {
  top: 18px;
  left: 43%;

  color:
    var(--orange);

  font-size: 29px;

  animation:
    pickupStarSpin
    9s linear
    infinite;
}


.star-two {
  right: 8px;
  top: 43%;

  color:
    white;

  font-size: 24px;

  animation:
    pickupStarSpin
    8s linear
    infinite reverse;
}


.hero-pickup-note {
  left: 13%;
  top: 40%;

  color:
    var(--navy);

  font-size: 30px;

  animation:
    pickupNoteFloat
    5s ease-in-out
    infinite;
}


@keyframes pickupStarSpin {

  to {

    transform:
      rotate(360deg);

  }

}


@keyframes pickupNoteFloat {

  50% {

    transform:
      translateY(-10px)
      rotate(7deg);

  }

}


/* =========================================================
   TABLET
========================================================= */

@media(max-width:1080px) {

  .hero-visual {
    width:
      min(
        100%,
        680px
      );

    margin:
      0 auto;
  }

}


/* =========================================================
   MOBILE
========================================================= */

@media(max-width:560px) {

  .hero-visual {
    min-height: 535px;
  }


  .hero-shape {
    width: 310px;
    height: 380px;

    right: -5px;
    top: 75px;
  }


  .hero-yellow-circle {
    width: 125px;
    height: 125px;

    top: 52px;
  }


  .hero-pickup-ring {
    width: 210px;
    height: 210px;

    right: 50px;
  }


  .hero-pickup-image-wrap {
    width: 290px;
    height: 390px;

    right: 4px;
    bottom: 50px;
  }


  .hero-pickup-label {
    top: 30px;
    left: 0;
  }


  .hero-pickup-info {
    left: 0;
    right: 15px;
    bottom: 0;

    min-width: 0;

    padding: 16px;

    transform:
      rotate(-1deg);
  }


  .hero-pickup-info h2 {
    font-size: 27px;
  }


  .hero-pickup-actions {
    flex-wrap: wrap;
  }


  .hero-pickup-placeholder {
    width: 180px;
    height: 180px;

    margin-bottom: 100px;

    font-size: 70px;
  }

}
