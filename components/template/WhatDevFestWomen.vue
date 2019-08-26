<template>
  <div class="bg">
    <v-container class="section-container d-flex flex-column justify-center align-center">
      <v-row justify="center">
        <v-col lg="6">
          <TitleBlack text="DevFest Women Tokyoとは"></TitleBlack>
          <div class="content">
            DevFest Women TokyoはIT業界において、ダイバーシティとインクルージョンに興味のある方のためのテクノロジーカンファレンスです。<br>
            エンジニア、デザイナー、ディレクター、プロダクトマネージャーなど様々な職種の方にとって、自分のなりたい像がみつかったり、自分の知っていることやできることを増やして明日からの自信につなげるイベントを目指しています。
          </div>
          <div class="hashtag d-flex justify-center align-center">
            <span class="tag">ハッシュタグ</span>
            <a href="https://twitter.com/search?q=%23DevFestWomenTokyo" class="link">#DevFestWomenTokyo</a>
          </div>
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
  }

  .content{
    font-family: HiraginoSans-W3;
    font-size: 16px;
    line-height: 1.56;
    color: #ffffff;
    margin: 0px 0px 30px 0px;
  }
  .hashtag{
    .tag{
      color: #7a7a8c;
      font-family: HiraginoSans-W6;
      margin: 0px 10px 0px 0px;
    }
    .link{
      color: #ff6f61;
      font-weight: 900;
      font-family: Avenir;
    }
  }
</style>

