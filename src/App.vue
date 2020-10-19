<template>
  <div id="app">
    <nav class="ama">
      <router-link to="/" tag="p" style="cursor: hand; cursor: pointer"
        >〇〇創社</router-link
      >
      <ul class="menu">
        <router-link to="/" tag="p" style="cursor: hand; cursor: pointer"
          >施工内容</router-link
        >
        <router-link to="/" tag="p" style="cursor: hand; cursor: pointer"
          >施工実績</router-link
        >
        <router-link to="/" tag="p" style="cursor: hand; cursor: pointer"
          >会社概要</router-link
        >
        <router-link to="/" tag="p" style="cursor: hand; cursor: pointer"
          >アクセス</router-link
        >
        <router-link
          :to="{ name: 'contact' }"
          tag="p"
          style="cursor: hand; cursor: pointer"
          >お問合せ</router-link
        >
      </ul>
    </nav>
    <router-view></router-view>
    <footer>
      <div class="foot">
        <ul>
          <li>ama</li>
          <li>test</li>
          <li>test</li>
          <li>amahaya</li>
        </ul>
        <p>Copyright © ●●SHA Co., Ltd. All Rights Reserved.</p>
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
nav {
  background-color: #3d3b3d;
}
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
  text-align: center;
  color: pink;
}

footer {
  z-index: 1;
  color: #fff;
  background: #3d3b3d;
}

.foot {
  margin: 0 auto;
  padding: 20px 0 10px 0;
}
</style>
