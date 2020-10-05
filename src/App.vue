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
  padding: 0;
  height: 75px;
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
</style>
