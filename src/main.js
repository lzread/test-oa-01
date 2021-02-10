import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import '@/permission'
import '@/icons'

import '@/styles/index.scss'

Vue.config.productionTip = false

Vue.use(ElementUI,{
  size:'small'
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
