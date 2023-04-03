<template>
    <div class="custom-select">
      <div class="custom-select__placeholder" v-if="!selectedValue">{{ placeholderText }}</div>
      <select class="custom-select__select" :value="selectedValue" @change="changeOption">
        <option v-for="option in options" 
        :key="option.id"
        :value="option.id">{{ hasName ? option.name : option.id }}</option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    name: 'custom-select',
    props: {
      modelValue: {
        type: String,
        default: null,
      },
      options: {
        type: Array,
        default: () => [{ name: 'Выберите из предыдущего списка' }],
      },
      placeholderText: {
        type: String,
        default: 'Choose from list...',
      },
    },
    data() {
      return {
        selectedValue: this.modelValue,
      };
    },
    methods: {
      changeOption(event) {
        this.selectedValue = event.target.value;
        this.$emit('update:modelValue', this.selectedValue);
      },
    },
    computed: {
      hasName() {
        return 'name' in this.options[0];
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .custom-select {
    position: relative;
    width: 100%;

    &__placeholder {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        color:  $input-placeholder;
        pointer-events: none;
        font-family: $base-font-family;

      }
      
      &__select {
        width: 100%;
        padding: 10px;
        background: $input-background;    
        border: 1px solid #ccc;
        border-radius: 2px;
        font-family: sans-serif;
      }
  }
  
  </style>