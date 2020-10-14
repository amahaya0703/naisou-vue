<template>
  <div class="sab">
    <h3>アパレル</h3>
    <ul>
      <div class="top">
        <li>
          <img
            src="../assets/img/other1.png"
            title="その他"
            width="290px"
            height="190px"
          />
        </li>
        <li>
          <img
            src="../assets/img/other2.png"
            title="その他"
            width="290px"
            height="190px"
          />
        </li>
        <li>
          <img
            src="../assets/img/other3.png"
            title="その他"
            width="290px"
            height="190px"
          />
        </li>
      </div>
      <br />
      <div class="two">
        <li>
          <img
            src="../assets/img/other4.png"
            title="その他"
            width="290px"
            height="190px"
          />
        </li>
        <li>
          <img
            src="../assets/img/other5.png"
            title="その他"
            width="290px"
            height="190px"
          />
        </li>
        <li>
          <img
            src="../assets/img/other6.png"
            title="その他"
            width="290px"
            height="190px"
          />
        </li>
      </div>
    </ul>
    <div class="link">
      <router-link :to="{ name: 'res' }" tag="p">restaurant</router-link>
      <router-link :to="{ name: 'apa' }" tag="p">apparel</router-link>
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
</style>
