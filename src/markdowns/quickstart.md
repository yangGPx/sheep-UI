# 快速开始

注意：如果没有安装，请先[安装](#/doc/install)组件库

### 引入

```js
import { Switch, Button, Tabs, Tab, openDialog, Dialog } from 'sheep-ui-1'
import 'sheep-ui-1/dist/lib/sheep.css'
```

### 使用

```vue
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Switch v-model="switch1"/>
  <Button @click="toggle">按钮</Button>
  <Tabs v-model="TabValue">
    <Tab key="tab1" title="标题一">content1</Tab>
    <Tab key="tab2" title="标题二">content2</Tab>
  </Tabs>

</template>

<script>
import 'sheep-ui-1/dist/lib/sheep.css'
import { Switch, Button, Tabs, Tab, openDialog, Dialog } from 'sheep-ui-1'

export default {
  data() {
    return {
      switch1: false,
      TabValue: 'tab1'
    }
  },
  methods: {
    toggle() {
      openDialog({
        title: '自定义标题',
        content: '1233123',
        
      })
    }
  },
  components: {
    Switch,
    Button, Tabs, Tab, openDialog, Dialog
  },
}
</script>

```



下一节: [Switch 开关](#/doc/switch)

