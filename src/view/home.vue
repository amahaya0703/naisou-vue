<template>
  <div class="app">
    <div class="naisou">
      <img
        src="../assets/img/naisou.png"
        title="内装"
        width="100%"
        height="723px"
        class="web-top"
      />
      <img
        src="../assets/img/naisou2.png"
        alt="内装"
        width="100%"
        height="560px"
        class="mobile"
      />
      <span>
        <p>●●創社では、什器製造業から内装工事全般、</p>
        <p>
          お客様の満足向上を深く追求し、低価格かつ高品質なサービスの提供を心がけております。
        </p>
      </span>
      <div class="scroll-parent">
        <a href="#" class="scroll">
          <span></span>
          <div class="arrow"></div>
        </a>
      </div>
    </div>
    <section class="first">
      <div class="naiyou">
        <div class="naiyou-link">
          <router-link
            id="contents"
            :to="{
              name: 'ama',
              hash: '#ama',
            }"
          >
            <h2>施工内容</h2>
          </router-link>
        </div>
        <div class="naiyou-inner">
          <div data-aos="fade-up" class="naiyou-tenpo">
            <img
              src="../assets/img/tenpo-sekou.png"
              alt="店舗施工"
              width="720px"
              height="436px"
              class="web"
            />
            <img
              src="../assets/img/tenpo-sekou.png"
              alt="店舗施工"
              width="320px"
              height="236px"
              class="mobile"
            />
          </div>
          <div class="naiyou-text">
            <div class="naiyoutext-inner">
              <div class="naiyou-font">
                <font>あらゆる店舗内装工事に対応</font>
              </div>
              <h3>店舗内装工事</h3>
              <div class="naiyou-text">
                ●●創社はあらゆる業種の店舗内装施工、設計を、臨機応変にお請けできるのが強みです。店舗のリニューアルや業態の変更、部分的な改修や補修など、なんでもお任せください。お客様の多種多様なご期待に沿えるよう、全力で対応いたします。
              </div>
            </div>
          </div>
        </div>
        <div class="naiyou-inner">
          <div class="naiyoutext-inner">
            <div class="naiyou-font">
              <font>あらゆる店舗内装工事に対応</font>
            </div>
            <h3>商業施設施工工事</h3>
            <div class="naiyou-text">
              ●●創社はあらゆる業種の商業施設施の施工、設計を、臨機応変にお請けでき、商業施設のリニューアルや業態の変更、部分的な改修や補修など、なんでもお任せください。お客様の多種多様なご期待に沿えるよう、全力で対応いたします。
            </div>
          </div>
          <div data-aos="fade-up" class="naiyou-tenpo">
            <img
              src="../assets/img/syougyou.png"
              alt="商業施設"
              width="720px"
              height="436px"
              class="web web-right"
            />
            <img
              src="../assets/img/syougyou.png"
              alt="商業施設"
              width="320px"
              height="236px"
              class="mobile"
            />
          </div>
        </div>
        <div class="naiyou-inner">
          <div data-aos="fade-up" class="naiyou-tenpo">
            <img
              src="../assets/img/tategu.png"
              alt="店舗施工"
              width="720px"
              height="436px"
              class="web"
            />
            <img
              src="../assets/img/tategu.png"
              alt="店舗施工"
              width="320px"
              height="236px"
              class="mobile"
            />
          </div>
          <div class="naiyou-tategu">
            <div class="naiyoutext-inner">
              <div class="naiyou-font">
                <font>あらゆる店舗内装工事に対応</font>
              </div>
              <h3>建具の設計、施工</h3>
              <div class="naiyou-text">
                ●●創社は建具の設計、施工を、臨機応変にお請けできるのが強みです。お客様の多種多様なご期待に沿えるよう、全力で対応いたします。
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="performance">
        <div class="jixtuseki-link">
          <router-link
            id="performance"
            :to="{
              name: 'ama',
              hash: '#ama',
            }"
          >
            <h2>施工実績</h2></router-link
          >
        </div>
        <ul>
          <router-link
            :to="{
              name: 'res',
              hash: '#res',
            }"
            tag="div"
            style="cursor: hand; cursor: pointer"
            >restaurant</router-link
          >
          <hr />
          <router-link
            :to="{ name: 'apa' }"
            tag="div"
            style="cursor: hand; cursor: pointer"
            >apparel</router-link
          >
          <hr />
          <router-link
            :to="{ name: 'other' }"
            tag="div"
            style="cursor: hand; cursor: pointer"
            >other</router-link
          >
          <hr />
        </ul>
      </div>
      <div class="slide">
        <div class="item">
          <img src="../assets/img/eat11.png" class="img-slide" />
          <p>test</p>
        </div>
        <div class="item">
          <img src="../assets/img/other7.png" class="img-slide" />
          <div class="introduction-img">
            <div class="introduction-img-inner">
              事業紹介
            </div>
            <p>心と体の元気プラザ</p>
          </div>
        </div>
        <div class="item">
          <img src="../assets/img/eat3.png" class="img-slide" />
          <p>test</p>
        </div>
        <div class="item">
          <img src="../assets/img/eat4.png" class="img-slide" />
          <p>test</p>
        </div>
        <div class="item">
          <img src="../assets/img/other3.png" class="img-slide" />
          <p>test</p>
        </div>
        <div class="item">
          <img src="../assets/img/other2.png" class="img-slide" />
          <p>test</p>
        </div>
        <div class="item">
          <img src="../assets/img/other6.png" class="img-slide" />
          <p>test</p>
        </div>
        <div class="item">
          <img src="../assets/img/other1.png" class="img-slide" />
          <p>test</p>
        </div>
        <div class="item">
          <img src="../assets/img/other5.png" class="img-slide" />
          <p>test</p>
        </div>
        <div class="item">
          <img src="../assets/img/shp5.png" class="img-slide" />
          <p>test</p>
        </div>
        <div class="item">
          <img src="../assets/img/shp3.png" class="img-slide" />
          <p>test</p>
        </div>
        <div class="item">
          <img src="../assets/img/shp8.png" class="img-slide" />
          <p>test</p>
        </div>
      </div>
    </section>
    <section>
      <div class="overview">
        <div class="gaiyou-link">
          <router-link
            id="overview"
            :to="{
              name: 'ama',
              hash: '#ama',
            }"
          >
            <h2>会社概要</h2>
          </router-link>
        </div>
        <table>
          <tbody>
            <tr>
              <th>社名</th>
              <td>株式会社●●創社</td>
            </tr>
            <tr>
              <th>本社</th>
              <td>
                東京都●●区●●町
                <br />
                TEL 090-000-000 FAX 090-000-000
              </td>
            </tr>
            <tr>
              <th>創業</th>
              <td>1962年</td>
            </tr>
            <tr>
              <th>資本金</th>
              <td>●●●万円</td>
            </tr>
            <tr>
              <th>代表取締役</th>
              <td>天早貴義</td>
            </tr>
            <tr>
              <th>建設業者登録</th>
              <td>東京都知事登録（は）第0000号</td>
            </tr>
            <tr>
              <th>建設業者許可</th>
              <td>国土交通大臣 許可 第0000号</td>
            </tr>
            <tr>
              <th>営業種目</th>
              <td>
                1.商業、一級建築工事
                <br />
                2.上記の設計、デザイン
                <br />
                3.別注家具・造作木工事
              </td>
            </tr>
            <br />
          </tbody>
        </table>
      </div>
    </section>
    <section>
      <div class="access">
        <div class="access-link">
          <router-link
            id="access"
            :to="{
              name: 'ama',
              hash: '#ama',
            }"
          >
            <h2>アクセス</h2>
          </router-link>
        </div>
        <div class="access2">
          <img
            src="../assets/img/kaisya.png"
            title="会社"
            height="600px"
            width="1000px"
            class="web-access"
          />
          <img
            src="../assets/img/kaisya.png"
            title="会社"
            width="100%"
            height="360px"
            class="mobile a"
          />
          <div class="map">
            <div class="text">
              <h3 class="office">TOKYO OFFICE</h3>
              <p class="town">
                〒000-000
                <br />
                東京都〇〇区〇〇町
                <br />
                TEL 000-0000
                <br />
                FAX 000-000
              </p>
              <button>
                <a href="https://www.google.com/maps/@35.71,139.72,17z?hl=ja">
                  Google Map
                </a>
              </button>
            </div>
            <GmapMap
              :center="center"
              :zoom="zoom"
              ref="map"
              class="vue-map"
              @center_changed="onCenterCanged"
            >
              <GmapMarker
                v-show="marker_center"
                :position="marker_center"
                :clickable="true"
                :icon="icon_center"
                :draggable="true"
              ></GmapMarker>
            </GmapMap>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      center: { lat: 35.71, lng: 139.72 },
      zoom: 17,
      icon_center: {
        url: require("@/assets/img/icon.png"),
        size: { width: 100, height: 70, f: "px", b: "px" },
        scaledSize: { width: 40, height: 35, f: "px", b: "px" },
      },
      marker_center: { lat: 35.71, lng: 139.72 },
    };
  },
  mounted() {
    this.$$refs.icon_center.$mapPromise.then(
      (icon_center) => (this.icon_center = icon_center)
    );
  },
  methods: {
    onCenterCanged(center) {
      this.marker_center = { lat: center.lat(), lng: center.lng() };
    },
  },
};
</script>

