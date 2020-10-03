<template>
  <div>
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
    <br />
    <br />
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
  display: flex;
  display: table;
  width: 100%;
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
</style>
