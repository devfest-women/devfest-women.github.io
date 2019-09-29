<template>
  <div class="bg">
    <v-container class="section-container d-flex flex-column justify-center align-center">
      <v-row justify="center">
        <v-col lg="6">
          <TitleBlack text="よくある質問"></TitleBlack>
          <h2 class="content">Q. 男性も参加できますか？</h2>
          <p class="content">
            もちろんです！DevFest Women Tokyo 2019はIT業界において、ダイバーシティとインクルージョンに興味のある方のためのテクノロジーカンファレンスです。女性やジェンダーマイノリティの方だけでなく、どなたでもご参加いただけます。
          </p>
          <h2 class="content">Q. 託児所はありますか？</h2>
          <p class="content">
            保育業者による託児スペースをご用意しております。数に限りがあり、事前予約制となる予定です。当日開場からセッション終了まで、子ども1名あたり1000円でお預けいただけます。詳細が決まりましたら、本サイトとPeatixのサイトでお知らせいたします。
          </p>
          <h2 class="content">Q. 途中参加/退場は可能ですか？</h2>
          <p class="content">
            もちろん可能です。みなさまのご都合に合わせ、お気軽にお楽しみ下さい。
          </p>
          <p class="content">
            その他、ご不明点等ありましたらこちらの<a href="https://forms.gle/Bc1BwwpwXwTZkA1b7">お問い合わせフォーム</a>からお気軽にお問い合わせください。
          </p>
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
        name: 'アンチハラスメントポリシー'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .section-container{
    padding: 45px 0px 45px 0px;
    @media (max-width:960px) {
      padding: 30px 20px 0px 20px;
    }
  }
  .content{
    font-family: HiraginoSans-W3;
    font-size: 16px;
    line-height: 1.56;
    color: #ffffff;
  }
  a{
    color: #7a7a8c;
    text-decoration: none;
  }
</style>
