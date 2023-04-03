
<template>
    <div class="login-wrapper">
        <div class="login-form">
            <div class="login-inputs">
                <custom-text-input placeholder="Login"
                                    v-model:modelValue="login"
                />
                <custom-text-input placeholder="Password"
                                    v-model:modelValue="password"
                />

            </div>
            <custom-button class="login-btn" @click="checkLogin">Log In</custom-button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'login-page',

    data() { 
        return {
            defaultLink: "https://catsolike.mrsmori.moe",
            login: '',
            password: '',
        }
    },
    methods: {
        checkLogin() {
            axios.get(`${ this.defaultLink }/login`, {'headers' : {'content-type': 'application/javascript'},
            'params': { login: this.login, password: this.password },
        })
                .then((response) => {
                    if (response.data.is_error === false)
                    {
                        this.$router.push('/')
                    }
                    // console.log(response.data)
                })
                .then((error) => {
                    console.log(error)
                })
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
  