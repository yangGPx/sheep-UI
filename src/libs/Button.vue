
<template>
    <button class="sheep-button" :class="classSheet" ><slot></slot></button>
</template>

<script>
export default {
    props: {
        theme: {
            type: String,
            default: 'button'
        },
        size: {
            type: String,
            default: 'normal'
        },
        type: {
            type: String,
            default: 'default'
        },
        danger: Boolean,
        disabled: Boolean,
        loading: Boolean,
    },
    setup (props) {
        const { theme, size, type, danger, disabled, loading } = props;
        const classSheet = {
            [`theme-${theme}`]: theme,
            [`btn-${size}`]: size,
            [`btn-type-${type}`]: size,
            'danger': danger,
            'disabled': disabled,
            'loading': loading,
        }    


        return {classSheet}
    }
}
</script>

<style lang="scss">
    $borderColor: #d9d9d9;
    $activeColor: #40a9ff;
    $dangerColor: #ff4d4f;
    $h: 32px;
    
    .sheep-button{
        height: $h;background: #fff;color: #333;
        border: 1px solid $borderColor;padding: 0 15px;border-radius: 4px;cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        @media (min-width: 500) {
            &:not(.disabled):hover{
                color: $activeColor;border-color: $activeColor;background: #fff;
            }            
        }
        &:focus{
            background: #fff;
        }

        &.btn-big{
            font-size: 20px;height: 40px;
        }
        &.btn-small{
            font-size: 12px;height: 24px;
        }
        &.danger{
            color: $dangerColor;border-color: $dangerColor;
            &:hover{
                color: #fff;
            }
        }


        &.btn-type-primary{
            background: $activeColor;color: #fff;border: none;
            &:hover{ color: #fff; }
            &.danger{
                background: $dangerColor;color: #fff;
            }
            &.theme-link,&.theme-text{
                color: $activeColor;;
            }
        }

        &.theme-link{
            border: none;color: $activeColor; background: none;
            &:hover{
                text-decoration: underline;
            }
        }
        &.theme-text{
            border: none;color: #333;background: none;
        }


        &.loading{
            display: inline-flex; align-items: center;
            &::before{
                content: '';display: inline-block;
                width: 10px;height: 10px;border: 3px solid $activeColor;
                border-radius: 50%;border-top: 3px solid transparent;
                animation: rotate 1.2s infinite; margin-right: 5px;
            }
        }

        &.disabled{
            cursor: not-allowed;opacity: 0.5;
        }

        @keyframes rotate {
            from{
                transform: rotateZ(0);
            }
            to{
                transform: rotateZ(360deg);
            }
        }
    }
</style>