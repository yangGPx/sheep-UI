<template>
    <h3 class="have-sign">{{title}}</h3>
    <div class="code-wrapper">
      <div class="component">
        <slot />
      </div>
      <div class="code-content"  v-if="codeVisiable">
          <div class="explain">
            <slot name="explain"></slot>
          </div>
          <pre>
            <code v-html="html1"></code>
          </pre>
      </div>
      <div v-if="codeVisiable" class="code-visiable" @click="codeVisiable = false">隐藏代码</div>      
      <div v-else class="code-visiable" @click="codeVisiable = true">显示代码</div>
    </div>
</template>

<script>
import { ref } from 'vue'
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'

export default {
    props: {
      html: String,
      title: String,
    },
    setup (props) {
      const codeVisiable = ref(false);

      const html1 = Prism.highlight(props.html, Prism.languages.html, 'html');
      return { codeVisiable, html1 }
    }
}
</script>

<style lang="scss" scoped>
  .code-wrapper{
    $padding: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    .component{
      padding: 25px $padding;
    }
    .code-content{
      overflow: hidden;border-top: 1px solid #ccc;background: #fafafa;
      margin-top: 15px;
      .explain{
        border: 1px solid #ccc;background: #fff;padding: 10px;margin: 12px;border-radius: 5px;
        margin-bottom: 0;
      }
      pre{
        padding: 5px;
        margin: 0 16px;
      }
    }
    .code-visiable{
      text-align: center;padding: 10px;color: #999;border-top: 1px solid #ccc;cursor: pointer;
      &:hover{
        color: #ff3b00;font-weight: 600;
      }
    }
  }
</style>