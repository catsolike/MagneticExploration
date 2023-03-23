<template>
  <div class="app full-size-percents">
    <router-view class="full-size-percents"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
#app {
  font-family: $base-font-family;
  font-size: $base-font-size;
  
  width: 100vw;
  height: 100vh;
}

.full-size-percents {  
  width: 100%;
  height: 100%;
}
</style>
