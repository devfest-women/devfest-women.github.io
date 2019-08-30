<template>
  <div class="bg">
    <v-container class="section-container d-flex flex-column justify-center align-center" xs6>
      <v-row justify="center" class="speaker_row">
        <v-col lg="6">
          <TitleBlack text="登壇者"></TitleBlack>
          <div class="content">
              <div class="speaker-box">
                  <div class="item" v-for="item in items" :key="item.name">
                        <a href="#"><img :src=item.img_src
                                         :alt=item.name
                        ></a>
                        <p class="name">{{item.name}}</p>
                        <!-- TODO: SNSへのリンクにする -->
                        <p class="account">{{item.account}}</p>
                  </div>
              </div>
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
        items: [
            { name: '岩尾 エマ はるか', account: '@Yuryu', , account_link: 'https://twitter.com/Yuryu', description: 'Developer Advocate', img_src: require("~/assets/img/speaker/emma.jpg") },
            { name: '鳥井雪', account: '@yotii23', , account_link: 'https://twitter.com/yotii23', description: '株式会社万葉のプログラマー', img_src: require("~/assets/img/speaker/yuki_torii.jpg") },
            { name: '福田恵里', account: '@eri_razapii', , account_link: 'https://twitter.com/eri_razapii', description: 'SHE株式会社 Co-founder/CCO', img_src: require("~/assets/img/speaker/eri_fukuda.jpg") },
            { name: 'Kinuko Yasuda (安田絹子)', account: '@kinu', , account_link: 'https://twitter.com/kinu', description: 'ソフトウェア・エンジニア／エンジニアリングマネジャ', img_src: require("~/assets/img/speaker/kinuko_yasuda.jpg") },
            { name: '千代田まどか (ちょまど)', account: '@chomdo', , account_link: 'https://twitter.com/chomado', description: 'Microsoft', img_src: require("~/assets/img/speaker/madoka_chiyoda.jpg") }
    ],
      }
    }
  }
</script>

<style lang="scss" scoped>
  .section-container{
    padding: 45px 0px 90px 0;
    color: #ffffff;
    @media (max-width:960px) {
      padding: 30px 20px;
    }
  }
  .speaker_row{
    width: 100%;
  }

  .content{
    font-family: HiraginoSans-W3;
    font-size: 16px;
    line-height: 1.56;
  }

  .speaker-box {
      display: flex;
      .item{
          padding: 10px;
          display: inline-block;
          text-align: center;
      }

      .item img {
          height: 200px;
      }
  }
</style>

