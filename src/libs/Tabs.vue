<template>
    <div class="sheep-tab">
        <nav class="sheep-tab-nav" ref="tabNav">
            <span v-for="item in navTitleList" :key="item.key"
                :ref="(el) => {if (el && item.key === modelValue) selectedItem = el}"
                :class="{selected: item.key === modelValue}" @click="tabChange(item)">{{item.title}}</span>
            <span ref="indicator" class="indicator"></span>    
        </nav>
        <div class="sheep-tab-content">
            <component :is="current" :key="modelValue"/>
        </div>
    </div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
import { computed, onMounted, onUpdated, ref, watchEffect } from 'vue'

export default {
    props: {
        modelValue: String
    },
    setup (props, context) {
        const selectedItem = ref<HTMLSpanElement>(null);
        const indicator = ref<HTMLSpanElement>(null);
        const tabNav = ref<HTMLDivElement>(null);
        // 没有子组件
        if (!context.slots.default) return {}; 

        // 校验Tabs的子组件是否只有Tab
        const defaultSlots = context.slots.default();
        defaultSlots.forEach((item) => {
            if (item.type !== Tab) { throw new Error("Tabs中只能传入Tab组件");}
        });
        // 标题数据
        const navTitleList = defaultSlots.map(item => {
            const { props = {} }  = item;
            return { title: props.title, key: props.key }
        })

        onMounted(() => {
            watchEffect(() => {
                if (!selectedItem) throw new Error("selected错误：所有项都与selected的值不符");
                const { left: navLeft } = tabNav.value.getBoundingClientRect();
                const { width, left } = selectedItem.value.getBoundingClientRect();
                
                indicator.value.style.width = width + 'px';
                indicator.value.style.left = (left - navLeft) + 'px';
            })
            // 优化一下样式效果，不要每次都从left 开始滑动
            indicator.value.style.display = 'block';
        })

        const tabChange = (item) => {
            context.emit('update:modelValue', item.key)
            // 异步执行队列，这里并没有马上更新数据，此时selected还是上一个值
        }

        const current = computed(() => {
            // find比较新， 找出匹配的第一个  filter过滤匹配的项的集合
            return defaultSlots.find((item) => {
                const key = item.props ? item.props.key : '';
                return key === props.modelValue;
            })
        })

        return { 
            defaultSlots, navTitleList, tabChange, current,
            selectedItem, indicator,tabNav
        }
    }
}
</script>

<style lang="scss">
    $borderColor: #d9d9d9;
    $activeColor: #40a9ff;

    .sheep-tab{
        &-nav{
            border-bottom: 2px solid $borderColor;position: relative;
            text-align:left;
            >span{
                display: inline-block;padding: 10px 0;
                margin-right: 30px;cursor: pointer;
                &.selected{
                    color: $activeColor;
                }
                &.indicator{
                    $h: 2px;
                    border-bottom: $h solid $activeColor;height: 0px;display: inline-block;
                    width: 60px;position: absolute;bottom: -$h;padding: 0;left: 0;
                    transition: all 250ms;
                    display: none;
                }
            }
        }
        &-content{
            padding: 15px 0;text-align: left;
        }
    }
</style>