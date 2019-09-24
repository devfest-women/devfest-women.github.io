<template>
  <div class="bg">
    <v-container class="section-container d-flex flex-column justify-center align-center">
      <v-row justify="center">
        <v-col sm="6">
          <TitleBlack text="ワークショップ参加の方へ"></TitleBlack>
          <div class="content">
            <ul class="workshop-preparation-list">
              <li>ノートパソコンを持参してください。</li>
              <li>最新版の Google Chrome をインストールしておいてください。</li>
              <li>「初めてのGoogleアシスタント向けアクションの開発」および「Google Colaboratory ではじめる Python 入門」に参加される方は Google アカウントが必要です。</li>
              <li>「初めてのGoogleアシスタント向けアクションの開発」に参加される方で実機での動作にチャレンジしたい方は iPhone（Google Assistant がインストールされていること） または Android デバイス、PCとデバイスを繋ぐケーブルを持参してください。</li>
            </ul>
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
        name: 'SessionPreparation'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .workshop-preparation-list {
    padding: 0px 20px 0px 20px;
  }
  .section-container{
    padding: 45px 0px 45px 0px;
    @media (max-width:960px) {
      padding: 30px 20px;
    }
  }
  .content{
    font-family: HiraginoSans-W3;
    font-size: 16px;
    line-height: 1.56;
    color: #ffffff;
    margin: 0px 0px 30px 0px;
  }
</style>

