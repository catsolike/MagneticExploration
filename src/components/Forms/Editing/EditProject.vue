<template>
    <p class="add-project-title">Add new project</p>
    <div class="add-project-grid">

        <custom-text-input class="add-project-grid__project-name"
                           placeholder="Enter project name"
        />
        <custom-button class="add-project-grid__project-save-btn"
                        @click="sendProject"
        >Add area</custom-button>
    </div>
</template>

<script>
export default {
    name: 'edit-project',
    props:{
        isAdding: Boolean
    },
    methods: {
        sendProject() {
            this.closeForm()
        },
        closeForm() {
            this.$emit('update:isAdding', false)
        }
    }
}
</script>

<style lang="scss" scoped>
$project-title-height: $base-font-size;
$project-title-padding: 30px;
.add-project-title{
    height: $project-title-height;
    padding: 0 0 $project-title-padding 0;
}
.add-project-grid {
    height: calc(100% - $project-title-height - $project-title-padding);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    &__project-save-btn{
        margin: 10px 0 0 0;
    }
}
</style>