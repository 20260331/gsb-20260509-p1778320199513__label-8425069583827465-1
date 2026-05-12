import { createVNode, render } from 'vue'
import ToastContainer from '../components/ToastContainer.vue'

export default {
  install(app) {
    // 创建一个虚拟节点
    const vnode = createVNode(ToastContainer)
    // 创建一个容器 div
    const container = document.createElement('div')
    document.body.appendChild(container)
    // 将虚拟节点渲染到容器中
    render(vnode, container)

    // 获取组件实例
    const toastInstance = vnode.component.exposed

    // 定义全局方法
    const toast = {
      show(message, type = 'info', duration = 3000) {
        toastInstance.addToast(message, type, duration)
      },
      success(message, duration = 3000) {
        this.show(message, 'success', duration)
      },
      error(message, duration = 3000) {
        this.show(message, 'error', duration)
      },
      info(message, duration = 3000) {
        this.show(message, 'info', duration)
      },
      warning(message, duration = 3000) {
        this.show(message, 'warning', duration)
      }
    }

    // 挂载到 app.config.globalProperties
    app.config.globalProperties.$toast = toast
    // 提供给 inject 使用
    app.provide('toast', toast)
  }
}
