<template>
  <div class="bg">
    <v-container class="section-container">
      <v-row justify="center" class="schedule d-flex flex-column align-center">
        <v-col lg="6">
          <TitleGradient text="当日までのスケジュール"></TitleGradient>
        </v-col>
        <v-col lg="6" class="block-gradient">
          <div class="block-content d-flex flex-column flex-lg-row justify-center align-center">
            <span class="block-date">2019.8</span>
            <span class="block-description">DevFest Women 2019 サイト公開</span>
          </div>
        </v-col>
        <v-icon class="arrow" size="60" dark>arrow_drop_down</v-icon>
        <v-col lg="6" class="block-gradient">
          <div class="block-content d-flex flex-column flex-lg-row justify-center align-center">
            <span class="block-date">2019.9</span>
            <span class="block-description">参加申し込み開始予定</span>
          </div>
        </v-col>
        <v-icon class="arrow" size="60" dark>arrow_drop_down</v-icon>
        <v-col lg="6" class="block-white">
          <div class="block-content d-flex flex-column flex-lg-row justify-center align-center">
            <span class="block-white-date">2019.10.14</span>
            <span class="block-white-description">DevFest Women開催</span>
          </div>
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
    @media (max-width: 600px) {
      padding: 2px 0;
    }
  }

  .schedule{
    @media (max-width: 600px) {
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
    @media (max-width: 600px) {
      font-size: 16px;
    }
  }
  .block-description{
    font-family: HiraginoSans-W6;
    font-size: 18px;
    line-height: 1.39;
    color: #ffffff;
    @media (max-width: 600px) {
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

