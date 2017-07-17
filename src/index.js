import VueInitialsImg from './app.vue'

const VueInitialsImgPlugin = {
  install: function (Vue) {
    Vue.component('vue-initials-img', VueInitialsImg)
  }
}
export default VueInitialsImgPlugin
