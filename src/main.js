import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import getVant from './plugins'


// 注册插件

// 挂载 touch组件
import VueTouch from 'vue-touch';
Vue.use(VueTouch, {
    name: 'v-touch'
});
VueTouch.config.swipe = {
    threshold: 10 //手指左右滑动触发事件距离
}

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this //安装全局事件总线
    },
}).$mount('#app')

// getVant(vm)