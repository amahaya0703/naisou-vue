<template>
  <div class="app">
    <div class="naisou">
      <img
        src="../assets/img/naisou.png"
        title="内装"
        width="100%"
        height="700px"
      />
      <section>
        <p>ID創社では、什器製造業から内装工事全般、</p>
        <p>
          お客様の満足向上を深く追求し、低価格かつ高品質なサービスの提供を心がけております。
        </p>
      </section>
    </div>
    <article>
      <h2>施工実績</h2>
      <h3>RESTAURANT</h3>
      <table border="4">
        <tr>
          <td>レストラン</td>
          <td bgcolor="#FFFFFF" valign="top" width="150">
            大阪・梅田
          </td>
          <td bgcolor="#FFFFFF" valign="top" width="200">
            にくらうす
          </td>
        </tr>
        <tr>
          <td>鮨</td>
          <td bgcolor="#FFFFFF" valign="top" width="150">
            東京・渋谷
          </td>
          <td bgcolor="#FFFFFF" valign="top" width="200">
            Heiju TOKYO
          </td>
        </tr>
        <tr>
          <td>レストラン</td>
          <td bgcolor="#FFFFFF" valign="top" width="150">
            神奈川・横浜
          </td>
          <td bgcolor="#FFFFFF" valign="top" width="200">
            梅田エスト店
          </td>
        </tr>
        <tr>
          <td>レストラン</td>
          <td bgcolor="#FFFFFF" valign="top" width="150">
            東京・渋谷
          </td>
          <td bgcolor="#FFFFFF" valign="top" width="200">
            銀座一颯
          </td>
        </tr>
        <tr>
          <td>スーパー</td>
          <td bgcolor="#FFFFFF" valign="top" width="150">
            大阪・関蘭
          </td>
          <td bgcolor="#FFFFFF" valign="top" width="200">
            福島屋
          </td>
        </tr>
      </table>
    </article>
    <br />
    <h2>会社概要</h2>
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
    </ul>
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
section {
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
  margin: 0 auto;
  width: 800px;
}
td {
  text-align: center;
  width: 300px;
}
</style>
