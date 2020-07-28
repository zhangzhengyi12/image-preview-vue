import Vue from 'vue'
import App from './App.vue'
import ImagePreivew from '../packages/index'
import imagePreivew from '../packages/image-preview'

Vue.config.productionTip = false

Vue.use(imagePreivew)

new Vue({
  render: h => h(App)
}).$mount('#app')
