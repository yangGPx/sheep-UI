import Dialog from './Dialog.vue';
import { createApp, h } from 'vue';

type Options = {
    content: any,
    title?: string,
    clickMonlayerHide?: boolean,
    ok?: () => boolean | void
    cancel?: () => boolean | void
    titleText?: string,
    width?: number
}

export default function openDialog(options: Options) {
    const div = document.createElement('div');
    const { title, content, ...attrs } = options;
    
    document.body.appendChild(div);
    const app = createApp({
        render() {
            return h(Dialog, {
                visiable: true,
                'onUpdate:visiable': (newVal) => {
                    if (!newVal) {
                        app.unmount()
                    }
                },
                ...attrs
            }, {title, default: () => content})
        }
    })
    app.mount(div);
}