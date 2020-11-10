<template>
  <div id="app">
    <nav class="ama">
      <router-link
        id="ama"
        :to="{
          name: 'ama',
        }"
        tag="p"
        style="cursor: hand; cursor: pointer"
        >〇〇創社</router-link
      >
      <div class="menu">
        <router-link
          :to="{
            name: 'contents',
            hash: '#contents',
          }"
          class="btn"
          >施工内容</router-link
        >
        <router-link
          :to="{
            name: 'performance',
            hash: '#performance',
          }"
          class="btn"
          >施工実績</router-link
        >
        <router-link
          :to="{
            name: 'overview',
            hash: '#overview',
          }"
          class="btn"
          >会社概要</router-link
        >
        <router-link
          :to="{
            name: 'access',
            hash: '#access',
          }"
          class="btn"
          >アクセス</router-link
        >
        <router-link
          :to="{ name: 'contact' }"
          class="btn"
          tag="div"
          style="cursor: hand; cursor: pointer"
          >お問合せ</router-link
        >
      </div>
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
  background-color: #132743;
  font-family: "NotoSerif-ltalic";
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: pink;
  font-size: 20px;
}
.menu {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 0 60px;
  padding: 0 10px 10px 0;
}

ul {
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
#app {
  font-family: "NotoSerif-ltalic";
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: black;
  font-size: 20px;
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
a {
  color: currentColor;
  text-decoration: none;
}
@media screen and (max-width: 480px) {
  a {
    color: currentColor;
    text-decoration: none;
    margin-right: 10px;
    padding-right: 2px;
  }
}
</style>
