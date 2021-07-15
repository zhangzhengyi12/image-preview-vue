const downLoadImage = (imageUrl, getImageFileName) => {
  console.log(imageUrl)
  fetch(imageUrl)
    .then(res => {
      return res.blob()
    })
    .then(blob => {
      return URL.createObjectURL(blob)
    })
    .then(url => {
      const a = document.createElement('a')
      a.href = url
      if (typeof getImageFileName !== 'function') {
        console.error('getImageFileName必须为函数，请检查参数')
        return
      }
      a.download = getImageFileName(url)
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    })
    .catch(e => console.error(e))
}

export default downLoadImage
