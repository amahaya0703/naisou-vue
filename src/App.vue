<template>
  <div id="app">
    <nav class="ama">
      <router-link to="/" tag="p">ID創社</router-link>
      <ul class="menu">
        <router-link to="/kaisya" tag="p">会社概要</router-link>
        <router-link to="/" tag="p">施工実績</router-link>
        <router-link to="/" tag="p">採用</router-link>
        <router-link to="/" tag="p">ログイン/登録</router-link>
        <router-link to="/" tag="p">ログアウト</router-link>
      </ul>
    </nav>
    <router-view></router-view>
    <footer>
      <div class="foot">
        <ul>
          <li>ama</li>
          <li>habu</li>
          <li>habubu</li>
          <li>amahaya</li>
        </ul>
        <p>Copyright © TANSEISHA Co., Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import "normalize.css";
export default {
  name: "App",
};
</script>

<style scoped>
ul {
  padding: 0 10px;
  display: flex;
  list-style: none;
}
li {
  margin: 0 auto;
}
.ama {
  display: table;
  width: 100%;
  margin: 15px 0 15px 0;
}
.menu {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 0 60px;
}
#app {
  font-family: "M PLUS Rounded 1c";
  -webkit-font-smoothing: antialiased;
  font-size: 30px;
  text-align: center;
  color: pink;
}

footer {
  position: relative;
  z-index: 1;
  color: #fff;
  background: #3d3b3d;
}

.foot {
  margin: 0 auto;
  padding: 20px 0 10px 0;
}
</style>
