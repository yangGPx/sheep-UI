<template>
    <div class="home-wrapper">
        <topnav class="home-top-nav"/>
        <main class="home-content">
            <h2>Sheep-UI</h2>
            <h3>一款基于Vue3+Typescript的UI库</h3>
            <div>
                <router-link class="home-link" to="/doc">文档</router-link>
                <a class="home-link" href="a">GitHub</a>
            </div>
        </main>
    </div>
    <ul class="featrue-wrapper">
        <li v-for="item in featrueList" :key="item.icon">
            <div class="icon-wrapper"><icon class="home-icon" :name="item.icon"/></div>
            <div>
                <h3>{{item.title}}</h3>
                <p>{{item.summary}}</p>
            </div>
        </li>
    </ul>
</template>

<script>
import Topnav from '../components/Topnav.vue'
import { ref } from 'vue'

export default {
    setup () {
        const featrueList = ref([
            {icon: 'vue', title: '基于Vue3', summary: '使用了Vue3 Composition API(组合式API)'},
            {icon: 'ts', title: '基于TypeScript', summary: '源代码采用了TypeScript书写(非严格检查)'},
            {icon: 'light', title: '代码易读', summary: '每个组件的源代码都简洁易读'},
        ])

        return {featrueList}
    },
    components: {
        Topnav,
    }
}
</script>

<style lang="scss" scoped>
.home-wrapper{
    background: rgb(227,255,253);
    background: linear-gradient(180deg, rgba(227,255,253,1) 0%, rgba(127,228,201,1) 74%, rgba(87,230,221,1) 100%, rgba(240,6,156,1) 100%);
    clip-path: ellipse(65% 60% at 50% 40%);
    .home-content{
        padding: 80px 0;
        color: #05ccc0;
        text-align: center;
        >h2{ font-size: 28px;line-height: 40px; }
        >h3{ font-size: 20px;line-height: 32px; }
        .home-link{
            padding: 10px 0;background: #05ccc0;display: inline-block;
            margin: 20px 15px 0 15px;border-radius: 6px;color: #fff;width: 90px;
        }
    }
    .home-top-nav{
        background: none;color:#04b6aa ;
        ::v-deep a:hover{
            text-decoration: underline;
        }
    }
}

.featrue-wrapper{
    $icon: 50px;
    margin: 0 auto;margin-top: 25px;padding: 0 20px;padding-bottom: 20px;
    max-width: 100%; width: 400px;
    display: grid;grid-template-columns: 1fr;

    >li{
        display: flex; margin-top: 20px;padding: 0 15px; align-items: center;
        .icon-wrapper{
            text-align: right;
            .home-icon{
                width: $icon;height: $icon;margin-right: 20px;
            }
        }
        h3{
            font-size: 22px;line-height: 30px;
        }
    }
}

    @media (min-width: 800px) {
        .featrue-wrapper{
            width: 800px;grid-template-columns: 1fr 1fr;margin-top: 50px;
        }
    }
    @media (min-width: 1200px) {
        .featrue-wrapper{
            width: 1200px;grid-template-columns: auto auto 1fr;margin-top: 50px;
        }
        .home-wrapper .home-content{
            padding: 110px 0;
        }
    }
</style>