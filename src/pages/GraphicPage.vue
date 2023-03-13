<template>
    <div class="graphic-page-grid">
        <div class="full-page-graphic full-size">
            <p>Здесь будет график...</p>
        </div>
        <custom-button  class="open-datapage-btn"
                        @click="$router.push('/')">Go to Datapage</custom-button>
    </div>
</template>

<script>
export default {
    name: "graphic-page",
}
</script>

<style lang="scss" scoped>
.graphic-page-grid {
    padding: 20px 20px 60px 20px;
}
.full-page-graphic{
    border: 2px dashed red;
}

.open-datapage-btn{
    margin: 10px 0px 0px 0px;
}
</style>
  