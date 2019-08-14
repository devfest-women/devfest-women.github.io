import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo, {
  duration: 500
})

export default function vueScrollTo (context, inject) {
  inject('scrollTo', VueScrollTo.scrollTo)
}