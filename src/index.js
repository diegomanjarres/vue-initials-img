import LetterAvatarImg from './app.vue'

const LetterAvatarImgPlugin = {
  install (Vue) {
    Vue.component('letter-avatar-img', LetterAvatarImg)
  }
}
export default LetterAvatarImgPlugin
