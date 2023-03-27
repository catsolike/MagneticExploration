<template>
    <select class="selecter"
            :value="modelValue"
            @change="changeOption"
    >
        <option class="select-placeholder" 
                disabled
                hidden
                selected 
                value="null"> {{ placeholderText }} </option>
        <option 
                v-for="option in options"
                :key="option.id"
                :value="option.id"
        >
            {{ hasName ? option.name : option.id }}
        </option>
    </select>
</template>

<script>

export default {
    name: 'custom-select',
    props:{
        modelValue: {
            type: String,
        },
        options: {
            type: Array,
            default: () => [{ name:'Выберите из предыдущего списка'} ]
        },
        placeholderText: {
            type: String,
            default: 'Choose from list...',
        },
    },
    methods: {
        changeOption(event) {
            this.$emit('update:modelValue', event.target.value);
        },
    },
    computed: {
        hasName() {
            return 'name' in this.options[0]
        },
        // hasElements() {
        //     if (typeof this.options === 'undefined' && this.options.length <= 0) return this.options = [{ name:'Список пуст'} ]
        // },
    }
}

</script>

<style lang="scss" scoped>

.selecter{
    font-family: $base-font-family;
//    color: $input-placeholder;
    width: 100%;
    padding: 10px;
    background: $input-background;
    border-radius: 2px;
}


//.selecter option[value=""] {
//    color: $input-placeholder;
//}
.blue {
    color: blue;
}
.red {
    color: red;
}
option {
   color: black;
}
</style>