<template>
    <div class="login-wrapper">
        <div class="login-form">
            <div class="login-inputs">
                <custom-text-input placeholder="Login"/>
                <custom-text-input placeholder="Password"/>
                <custom-select  class="choose-project"
                                :placeholder-text="'Choose project'"
                >
                    <!-- v-model="projectSelection" -->
                    <!-- <option value="1">wdawdd</option>
                    <option value="2">wdd</option>
                    <option value="3">fdd</option> -->
                </custom-select>
            </div>
            <custom-button class="login-btn" @click="$router.push('/')">Log In</custom-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login-page',
    data() { 
        return {
            projectSelection: '',
        }
    }
}
</script>

<style lang="scss" scoped>

.login-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows:  1fr 1fr 1fr;
}

.login-form {
    grid-column-start: 2;
    grid-row-start: 2;

    display: flex;
    flex-direction: column;
    align-items: center;
}

.login-btn{
    width: 50%;
    margin: 50px auto;
}

.select-placeholder {
    color: $input-placeholder;
}

.login-inputs > * { 
    margin: 15px 0 0 0;
}
</style>
  