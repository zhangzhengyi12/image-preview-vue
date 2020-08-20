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
import imagePreview from 'image-preview-vue'
import 'image-preview-vue/lib/imagepreviewvue.css'

Vue.use(imagePreview)

// your some.vue
export default {
  // ...
  methods:{
    foo(){
    const preview = this.$imagePreview({
        initIndex:0,
        images:['https://yinodimage.oss-cn-hangzhou.aliyuncs.com/20200229004202.jpg'],
      })
    }
  }
}
```

**import**

```js
// main.js
import 'image-preview-vue/lib/imagepreviewvue.css'

// other.js
import imagePreview from 'image-preview-vue'

const preview = imagePreview({
  initIndex:0,
  images:['https://yinodimage.oss-cn-hangzhou.aliyuncs.com/20200229004202.jpg'],
})
```

## Feature

- [X] 鼠标拖拽缩放图片
- [X] 高斯模糊背景
- [X] 图片预加载
- [X] 分页信息显示
- [X] 自定义contain缩放
- [X] 增加实例方法与回调
- [X] 增加图片水平镜像功能

## Config

| 参数名 | 类型 | 描述 | 可选值 | 默认值 |
| ----------- | ----------- | ----------- | ----------- |  ----------- |
| initIndex | Number | 初始化展示图片索引 | - | 0 |
| images | [String] | 图片URL数组 | - | [] |
| isEnableBlurBackground | Boolean | 是否开启高斯模糊背景 | - | false |
| maskBackgroundColor | String | 半透明遮罩层背景色 只生效于关闭高斯模糊的情况 | 任何合法的css background-color值 | 'rgba(0,0,0,0.4)' |
| isEnableLoopToggle | Boolean | 是否开启循环切换模式 | - | true |
| initViewMode | String | 初始化图片展示模式(等于与Object-fit) | 'contain'/'cover' | 'contain' |
| containScale | Number | contain模式下的缩放比例，只在contain模式下生效 | [0.3,5] | 1 |
| shirnkAndEnlargeDeltaRatio | Number | 缩放点击强度系数 | - | 0.2 |
| wheelScrollDeltaRatio | Number | 鼠标滚轮缩放图片强度系数 | - | 1 |
| isEnableImagePageIndicator | Boolean | 是否显示分页 | - | true |
| onClose | Function | 关闭回调 | - | ()=>{} |
| zIndex | Number | 预览弹窗的 z-index 值 | - | 100 |

**viewMode**

内置两个基本模式 `contain` 和 `cover`

对应下方全屏切换按钮

- contain 默认单轴撑满屏幕 维持比例不裁切，如果希望整体缩小，可以修改 containScale 参数
- cover 默认双轴撑满屏幕 维持比例，长轴裁切。

## instance

**get instance**

> const preview = this.$imagePreview({...})

| 方法名 | 参数 | 描述 |
| ----------- | ----------- | ----------- |
| close | - | 关闭预览 |

## Contributing

如果有发现bug或者希望加入一些功能，请积极提issues，我会尽快回复

## License

MIT

灵感来自ElementUI中的Image组件，但是可惜没有编程式的调用方式，所以催生了这个库