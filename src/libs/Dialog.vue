<template>
    <teleport to='body'>
        <div v-if="visiable" class="sheep-dialog">
            <div class="sheep-dialog-monlayer" @click="clickMonlayer"></div>
            <div class="sheep-dialog-content" :style="{width: `${width}px`}">
                <header>
                    <slot name="title">{{ titleText }}</slot>
                    <span class="close-icon" @click="close">x</span>
                </header>
                <main>
                    <slot></slot>
                </main>
                <footer>
                    <button @click="cancelFn">取消</button>
                    <button @click="okFn" class="ok-btn">确定</button>
                </footer>
            </div>
        </div>
    </teleport>    
</template>

<script>

export default {
    props: {
        visiable: {
            type: Boolean,
            default: false
        },
        clickMonlayerHide: {
            type: Boolean,
            default: true
        },
        ok: Function,
        cancel: Function,
        titleText: {
            type: String,
            default: '提示',
        },
        width: {
            type: Number,
            default: 520
        }
    },
    setup (props, context) {
        const close = () => {
            context.emit('update:visiable', false)
        }

        const clickMonlayer = () => {
            props.clickMonlayerHide && close();
        }

        const okFn = () => {
            if (typeof props.ok !== 'function') {
                close(); return ;
            }
            !props.ok() && close();
        }

        const cancelFn = () => {
            if (typeof props.cancel !== 'function') {
                close(); return ;
            }
            !props.cancel() && close();
        }
        return { close, clickMonlayer, okFn, cancelFn}
    },
}
</script>

<style lang="scss">
    $activeColor: #40a9ff;
    .sheep-dialog{
        height: 100vh;position: fixed;width: 100%;
        top: 0;left: 0;z-index: 10;
        &-monlayer{
            width: 100%;height: 100%;position: absolute;
            top: 0;left: 0;background: rgba(0,0,0,0.4);
        }
        &-content{
            $elPadding: 12px 15px;
            max-width: calc(100vw - 16px);
            background: #fff;position: absolute;
            top: 40%;left: 50%;transform: translate3d(-50%, -50%, 0);
            box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
            border-radius: 5px;
            >header{
                padding: $elPadding;border-bottom: 1px solid #ddd;
                position: relative;display: flex;align-items: center;
                .close-icon{
                    content: 'x';display: inline-block;
                    font-size: 25px;position: absolute;right: 20px;padding: 0 5px;
                }
            }
            >main{
                padding: $elPadding;min-height: 100px;
            }
            >footer{
                padding: $elPadding;border-top: 1px solid #ddd;text-align: right;
                >button{
                    background: #fff;border: 1px solid #d9d9d9;padding: 8px 14px;
                    border-radius: 3px;cursor: pointer;
                    &:active, &:not(.ok-btn):hover{
                        color: $activeColor;border-color: $activeColor;
                    }
                    &.ok-btn{
                        margin-left: 15px;border-color: $activeColor;
                        background: $activeColor;color: #fff;
                    }
                }
            }
        }

    }
</style>