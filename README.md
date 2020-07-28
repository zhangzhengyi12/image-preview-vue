## image-preview-vue

易于使用的PC端图片浏览组件，编程式的调用方式

## Example

![](https://yinodimage.oss-cn-hangzhou.aliyuncs.com/20200728225748.png)
![](https://yinodimage.oss-cn-hangzhou.aliyuncs.com/20200728225749.png)
![](https://yinodimage.oss-cn-hangzhou.aliyuncs.com/20200728225750.png)

[live demo](http://imagepreivew.yinode.tech/)

## Install

> npm i image-preview-vue --save

**global**

```js
// main.js
import imagePreivew from 'image-preview-vue'
Vue.use(imagePreivew)

// your some.vue
export default {
  // ...
  methods:{
    foo(){
      this.$previewImage({
        initIndex:0,
        images:['https://yinodimage.oss-cn-hangzhou.aliyuncs.com/20200229004202.jpg'],
      })
    }
  }
}
```

**import**

```js
import imagePreivew from 'image-preview-vue'

imagePreview({
  initIndex:0,
  images:['https://yinodimage.oss-cn-hangzhou.aliyuncs.com/20200229004202.jpg'],
})
```

## Feature

- [X] 鼠标拖拽缩放图片
- [X] 高斯模糊背景
- [X] 图片预加载
- [X] 分页信息显示

## Config

| 参数名 | 类型 | 描述 | 可选值 | 默认值 |
| ----------- | ----------- | ----------- | ----------- |  ----------- |
| initIndex | Number | 初始化展示图片索引 | - | 0 |
| images | [String] | 图片URL数组 | - | [] |
| isEnableBlurBackground | Boolean | 是否开启高斯模糊背景 | - | false |
| isEnableLoopToggle | Boolean | 是否开启循环切换模式 | - | true |
| initViewMode | String | 初始化图片展示模式(等于与Object-fit) | 'contain'/'cover' | 'contain' |
| shirnkAndEnlargeDeltaRatio | Number | 缩放点击强度系数 | - | 0.2 |
| wheelScrollDeltaRatio | Number | 鼠标滚轮缩放图片强度系数 | - | 1 |
| isEnableImagePageIndicator | Boolean | 是否显示分页 | - | true |
## Contributing

如果有发现bug或者希望加入一些功能，请积极提issues，我会尽快回复

## License

MIT

灵感来自ElementUI中的Image组件，但是可惜没有编程式的调用方式，所以催生了这个库