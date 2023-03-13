<template>
  <div class="app full-size">
    <router-view class="full-size"></router-view>
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
  width: 100%;
  height: 100%;
}

.full-size {  
  width: 100%;
  height: 100%;
}
</style>
