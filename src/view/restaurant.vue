<template>
  <div class="sab">
    <h3>レストラン</h3>
    <ul>
      <div class="res-web">
        <div class="res-web-in">
          <li>
            <img src="../assets/img/eat1.png" title="飲食店" class="res-img" />
          </li>
          <li>
            <img src="../assets/img/eat2.png" title="飲食店" class="res-img" />
          </li>
        </div>
        <div class="res-web-in">
          <li>
            <img src="../assets/img/eat5.png" title="飲食店" class="res-img" />
          </li>
          <li>
            <img src="../assets/img/eat6.png" title="飲食店" class="res-img" />
          </li>
        </div>
        <div class="res-web-in">
          <li>
            <img src="../assets/img/eat9.png" title="飲食店" class="res-img" />
          </li>
          <li>
            <img src="../assets/img/eat10.png" title="飲食店" class="res-img" />
          </li>
        </div>
        <div class="res-web-in">
          <li>
            <img src="../assets/img/eat13.png" title="飲食店" class="res-img" />
          </li>
          <li>
            <img src="../assets/img/eat14.png" title="飲食店" class="res-img" />
          </li>
        </div>
      </div>
      <div class="res-web-2">
        <div class="res-web-in">
          <li>
            <img src="../assets/img/eat3.png" title="飲食店" class="res-img" />
          </li>
          <li>
            <img src="../assets/img/eat4.png" title="飲食店" class="res-img" />
          </li>
        </div>
        <div class="res-web-in">
          <li>
            <img src="../assets/img/eat7.png" title="飲食店" class="res-img" />
          </li>
          <li>
            <img src="../assets/img/eat8.png" title="飲食店" class="res-img" />
          </li>
        </div>
        <div class="res-web-in">
          <li>
            <img src="../assets/img/eat11.png" title="飲食店" class="res-img" />
          </li>
          <li>
            <img src="../assets/img/eat12.png" title="飲食店" class="res-img" />
          </li>
        </div>
        <div class="res-web-in">
          <li>
            <img src="../assets/img/eat15.png" title="飲食店" class="res-img" />
          </li>
          <li>
            <img src="../assets/img/eat16.png" title="飲食店" class="res-img" />
          </li>
        </div>
      </div>
    </ul>
    <div class="link">
      <router-link
        :to="{ name: 'other' }"
        tag="p"
        style="cursor: hand; cursor: pointer"
        >other</router-link
      >
      <router-link
        :to="{ name: 'apa' }"
        tag="p"
        style="cursor: hand; cursor: pointer"
        >apparel</router-link
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
