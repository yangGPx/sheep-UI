<template>
    <topnav :menuBtnVisiable="true" class="doc-top-nav"/>
    <div class="doc-content">
        <transition name="aside">
            <aside v-if="asideVisiable">
                <h2>开发指南</h2>
                <div><router-link to="/doc/intro">介绍</router-link></div>
                <div><router-link to="/doc/install">安装</router-link></div>
                <div><router-link to="/doc/quickStart">快速上手</router-link></div>
                <h2>组件</h2>
                <div><router-link to="/doc/switch">Switch组件</router-link></div>
                <div><router-link to="/doc/button">Button组件</router-link></div>
                <div><router-link to="/doc/dialog">Dialog组件</router-link></div>
                <div><router-link to="/doc/tabs">Tabs组件</router-link></div>
            </aside>
        </transition>
        <main @click="hideAside">
            <router-view></router-view>
        </main>
    </div>
</template>

<script lang="ts">
import { inject, Ref, onMounted } from 'vue'
import Topnav from '../../components/Topnav.vue'
import router from '../../router'

export default {
    setup () {
        const asideVisiable = inject<Ref<boolean>>('asideVisiable');
        
        const _asideHide = () => {
            if (document.documentElement.clientWidth < 800) {
                asideVisiable.value = false;
            }
        }

        router.afterEach((to, from) => {
            _asideHide()
        })    

        const hideAside = () => {
            _asideHide()
        }

        onMounted(() =>{
            window.onresize = () => {
                if (document.documentElement.clientWidth > 800) {
                    asideVisiable.value = true;
                }
            }
        })

        return { asideVisiable, hideAside }
    },
    components: {
        Topnav,
    }
}
</script>

<style lang="scss" scoped>
    @import '../../assets/css/const.scss';
    .doc-content{
        display: flex;position: relative;margin-top: $topNavHeight;
        aside{
            position: relative;width: 260px; text-align: left;
            background: #e3fffd;left: 0;top: 0;z-index: 10;
            div{
                font-size: 18px;margin-top: 20px;padding-left: 20px;
                a{
                    display: inline-block;width: 100%;padding: 5px 0;
                    -webkit-tap-highlight-color: transparent;
                    &.router-link-active{
                        color: #41b883;font-weight: 600;
                    }
                }
            }
            h2{
                margin-top: 20px;padding-left: 20px;
            }
            &.aside-enter-active,
            &.aside-leave-active{
                transition: all 0.3s;
            }
            &.aside-enter-from,
            &.aside-leave-to{
                transform: translateX(-100%);
            }
        }
        main, aside{
            height: calc(100vh - #{$topNavHeight});
            overflow-y: auto;
        }
        main{
            flex-grow: 1;padding: 10px;
        }
        @media (max-width: $mediaWidth) {
            display: block;
            &> aside{
                position: absolute;
            }
        }
    }
</style>
<style lang="scss">
    .doc-top-nav{
        border-bottom: 1px solid #c9c9c9;
        box-shadow: 0px 3px 6px #cdcccc;
        background: #e3fffd ;
    }
</style>