<template>
    <slot></slot>
</template>

<script lang="ts">
export default {
    props: {
        title: {
            type: String,
            required: true
        },
    },
    setup () {
        

        return {}
    }
}
</script>