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
            <div class="content small">※Googleアカウントのログインが必須です。現在、G Suiteのセキュリティポリシーによっては「you don't have permission」と表示される場合があります。その際は、お手数ですが個人のアカウント等をご利用ください。その他わからないことがあれば画面下部のお問い合わせまでご連絡ください。</div>
            <v-row sm="6" class="silver d-flex justify-center align-center">
              <v-col sm="6" class="silver-logo">
                <a href="https://cybozu.co.jp/"><img src="~/assets/img/sponsor/cybozu.png" alt="サイボウズ株式会社" title="サイボウズ株式会社"></a>
              </v-col>
              <v-col sm="6" class="silver-logo">
                <a href="https://jp.corp-sansan.com/"><img src="~/assets/img/sponsor/sansan.png" alt="Sansan株式会社" title="Sansan株式会社"></a>
              </v-col>
            </v-row>
            <v-row class="bronze d-flex flex-column flex-lg-row">
              <v-col xs="6" md="4" class="bronze-logo">
                <a href="https://unity.com/ja"><img src="~/assets/img/sponsor/unity.png" alt="ユニティ・テクノロジーズ・ジャパン合同会社" title="ユニティ・テクノロジーズ・ジャパン合同会社"></a>
              </v-col>
              <!-- <v-col sm="6" md="4" class="bronze-logo">
                <a href=""><img src="~/assets/img/sponsor/dena.png" alt="株式会社ディー・エヌ・エー" title="株式会社ディー・エヌ・エー"></a>
              </v-col> -->
              <v-col xs="6" md="4" class="bronze-logo">
                <a href="https://www.uphyca.com/"><img src="~/assets/img/sponsor/uphyca.png" alt="株式会社ウフィカ" title="株式会社ウフィカ"></a>
              </v-col>
            </v-row>
            <v-row class="bronze d-flex flex-column flex-lg-row">
              <v-col xs="6" md="4" class="bronze-logo">
                <a href="https://github.com/"><img src="~/assets/img/sponsor/github.png" alt="ギットハブ・ジャパン合同会社" title="ギットハブ・ジャパン合同会社"></a>
              </v-col>
              <v-col xs="6" md="4" class="bronze-logo">
                <a href="https://www.sketch.com/"><img src="~/assets/img/sponsor/sketch.png" alt="Sketch" title="Sketch"></a>
              </v-col>
              <v-col xs="6" md="4" class="bronze-logo">
                <a href="https://www.styliste.com"><img src="~/assets/img/sponsor/styliste.png" alt="ファッションパートナー株式会社" title="ファッションパートナー株式会社"></a>
              </v-col>
            </v-row>
            <v-row class="personal d-flex flex-column flex-lg-row">
              <!-- <v-col xs="4" md="2" class="personal-logo">
                <a href=""><img src="~/assets/img/sponsor/yuichi-yagami.png" alt="谷上雄一" title="谷上雄一"></a>
              </v-col> -->
              <!-- <v-col xs="4" md="2" class="personal-logo">
                <a href=""><img src="~/assets/img/sponsor/tomoharu-nagasawa.png" alt="長沢智治" title="長沢智治"></a>
              </v-col> -->
              <!-- <v-col xs="4" md="2" class="personal-logo">
                <a href=""><img src="~/assets/img/sponsor/takayuki-fuwa.png" alt="不破崇行" title="不破崇行"></a>
              </v-col> -->
              <!-- <v-col xs="4" md="2" class="personal-logo">
                <a href=""><img src="~/assets/img/sponsor/satoru-nakamura.png" alt="なかむらさとる" title="なかむらさとる"></a>
              </v-col> -->
              <!-- <v-col xs="4" md="2" class="personal-logo">
                <a href=""><img src="~/assets/img/sponsor/toshihisa-osawa.png" alt="大澤敏久" title="大澤敏久"></a>
              </v-col> -->
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

