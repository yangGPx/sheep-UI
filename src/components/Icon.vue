<template>
    <svg class="icon">
        <use :xlink:href="`#icon-${name}`"/>
    </svg>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>

</style>