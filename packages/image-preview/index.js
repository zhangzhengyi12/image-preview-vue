import ImagePreview from './index.vue'
import './assets/iconfont.css'
import Vue from 'vue'

const defaultOptions = {
  initIndex: 0,
  images: [],
  isEnableBlurBackground: false,
  isEnableLoopToggle: false,
  initViewMode: 'contain', // contain / cover / halfScreen
  shirnkAndEnlargeDeltaRatio: 0.2,
  wheelScrollDeltaRatio: 1,
  isEnableImagePageIndicator: false
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

  return instance
}
