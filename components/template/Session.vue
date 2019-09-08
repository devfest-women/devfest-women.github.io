<template>
  <div>
    <v-container class="section-container">
      <v-row justify="center" class="schedule d-flex flex-column align-center">
        <v-col lg="6">
          <TitleGradient text="タイムスケジュール"></TitleGradient>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import TitleGradient from '~/components/module/TitleGradient.vue'
  import Button from '~/components/module/Button.vue'

  export default {
    components: {
      TitleGradient,
      Button
    },
    data() {
      return {
        name: 'Schedule'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .section-container{
    padding: 45px 0px 45px 0px;
    @media (max-width:960px) {
      padding: 2px 0;
    }
  }

  .schedule{
    @media (max-width:960px) {
      margin: 30px 20px;
    }
  }

  .block-gradient {
     background-color: rgba(255, 255, 255, 0.2);
   }
  .block-white {
    background-color: #fff;
  }
  .block-content{
    margin: 12px 0px 12px 0px;
  }
  .block-date{
    font-family: Avenir;
    font-size: 18px;
    font-weight: 900;
    letter-spacing: 1.8px;
    color: #ffdedb;
    margin: 0px 25px 0px 0px;
    @media (max-width:960px) {
      font-size: 16px;
    }
  }
  .block-description{
    font-family: HiraginoSans-W6;
    font-size: 18px;
    line-height: 1.39;
    color: #ffffff;
    @media (max-width:960px) {
      font-size: 16px;
    }
  }
  .block-white-date{
    font-family: Avenir;
    font-size: 20px;
    font-weight: 900;
    letter-spacing: 2px;
    color: #ff6f61;
    margin: 0px 15px 0px 0px;
  }
  .block-white-description{
    font-family: HiraginoSans-W6;
    font-size: 24px;
    line-height: 1.04;
    color: #ff6f61;
  }
  .arrow{
    margin: -12px;
  }
</style>

