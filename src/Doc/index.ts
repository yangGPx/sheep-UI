const switchCode = (disabled: false) => `
<template>
    <Switch v-model="switchValue" ${disabled ? 'disabled' : ''}/>
</template>

<script lang="ts">
    import { ref } from 'vue'
    import Switch from '../../../libs/Switch.vue'

    export default {
        setup () {
            const switchValue = ref(true);
            return { switchValue }
        },
        components: {
            Switch
        }
    }
</script>`

const buttonCode = (disabled: false) => `
<template>
    <s-button ${disabled ? 'disabled' : ''}>按钮</s-button>
    <s-button ${disabled ? 'disabled ' : ''}type="primary">按钮</s-button>
    <s-button ${disabled ? 'disabled ' : ''}type="primary" danger>按钮</s-button>
</template>

<script lang="ts">
    import SButton from '../../../libs/Button.vue'

    export default {
        components: {
            SButton
        }
    }
</script>`

const buttonTextCode = () => `
<template>
    <s-button theme="text">按钮</s-button>
    <s-button theme="text" type="primary">Primary 文字</s-button>
    <s-button theme="link">link 链接</s-button>
</template>

<script lang="ts">
    import SButton from '../../../libs/Button.vue'

    export default {
        components: {
            SButton
        }
    }
</script>`

const buttonSizeCode = () => `
<template>
    <s-button size="big">大尺寸</s-button>
    <s-button size="normal">中等</s-button>
    <s-button size="small">小尺寸</s-button>
</template>

<script lang="ts">
    import SButton from '../../../libs/Button.vue'

    export default {
        components: {
            SButton
        }
    }
</script>`

const dialogCode = `
<template>
    <SButton @click="toggle">打开弹窗</SButton>
    <Dialog v-model:visiable="visiable"
        titleText="自定义标题"
        :ok="ok"
        :cancel="cancel">
        打开了弹窗,可以点击蒙层关闭
    </Dialog>
</template>

<script lang="ts">
    import SButton from '../../../libs/Button.vue'
    import Dialog from '../../../libs/Dialog.vue'
    import { ref } from 'vue'

    export default {
        setUp() {
            const visiable = ref(visiable)
            return {visiable}
        },
        components: {
            SButton, Dialog
        }
    }
</script>`

const dialogMonLayerCode = `
<template>
    <SButton @click="toggle">打开弹窗</SButton>
    <Dialog v-model:visiable="visiable"
        titleText="自定义标题"
        :clickMonlayerHide="false">
        打开了弹窗，点击蒙层不能关闭弹窗
    </Dialog>
</template>

<script lang="ts">
    import SButton from '../../../libs/Button.vue'
    import Dialog from '../../../libs/Dialog.vue'
    import { ref } from 'vue'

    export default {
        setUp() {
            const visiable = ref(visiable)
            return {visiable, ok,cancel}
        },
        components: {
            SButton, Dialog,
        }
    }
</script>`

const dialogFunctionCode =`
<template>
    <SButton @click="toggleDialog">打开弹窗</SButton>
</template>

<script lang="ts">
    import SButton from '../../../libs/Button.vue'
    import openDialog from '../../../libs/openDialog'

    export default {
        setUp() {
            const ok = () => {console.log('ok'); return true}
            const cancel = () => { console.log('cancel'); }
            const toggleDialog = () => {
                openDialog({
                  content: '函数触发',
                  titleText: '自定义标题',
                  ok,
                  cancel,
                });
              }
            return { toggleDialog }
        },
        components: {
            SButton
        }
    }
</script>`

const tabCode = `
<template>
    <tabs v-model="selected" @tabChange="tabChange">
        <tab key="tab1" title="标签1">标签页1</tab>
        <tab key="tab2" title="标签2222">标签页2</tab>
    </tabs>
</template>

<script lang="ts">
    import Tabs from '../../../libs/Tabs.vue'
    import Tab from '../../../libs/Tab.vue'
    import { ref } from 'vue'

    export default {
        setUp() {
            const selected = ref('tab2')
            const tabChange = () => {
              console.log(selected.value, '切换事件');
            }
            return { selected, tabChange }
        },
        components: {
            Tabs,Tab
        }
    }
</script>`

export { switchCode, buttonCode, buttonTextCode, buttonSizeCode,
    dialogCode, dialogMonLayerCode, dialogFunctionCode
    ,tabCode}