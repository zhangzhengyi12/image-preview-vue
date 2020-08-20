import ImagePreview from './index.vue'
import './assets/iconfont.css'
import Vue from 'vue'

const noop = () => {}

const defaultOptions = {
  initIndex: 0,
  images: [],
  isEnableBlurBackground: false,
  isEnableLoopToggle: true,
  initViewMode: 'contain', // contain / cover / halfScreen
  containScale: 1,
  shirnkAndEnlargeDeltaRatio: 0.2,
  wheelScrollDeltaRatio: 1,
  isEnableImagePageIndicator: true,
  maskBackgroundColor:'rgba(0,0,0,0.4)',
  onClose: noop,
  zIndex:100
}

const ImagePreviewCtor = Vue.extend(ImagePreview)

export default function imagePreivew(options = defaultOptions) {
  let instance = new ImagePreviewCtor()
  instance.initWithOptions({
    ...defaultOptions,
    ...options
  })

  instance.$mount()
  document.body.appendChild(instance.$el)

  instance.$on('close', options.onClose)

  return {
    $instance: instance,
    close: instance.close
  }
}
