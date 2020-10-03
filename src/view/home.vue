<template>
  <div class="app">
    <div class="naisou">
      <img
        src="https://www.a-1group.net/wp/wp-content/uploads/2019/01/5-6_R-2-1024x683.jpg"
        title="内装"
        width="100%"
        height="650"
      />
    </div>
    <main>
      <p>国武工芸株式会社では、什器製造業から内装工事全般、</p>
      <p>
        お客様の満足向上を深く追求し、低価格かつ高品質なサービスの提供を心がけております。
      </p>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.app {
  position: relative;
}
.app main {
  position: absolute;
  bottom: 0;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
}

.naisou {
  text-align: center;
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
