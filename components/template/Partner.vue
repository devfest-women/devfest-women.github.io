<template>
  <div class="bg">
    <v-container class="section-container d-flex flex-column justify-center align-center">
      <v-row justify="center" class="partner-row">
        <v-col sm="6">
          <TitleBlack text="パートナー"></TitleBlack>
          <v-container class="partner-logo  flex-column flex-lg-row">
            <h2 class="heading">メディアパートナー</h2>
            <v-row class="media d-flex flex-column flex-lg-row">
              <v-col sm="6" md="4" class="media-logo">
                <a href="http://peatix.com/"><img src="~/assets/img/sponsor/peatix.png" alt="Peatix Japan株式会社" title="Peatix Japan株式会社"></a>
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
        name: 'Partner'
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
  .partner-row{
    width: 100%;
  }
  .content{
    font-family: HiraginoSans-W3;
    font-size: 16px;
    line-height: 1.56;
    color:#ffffff;
    margin: 0px 0px 30px 0px;
  }
  .heading {
    text-align: center;
    color: #ffffff;
  }
  .media {
    margin: 0px 0px 60px 0px;
    @media (max-width:960px) {
      display: inline;
    }
  }
  .partner-logo{
    margin: 50px 0px 0px 0px;
    .media-logo{
      @media (max-width:960px) {
        width: 45%;
      }
      img{
        width: 100%;
      }
    }
  }
</style>