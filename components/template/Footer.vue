<template>
  <div class="bg">
    <v-container class="section-container d-flex justify-center align-center">
      <v-row justify="center" align="center" class="flex-column footer-row">
        <v-col lg="8">
          <v-row class="d-flex flex-column flex-md-row align-left align-md-center">
            <v-col sm="2" class="footer-item">
              <img class="footer-logo" src="~/assets/img/logo_white.svg" alt="DevFest Women2019">
            </v-col>
            <div class="footer-item"><nuxt-link to="/privacypolicy">プライバシーポリシー</nuxt-link></div>
            <div class="footer-item"><nuxt-link to="/codeofconduct">行動規範</nuxt-link></div>
            <div class="footer-item"><nuxt-link to="/antiharassmentpolicy">アンチハラスメントポリシー</nuxt-link></div>
            <div class="footer-item"><a target="_blank" href="https://forms.gle/Bc1BwwpwXwTZkA1b7">お問い合わせ</a></div>
          </v-row>
        </v-col>

        <v-col lg="6">
          <v-row class="footer-sns d-flex align-center justify-center">
            <v-col sm="2" class="footer-item">
              <a href="https://twitter.com/wtmtokyo"><img class="footer-image" src="~/assets/img/sns/twitter.svg" alt="DevFest Women2019"></a>
            </v-col>
            <!-- facbookページ今なさそう？
            <v-col sm="2" class="footer-item">
              <a href=""><img class="footer-image" src="~/assets/img/sns/facebook.png" alt="DevFest Women2019"></a>
            </v-col>
            -->
            <v-col sm="2" class="footer-item">
              <a href="https://forms.gle/Bc1BwwpwXwTZkA1b7"><img class="footer-image" src="~/assets/img/sns/mail.svg" alt="DevFest Women2019"></a>
            </v-col>
          </v-row>
        </v-col>
        <v-col lg="6" class="copyright">
          @DevFest Women Tokyo 2019
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import TitleBlack from '~/components/module/TitleBlack.vue'

  export default {
    components: {
      TitleBlack
    },
    data() {
      return {
        name: 'What Dev Fest Women とは'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .section-container{
    padding: 45px 0px 45px 0px;
    color: #fff;
    font-family: HiraginoSans-W6;
    font-size: 16px;
    @media (max-width: 600px) {
      padding: 10px;
    }
  }
  .footer-row{
    @media (max-width: 600px) {
      margin: 0px 10px;
    }
  }
  .footer-logo{
    width: 100%;
    @media (max-width: 600px) {
      max-width: 72px;
      margin-bottom: 12px;
    }
  }
  .footer-image{
    width: 40px;
    height: 40px;
  }
  .footer-item{
    padding: 0px 16px 0px 16px;
    @media (max-width: 600px) {
      padding: 0px 0px 8px 0px;
    }
    a {
      text-decoration: none;
      color: #ffffff;
    }
  }
  .footer-sns{
    @media (max-width: 600px) {
      margin: 0 80px;
    }
  }
  .copyright{
    font-family: HiraginoSans-W6;
    font-size: 12px;
    color: #ffffff;
      text-align: center  ;
  }
</style>


