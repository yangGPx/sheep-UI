<template>
  <mark-body path="button" title="Button组件">
    <h2>Switch 开关</h2>
    <CodeWrapper :html="switchCode()" title="基本用法">
      <Switch v-model="switchValue1"/>
      <template v-slot:explain>
        绑定v-model到一个Boolean类型的变量。
      </template>
    </CodeWrapper>
    <CodeWrapper :html="switchCode(true)" title="Switch 禁用状态">
      <Switch v-model="switchValue2" disabled/>
      <template v-slot:explain>
        设置disabled属性，接收一个Boolean值，设置true即可禁用。v-model可设置禁用时，开关的开、关状态。
      </template>
    </CodeWrapper>
    <PTable :paramsList="paramsList"/>
  </mark-body>
</template>

<script lang="ts">
import { ref } from 'vue'
import Switch from '../../../libs/Switch.vue'
import CodeWrapper from '../../../components/CodeWrapper.vue'
import PTable from '../../../components/ParamsTable.vue'
import { switchCode } from '../../../Doc/index'

export default {
  setup () {
    const switchValue1 = ref(true);
    const switchValue2 = ref(false);

    const paramsList = [
      {name: 'v-model', desc: '默认使用v-model,开关状态', type: 'Boolean', default: 'false'},
      {name: 'disabled', desc: '是否禁用', type: 'Boolean', default: 'false'}
    ]

    return { switchValue1, switchValue2, switchCode:switchCode, paramsList }
  },
  components: {
    CodeWrapper,
    Switch,
    PTable
  }
}
</script>
