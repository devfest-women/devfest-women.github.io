<template>
<div class="text-xs-center">
  <Hero class="bg-layout"></Hero>
  <WhatDevFestWomen class="bg-black anchor" id="aboutdevfestwomen"></WhatDevFestWomen>
  <Typhoon class="bg-black anchor" id="typhoon"></Typhoon>
  <About class="bg-black anchor" id="aboutevent"></About>
  <Speaker class="bg-black anchor" id="speaker"></Speaker>
  <SessionList class="bg-gradient anchor" id="session"></SessionList>
  <AskTheSpeaker class="bg-gradient anchor" id="ask_the_speaker"></AskTheSpeaker>
  <SessionDetail class="bg-gradient anchor" id="session_detail"></SessionDetail>
  <SessionPreparation class="bg-black anchor" id="session_preparation"></SessionPreparation>
  <Sponsor class="bg-black anchor" id="sponsor"></Sponsor>
  <Partner class="bg-black anchor" id="partner"></Partner>
  <Staff class="bg bg-black" id="staff"></Staff>
</div>
</template>

<script>
import Hero from '~/components/template/Hero.vue'
import WhatDevFestWomen from '~/components/template/WhatDevFestWomen.vue'
import About from '~/components/template/About.vue'
import Speaker from '~/components/template/Speaker.vue'
import SessionList from '~/components/template/SessionList.vue'
import SessionDetail from '~/components/template/SessionDetail.vue'
import SessionPreparation from '~/components/template/SessionPreparation.vue'
import AskTheSpeaker from '~/components/template/AskTheSpeaker.vue'
import Sponsor from '~/components/template/Sponsor.vue'
import Staff from '~/components/template/Staff.vue'
import Partner from '~/components/template/Partner.vue'
import Typhoon from "../components/template/Typhoon";

export default {
  layout (context) {
    return 'top'
  },
  components: {
    Typhoon,
    Hero,
    WhatDevFestWomen,
    About,
    Speaker,
    SessionList,
    SessionDetail,
    SessionPreparation,
    AskTheSpeaker,
    Sponsor,
    Partner,
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
