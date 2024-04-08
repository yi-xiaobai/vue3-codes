import { createVNode, render } from 'vue'
import BaseToast from '../components/BaseToast.vue'
import BaseButton from '../components/BaseButton.vue'
import BaseCard from '../components/BaseCard.vue'
export default {
    install(app, options) {
        app.config.globalProperties.$toast = function (options) {
            // 创建虚拟节点
            const vm = createVNode(BaseToast)
            console.log('==>Get vm', vm);
            // 创建节点
            const div = document.createElement('div')
            // 渲染
            render(vm, div)
            // 页面中显示节点
            document.body.appendChild(div)
            vm.component.props.message = options.message
            const duration = options.duration || 2000
            setTimeout(() => {
                document.body.removeChild(div)
            }, duration)
        }

        // 注册组件
        app.component('BaseButton', BaseButton)
        app.component('BaseCard', BaseCard)
    }

}