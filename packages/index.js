import imagePreview from './image-preview'

imagePreview.install = (Vue) =>{
  Vue.prototype.$imagePreview = imagePreview
}

export default imagePreview