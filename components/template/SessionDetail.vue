<template>
  <div>
    <v-container class="section-container">
    <v-row align="center" justify="center">
      <v-col lg="8">
        <TitleGradient text="セッション内容"></TitleGradient>
          <div class="session">
            <div class="hall-rectangle"><p class="text">Keynote</p></div>
            <div class="session-detail-box" v-for="item in keynote" :key="item.session_number">
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
          </div>

          <div class="session">
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
          </div>
          <div class="session">
              <div class="hall-rectangle"><p class="text">HallB</p></div>
              <div class="session-detail-box" v-for="item in hallb" :key="item.session_number">
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
          </div>
          <div class="session">
              <div class="hall-rectangle"><p class="text">Workshop</p></div>
              <div class="session-detail-box" v-for="item in workshop" :key="item.session_number">
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
        keynote: [
            {
                session_number:'Keynote',
                speaker: '戸倉 彩',
                title:'私の行動宣言 #BeEqual',
                description:'女性活躍推進法の施行から約4年。職場におけるジェンダーやフェミニズムの平等を求める動きは社会現象となっています。給料や待遇の格差に関するメディア報道にはじまり、管理職に女性を登用する動きも強まっています。しかし、国内のIT業界では未だに女性エンジニアの比率はさほど変化しておらず、依然として男女間の格差が大きいことがうかがえます。今回は、私自身の経験談を交えながら、皆さんと一緒に「ダイバーシティ&インクルージョン」について考え、今後、女性を取り巻く未来の環境の変化に備えるためにできることについてご紹介いたします。',
                account_link: 'https://twitter.com/ayatokura',
                post: 'IBM Sr. Developer Advocate',
                img_src: require("~/assets/img/speaker/aya_tokura.png")
            }
        ],
        halla: [
            { session_number:'Session1-1',
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
            { session_number:'Session1-3',
                speaker: '鳥井 雪',
                title:'「わたし」をふくむと世界はひろがる〜ITの世界であなたらしく生きる〜',
                description: '‪プログラマー歴10年と少し、その間にカンファレンスに登壇したり託児所制度を導入したり、Rails Girls の日本でのコミュニティ化をがんばったりプログラミング絵本を翻訳したり子どもを2人目産んだりしました。‬\n' +
                            '‪その都度、「プログラマーとしての生き方」なんて立派なことはさっぱり考えずに「わたしが好きな場所で好きなことをして成長もして、ついでにその場所をより良い場所にするにはどうすればいいんだろう？」と自分勝手にやってきた、そのわたしの好きなITの世界の良さと可能性、そこに「あなた」があなたの都合で加わることの大切さをお話しできたらいいなと思っています。‬',
                account_link: 'https://twitter.com/yotii23',
                post: '株式会社万葉 プログラマー',
                img_src: require("~/assets/img/speaker/yuki_torii.jpg")
            },
        ],
        hallb: [
            { session_number:'Session4-2',
                speaker: '鈴木 順子',
                title:'よそはよそ、うちはうち 〜自分のものさしで、好きにエンジニアやる〜',
                description:'',
                post: 'GitHub / Enterprise Support Engineer',
                img_src: require("~/assets/img/speaker/junko-suzuki.jpg")
            }
        ],
        workshop: [
            {
                session_number:'Workshop',
                speaker: '田中 洋一郎',
                title:'初めてのGoogleアシスタント向けアクションの開発',
                description:'Googleアシスタントに声をかけることで呼び出しができて会話が可能なアクションの開発を実際に行います。ウェブブラウザのみで試すことができます。',
                account_link: 'https://twitter.com/yoichiro',
                post: 'Google Developers Expert (Assistant, Web Technology)',
                img_src: require("~/assets/img/speaker/yoichiro_tanaka.png")
            },
            {
                session_number:'Workshop',
                speaker: '中村 真由美',
                title:'Google Colaboratory で Python をはじめてみよう',
                description:'Colaboratory をご存知ですか？Google が機械学習の学習・研究用途に無償で提供する、ブラウザだけで動くオンラインの Python 実行環境です。Python の基本的な文法や特徴から、データ分析での活用イメージまで、実際に触ってみながら Python 入門しちゃいましょう！',
                account_link: 'https://www.facebook.com/mayumi.park.7',
                post: '',
                img_src: require("~/assets/img/speaker/mayumi_nakamura.png")
            },
            {
                session_number:'Workshop',
                speaker: 'あんざいゆき',
                title:'Kotlin Koans で Kotlin にチャレンジ！',
                description:'Kotlin のコードを書いて問題を解いていく Kotlin Koans に実際にチャレンジするハンズオンです。Kotlin Koans はブラウザ上で試せます。\n' +
                    '問題を解きながら Kotlin の文法や標準ライブラリの使い方を学んでいきましょう。',
                account_link: 'https://twitter.com/yanzm',
                post: '株式会社ウフィカ代表取締役',
                img_src: require("~/assets/img/speaker/yuki_anzai.png")
            },
        ],
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
.session {
    margin-bottom: 20px;

    .hall-rectangle {
        background-color: rgba(255, 255, 255, 0.2);
        text-align: center;
        font-family: Avenir;
        font-size: 16px;
        font-weight: 900;
        letter-spacing: 1.84px;
        color: #ffdedb;
        padding: 8px 0px;

        @media (max-width: 960px) {
            margin: 0 20px;
        }

        p {
            margin: 0px;
        }
    }

    .session-detail-box {
        border-radius: 10px;
        border: solid 0 #ffffff;
        background-color: #ffffff;
        margin-top: 20px;
        padding: 20px;

        @media (max-width: 960px) {
            margin: 20px;
        }

        .header {
            margin-bottom: 20px;
            @media (max-width: 960px) {
                margin-bottom: 13px;
            }

            .session-number {
                background-color: #ff6f61;
                border-radius: 0px 20px 20px 0px;
                margin-left: -20px;
                margin-right: 15px;
                font-family: HiraginoSans-W6;
                font-size: 18px;
                line-height: 1.39;
                color: #ffffff;
                padding: 10px 40px;

                @media (max-width: 960px) {
                    padding: 10px 27px 10px 20px;
                }
            }

            .session-time {
                font-family: Avenir;
                font-size: 16px;
                letter-spacing: 1.84px;
                color: #7a7a8c;
            }
        }

        .session-title {
            font-family: HiraginoSans-W7;
            font-size: 16px;
            line-height: 1.5;
            color: #100e17;
            margin-bottom: 10px;
        }

        .session-description {
            font-family: HiraginoSans-W4;
            font-size: 14px;
            line-height: 1.71;
            color: #100e17;
            white-space: pre-wrap;
        }

        .session-speaker a {
            text-decoration: none;

            img {
                max-width: 66px;
                border-radius: 50%;
            }

            .right {
                margin-left: 13px;

                p {
                    margin: 0px;
                    color: #100e17;
                }

                .name {
                    font-size: 16px;
                    line-height: 1.5;
                    font-family: HiraginoSans-W7;
                    margin-bottom: 10px;
                }

                .post {
                    font-family: HiraginoSans-W4;
                    font-size: 14px;
                    line-height: 1.43;
                    color: #100e17;
                }
            }
        }
    }
}
</style>
