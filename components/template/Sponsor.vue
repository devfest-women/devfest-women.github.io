<template>
  <div class="bg">
    <v-container class="section-container d-flex flex-column justify-center align-center">
      <v-row justify="center" class="sponcer-row">
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
          <v-container class="sponcer-logo  flex-column flex-lg-row">
            <v-row sm="6" class="silver d-flex justify-center align-center">
              <v-col sm="6" class="silver-logo">
                <img src="~/assets/img/sponcer/cybozu.png" alt="Cybozu">
              </v-col>
            </v-row>
            <!--
            <v-row class="bronze d-flex flex-column flex-lg-row">
              <v-col sm="6" md="4" class="bronze-logo">
                <img src="~/assets/img/sponcer/dena.png" alt="Dena">
              </v-col>
              <v-col xs="6" md="4" class="bronze-logo">
                <img src="~/assets/img/sponcer/unity.png" alt="unity">
              </v-col>
              <v-col xs="6" md="4" class="bronze-logo">
                <img src="~/assets/img/sponcer/sketch.png" alt="sketch">
              </v-col>
              <v-col xs="6" md="4" class="bronze-logo">
                <img src="~/assets/img/sponcer/peatix.png" alt="peatix">
              </v-col>
            </v-row>
            -->
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
        name: 'Sponcer'
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
  .sponcer-row{
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
  .sponcer-logo{
    margin: 50px 0px 0px 0px;
    .silver-logo{
      margin: 0px 0px 60px 0px;
      width: 50%;
      img{
        width: 100%;
      }
    }
    .bronze-logo{
      @media (max-width:960px) {
        width: 50%;
      }
      img{
        width: 100%;
      }
    }
  }
</style>

