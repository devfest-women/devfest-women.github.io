<template>
<div class="text-xs-center">
  <PrivacyPolicy class="bg bg_black"></PrivacyPolicy>
 </div>
</template>

<script>
import Header from '~/components/template/Header.vue'
import PrivacyPolicy from '~/components/template/PrivacyPolicy.vue'
import Footer from '~/components/template/Footer.vue'

export default {
  components: {
    Header,
    PrivacyPolicy,
    Footer
  }
}
</script>


<style scoped>
.bg_black {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background-color: #100e17;
}
.bg_gradient {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background-image: linear-gradient(to left, #da297b, #ff6f61);
}
</style>
