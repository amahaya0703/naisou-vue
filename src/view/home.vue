<template>
  <div class="app">
    <div class="naisou">
      <img
        src="../assets/img/naisou.png"
        title="内装"
        width="100%"
        height="670px"
      />
      <section>
        <p>ID創社では、什器製造業から内装工事全般、</p>
        <p>
          お客様の満足向上を深く追求し、低価格かつ高品質なサービスの提供を心がけております。
        </p>
      </section>
    </div>
    <div>
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.app {
  text-align: center;
}
.naisou {
  position: relative;
}
section {
  position: absolute;
  bottom: 0px;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
}

p {
  text-align: center;
}
main {
  margin: 0 auto;
  display: block;
  height: 150px;
  width: 660px;
}
</style>
