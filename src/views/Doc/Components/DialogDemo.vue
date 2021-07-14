<template>
  <mark-body>
    <h2>Dialog 弹窗</h2>
    <CodeWrapper :html="dialogCode" title="基本用法">
      <SButton @click="toggle1">打开弹窗</SButton>
      <Dialog v-model:visiable="visiable1"
        titleText="自定义标题"
        :ok="ok"
        :cancel="cancel">
        打开了弹窗,可以点击蒙层关闭
      </Dialog>
      <template v-slot:explain>v-model:visiable绑定一个Boolean控制弹窗显示隐藏，
        titleText字段可以自定义标题<br>
        ok、cancel分别对应了确定、取消按钮的点击事件函数。函数return true 不会自动关闭弹窗</template>
    </CodeWrapper>

    <CodeWrapper :html="dialogMonLayerCode" title="点击蒙层是否关闭弹窗">
      <SButton @click="toggle2">打开弹窗</SButton>
      <Dialog v-model:visiable="visiable2"
        titleText="自定义标题"
        :clickMonlayerHide="false">
        打开了弹窗，点击蒙层不能关闭弹窗
      </Dialog>
      <template v-slot:explain><b>clickMonlayerHide</b> 字段控制点击蒙层是否关闭弹窗，默认可以关闭</template>
    </CodeWrapper>

    <CodeWrapper :html="dialogFunctionCode" title="JavaScript一句话函数触发">
      <SButton @click="toggleDialog">打开弹窗</SButton>
      <template v-slot:explain>调佣函数触发</template>
    </CodeWrapper>

    <PTable :paramsList="paramsList"/>
  </mark-body>
</template>
<script lang="ts">
  import Dialog from '../../../libs/Dialog.vue'
  import SButton from '../../../libs/Button.vue'
  import { ref } from 'vue'
  import openDialog from '../../../libs/openDialog'
  import CodeWrapper from '../../../components/CodeWrapper.vue'
  import { dialogCode, dialogMonLayerCode, dialogFunctionCode } from '../../../Doc/index'
  import PTable from '../../../components/ParamsTable.vue'

  export default{
    setup() {
      const visiable1 = ref(false)
      const visiable2 = ref(false)
      const toggle1 = () => {
        visiable1.value = true
      }

      const toggle2 = () => {
        visiable2.value = true
      }

      const ok = () => {
        console.log('ok');
      }
      const cancel = () => {
        console.log('cancel');
      }
      // todo 怎么支持html
      const toggleDialog = () => {
        openDialog({
          content: '函数触发',
          titleText: '自定义标题',
          ok,
          cancel,
        });
      }

      const paramsList = [
          {name: 'visiable', desc: '控制弹窗显示隐藏', type: 'Boolean', default: 'false'},
          {name: 'clickMonlayerHide', desc: '点击蒙层是否关闭弹窗', type: 'Boolean', default: 'true'},
          {name: 'titleText', desc: '标题样式', type: 'String', default: '标题'},
          {name: 'width', desc: '弹窗宽度', type: 'Number', default: '500'},
          {name: 'ok', desc: '确定按钮点击的回调函数', type: 'Function', default: null},
          {name: 'cancel', desc: '取消按钮点击的回调函数', type: 'Function', default: null},
        ]
      return {
        visiable1, toggle1,visiable2, toggle2, ok, cancel, toggleDialog, dialogCode,
        dialogMonLayerCode,
        dialogFunctionCode,
        paramsList
      }
    },
    components: {
      Dialog, SButton, CodeWrapper, PTable,
    }
  }
</script>
<style lang="scss" scoped>
  
</style>