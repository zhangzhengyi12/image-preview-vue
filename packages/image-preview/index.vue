<template>
  <transition name="preview-anima">
    <div class="image-preview" v-show="visible">
      <!-- 高斯模糊层 -->
      <div
        class="image-preview__blur-layer"
        :style="`background-image:url(${core.cacheBlurImageUrl})`"
        v-if="config.facade.isEnableBlurBackground"
      ></div>

      <img
        :src="currentImageSrc"
        @load="handleImageLoaded"
        :style="imageStyle"
        :class="['image-preview__image',imageStateClassName]"
        @mousedown="handleImageDragStart"
        @mouseup="handleImageDragEnd"
        @mousemove="handleImageDragMove"
        draggable="false"
        alt
      />

      <!-- 操作层 -->
      <div class="image-preview__action-layer">
        <!-- 图片分页指示器 -->
        <div
          v-if="config.feature.isEnableImagePageIndicator"
          class="image-preview__page-info"
        >{{currentIndex + 1}}/{{core.images.length}}</div>
        <!-- 关闭按钮 -->
        <div class="image-preview__close image-preview__cir-action" @click="handleTapClose">
          <i class="zip zipclose"></i>
        </div>
        <!-- 图片切换 -->
        <div
          v-if="hasPrevImage"
          class="image-preview__prev image-preview__cir-action"
          @click="handleTapPrev"
        >
          <i class="zip zipprev"></i>
        </div>
        <div
          v-if="hasNextImage"
          class="image-preview__next image-preview__cir-action"
          @click="handleTapNext"
        >
          <i class="zip zipnext"></i>
        </div>
        <!-- 下方操作栏 -->
        <div class="image-preview__action-bar">
          <!-- 旋转 -->
          <div
            class="image-preview__action-rotate-left action-btn image-preview__cir-action"
            @click="handleTapRotateLeft"
          >
            <i class="zip zipnishizhenxuanzhuan"></i>
          </div>
          <div
            class="image-preview__action-rotate-right action-btn image-preview__cir-action"
            @click="handleTapRotateRight"
          >
            <i class="zip zipshunshizhenxuanzhuan"></i>
          </div>
          <!-- 填充模式 -->
          <div
            class="image-preview__action-full-screen action-btn image-preview__cir-action"
            @click="handleTapfullscreen"
          >
            <i :class="`zip ${core.fullscreenMode ? 'zipadapt' : 'zipfull_screen'}`"></i>
          </div>
          <!-- 放大 -->
          <div
            class="image-preview__action-scale-big action-btn image-preview__cir-action"
            @click="handleTapEnlarge"
          >
            <i class="zip zipfangda"></i>
          </div>
          <!-- 缩小 -->
          <div
            class="image-preview__full-scale-small action-btn image-preview__cir-action"
            @click="handleTapShrink"
          >
            <i class="zip zipsuoxiao"></i>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import WheelScaleHanlder from './WheelScaleHandler'

const ACTIONSTATE = {
  ROTATE: 1,
  SCALE: 2,
  DRAG: 3
}

