<template>
  <div class="sab">
    <h3>レストラン</h3>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
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
