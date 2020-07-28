/**
 * @description 图片预加载，优化体验
 *
 * @class ImagePreloader
 */
export default class ImagePreloader {
  constructor(imageList, initIndex) {
    this.index = initIndex
    this.imageList = imageList
    this.imageCacheList = Array(imageList.length)
    this.firstImageLoaded = false

    // 保底 3秒后无论如何都触发预加载
    setTimeout(() => {
      this.onSomeImageUploaded()
    }, 3000)
  }

  // 外部触发 首张图片加载完成之后 触发预加载
  onSomeImageUploaded() {
    if (!this.firstImageLoaded) {
      this.firstImageLoaded = true
      this.triggerPreLoading()
    }
  }

  updateIndex(index) {
    this.index = index
    this.triggerPreLoading()
  }

  getPrevIndex(curIndex) {
    if (curIndex === 0) {
      return this.imageList.length - 1
    } else {
      return curIndex - 1
    }
  }

  getNextIndex(curIndex) {
    if (curIndex === this.imageList.length - 1) {
      return 0
    } else {
      return curIndex + 1
    }
  }

  triggerPreLoading() {
    this.tryPreloadingByIndex(this.getPrevIndex(this.index))
    this.tryPreloadingByIndex(this.getNextIndex(this.index))
  }

  tryPreloadingByIndex(index) {
    let hasCache = this.imageCacheList[index]

    if (!hasCache) {
      let image = new Image()
      image.src = this.imageList[index]
      this.imageCacheList[index] = image
    }
  }
}
