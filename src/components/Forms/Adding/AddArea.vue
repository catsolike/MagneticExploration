<template>
    <p class="add-area-title">Add new area</p>
    <div class="add-area-grid">

        <custom-text-input class="add-area-grid__area-name"
                           placeholder="Enter area name"
        />
        <custom-button class="add-area-grid__area-save-btn"
                        @click="sendArea"
        >Add area</custom-button>
    </div>
</template>

<script>
export default {
    name: 'add-area',
    props:{
        isAdding: Boolean
    },
    methods: {
        sendArea() {
            this.closeForm()
        },
        closeForm() {
            this.$emit('update:isAdding', false)
        }
    }
}
</script>

<style lang="scss" scoped>
$area-title-height: $base-font-size;
$area-title-padding: 30px;
.add-area-title{
    height: $area-title-height;
    padding: 0 0 $area-title-padding 0;
}
.add-area-grid {
    height: calc(100% - $area-title-height - $area-title-padding);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    &__area-save-btn{
        margin: 10px 0 0 0;
    }
}
</style>