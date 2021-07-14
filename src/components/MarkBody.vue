<template>
    <div class="markdown-wrapper">
        <article v-if="fileName" class="markdown-body" v-html="md"></article>
        <article v-else class="markdown-body">
            <slot />
            <p v-if="path">下一节: <a :href="`#/doc/${path}`">{{title}}</a></p>
        </article>
    </div>
</template>

<script>
import { ref } from 'vue'
import Intro from '../markdowns/intro.md';
import Install from '../markdowns/install.md';
import QuickStart from '../markdowns/quickStart.md';

export default {
    props: {
        fileName: {
            type: String,
        },
        path: String,
        title: String,
    },
    setup (props) {
        let md = ref('')
        switch(props.fileName) {
            case 'intro': md.value = Intro;break;
            case 'install': md.value = Install;break;
            case 'quickstart': md.value = QuickStart;break;
        }
        return {md}
    }
}
</script>

<style lang="scss">
.markdown-wrapper{
    $lightColor: #ff3b00;
    padding: 10px;
    .markdown-body blockquote,.markdown-body h3{
        // border-color: rgb(92, 230, 218);
        border-color: #ff3b00;
    }
    .markdown-body h1,.markdown-body h2{
        border: none;
    }
    .markdown-body h3{
        border-bottom: 2px solid #ff3b00;padding-bottom: 6px;
        &.have-sign::before{
            content: "#";font-size: 1em;color: #ff3b00;font-weight: bold;padding-right: 5px;
        }
    }
    .markdown-body blockquote{
        $padding: 7px;
        background: rgba(255,117,76,0.2);padding-top: $padding;padding-bottom: $padding;
    }
    .markdown-body a{
        color: $lightColor;
    }
}
</style>