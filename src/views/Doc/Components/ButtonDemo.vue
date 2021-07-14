<template>
<mark-body>
  <h2>Button 按钮</h2>
  <CodeWrapper :html="buttonCode()" title="基本用法">
    <s-button>按钮</s-button>
    <s-button type="primary">按钮</s-button>
    <s-button danger type="primary">按钮</s-button>
    <template v-slot:explain>使用type、danger来定义按钮类型</template>
  </CodeWrapper>

  <CodeWrapper :html="buttonCode(true)" title="按钮禁用状态">
    <s-button disabled>按钮</s-button>
    <s-button disabled type="primary">按钮</s-button>
    <s-button disabled danger type="primary">按钮</s-button>
    <template v-slot:explain>disabled控制按钮是否禁用，Boolean值</template>
  </CodeWrapper>

  <CodeWrapper :html="buttonCode()" title="文字按钮">
    <s-button theme="text">文字</s-button> <s-button type="primary" theme="text">Primary 文字</s-button> <s-button theme="link">link 链接</s-button>
    <template v-slot:explain>theme字段定义按钮主题, 值有default,text,link</template>
  </CodeWrapper>

  <CodeWrapper :html="buttonSizeCode()" title="按钮尺寸">
    <s-button size="big">大尺寸</s-button> <s-button size="normal">中尺寸</s-button> <s-button size="small">小尺寸</s-button>
    <template v-slot:explain>size字段定义按钮尺寸，有big,normal,small</template>
  </CodeWrapper>
  <PTable :paramsList="paramsList"/>
</mark-body>
</template>

<script>
import SButton from '../../../libs/Button.vue'
import CodeWrapper from '../../../components/CodeWrapper.vue'
import { buttonCode ,buttonTextCode, buttonSizeCode} from '../../../Doc/index'
import PTable from '../../../components/ParamsTable.vue'

export default {
  setup () {
    const handerClick = () => {
      console.log('触发事件');
    }

    const paramsList = [
      {name: 'type', desc: '按钮类型 (value: default | primary)', type: 'String', default: 'default'},
      {name: 'disabled', desc: '是否禁用', type: 'Boolean', default: 'false'},
      {name: 'danger', desc: '是否危险样式', type: 'Boolean', default: 'false'},
      {name: 'theme', desc: '按钮主题(default | text | link)', type: 'String', default: 'default'},
      {name: 'size', desc: '按钮尺寸', type: 'String', default: 'normal'},
    ]
    return {handerClick, buttonCode,buttonTextCode, buttonSizeCode, paramsList}
  },
  components: {
    SButton,
    CodeWrapper,
    PTable
  }
}
</script>

<style lang="scss" scoped>
.sheep-button{
  margin-right: 15px;
}
</style>