<style scoped>
.web {
  border-radius: 0 10px 10px 0;
}
.web-right {
  border-radius: 10px 0 0 10px;
}
.mobile {
  display: none;
}
.app {
  font-family: "MPLUSRounded1c-Black";
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: pink;
  font-size: 25px;
  font-weight: bold;
}
h2 {
  height: 100px;
  background-color: #132743;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
a {
  color: currentColor;
  text-decoration: none;
}
/* ========================
          top-view
=========================== */

.naisou {
  position: relative;
  height: 700px;
}
.scroll-parent {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 95vh;
  background-size: cover;
}

.scroll {
  position: absolute;
  bottom: 112%;
  width: 3em;
  height: 1em;
  cursor: pointer;
  color: #f5f5f5;
}

.scroll > span {
  width: 1em;
  height: 1em;
  position: absolute;
  top: 25%;
  left: 33%;
  transform: translateY(0) rotate(-45deg);
  border-left: 1px solid #f5f5f5;
  border-bottom: 1px solid #f5f5f5;
}

p {
  text-align: center;
}
span {
  position: absolute;
  bottom: 12px;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
}

/* ========================
          施工内容
=========================== */

.naiyou-inner {
  display: flex;
  margin: 50px 0;
}
.naiyou-text {
  text-indent: 0em;
  padding-left: 1em;
  padding-right: 1em;
  letter-spacing: 0.1rem;
}
.naiyoutext-inner {
  margin-top: 90px;
}
.naiyou-tategu {
  margin-top: 45px;
}
.naiyou-tategu-text {
  text-indent: 4em;
  padding-left: 4em;
  letter-spacing: 0.1rem;
}
.naiyou-link {
  text-decoration: none;
}

/* ========================
          施工実績
=========================== */

ul {
  padding: 0;
  margin: 50px 0;
}

hr {
  width: 250px;
}

.slide {
  scroll-snap-type: x mandatory;
  white-space: nowrap;
  overflow: auto;
}
.item {
  scroll-snap-align: center;
  display: inline-block;
  white-space: normal;
  background-color: #f4f4f4;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  margin: 0 30px 50px 20px;
}
.img-slide {
  width: 666px;
  height: 444px;
  background-color: #f4f4f4;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 10px 10px 0 0;
}
.introduction-img {
  margin-left: 187px;
}
.introduction-img-inner {
  float: left;
  font-size: 12px;
  height: 22px;
  border: 1px solid #d3d3d3;
  padding: 0 16px;
  line-height: 22px;
  color: black;
}
/* ========================
          会社概要
=========================== */

table {
  border-collapse: collapse;
  margin: 70px auto;
  width: 800px;
}
table td {
  padding: 10px;
}

/* ========================
          アクセス
=========================== */

.map {
  height: 400px;
  margin: 30px 220px 30px 0;
  display: flex;
}
.img {
  margin: 30px 0 0 0;
}
.text {
  margin: 0 0 0 90px;
  padding-top: 30px;
  width: 500px;
}
h3 {
  margin: 0 0 50px 0;
}

.vue-map {
  height: 400px;
  width: 100%;
  margin: 0 0 0 50px;
}

@media screen and (max-width: 480px) {
  .app {
    font-family: "MPLUSRounded1c-Black";
    -webkit-font-smoothing: antialiased;
    text-align: center;
    color: pink;
    font-size: 19px;
  }
  .naiyou {
    margin-top: 115px;
  }
  .naiyou-inner {
    flex-direction: column;
  }
  .naiyou-text {
    text-indent: 0em;
    padding-left: 0em;
    padding-right: 0em;
    letter-spacing: 0.1rem;
  }
  .naiyoutext-inner {
    margin-top: 90px;
    padding: 0 40px;
    order: 1;
  }
  .naiyou-link {
    margin-top: -55px;
    text-decoration: none;
  }
  .naisou {
    height: 500px;
  }
  .mobile {
    display: block;
    margin: 0 auto;
  }
  .web,
  .web-top,
  .web-access {
    display: none;
  }

  span {
    position: absolute;
    bottom: -35px;
  }
  .img-slide {
    width: 333px;
    height: 222px;
    background-color: #f4f4f4;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
  }
  .introduction-img {
    margin-left: 20px;
  }
  table {
    margin-right: 0px;
    width: 333px;
    margin-left: 14px;
  }
  .map {
    margin: 0;
    display: block;
  }
  .text {
    margin: 0;
    order: 1;
    width: 360px;
    padding-top: 0;
  }
  .vue-map {
    height: 200px;
    width: 300px;
    margin: 0 auto;
    margin-top: 10px;
  }
  .town {
    margin: 7px;
  }
  .text h3 {
    margin: 0;
    padding-top: 10px;
  }
}
</style>
