export default class WheelScaleHandler {
  constructor(deltaRatio, changeCallback) {
    this.deltaRatio = deltaRatio
    this.changeCallback = changeCallback

    // 防抖 延迟对操作有一定影响，所以暂时关闭
    // this.wheelScrollHanlder = trottle(this.wheelScrollHanlder, 20)

    // 绑定this
    this.wheelScrollHandlerBindThis = e => {
      this.wheelScrollHanlder(e)
    }

    this.initListener()
  }

  initListener() {
    window.addEventListener('wheel', this.wheelScrollHandlerBindThis)
  }

  removeListener() {
    window.removeEventListener('wheel', this.wheelScrollHandlerBindThis)
  }

  wheelScrollHanlder({ deltaY }) {
    const base = deltaY >= 0 ? 1 : -1
    const delta = this.deltaRatio * 0.1
    this.changeCallback(base * delta)
  }
}
