<template>
  <div class="bg">
    <v-container class="section-container d-flex flex-column justify-center align-center" xs6>
      <v-row justify="center" class="speaker_row">
        <v-col lg="6">
          <TitleBlack text="登壇者"></TitleBlack>
          <v-container class="content">
              <v-row class="speaker-box d-flex">
                  <v-col class="item" v-for="item in items" :key="item.name">
                        <a href="#"><img :src=item.img_src
                                         :alt=item.name
                        ></a>
                        <p class="name">{{item.name}}</p>
                        <p class="post">{{item.post}}</p>
                      <!-- TODO: SNSへのリンクにする -->
                        <p class="account">{{item.account}}</p>
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

  export default {
    components: {
      TitleBlack
    },
    data() {
      return {
        items: [
            { name: '岩尾 エマ はるか', account: '@Yuryu', account_link: 'https://twitter.com/Yuryu', post: 'Developer Advocate', img_src: require("~/assets/img/speaker/emma.jpg") },
            { name: '鳥井雪', account: '@yotii23', account_link: 'https://twitter.com/yotii23', post: '株式会社万葉のプログラマー', img_src: require("~/assets/img/speaker/yuki_torii.jpg") },
            { name: '福田恵里', account: '@eri_razapii', account_link: 'https://twitter.com/eri_razapii', post: 'SHE株式会社 Co-founder/CCO', img_src: require("~/assets/img/speaker/eri_fukuda.jpg") },
            { name: 'Kinuko Yasuda (安田絹子)', account: '@kinu', account_link: 'https://twitter.com/kinu', post: 'ソフトウェア・エンジニア／エンジニアリングマネジャ', img_src: require("~/assets/img/speaker/kinuko_yasuda.jpg") },
            { name: '千代田まどか (ちょまど)', account: '@chomdo', account_link: 'https://twitter.com/chomado', post: 'Microsoft', img_src: require("~/assets/img/speaker/madoka_chiyoda.jpeg") }
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
      .item{
          padding: 10px;
          display: inline-block;
          text-align: center;
          @media (max-width:960px) {
              max-width: 100px;
          }
          .name{
              font-family: HiraginoSans-W7;
              font-size: 16px;
              line-height: 1.5;
              color: #ffffff;
          }
          .account{
              font-family: GillSans;
              font-size: 16px;
              color: #7a7a8c;
          }
          .post{
              font-family: HiraginoSans-W4;
              font-size: 14px;
              line-height: 1.43;
              color: #ffffff;
          }
          p{
              margin-bottom: 8px;
          }
      }

      .item img {
          max-width: 100%;
      }
  }
</style>

