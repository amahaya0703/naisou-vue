<template>
  <div id="app">
    <header class="ama">
      <div class="haya">
        <p>ID創社</p>
      </div>
      <ul class="menu">
        <li>会社概要</li>
        <li>施工実績</li>
        <li>採用</li>
        <li>ログイン/登録</li>
        <li>ログアウト</li>
      </ul>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import "normalize.css";

export default {
  name: "App",
};
</script>

<style scoped>
.ama {
  height: 100px;
  display: flex;
  display: table;
  width: 100%;
  margin: 25px 0 25px 0;
}
.haya {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
.menu {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-left: 60px;
}
#app {
  font-family: "M PLUS Rounded 1c";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 30px;
  text-align: center;
  color: pink;
}
</style>
