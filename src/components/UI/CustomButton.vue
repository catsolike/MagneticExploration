<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'custom-button'
}
</script>

<style lang="scss" scoped>
.btn {
    padding: 10px 15px;
    background: $btn-background;
    color: $btn-text;
    border-radius: 8px;
}
</style>