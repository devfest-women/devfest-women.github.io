<template>
  <div class="bg">
    <v-container class="section-container d-flex flex-column justify-center align-center" xs6>
      <v-row justify="center" class="speaker_row">
        <v-col lg="6">
          <TitleBlack text="登壇者"></TitleBlack>
          <v-container class="content">
              <v-row class="speaker-box d-flex">
                  <v-col xs="8" sm="6" class="item" v-for="item in items" :key="item.name">
                        <a :href=item.account_link target="_blank" class="d-flex justify-left">
                            <div xs="2" md="2" class="item-left">
                                <img :src=item.img_src :alt=item.name >
                            </div>
                            <div class="item-right">
                                <p class="name">{{item.name}}</p>
                                <p class="post">{{item.post}}</p>
                                <p class="account">{{item.account}}</p>
                            </div>
                        </a>
                  </v-col>
              </v-row>
          </v-container>
          <TitleBlack text="ワークショップ講師"></TitleBlack>
          <v-container class="content">
              <v-row class="speaker-box d-flex">
                  <v-col xs="8" sm="6" class="item" v-for="item in workshops" :key="item.name">
                      <a :href=item.account_link target="_blank" class="d-flex justify-left">
                          <div xs="2" md="2" class="item-left">
                              <img :src=item.img_src :alt=item.name >
                          </div>
                          <div class="item-right">
                              <p class="name">{{item.name}}</p>
                              <p class="post">{{item.post}}</p>
                              <p class="account">{{item.account}}</p>
                          </div>
                      </a>
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
            { name: '岩尾 エマ はるか', account: '@Yuryu', account_link: 'https://twitter.com/Yuryu', post: 'Google Developer Advocate', img_src: require("~/assets/img/speaker/emma.jpg") },
            { name: '戸倉彩', account: '@ayatokura', account_link: 'https://twitter.com/ayatokura', post: 'IBM Sr. Developer Advocate', img_src: require("~/assets/img/speaker/aya_tokura.png") },
            { name: 'ハヤカワ五味', account: '@hayakawagomi', account_link: 'https://twitter.com/hayakawagomi', post: '株式会社ウツワ代表取締役／起業家', img_src: require("~/assets/img/speaker/gomi-hayakawa.png") },
            { name: 'Jen Looper', account: '@jenlooper', account_link: 'https://twitter.com/jenlooper', post: 'Google Developer Expert / Cloud Developer Advocate Lead at Microsoft', img_src: require("~/assets/img/speaker/jen-looper.png") },
            { name: '福田恵里', account: '@eri_razapii', account_link: 'https://twitter.com/eri_razapii', post: 'SHE株式会社 Co-founder/CCO', img_src: require("~/assets/img/speaker/eri_fukuda.jpg") },
            { name: '安田クリスチーナ', account: '@christina.yasuda', account_link: 'https://www.facebook.com/christina.yasuda', post: 'InternetBar.org 理事 (Forbes 30Under30)', img_src: require("~/assets/img/speaker/kurisuti-na.png") },
            { name: '清水淳子', account: '@4mimimizu', account_link: 'https://twitter.com/4mimimizu', post: 'デザインリサーチャー / グラフィックレコーダー', img_src: require("~/assets/img/speaker/junko_shimizu.png") },
            { name: '鳥井雪', account: '@yotii23', account_link: 'https://twitter.com/yotii23', post: '株式会社万葉 プログラマー', img_src: require("~/assets/img/speaker/yuki_torii.jpg") },
            { name: '千代田まどか (ちょまど)', account: '@chomado', account_link: 'https://twitter.com/chomado', post: 'Microsoft 社 Cloud Developer Advocate', img_src: require("~/assets/img/speaker/madoka_chiyoda.jpeg") },
            { name: '鈴木順子', account: '@PNSK', account_link: 'https://twitter.com/PNSK', post: 'GitHub / Enterprise Support Engineer', img_src: require("~/assets/img/speaker/junko-suzuki.jpg") },
            { name: '中村寛子', account: '', account_link: '', post: 'MASHING UP プロデューサー', img_src: require("~/assets/img/speaker/hiroko-nakamura.png") },
            { name: 'Kinuko Yasuda (安田絹子)', account: '@kinu', account_link: 'https://twitter.com/kinu', post: 'Google Engineering Manager', img_src: require("~/assets/img/speaker/kinuko_yasuda.jpg") },
            { name: '小倉 一葉', account: '@sakekazuha', account_link: 'https://twitter.com/sakekazuha', post: 'プリズムテック 代表・コミュニティマネージャー', img_src: require("~/assets/img/speaker/kazuha_ogura.JPG") },
            { name: '清水舞子(しみこ)', account: '@shimiko1031', account_link: 'https://twitter.com/shimiko1031', post: '株式会社祭　代表', img_src: require("~/assets/img/speaker/shimizu_maiko.jpg") },
            { name: '田村ななみ', account: '', account_link: '', post: 'サイボウズ株式会社 開発本部', img_src: require("~/assets/img/speaker/tamura_nanami.png") },
            { name: '横井羽衣子', account: '@uikou', account_link: 'https://www.linkedin.com/in/uikou/', post: '日本マイクロソフト株式会社 シニアプロダクトマネージャー', img_src: require("~/assets/img/speaker/uiko_yokoi.jpg") },
            { name: '我妻小夜子', account: '@wagatsumasayoko', account_link: 'https://8card.net/p/wagatsumasayoko', post: 'Sansan株式会社 人事部 Employee Success Group マネジャー', img_src: require("~/assets/img/speaker/sayoko_wagatuma.jpg") },
            { name: '坂本結衣', account: '@yui_tang', account_link: 'https://twitter.com/yui_tang', post: '株式会社メルカリ Web Platform Team Software Engineer', img_src: require("~/assets/img/speaker/yui_sakamoto.JPG") },
      ],
      workshops: [
          { name: '田中 洋一郎', account: '@yoichiro', account_link: 'https://twitter.com/yoichiro', post: 'Google Developers Expert (Assistant, Web Technology)', img_src: require("~/assets/img/speaker/yoichiro_tanaka.png") },
          { name: '中村 真由美', account: '@mayumi.park.7', account_link: 'https://www.facebook.com/mayumi.park.7', post: '', img_src: require("~/assets/img/speaker/mayumi_nakamura.png") },
          { name: 'あんざいゆき', account: '@yanzm', account_link: 'https://twitter.com/yanzm', post: '株式会社ウフィカ代表取締役', img_src: require("~/assets/img/speaker/yuki_anzai.png") }
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
          padding: 10px 0px 30px 0;
          display: inline-block;
          a{
              text-decoration: none;
              max-width: 100%;
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
          .item-right{
              margin: 0px 10px;
          }
          p{
              margin-bottom: 4px;
          }
      }

      .item img {
          max-width: 100px;
          border-radius: 50%;
      }
  }
</style>

