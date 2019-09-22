    <template>
      <div>
        <v-container class="section-container">
        <v-row align="center" justify="center">
          <v-col lg="8">
            <TitleGradient text="セッション内容"></TitleGradient>
              <div class="hall-rectangle"><p class="text">HallA</p></div>
              <div class="session-detail-box" v-for="item in halla" :key="item.session_number">
                <div class="header d-flex align-center">
                  <div class="session-number">
                    {{item.session_number}}
                  </div>
                  <div class="session-time">
                    {{item.time}}
                  </div>
                </div>
                <div class="session-detail-box-header">
                  <div class="session-title">
                    {{item.title}}
                  </div>
                  <div class="session-description">
                    <p>{{item.description}}</p>
                  </div>
                  <div class="session-speaker">
                      <a :href=item.account_link target="_blank" class="d-flex justify-left">
                          <div xs="2" md="2" class="left">
                              <img :src=item.img_src :alt=item.speaker >
                          </div>
                          <div class="right">
                              <p class="name">{{item.speaker}}</p>
                              <p class="post">{{item.post}}</p>
                          </div>
                      </a>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </template>

    <script>
      import TitleGradient from '~/components/module/TitleGradient.vue'
      import Button from '~/components/module/Button.vue'

      export default {
        components: {
          TitleGradient,
          Button
        },
        data() {
          return {
            name: 'Session',
            halla: [
                { session_number:'SessionA-1',
                  time: '14:20-14:50',
                  speaker: '福田 恵里',
                  title:'起業も結婚も出産も。女性のライフイベントをポジティブな力に変えながら、自分らしく働く方法起業も結婚も出産も。女性のライフイベントをポジティブな力に変えながら、自分らしく働く方法',
                  description:'仕事か、家庭か。女性にとってこの二元論で考えられることがまだまだ多い世の中。出産を期に仕事を辞める女性は、働く女性の47%にも及ぶんです。\n' +
                              'しかし、本当に女性が自分のキャリア諦める必要はあるのでしょうか。今の時代は、女性にとって非常に追い風だと思っています。場所や時間を選ばずに、働ける手段がこんなにも溢れているのだから。\n' +
                              'あとは自分自身が、自分らしい働き方を見つけ、それに向けてアクションをするだけ。\n' +
                              'このスピーチでは、私個人が実際に経験した、女性のライフイベントをポジティブな力に変えながら、自分らしく働く方法についてお話させていただきます。',
                  account_link: 'https://twitter.com/eri_razapii',
                  post: 'SHE株式会社 Co-founder/CCO',
                  img_src: require("~/assets/img/speaker/eri_fukuda.jpg")
                },
                ]
          }
        }
      }
    </script>

    <style lang="scss" scoped>
    .section-container{
      padding: 45px 0px 45px 0px;

      @media (max-width:960px) {
        padding: 2px 0;
      }
    }

    .hall-rectangle {
        background-color: rgba(255, 255, 255, 0.2);
        text-align: center;
        font-family: Avenir;
        font-size: 16px;
        font-weight: 900;
        letter-spacing: 1.84px;
        color: #ffdedb;
        padding: 8px 0px;

        @media (max-width:960px) {
            margin: 0 20px;
        }

        p{
          margin: 0px;
        }
    }

    .session-detail-box{
        border-radius: 10px;
        border: solid 0 #ffffff;
        background-color: #ffffff;
        margin-top: 20px;
        padding: 20px;

        @media (max-width:960px) {
            margin: 20px;
        }

        .header{
            margin-bottom: 20px;
            @media (max-width: 960px) {
                margin-bottom: 13px;
            }

            .session-number{
                background-color: #ff6f61;
                border-radius: 0px 20px 20px 0px;
                margin-left: -20px;
                margin-right: 15px;
                font-family: HiraginoSans-W6;
                font-size: 18px;
                line-height: 1.39;
                color: #ffffff;
                padding: 10px 40px;

                @media (max-width:960px) {
                    padding: 10px 27px 10px 20px;
                }
            }

            .session-time{
              font-family: Avenir;
              font-size: 16px;
              letter-spacing: 1.84px;
              color: #7a7a8c;
            }
        }

        .session-title{
          font-family: HiraginoSans-W7;
          font-size: 16px;
          line-height: 1.5;
          color: #100e17;
          margin-bottom: 10px;
        }
        .session-description{
          font-family: HiraginoSans-W4;
          font-size: 14px;
          line-height: 1.71;
          color: #100e17;
          white-space: pre-wrap;
        }

        .session-speaker a{
          text-decoration: none;
          img{
              max-width: 66px;
              border-radius: 50%;
          }
          .right{
              margin-left: 13px;
              p {
                  margin: 0px;
                  color: #100e17;
              }
              .name{
                  font-size: 16px;
                  line-height: 1.5;
                  font-family: HiraginoSans-W7;
                  margin-bottom: 10px;
              }
              .post{
                  font-family: HiraginoSans-W4;
                  font-size: 14px;
                  line-height: 1.43;
                  color: #100e17;
              }
          }
        }
    }
    </style>
