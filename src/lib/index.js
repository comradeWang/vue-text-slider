/**
 * @author: Wang.X.Y/comrade.wang.cn@gmail.com
 * @Date: 2018/10/30
 * @Time: 10:50
 * @Description:  $
 */
import TextSlider from './TextSlider.vue'
const comment = {
  install: function(Vue) {
    Vue.component(TextSlider.name, TextSlider)
  }
}
// global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(comment)
}
// 导出模块
export default comment
