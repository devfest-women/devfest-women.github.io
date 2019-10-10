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
            <div class="hall-rectangle"><p class="text">ゲスト講演</p></div>
            <div class="session-detail-box" v-for="item in guest" :key="item.session_number">
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
                                  <img v-if="item.img_src" :src=item.img_src :alt=item.speaker >
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
                session_number:'Keynote1',
                speaker: '岩尾 エマ はるか',
                title:'小学生の夢から世界記録まで',
                description:'2019年3月、私たちは31兆桁の円周率を、クラウドを使って計算することに成功しました。これは従前の記録を8兆桁あまり塗り替え、新しい世界記録となりました。\n' +
                    '円周率の世界記録を更新することは、実は私の小学生の頃の夢でした。そのころの夢が、どのように今回の記録更新につながったのかについてお話します。また、2019年の1月からアメリカのシアトルで働いていて、仕事で使う英語のこと、海外で働くということについて経験を伝えたいと思います。',
                account_link: 'https://twitter.com/Yuryu',
                post: 'Google Developer Advocate',
                img_src: require("~/assets/img/speaker/emma.jpg")
            },
            {
                session_number:'Keynote2',
                speaker: '戸倉 彩',
                title:'私の行動宣言 #BeEqual',
                description:'女性活躍推進法の施行から約4年。職場におけるジェンダーやフェミニズムの平等を求める動きは社会現象となっています。給料や待遇の格差に関するメディア報道にはじまり、管理職に女性を登用する動きも強まっています。しかし、国内のIT業界では未だに女性エンジニアの比率はさほど変化しておらず、依然として男女間の格差が大きいことがうかがえます。今回は、私自身の経験談を交えながら、皆さんと一緒に「ダイバーシティ&インクルージョン」について考え、今後、女性を取り巻く未来の環境の変化に備えるためにできることについてご紹介いたします。',
                account_link: 'https://twitter.com/ayatokura',
                post: 'IBM Sr. Developer Advocate',
                img_src: require("~/assets/img/speaker/aya_tokura.png")
            }
        ],
        guest: [
            {
                session_number:'ゲスト講演',
                speaker: 'ハヤカワ五味',
                title:'"女性ならではの"って何？ 生理と女性の社会進出の歴史',
                description:'エンジニアやデザイナーなど、ものづくりの仕事をしていると「女性ならではの感性で〜」と言われることもあると思います。でも、「女性ならでは」って何？なぜ、女性というだけで「女性ならでは」を求められなければいけないのだろうか、なぜそのような価値観があるのか。今までの女性の社会進出の歴史と生理について紐解いていきます。',
                account_link: 'https://twitter.com/hayakawagomi',
                post: '株式会社ウツワ代表取締役／起業家',
                img_src: require("~/assets/img/speaker/gomi-hayakawa.png")
            }
        ],
        halla: [
            { session_number:'Session1-1',
              speaker: '福田 恵里',
              title:'起業も結婚も出産も。女性のライフイベントをポジティブな力に変えながら、自分らしく働く方法',
              description:'仕事か、家庭か。女性にとってこの二元論で考えられることがまだまだ多い世の中。出産を期に仕事を辞める女性は、働く女性の47%にも及ぶんです。\n' +
                          'しかし、本当に女性が自分のキャリア諦める必要はあるのでしょうか。今の時代は、女性にとって非常に追い風だと思っています。場所や時間を選ばずに、働ける手段がこんなにも溢れているのだから。\n' +
                          'あとは自分自身が、自分らしい働き方を見つけ、それに向けてアクションをするだけ。\n' +
                          'このスピーチでは、私個人が実際に経験した、女性のライフイベントをポジティブな力に変えながら、自分らしく働く方法についてお話させていただきます。',
              account_link: 'https://twitter.com/eri_razapii',
              post: 'SHE株式会社 Co-founder/CCO',
              img_src: require("~/assets/img/speaker/eri_fukuda.jpg")
            },
            { session_number:'Session2-1',
              speaker: '安田クリスチーナ',
              title:'エンジニアではない人のテクノロジーとの付き合い方',
              description:'文系でありながらプログラミングに憧れて、シリコンバレーでPythonとAIを学んだり、独学でブロックチェーンを触ってみたりした結果、エンジニアには向いていないことを実感。しかし、リードしているプロジェクト内で「政府等一つの権威に頼らない証明書を発行する方法」を構築する上で最適な手段を選択するために、ブロックチェーンおよび従来の認証認可技術の根本的な仕組みや実装方法などを学ぶ必要性に直面した。それから、自分でプログラミングはしないけれども、成し遂げたい目的に合致したテクノロジーを徹底的に理解するというテクノロジーとの付き合い方を確立してきました。そんな私の付き合い方を今日はお話します。',
              account_link: 'https://www.facebook.com/christina.yasuda',
              post: 'InternetBar.org 理事 (Forbes 30Under30)',
              img_src: require("~/assets/img/speaker/kurisuti-na.png")
            },
            { session_number:'Session3-1',
                speaker: '鳥井 雪',
                title:'「わたし」をふくむと世界はひろがる〜ITの世界であなたらしく生きる〜',
                description: '‪プログラマー歴10年と少し、その間にカンファレンスに登壇したり託児所制度を導入したり、Rails Girls の日本でのコミュニティ化をがんばったりプログラミング絵本を翻訳したり子どもを2人目産んだりしました。‬\n' +
                             '‪その都度、「プログラマーとしての生き方」なんて立派なことはさっぱり考えずに「わたしが好きな場所で好きなことをして成長もして、ついでにその場所をより良い場所にするにはどうすればいいんだろう？」と自分勝手にやってきた、そのわたしの好きなITの世界の良さと可能性、そこに「あなた」があなたの都合で加わることの大切さをお話しできたらいいなと思っています。‬',
                account_link: 'https://twitter.com/yotii23',
                post: '株式会社万葉 プログラマー',
                img_src: require("~/assets/img/speaker/yuki_torii.jpg")
            },
            { session_number:'Session4-1',
                speaker: '中村 寛子',
                title:'ダイバーシティ＆インクルージョンが当たり前になるのは不可能なのか？',
                description: '「ダイバーシティ＆インクルージョン」と聞くと何をイメージしますか？女性の活躍、LGBTQ、障害者、海外労働者..。私が初めてこの言葉を記事から目にした時に感じた他人感。そして、なかなか進まないダイバーシティの実情を受けて、私がなぜ女性視点でデザインするダイバーシティ推進のプロジェクト「MASHING UP」を初めた理由、実情をお話しします。',
                account_link: '',
                post: 'MASHING UP プロデューサー',
                img_src: require("~/assets/img/speaker/hiroko-nakamura.png")
            },
            { session_number:'Session5-1',
                speaker: '清水舞子(しみこ)',
                title:'性別は本当に関係ないの？社会の狭間で共に戦う仲間の見つけ方',
                description: '「性差ではなく個人差！」\n' +
                             'metoo運動以降、バイアスから解放され着実により良い方向に動きだした社会。しかし、明日すべてのバイアスが消えてなくなるのでしょうか？答えはNO。まだまだ社会はジェンダーギャップに溢れかえっています。\n' +
                             'そんな中、フリーランス事業主、そして起業-被投資まで「会社と会社の狭間」を経験した自分が、理想の社会と現実の社会のギャップを埋めるために強力な味方となる「最強の仲間集め」の方法をお伝え致します。',
                account_link: 'https://twitter.com/shimiko1031',
                post: '株式会社祭　代表',
                img_src: require("~/assets/img/speaker/shimizu_maiko.jpg")
            },
],
        hallb: [
            { session_number:'Session1-2',
                speaker: '清水 淳子',
                title:'グラフィックレコーディングが仕事になるまでの舞台裏 ー視覚表現を言語として使う世界を目指してー',
                description:'グラフィックレコーディングとは、リアルタイムで話し合いを整理して記録することで、参加者の気づきを促進する手法です。近年、ビジネス会議や市民活動の場で注目を集めています。このセッションでは清水が自分のノートをグラフィックレコーダーという職業に発展させるまでの約10年間の舞台裏をご紹介します。',
                account_link: 'https://twitter.com/4mimimizu',
                post: 'デザインリサーチャー / グラフィックレコーダー',
                img_src: require("~/assets/img/speaker/junko_shimizu.png")
            },
            { session_number:'Session2-2',
                speaker: '千代田 まどか (ちょまど)',
                title:'オタクな私の拡がる世界 　〜BL同人作家から IT エンジニア、Microsoft のインターナショナルチームに〜',
                description:'物理0点取ったガチガチな文系大学生のわたしがパソコンに出会い、プログラミングにハマって独学で応用情報技術者試験に合格。SIer や スタートアップ企業での技術職を経験し、日本マイクロソフトにテクニカルエバンジェリストとして入社。数年後には、日本人は私含め2人だけの本社インターナショナルチームへ異動。BLマンガ、オタク活動、プログラミング。大好きなことに没入し続けた、ちょまど流テクニカルキャリアにおける "Connecting the Dots" についてお話しさせていただきます。',
                account_link: 'https://twitter.com/chomado',
                post: 'Microsoft 社 Cloud Developer Advocate',
                img_src: require("~/assets/img/speaker/madoka_chiyoda.jpeg")
            },
            { session_number:'Session3-2',
                speaker: '鈴木 順子',
                title:'よそはよそ、うちはうち 〜自分のものさしで、好きにエンジニアやる〜',
                description:'GitHubは場所にとらわれることなく、世界中の開発者が繋がるプラットフォームです。これからも、世界中の開発者にとって最適なプラットフォームを構築しつづけていくためには、\n' +
                            '私達GitHub自身がそういう世界を反映する会社であるべきだと考えています。本セッションの前半では、GitHubのDiversity, Inclusion & Belongings についての取り組みを紹介します。\n' +
                            'また後半は、私自身の約10年におよぶエンジニア人生を振り返り、何を考えてどう行動してきたかについてお話しします。\n' +
                            '大それたものは何もありません。いかに、何もこだわらずに、わがままに好き勝手に、エンジニアやってきたかを話します。',
                account_link: 'https://twitter.com/PNSK',
                post: 'GitHub / Enterprise Support Engineer',
                img_src: require("~/assets/img/speaker/junko-suzuki.jpg")
            },
            { session_number:'Session4-2',
                speaker: 'Kinuko Yasuda (安田絹子)',
                title:'私のエンジニアとしての10年、そしてダイバーシティのこととか',
                description:'Google で Chrome というブラウザを開発することなんと約10年😲\n' +
                'Webの標準を提案したり、たくさんコードを書いたり、国や会社を超えて仲間ができたり、インターネットを壊したり、子供を産んだり、リーダーになったり…などなどしてたらいつの間にか随分たっていました。\n' +
                'いつまでこれをやろうかな？🤔と思ったりもしますが、私が仕事や私生活で学んだこと、世の中になにか還元できたらいいなと思ってることなどをつらつらお話しします。',
                account_link: 'https://twitter.com/kinu',
                post: 'Google Engineering Manager',
                img_src: require("~/assets/img/speaker/kinuko_yasuda.jpg")
            },
            { session_number:'Session5-2',
                speaker: '田村ななみ(サイボウズ株式会社),　横井羽衣子(日本マイクロソフト株式会社),　調整中(Sansan株式会社),　調整中(株式会社メルカリ)',
                title:'DevFestWomenスポンサー企業に聞く〜ダイバーシティに取り組む企業のパネルディスカッション〜',
                description:'参加者からのアンケートで多く寄せられた『女性の働き方』についてスポンサー企業の方々をパネラーとして迎え、実際に社内ではどのような取り組みをしていて、どのようなキャリアパスがあるのかなどについてディスカッションしていただきます！\n' +
                    'ディスカッション予定のトピック\n' +
                    '* ダイバーシティな環境づくり(女性の働き方、アクセシビリティな社内環境の取り組み)\n' +
                    '* 多様性のある働き方、キャリアパス\n' +
                    '* IT業界が今抱えている課題はなにか、解決への取り組み',
                account_link: '',
                post: '',
                img_src: ''
            }
        ],
        workshop: [
            {
                session_number:'Workshop1',
                speaker: '田中 洋一郎',
                title:'初めてのGoogleアシスタント向けアクションの開発',
                description:'Googleアシスタントに声をかけることで呼び出しができて会話が可能なアクションの開発を実際に行います。ウェブブラウザのみで試すことができます。',
                account_link: 'https://twitter.com/yoichiro',
                post: 'Google Developers Expert (Assistant, Web Technology)',
                img_src: require("~/assets/img/speaker/yoichiro_tanaka.png")
            },
            {
                session_number:'Workshop2',
                speaker: '中村 真由美',
                title:'Google Colaboratory で Python をはじめてみよう',
                description:'Colaboratory をご存知ですか？Google が機械学習の学習・研究用途に無償で提供する、ブラウザだけで動くオンラインの Python 実行環境です。Python の基本的な文法や特徴から、データ分析での活用イメージまで、実際に触ってみながら Python 入門しちゃいましょう！',
                account_link: 'https://www.facebook.com/mayumi.park.7',
                post: '',
                img_src: require("~/assets/img/speaker/mayumi_nakamura.png")
            },
            {
                session_number:'Workshop3',
                speaker: 'あんざい ゆき',
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
