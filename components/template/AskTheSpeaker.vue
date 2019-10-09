<template>
  <div class="bg">
    <v-container class="section-container d-flex flex-column justify-center align-center">
      <v-row justify="center">
        <v-col sm="8">
          <TitleGradient text="Ask the Speakerについて"></TitleGradient>
          <div class="content">
            <p>エスカレーターを上って左手にAsk the Speakerコーナーを設置します。ここでは、セッション終了後にスピーカーの方へ気軽に質問したりお話したりできます。</p>
            <p>下記の休憩時間が各セッションのAsk the Speakerの時間になります。</p>
            <ul class="ask-the-speaker-list">
              <li>13:50-14:10  岩尾 エマ はるかさん・戸倉彩さん</li>
              <li>14:40-14:50  福田恵里さん・清水淳子さん</li>
              <li>15:20-15:35  安田クリスチーナさん・千代田まどかさん</li>
              <li>16:05-16:15  鳥井雪さん・鈴木順子さん</li>
              <li>16:45-16:55  中村寛子さん・安田絹子さん</li>
            </ul>
            <p>Ask the Speakerは都合により変更・キャンセルになる可能性があります。</p>
            <p>ご了承ください。</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import TitleGradient from '~/components/module/TitleGradient.vue'
  export default {
    components: {
      TitleGradient
    },
    data() {
      return {
        name: 'AskTheSpeaker'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ask-the-speaker-list {
    padding: 0px 20px 20px 20px;
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

