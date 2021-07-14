
<template>
    <button :class="{checked: modelValue, disabled}" class="sheep-switch" @click="toggle">
        <span></span>
    </button>
</template>

<script>
export default {
    props: {
        modelValue: {
            type: Boolean,
            default: false
        },
        disabled: Boolean
    },
    setup (props, context) {
        const toggle = () => {
            if(!props.disabled) {
                context.emit('update:modelValue', !props.modelValue)
            }
        }

        return { toggle }
    }
}
</script>

<style lang="scss">
    @use "sass:math";
    $h: 22px;
    $w: $h * 2 - 2px;
    $spanW: $h - 4px;
    $checkedSpaceLeft: $w - $h + 2px;
    .sheep-switch{
        width: $w;height: $h;border-radius: math.div($h, 2);
        border: 0;position: relative;
        background: #00000040;
        span{
            width: $spanW;height: $spanW;border-radius: math.div($spanW, 2);
            display: inline-block;background: #fff;position: absolute;
            top: 2px;left: 2px;
            transition: all .2s ease-in-out;
        }
        &.checked{
            background: #1890ff;
            span{
                left: calc(#{$checkedSpaceLeft});
            }
            &:focus{
                box-shadow: 0 0 0 2px #1890ff33;
            }
        }
        &.disabled{
            opacity: 0.5;cursor: not-allowed;
        }
        &:focus{
            outline: 0;
            box-shadow: 0 0 0 2px #0000001a;
        }
        &:active{
            $activeSpace: 6px;
            span{
                width: $spanW + 4px ;
                box-shadow: 0;
            }
            &.checked{
                span{
                    left: calc(#{$checkedSpaceLeft} - 4px);
                }
            }
        }
    }
</style>