<template>
    <nav class="top-nav">
        <span v-if="menuBtnVisiable" @click="changeAsideVisiable" class="icon-wrapper">
            <svg-icon name="menu"/>
        </span>
        <router-link to="/" class="logo">
            <svg class="icon"> <use xlink:href="#icon-yang"/> </svg>
        </router-link>
        <ul class="menu">
            <li>
                <router-link to="/doc">文档</router-link>
            </li>
            <li><a target="_blank" href="https://github.com/yangGPx/sheep-UI">Github</a></li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'

export default {
    props: {
        menuBtnVisiable: {
            type: Boolean,
            default: false,
        }
    },
    setup () {
        const asideVisiable = inject<Ref<boolean>>('asideVisiable');

        const changeAsideVisiable = () => {
            asideVisiable.value = !asideVisiable.value;
        }

        return {changeAsideVisiable}
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/css/const.scss';
    $logo: 40px;
    $menuWidth: 32px;
    .top-nav{
        display: flex;
        height: $topNavHeight;justify-content: space-between;
        align-items: center;position: fixed;width: 100%;z-index: 10;top: 0;left: 0;
        .logo{
            margin-left: 40px;
            >svg{
                width: $logo;height: $logo;margin-top: 2px;
            }
        }
        .menu{
            display: flex;height: 100%;align-items: center;padding-right: 20px;
            li{
                padding: 0 10px;
            }
        }
        .icon-wrapper{
            padding: 3px;
            margin: 0 0 0 20px;
            align-items: center;
            display: none;
            
            &:active{
                background: #05ccc0;
            }
            svg{
                width: $menuWidth;height: $menuWidth;color: #929292;
            }
        }
        @media (max-width: $mediaWidth) {
            justify-content: flex-start;
            &>.menu{display: none;}
            &>.logo{padding-left: 0;margin-left: 15px;}
            &>.icon-wrapper{
                display: inline-flex;
            }
        }
    }

</style>
<style lang="scss">
    @import '../assets/css/const.scss';
</style>