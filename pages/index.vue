<template>
  <v-app>
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
      <Header class="" pages="top"></Header>
      <Hero class="bg_layout"></Hero>
      <WhatDevFestWomen class="bg_black anchor" id="aboutdevfestwomen"></WhatDevFestWomen>
      <About class="bg_black anchor" id="about"></About>
      <Schedule class="bg_gradient anchor" id="schedule"></Schedule>
      <Sponsor class="bg_black anchor" id="sponsor"></Sponsor>
      <!-- <Staff class="bg bg_black"></Staff> -->
      <Footer class="bg_gradient"></Footer>
    </div>
    </v-flex>
  </v-layout>
  </v-app>
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
.bg_layout{
  margin-bottom: -12px;
}
.anchor{
  display: block;
  padding-top: 10px;
  margin-top: -10px;
}
</style>
