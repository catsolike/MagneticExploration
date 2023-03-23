<template>

    <input  class="input-text" 
            type="text"
            :value="modelValue"
            @input="updateInput"        
    >
    
</template>

<script>

export default {
    name: 'custom-text-input',
    props:{
        modelValue: [String, Number]
    },
    methods:{
        updateInput(event) { 
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style lang="scss" scoped>
.input-text {
    width: 100%;
    padding: 10px 15px;
    background: $input-background;
    border-radius: 3px;
}

</style>