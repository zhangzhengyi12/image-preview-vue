import imagePreview from './image-preview'

imagePreview.install = (Vue) =>{
  Vue.prototype.$previewImage = imagePreview
}

export default imagePreview