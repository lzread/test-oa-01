import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import i18n from './lang'
import '@/permission'
import '@/icons'

import '@/styles/index.scss'



Vue.config.productionTip = false

Vue.use(ElementUI, {
  size: 'small', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
