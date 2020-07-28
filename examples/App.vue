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
  "initIndex": 1,
  "images": [
    "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
    "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg"
  ],
  "isEnableBlurBackground": true,
  "isEnableLoopToggle": true,
  "initViewMode": "contain",
  "shirnkAndEnlargeDeltaRatio": 0.2,
  "wheelScrollDeltaRatio": 1,
  "isEnableImagePageIndicator": true
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
      this.$previewImage(config)
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
