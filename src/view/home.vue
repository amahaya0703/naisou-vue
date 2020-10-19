<template>
  <div class="app">
    <div class="naisou">
      <img
        src="../assets/img/naisou.png"
        title="内装"
        width="100%"
        height="700px"
      />
      <span>
        <p>●●創社では、什器製造業から内装工事全般、</p>
        <p>
          お客様の満足向上を深く追求し、低価格かつ高品質なサービスの提供を心がけております。
        </p>
      </span>
    </div>
    <section>
      <div class="naiyou">
        <h2>施工内容</h2>
        <div class="naiyou-inner">
          <div class="naiyou-tenpo">
            <img
              src="../assets/img/tenpo-sekou.png"
              alt="店舗施工"
              width="720px"
              height="436px"
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
          <div class="naiyou-text">
            <div class="naiyoutext-inner">
              <div class="naiyou-font">
                <font>あらゆる店舗内装工事に対応</font>
              </div>
              <h3>商業施設施工工事</h3>
              <div class="naiyou-text">
                ●●創社はあらゆる業種の商業施設施の施工、設計を、臨機応変にお請けでき、商業施設のリニューアルや業態の変更、部分的な改修や補修など、なんでもお任せください。お客様の多種多様なご期待に沿えるよう、全力で対応いたします。
              </div>
            </div>
          </div>
          <div class="naiyou-tenpo">
            <img
              src="../assets/img/syougyou.png"
              alt="商業施設"
              width="720px"
              height="436px"
            />
          </div>
        </div>
        <div class="naiyou-inner">
          <div class="naiyou-tenpo">
            <img
              src="../assets/img/tategu.png"
              alt="店舗施工"
              width="720px"
              height="436px"
            />
          </div>
          <div class="naiyou-tategu">
            <div class="naiyoutext-inner">
              <div class="naiyou-font">
                <font>あらゆる店舗内装工事に対応</font>
              </div>
              <h3>建具の設計、施工</h3>
              <div class="naiyou-tategu-text">
                ●●創社は建具の設計、施工を、臨機応変にお請けできるのが強みです。お客様の多種多様なご期待に沿えるよう、全力で対応いたします。
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="performance">
        <h2>施工実績</h2>
        <ul>
          <router-link
            :to="{ name: 'res' }"
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
    </section>
    <section>
      <div class="overview">
        <h2>会社概要</h2>
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
        <h2>アクセス</h2>
        <div class="access2">
          <img
            class="img"
            src="../assets/img/kaisya.png"
            title="会社"
            height="600px"
            width="1000px"
          />
          <div class="map">
            <div class="text">
              <h3>TOKYO OFFICE</h3>
              <p>
                〒000-000
                <br />
                東京都〇〇区〇〇町
                <br />
                TEL 000-0000
                <br />
                FAX 000-000
              </p>
              <button>googl map</button>
            </div>
            <GmapMap
              :center="center"
              :zoom="zoom"
              ref="map"
              style="height: 400px; width: 100%; margin: 0 0 0 50px"
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
      zoom: 10,
      icon_center: {
        url: require("@/assets/img/icon.png"),
        size: { width: 100, height: 70, f: "px", b: "px" },
        scaledSize: { width: 40, height: 35, f: "px", b: "px" },
      },
      marker_center: { lat: 35.71, lng: 139.72 },
    };
  },
  methods: {
    onCenterCanged(center) {
      this.marker_center = { lat: center.lat(), lng: center.lng() };
    },
  },
};
</script>

<style scoped>
.app {
  text-align: center;
}
.naisou {
  position: relative;
  height: 700px;
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

p {
  text-align: center;
}
main {
  margin: 0 auto;
  display: block;
  height: 150px;
  width: 660px;
}
h2 {
  height: 100px;
  background-color: #132743;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
table {
  border-collapse: collapse;
  margin: 70px auto;
  width: 800px;
}
table td {
  padding: 10px;
}
.tenpo {
  margin: 40px 0 15px 0;
}
ul {
  padding: 0;
  margin: 50px 0;
}
hr {
  width: 250px;
}
.map {
  height: 400px;
  margin: 30px 220px 30px 0;
  display: flex;
}
.img {
  margin: 30px 0 0 0;
}
.text {
  margin: 0 0 0 400px;
  padding-top: 30px;
  width: 500px;
}
.text h3 {
  margin: 0 0 50px 0;
}
.naiyou-tenpo {
  padding-left: 14px;
}
.naiyou-inner {
  display: flex;
  margin: 50px 0;
}
.naiyou-text {
  text-indent: 0em;
  padding-left: 7em;
  padding-right: 4em;
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
  padding-left: 3em;
  letter-spacing: 0.1rem;
}
</style>
