import Vue from 'vue'
import App from './App.vue'
import imagePreivew from '../packages/index'

Vue.config.productionTip = false

Vue.use(imagePreivew)

new Vue({
  render: h => h(App)
}).$mount('#app')
