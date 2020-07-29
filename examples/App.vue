<template>
  <div id="app">
    <textarea rows="20" v-model="config" />
    <div class="desc">尝试修改配置并点击下方按钮</div>
    <div class="show" @click="handleTapImage">点我查看大图</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      config: `
{
  "initIndex": 0,
  "images": [
    "https://yinodimage.oss-cn-hangzhou.aliyuncs.com/20200728221752.png",
    "https://yinodimage.oss-cn-hangzhou.aliyuncs.com/20200229004202.jpg",
    "https://yinodimage.oss-cn-hangzhou.aliyuncs.com/20200728222300.png",
    "https://yinodimage.oss-cn-hangzhou.aliyuncs.com/20200728225458.png"
  ],
  "isEnableBlurBackground": true,
  "isEnableLoopToggle": true,
  "initViewMode": "contain",
  "containScale": 1,
  "shirnkAndEnlargeDeltaRatio": 0.2,
  "wheelScrollDeltaRatio": 1,
  "isEnableImagePageIndicator": true,
  "maskBackgroundColor": "rgba(0,0,0,0.6)"
}
      `
    }
  },
  methods: {
    handleTapImage() {
      let config = {}
      try {
        config = JSON.parse(this.config)
      } catch (e) {
        alert('JSON解析失败')
      }
      config.onClose = () => {
        console.log('preview has been closed')
      }
      const preview = this.$imagePreview(config)
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.show {
  font-size: 30px;
  color: #444;
  margin-top: 40px;
  cursor: pointer;
}

textarea {
  width: 80vw;
  font-size: 20px;
}
</style>
