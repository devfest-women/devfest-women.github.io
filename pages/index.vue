<template>
    <div class="text-xs-center">
      <Hero class="bg-layout"></Hero>
      <WhatDevFestWomen class="bg-black anchor" id="aboutdevfestwomen"></WhatDevFestWomen>
      <About class="bg-black anchor" id="aboutevent"></About>
      <Speaker class="bg-black anchor" id="speaker"></Speaker>
      <Schedule class="bg-gradient anchor" id="schedule"></Schedule>
      <Sponsor class="bg-black anchor" id="sponsor"></Sponsor>
      <!-- <Staff class="bg bg-lack"></Staff> -->
    </div>
</template>

<script>
import Hero from '~/components/template/Hero.vue'
import WhatDevFestWomen from '~/components/template/WhatDevFestWomen.vue'
import About from '~/components/template/About.vue'
import Speaker from '~/components/template/Speaker.vue'
import Schedule from '~/components/template/Schedule.vue'
import Sponsor from '~/components/template/Sponsor.vue'
import Staff from '~/components/template/Staff.vue'

export default {
  layout (context) {
    return 'top'
  },
  components: {
    Hero,
    WhatDevFestWomen,
    About,
    Speaker,
    Schedule,
    Sponsor,
    Staff,
  }
}
</script>

<style scoped>
.bg-layout{
  margin-bottom: -12px;
}
.anchor{
  display: block;
  padding-top: 10px;
  margin-top: -10px;
}
</style>
