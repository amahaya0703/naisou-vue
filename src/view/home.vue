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
        <p>ID創社では、什器製造業から内装工事全般、</p>
        <p>
          お客様の満足向上を深く追求し、低価格かつ高品質なサービスの提供を心がけております。
        </p>
      </span>
    </div>
    <div>
      <h2>施工実績</h2>
      <ul>
        <router-link
          to="/restaurant"
          tag="div"
          style="cursor: hand; cursor:pointer;"
          >restaurant</router-link
        >
        <hr />
        <router-link
          to="/apparel"
          tag="div"
          style="cursor: hand; cursor:pointer;"
          >apparel</router-link
        >
        <hr />
        <router-link to="/other" tag="div" style="cursor: hand; cursor:pointer;"
          >other</router-link
        >
        <hr />
      </ul>
    </div>
    <div>
      <h2>会社概要</h2>
      <br />
      <table>
        <tbody>
          <tr>
            <th>社名</th>
            <td>株式会社ID創社</td>
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
    <div>
      <h2>アクセス</h2>
      <br />
      <br />
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
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
  bottom: -78px;
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
  margin: 0 auto;
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
</style>
