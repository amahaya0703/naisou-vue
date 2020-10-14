<template>
  <div class="sab">
    <h3>アパレル</h3>
    <ul>
      <div class="top">
        <li>
          <img
            src="../assets/img/shp1.png"
            title="アパレル"
            width="290px"
            height="190px"
          />
        </li>
        <li>
          <img
            src="../assets/img/shp2.png"
            title="アパレル"
            width="290px"
            height="190px"
          />
        </li>
        <li>
          <img
            src="../assets/img/shp3.png"
            title="アパレル"
            width="290px"
            height="190px"
          />
        </li>
      </div>
      <br />
      <div class="two">
        <li>
          <img
            src="../assets/img/shp4.png"
            title="アパレル"
            width="290px"
            height="190px"
          />
        </li>
        <li>
          <img
            src="../assets/img/shp5.png"
            title="アパレル"
            width="290px"
            height="190px"
          />
        </li>
        <li>
          <img
            src="../assets/img/shp7.png"
            title="アパレル"
            width="290px"
            height="190px"
          />
        </li>
      </div>
      <br />
      <div class="three">
        <li>
          <img
            src="../assets/img/shp6.png"
            title="アパレル"
            width="290px"
            height="190px"
          />
        </li>
        <li>
          <img
            src="../assets/img/shp8.png"
            title="アパレル"
            width="290px"
            height="190px"
          />
        </li>
        <li>
          <img
            src="../assets/img/shp9.png"
            title="アパレル"
            width="290px"
            height="190px"
          />
        </li>
      </div>
      <br />
      <div class="four">
        <li>
          <img
            src="../assets/img/shp10.png"
            title="アパレル"
            width="290px"
            height="190px"
          />
        </li>
        <li>
          <img
            src="../assets/img/shp11.png"
            title="アパレル"
            width="290px"
            height="190px"
          />
        </li>
        <li>
          <img
            src="../assets/img/shp12.png"
            title="アパレル"
            width="290px"
            height="190px"
          />
        </li>
      </div>
    </ul>
    <div class="link">
      <router-link :to="{ name: 'other' }" tag="p">other</router-link>
      <router-link :to="{ name: 'res' }" tag="p">restaurant</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
  list-style: none;
  padding-left: 215px;
}
li {
  margin: 20px;
}
.link {
  display: flex;
}

p {
  margin: 0 auto;
}
.sab {
  margin: 50px 0;
}

.top {
  display: flex;
}
.two {
  display: flex;
}

.three {
  display: flex;
}
.four {
  display: flex;
}
</style>
