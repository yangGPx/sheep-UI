<template>
  <mark-body>
    <h2>Tab 标签页</h2>
    <CodeWrapper :html="tabCode" title="基本用法">
      <tabs v-model="selected" @tabChange="tabChange">
        <tab key="tab1" title="标题1">content1</tab>
        <tab key="tab2" title="标题2222">content2</tab>
      </tabs>
      <template v-slot:explain>v-model绑定一个key(String)值，确定当前显示哪一个tab。key字段为每个标签页唯一的，主要用来区分tab，title标签页标题。</template>
    </CodeWrapper>
    <PTable :paramsList="paramsList"/>
  </mark-body>
</template>

<script>
import Tabs from '../../../libs/Tabs.vue'
import Tab from '../../../libs/Tab.vue'
import { ref } from 'vue'
import CodeWrapper from '../../../components/CodeWrapper.vue'
import { tabCode } from '../../../Doc/index'
import PTable from '../../../components/ParamsTable.vue'

export default {
  setup () {
    const selected = ref('tab2')

    const tabChange = () => {
      console.log(selected.value);
    }
      const paramsList = [
          {name: 'v-model', desc: '当前显示Tab的key值', type: 'String', default: '-'},
          {name: 'title', desc: 'Tab的标题', type: 'String', default: '-'},
          {name: 'key', desc: 'Tab的key,用来区分Tab', type: 'String', default: '-'},
          {name: '@tabChange', desc: '切换Tab触发的函数', type: 'Function', default: null},
        ]
    return { selected, tabChange, tabCode, paramsList }
  },
  components: {
    Tabs, Tab, CodeWrapper,PTable
  }
}
</script>

<style lang="scss" scoped>

</style>