export default {
  name: 'zzy-image-preview',
  data() {
    return {
      visible: false,
      core: {
        index: 0,
        images: [],
        cacheBlurImageUrl: '',
        imageRotate: 0,
        fullscreenMode: false,
        scaleRatio: 1,
        actionState: ACTIONSTATE.ROTATE
      },
      drag: {
        onDrag: false,
        lastPageX: 0,
        lastPageY: 0,
        transformX: 0,
        transformY: 0
      },
      config: {
        facade: {
          isEnableBlurBackground: false
        },
        feature: {
          isEnableLoopToggle: false,
          isEnableImagePageIndicator: true,
          wheelScrollDeltaRatio: 1,
          shirnkAndEnlargeDelta: 0.2
        }
      }
    }
  },
  computed: {
    imageStateClassName() {
      if (this.core.actionState === ACTIONSTATE.ROTATE) {
        return 'is-rotate'
      } else if (this.core.actionState === ACTIONSTATE.SCALE) {
        return 'is-scale'
      } else {
        return 'is-drag'
      }
    },
    currentIndex() {
      if (this.config.feature.isEnableLoopToggle) {
        return Math.abs(this.core.index) % this.core.images.length
      } else {
        return this.core.index
      }
    },
    hasPrevImage() {
      if (this.config.feature.isEnableLoopToggle) return true
      return !!this.core.images[this.currentIndex - 1]
    },
    hasNextImage() {
      if (this.config.feature.isEnableLoopToggle) return true
      return !!this.core.images[this.currentIndex + 1]
    },
    currentImageSrc() {
      return this.core.images[this.currentIndex]
    },
    imageStyle() {
      const roateStyle = `rotate(${this.core.imageRotate}deg)`
      const scaleStyle = `scale(${this.core.scaleRatio})`
      const translateStyle = `translate(${this.drag.transformX}px,${this.drag.transformY}px)`
      const transformStyle = `transform:${translateStyle} ${roateStyle} ${scaleStyle} ;`

      const fullscreenStyle = `object-fit: ${
        this.core.fullscreenMode ? 'cover' : 'contain;'
      };`

      return transformStyle + fullscreenStyle
    }
  },
  mounted() {
    this.visible = true
  },
  methods: {
    initWithOptions(options) {
      this.WheelScaleHandler = new WheelScaleHanlder(
        options.wheelScrollDeltaRatio,
        this.handleWheelScrollChange
      )
      this.core.index = (() => {
        if (options.initIndex < 0) {
          return 0
        } else if (options.initIndex >= options.images.length) {
          return options.images.length - 1
        } else {
          return options.initIndex
        }
      })()

      this.core.images = options.images
      this.config.facade.isEnableBlurBackground = options.isEnableBlurBackground
      this.config.feature.isEnableLoopToggle = options.isEnableLoopToggle
      this.config.feature.isEnableImagePageIndicator =
        options.isEnableImagePageIndicator
      this.core.fullscreenMode =
        options.initViewMode === 'contain' ? false : true
      this.config.feature.shirnkAndEnlargeDeltaRatio =
        options.shirnkAndEnlargeDeltaRatio
    },
    togglePrev() {
      this.core.index--
      this.resetActionStyle()
    },
    toggleNext() {
      this.core.index++
      this.resetActionStyle()
    },
    close() {
      this.visible = false
      setTimeout(() => {
        this.$destroy()
        this.$el.parentNode.removeChild(this.$el)
      }, 300)
    },
    setScaleRatio(ratio) {
      if (ratio < 0.3) {
        this.core.scaleRatio = 0.3
      } else if (ratio > 5) {
        this.core.scaleRatio = 5
      } else {
        this.core.scaleRatio = ratio
      }
    },
    resetActionStyle() {
      this.core.scaleRatio = 1
      this.drag.transformX = 0
      this.drag.transformY = 0
    },
    /**
     * MARK: Handler
     */
    handleImageLoaded(e) {
      this.$nextTick(() => {
        this.core.cacheBlurImageUrl = this.currentImageSrc
      })
    },
    handleTapClose() {
      this.close()
    },
    handleTapPrev() {
      this.togglePrev()
    },
    handleTapNext() {
      this.toggleNext()
    },
    handleTapRotateLeft() {
      this.core.actionState = ACTIONSTATE.ROTATE
      this.core.imageRotate -= 90
    },
    handleTapRotateRight() {
      this.core.actionState = ACTIONSTATE.ROTATE
      this.core.imageRotate += 90
    },
    handleTapfullscreen() {
      this.resetActionStyle()
      this.core.fullscreenMode = !this.core.fullscreenMode
    },
    handleWheelScrollChange(ratioDelta) {
      this.core.actionState = ACTIONSTATE.SCALE
      this.setScaleRatio(this.core.scaleRatio - ratioDelta)
    },
    handleTapShrink() {
      this.core.actionState = ACTIONSTATE.ROTATE
      this.setScaleRatio(
        this.core.scaleRatio - this.config.feature.shirnkAndEnlargeDeltaRatio
      )
    },
    handleTapEnlarge() {
      this.core.actionState = ACTIONSTATE.ROTATE
      this.setScaleRatio(
        this.core.scaleRatio + this.config.feature.shirnkAndEnlargeDeltaRatio
      )
    },
    handleImageDragStart(e) {
      this.drag.onDrag = true
      this.drag.lastPageX = e.pageX
      this.drag.lastPageY = e.pageY
    },
    handleImageDragMove(e) {
      if (!this.drag.onDrag) return

      this.core.actionState = ACTIONSTATE.DRAG
      const deltaX = e.pageX - this.drag.lastPageX
      const deltaY = e.pageY - this.drag.lastPageY

      this.drag.transformX += deltaX
      this.drag.transformY += deltaY

      this.drag.lastPageX = e.pageX
      this.drag.lastPageY = e.pageY
    },
    handleImageDragEnd(e) {
      this.drag.onDrag = false
      this.core.actionState = ACTIONSTATE.ROTATE
    }
  }
}
</script>

<style lang="scss" scoped>
// variable

$action-bg-color: rgba(255, 255, 255, 0.4);
$action-bg-color-hover: rgba(255, 255, 255, 0.6);
$action-font-color: #333;

.image-preview {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 998;

  &--blur-mode {
    background: white;
  }

  &__blur-layer {
    position: fixed;
    z-index: 999;
    object-fit: fill;
    top: -50px;
    left: -50px;
    right: -50px;
    bottom: -50px;
    filter: blur(50px);
    background-color: #fff;
  }

  &__image {
    position: relative;
    z-index: 1000;
    object-fit: contain;
    width: 100%;
    height: 100%;
    transition: all 0.2s;
    will-change: transform;
    cursor: auto;

    &.is-scale {
      transition: none;
    }
    &.is-rotate {
      transition: all 0.2s;
    }
    &.is-drag {
      transition: none;
      cursor: move;
    }
  }

  &__action-layer {
    position: relative;
    z-index: 1001;
  }

  &__page-info {
    position: fixed;
    left: 10px;
    bottom: 10px;
    padding: 0 10px;
    border-radius: 20px;

    background-color: $action-bg-color;
    color: #333;
  }

  &__close {
    position: fixed;
    right: 20px;
    top: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;

    img {
      width: 55%;
      height: 55%;
    }
  }

  &__prev {
    position: fixed;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    img {
      width: 50%;
      height: 50%;
      transform: translateX(-2px);
    }
  }
  &__next {
    position: fixed;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    img {
      width: 50%;
      height: 50%;
      transform: translateX(2px);
    }
  }

  &__action-bar {
    position: fixed;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;

    .action-btn {
      border-radius: 0px;

      &:first-child {
        border-radius: 20px 0px 0px 20px;
      }

      &:last-child {
        border-radius: 0px 20px 20px 0px;
      }
    }
  }
}

.image-preview__cir-action {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  cursor: pointer;
  border-radius: 50%;
  background-color: $action-bg-color;
  color: $action-font-color;
  transition: all 0.3s;
  &:hover {
    background-color: $action-bg-color-hover;
  }

  .zip {
    font-size: 22px;
  }
}

// @Animation

.preview-anima-enter-active,
.preview-anima-leave-active {
  transition: all 0.3s;
}
.preview-anima-enter,
.preview-anima-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>