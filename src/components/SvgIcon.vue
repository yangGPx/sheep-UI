<template>
  <svg aria-hidden="true" @click="clicken">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  export default defineComponent({
    name: 'SvgIcon',
    props: {
      prefix: {
        type: String,
        default: 'icon',
      },
      name: {
        type: String,
        required: true,
      },
      color: {
        type: String,
        default: '#333',
      },
      click: {
        type: Function,
        default() {
          return '';
        }
      }
    },
    setup(props, context) {
      const symbolId = computed(() => `#${props.prefix}-${props.name}`);

      const clicken = () => {
        props.click()
      }

      return { symbolId, clicken };
    },
  });
</script>
<style lang="scss" scoped>
  svg{
    width: 20px;height: 20px;
  }
</style>