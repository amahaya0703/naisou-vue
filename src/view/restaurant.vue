<template>
  <div class="sab">
    <h3>レストラン</h3>
    <ul>
      <div class="top">
        <li>
          <img
            src="../assets/img/eat1.png"
            title="飲食店"
            width="290px"
            height="190px"
          />
        </li>
        <li>
          <img
            src="../assets/img/eat2.png"
            title="飲食店"
            width="290px"
            height="190px"
          />
        </li>
        <li>
          <img
            src="../assets/img/eat3.png"
            title="飲食店"
            width="290px"
            height="190px"
          />
        </li>
      </div>
      <br />
      <div class="two">
        <li>
          <img
            src="../assets/img/eat4.png"
            title="飲食店"
            width="290px"
            height="190px"
          />
        </li>
        <li>
          <img
            src="../assets/img/eat5.png"
            title="飲食店"
            width="290px"
            height="190px"
          />
        </li>
        <li>
          <img
            src="../assets/img/eat7.png"
            title="飲食店"
            width="290px"
            height="190px"
          />
        </li>
      </div>
      <br />
      <div class="three">
        <li>
          <img
            src="../assets/img/eat6.png"
            title="飲食店"
            width="290px"
            height="190px"
          />
        </li>
        <li>
          <img
            src="../assets/img/eat8.png"
            title="飲食店"
            width="290px"
            height="190px"
          />
        </li>
        <li>
          <img
            src="../assets/img/eat9.png"
            title="飲食店"
            width="290px"
            height="190px"
          />
        </li>
      </div>
      <br />
      <div class="four">
        <li>
          <img
            src="../assets/img/eat10.png"
            title="飲食店"
            width="290px"
            height="190px"
          />
        </li>
        <li>
          <img
            src="../assets/img/eat11.png"
            title="飲食店"
            width="290px"
            height="190px"
          />
        </li>
        <li>
          <img
            src="../assets/img/eat12.png"
            title="飲食店"
            width="290px"
            height="190px"
          />
        </li>
      </div>
      <br />
      <div class="five">
        <li>
          <img
            src="../assets/img/eat13.png"
            title="飲食店"
            width="290px"
            height="190px"
          />
        </li>
        <li>
          <img
            src="../assets/img/eat14.png"
            title="飲食店"
            width="290px"
            height="190px"
          />
        </li>
        <li>
          <img
            src="../assets/img/eat15.png"
            title="飲食店"
            width="290px"
            height="190px"
          />
        </li>
      </div>
    </ul>
    <div class="link">
      <router-link :to="{ name: 'apa' }" tag="p">apparel</router-link>
      <router-link :to="{ name: 'other' }" tag="p">other</router-link>
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
.five {
  display: flex;
}
</style>
