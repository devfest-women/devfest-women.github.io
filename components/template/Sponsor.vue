<template>
  <div class="bg">
    <v-container class="section-container d-flex flex-column justify-center align-center">
      <v-row justify="center" class="sponsor-row">
        <v-col sm="6">
          <TitleBlack text="スポンサー"></TitleBlack>
          <div class="content">
            DevFest Women Tokyo 2019 をよりよいイベントにするため、スポンサーを募集しています。ご希望の企業様は、以下よりお申し込みください。ご応募の締め切りは、2019年9月30日です。
          </div>
          <div class="d-flex justify-center">
            <Button
                    text="スポンサー申し込み"
                    link="https://docs.google.com/forms/d/e/1FAIpQLSfwIrV6HXRztZF0L6Z0aBj4zdmV5AWtbyVWg77i0Ho25LANVA/viewform"
                    buttonstyle="gradation"
            ></Button>
          </div>
          <v-container class="sponsor-logo  flex-column flex-lg-row">
            <v-row sm="6" class="silver d-flex justify-center align-center">
              <v-col sm="6" class="silver-logo">
                <img src="~/assets/img/sponsor/cybozu.png" alt="Cybozu">
              </v-col>
            </v-row>
            <v-row class="bronze d-flex flex-column flex-lg-row">
              <v-col sm="6" md="4" class="bronze-logo">
                <img src="~/assets/img/sponsor/dena.png" alt="Dena">
              </v-col>
              <v-col xs="6" md="4" class="bronze-logo">
                <img src="~/assets/img/sponsor/unity.png" alt="unity">
              </v-col>
            </v-row>
            <v-row class="bronze d-flex flex-column flex-lg-row">
              <v-col xs="6" md="4" class="bronze-logo">
                <img src="~/assets/img/sponsor/sketch.png" alt="sketch">
              </v-col>
              <v-col xs="6" md="4" class="bronze-logo">
                <img src="~/assets/img/sponsor/styliste.png" alt="STYLISTE">
              </v-col>
              <v-col xs="6" md="4" class="bronze-logo">
                <img src="~/assets/img/sponsor/github.png" alt="github">
              </v-col>
            </v-row>
            <v-row class="personal d-flex flex-column flex-lg-row">
              <v-col xs="4" md="2" class="personal-logo">
                <img src="~/assets/img/sponsor/yuichi-yagami.png" alt="谷上雄一">
              </v-col>
              <v-col xs="4" md="2" class="personal-logo">
                <img src="~/assets/img/sponsor/tomoharu-nagasawa.png" alt="長沢智治">
              </v-col>
              <v-col xs="4" md="2" class="personal-logo">
                <img src="~/assets/img/sponsor/takayuki-fuwa.png" alt="不破崇行">
              </v-col>
              <v-col xs="4" md="2" class="personal-logo">
                <img src="~/assets/img/sponsor/satoru-nakamura.png" alt="なかむらさとる">
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import TitleBlack from '~/components/module/TitleBlack.vue'
  import Button from '~/components/module/Button.vue'

  export default {
    components: {
      TitleBlack,
      Button
    },
    data() {
      return {
        name: 'Sponsor'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .section-container{
    padding: 45px 0px 45px 0px;
    @media (max-width:960px) {
      padding: 30px 20px;
    }
  }
  .sponsor-row{
    @media (max-width:960px) {
      width: 100%;
    }
  }
  .content{
    font-family: HiraginoSans-W3;
    font-size: 16px;
    line-height: 1.56;
    color: #ffffff;
    margin: 0px 0px 30px 0px;
  }

  .silver {
    margin: 0px 0px 60px 0px;
    @media (max-width:960px) {
      display: inline;
    }
  }
  .bronze {
    margin: 0px 0px 60px 0px;
    @media (max-width:960px) {
      display: inline;
    }
  }
  .personal {
    margin: 0px 0px 60px 0px;
    @media (max-width:960px) {
      display: inline;
    }
  }
  .sponsor-logo{
    margin: 50px 0px 0px 0px;
    .silver-logo{
      width: 50%;
      img{
        width: 100%;
      }
    }
    .bronze-logo{
      @media (max-width:960px) {
        width: 45%;
      }
      img{
        width: 100%;
      }
    }
    .personal-logo{
      @media (max-width:960px) {
        width: 45%;
      }
      img{
        width: 100%;
      }
    }
  }
</style>

