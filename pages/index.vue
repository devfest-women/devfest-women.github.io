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
      <WhatDevFestWomen></WhatDevFestWomen>
      <About></About>
      <Schedule></Schedule>
      <Sponsor></Sponsor>
      <Footer></Footer>
    </div>
    </v-flex>
  </v-layout>
</template>

<script>
import Header from '~/components/template/Header.vue'
import WhatDevFestWomen from '~/components/template/WhatDevFestWomen.vue'
import About from '~/components/template/About.vue'
import Schedule from '~/components/template/Schedule.vue'
import Sponsor from '~/components/template/Sponsor.vue'
import Staff from '~/components/template/Staff.vue'
import Footer from '~/components/template/Footer.vue'

export default {
  components: {
    Header,
    WhatDevFestWomen,
    About,
    Schedule,
    Sponsor,
    Staff,
    Footer
  }
}
</script>
