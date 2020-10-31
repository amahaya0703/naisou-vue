<template>
  <div class="sab">
    <h3>その他</h3>
    <ul>
      <div class="res-web">
        <div class="res-web-in">
          <li>
            <img
              src="../assets/img/other1.png"
              title="その他の店舗"
              class="res-img"
            />
          </li>
          <li>
            <img
              src="../assets/img/other2.png"
              title="その他の店舗"
              class="res-img"
            />
          </li>
        </div>
        <div class="res-web-in">
          <li>
            <img
              src="../assets/img/other5.png"
              title="その他の店舗"
              class="res-img"
            />
          </li>
          <li>
            <img
              src="../assets/img/other6.png"
              title="その他の店舗"
              class="res-img"
            />
          </li>
        </div>
      </div>
      <div class="res-web-2">
        <div class="res-web-in">
          <li>
            <img
              src="../assets/img/other3.png"
              title="その他の店舗"
              class="res-img"
            />
          </li>
          <li>
            <img
              src="../assets/img/other4.png"
              title="その他の店舗"
              class="res-img"
            />
          </li>
        </div>
      </div>
    </ul>
    <div class="link">
      <router-link
        :to="{ name: 'apa' }"
        tag="p"
        style="cursor: hand; cursor: pointer"
        >apparel</router-link
      >
      <router-link
        :to="{ name: 'other' }"
        tag="p"
        style="cursor: hand; cursor: pointer"
        >other</router-link
      >
    </div>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  display: flex;
  padding-left: 60px;
}
.link {
  display: flex;
}
li {
  margin: 20px;
}
p {
  margin: 0 auto;
}
.sab {
  margin: 50px 0;
}
.res-web-in {
  display: flex;
}
.res-img {
  height: 220px;
  width: 290px;
}

@media screen and (max-width: 480px) {
  ul {
    padding: 0;
    display: block;
    padding: 0;
  }
  .res-img {
    height: 110px;
    width: 145px;
  }
}
</style>
