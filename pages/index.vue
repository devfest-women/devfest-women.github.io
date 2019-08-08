<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
    <div class="text-xs-center">
      <Header></Header>
      <Hero></Hero>
      <WhatDevFestWomen class="bg bg_black"></WhatDevFestWomen>
      <About class="bg bg_black"></About>
      <Schedule class="bg bg_gradient"></Schedule>
      <Sponsor class="bg bg_black"></Sponsor>
      <Staff class="bg bg_black"></Staff>
      <Footer class="bg bg_gradient"></Footer>
    </div>
    </v-flex>
  </v-layout>
</template>

<script>
import Header from '~/components/template/Header.vue'
import Hero from '~/components/template/Hero.vue'
import WhatDevFestWomen from '~/components/template/WhatDevFestWomen.vue'
import About from '~/components/template/About.vue'
import Schedule from '~/components/template/Schedule.vue'
import Sponsor from '~/components/template/Sponsor.vue'
import Staff from '~/components/template/Staff.vue'
import Footer from '~/components/template/Footer.vue'

export default {
  components: {
    Header,
    Hero,
    WhatDevFestWomen,
    About,
    Schedule,
    Sponsor,
    Staff,
    Footer
  }
}
</script>


<style scoped>
.bg {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}
.bg_black {
  background-color: #100e17;
}
.bg_gradient {
  background-image: linear-gradient(to left, #da297b, #ff6f61);
}
</style>
