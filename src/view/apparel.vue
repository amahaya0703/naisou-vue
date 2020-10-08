<template>
  <div class="sab">
    <h3>アパレル</h3>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <div class="link">
      <router-link :to="{ name: 'res' }" tag="p" style="padding:0 40px;"
        >restaurant</router-link
      >
      <router-link :to="{ name: 'other' }" tag="p">other</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
  padding: 0;
}
.link {
  display: flex;
}
p {
  margin: 0 auto;
}
.sab {
  margin: 150px 0;
}
</style>
