(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["imagepreviewvue"] = factory(require("vue"));
	else
		root["imagepreviewvue"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "010f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a393a546_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6c6e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a393a546_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a393a546_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a393a546_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "6c6e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "ae78":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"549e35cc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/image-preview/index.vue?vue&type=template&id=a393a546&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"preview-anima"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"image-preview"},[(_vm.config.facade.isEnableBlurBackground)?_c('div',{staticClass:"image-preview__blur-layer",style:(("background-image:url(" + (_vm.core.cacheBlurImageUrl) + ")"))}):_vm._e(),_c('img',{class:['image-preview__image',_vm.imageStateClassName],style:(_vm.imageStyle),attrs:{"src":_vm.currentImageSrc,"draggable":"false","alt":""},on:{"load":_vm.handleImageLoaded,"mousedown":_vm.handleImageDragStart,"mouseup":_vm.handleImageDragEnd,"mousemove":_vm.handleImageDragMove}}),_c('div',{staticClass:"image-preview__action-layer"},[(_vm.config.feature.isEnableImagePageIndicator)?_c('div',{staticClass:"image-preview__page-info"},[_vm._v(_vm._s(_vm.currentIndex + 1)+"/"+_vm._s(_vm.core.images.length))]):_vm._e(),_c('div',{staticClass:"image-preview__close image-preview__cir-action",on:{"click":_vm.handleTapClose}},[_c('i',{staticClass:"zip zipclose"})]),(_vm.hasPrevImage)?_c('div',{staticClass:"image-preview__prev image-preview__cir-action",on:{"click":_vm.handleTapPrev}},[_c('i',{staticClass:"zip zipprev"})]):_vm._e(),(_vm.hasNextImage)?_c('div',{staticClass:"image-preview__next image-preview__cir-action",on:{"click":_vm.handleTapNext}},[_c('i',{staticClass:"zip zipnext"})]):_vm._e(),_c('div',{staticClass:"image-preview__action-bar"},[_c('div',{staticClass:"image-preview__action-rotate-left action-btn image-preview__cir-action",on:{"click":_vm.handleTapRotateLeft}},[_c('i',{staticClass:"zip zipnishizhenxuanzhuan"})]),_c('div',{staticClass:"image-preview__action-rotate-right action-btn image-preview__cir-action",on:{"click":_vm.handleTapRotateRight}},[_c('i',{staticClass:"zip zipshunshizhenxuanzhuan"})]),_c('div',{staticClass:"image-preview__action-full-screen action-btn image-preview__cir-action",on:{"click":_vm.handleTapfullscreen}},[_c('i',{class:("zip " + (_vm.core.fullscreenMode ? 'zipadapt' : 'zipfull_screen'))})]),_c('div',{staticClass:"image-preview__action-scale-big action-btn image-preview__cir-action",on:{"click":_vm.handleTapEnlarge}},[_c('i',{staticClass:"zip zipfangda"})]),_c('div',{staticClass:"image-preview__full-scale-small action-btn image-preview__cir-action",on:{"click":_vm.handleTapShrink}},[_c('i',{staticClass:"zip zipsuoxiao"})])])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/image-preview/index.vue?vue&type=template&id=a393a546&scoped=true&

// CONCATENATED MODULE: ./packages/utils/trottle.js
const trottle = (callback, wait) => {
  let last = Date.now()
  return function(...args) {
    if (Date.now() - last > wait) {
      callback.call(this, ...args)
      last = Date.now()
    }
  }
}

// CONCATENATED MODULE: ./packages/image-preview/WheelScaleHandler.js


class WheelScaleHandler {
  constructor(deltaRatio, changeCallback) {
    this.deltaRatio = deltaRatio
    this.changeCallback = changeCallback

    // 防抖
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

// CONCATENATED MODULE: ./packages/image-preview/imagePreloader.js
/**
 * @description 图片预加载，优化体验
 *
 * @class ImagePreloader
 */
class ImagePreloader {
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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/image-preview/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




const ACTIONSTATE = {
  ROTATE: 1,
  SCALE: 2,
  DRAG: 3
}

/* harmony default export */ var image_previewvue_type_script_lang_js_ = ({
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
      this.WheelScaleHandler = new WheelScaleHandler(
        options.wheelScrollDeltaRatio,
        this.handleWheelScrollChange
      )
      this.ImagePreloader = new ImagePreloader(
        options.images,
        options.initIndex
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
      this.ImagePreloader.updateIndex(this.currentIndex)
    },
    toggleNext() {
      this.core.index++
      this.resetActionStyle()
      this.ImagePreloader.updateIndex(this.currentIndex)
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
      this.ImagePreloader.onSomeImageUploaded()
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
});

// CONCATENATED MODULE: ./packages/image-preview/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_image_previewvue_type_script_lang_js_ = (image_previewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/image-preview/index.vue?vue&type=style&index=0&id=a393a546&lang=scss&scoped=true&
var image_previewvue_type_style_index_0_id_a393a546_lang_scss_scoped_true_ = __webpack_require__("010f");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/image-preview/index.vue






/* normalize component */

var component = normalizeComponent(
  packages_image_previewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "a393a546",
  null
  
)

/* harmony default export */ var image_preview = (component.exports);
// EXTERNAL MODULE: ./packages/image-preview/assets/iconfont.css
var iconfont = __webpack_require__("ae78");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./packages/image-preview/index.js




const defaultOptions = {
  initIndex: 0,
  images: [],
  isEnableBlurBackground: false,
  isEnableLoopToggle: false,
  initViewMode: 'contain', // contain / cover / halfScreen
  shirnkAndEnlargeDeltaRatio: 0.2,
  wheelScrollDeltaRatio: 1,
  isEnableImagePageIndicator: false
}

const ImagePreviewCtor = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend(image_preview)

function imagePreivew(options = defaultOptions) {
  let instance = new ImagePreviewCtor()
  instance.initWithOptions({
    ...defaultOptions,
    ...options
  })

  instance.$mount()
  document.body.appendChild(instance.$el)

  return instance
}

// CONCATENATED MODULE: ./packages/index.js


imagePreivew.install = (Vue) =>{
  Vue.prototype.$previewImage = imagePreivew
}

/* harmony default export */ var packages_0 = (imagePreivew);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
});
//# sourceMappingURL=imagepreviewvue.umd.js.map