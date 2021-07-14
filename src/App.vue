<template>
  <router-view />
</template>

<script>
  import { provide, ref } from 'vue'

  export default{
    name: 'App',
    setup() {
      const docWidth = document.documentElement.clientWidth; 
      const asideVisiable = ref(docWidth > 800 ); // 根据页面宽度判断 侧边栏是否一致显示
      provide('asideVisiable', asideVisiable)
    }
  }
</script>

<style lang="scss">
@import './assets/css/index.scss';
@import './assets/css/const.scss';


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
