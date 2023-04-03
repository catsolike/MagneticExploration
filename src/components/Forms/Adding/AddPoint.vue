<template>
    <p class="add-line-title">Add new point</p>
    <div class="add-line-grid">

        <custom-text-input class="add-line-grid__line-name"
                           placeholder="Enter thickness"
        />
        <custom-text-input class="add-line-grid__line-name"
                           placeholder="Enter magnetic strength"
        />
        <custom-text-input class="add-line-grid__line-name"
                           placeholder="Enter induction"
        />
        <custom-text-input class="add-line-grid__line-name"
                           placeholder="Enter inclination"
        />
        <custom-text-input class="add-line-grid__line-name"
                           placeholder="Enter declination"
        />
        <custom-text-input class="add-line-grid__line-name"
                           placeholder="Enter datetime"
        />

        <custom-button class="add-line-grid__line-save-btn"
                        @click="sendLine"
        >Add line</custom-button>
    </div>
</template>

<script>
export default {
    name: 'add-point',
    props:{
        isAdding: Boolean
    },
    methods: {
        sendLine() {
            this.closeForm()
        },
        closeForm() {
            this.$emit('update:isAdding', false)
        }
    }
}
</script>

<style lang="scss" scoped>
$line-title-height: $base-font-size;
$line-title-padding: 30px;
.add-line-title{
    height: $line-title-height;
    padding: 0 0 $line-title-padding 0;
}
.add-line-grid {
    height: calc(100% - $line-title-height - $line-title-padding);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    &__line-save-btn{
        margin: 10px 0 0 0;
    }
}
</style>