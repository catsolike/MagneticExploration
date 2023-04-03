<template>
    <p class="add-project-title">Add new project</p>
    <div class="add-project-grid">

        <custom-text-input class="add-project-grid__project-name"
                           placeholder="Enter project name"
                           v-model="projectName"
        />
        <custom-button class="add-project-grid__project-save-btn"
                        @click="sendProject"
        >Add project</custom-button>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'add-project',
    data() {
        return {
            projectName: null,
        }
    },
    props:{
        isAdding: Boolean,
        link: String,
    },
    methods: {
        async sendProject() {
            if (this.projectName !== null && this.projectName !== '' && !this.projectName.includes(' ')  && this.projectName.length < 20) {
                try {
                    await axios.get(`${this.link}/create_project`,
                        {
                            headers: { 'content-type': 'application/javascript' },
                            params: {
                                name: this.projectName,
                            }
                        });
                this.closeForm()
                } catch (e) {
                    console.log(e)
                }
            }
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