export const trottle = (callback, wait) => {
  let last = Date.now()
  return function(...args) {
    if (Date.now() - last > wait) {
      callback.call(this, ...args)
      last = Date.now()
    }
  }
}
