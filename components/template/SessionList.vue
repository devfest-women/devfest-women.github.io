<template>
  <div>
    <v-container class="section-container">
    <v-row align="center" justify="center">
      <v-col lg="10">
        <TitleGradient text="タイムテーブル"></TitleGradient>
          <div class="flexbox">
            <div class="d-none d-sm-flex">
              <ul class="timeline timeline-session time-section">
                <li v-for="item in time" :key="item.time" :class="'start-time ' + item.display">
                  {{item.start}}
                </li>
                <li class="start-time">17:30</li>
              </ul>
            </div>
            <div class="hall-a">
              <div class="hall-title"><p class="text">HallA</p></div>
              <div class="session" @click.stop="dialog = true" v-for="item in halla" :key="item.time">
                <p class="time-sp">{{item.time}}</p>
                <div v-bind:class="item.display">
                    <div class="session-container">
                      <p class="time-pc">{{item.time}}</p>
                      <p class="session-name">{{item.session}}</p>
                      <!-- #TODO セッションタイトルのcss直す -->
                      <p class="session-title">{{item.title}}</p>
                      <p class="person">{{item.post}}<br>{{item.name}}</p>
                    </div>
                </div>
              </div>
            </div>
            <div class="hall-b">
              <div class="hall-title"><p class="text">HallB</p></div>
              <div class="session" @click.stop="dialog = true" v-for="item in hallb" :key="item.time">
                <p class="time-sp">{{item.time}}</p>
                <div v-bind:class="item.display">
                  <div class="session-container">
                    <p class="time-pc">{{item.time}}</p>
                    <p class="session-name">{{item.session}}</p>
                    <!-- #TODO セッションタイトルのcss直す -->
                    <p class="session-title">{{item.title}}</p>
                    <p class="person">{{item.post}}<br>{{item.name}}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-none d-sm-flex">
              <ul class="timeline timeline-workshop time-section">
                <li v-for="item in workshoptime" :key="item.time" :class="'start-time ' + item.display">
                  {{item.start}}
                </li>
                <li class="start-time">17:20</li>
              </ul>
            </div>
            <div class="workshop">
              <div class="hall-title"><p class="text">Workshop</p></div>
              <div class="session" @click.stop="dialog = true" v-for="item in workshop" :key="item.time">
                <p class="time-sp">{{item.time}}</p>
                <div v-bind:class="item.display">
                  <div class="session-container">
                    <p class="time-pc">{{item.time}}</p>
                    <p class="session-name">{{item.session}}</p>
                    <!-- #TODO セッションタイトルのcss直す -->
                    <p class="session-title">{{item.title}}</p>
                    <p class="person">{{item.post}}<br>{{item.name}}</p>
                  </div>
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
        time: [
            { start: '10:00',display:''},
            { start: '10:30',display:''},
            { start: '10:50',display:'session-time'},
            { start: '11:40',display:'session-time'},
            { start: '12:10',display:''},
            { start: '13:10',display:'session-time'},
            { start: '13:50',display:''},
            { start: '14:10',display:'session-time'},
            { start: '14:40',display:''},
            { start: '14:50',display:'session-time'},
            { start: '15:20',display:''},
            { start: '15:35',display:'session-time'},
            { start: '16:05',display:''},
            { start: '16:15',display:'session-time'},
            { start: '16:45',display:''},
            { start: '16:55',display:'session-time'},
            { start: '17:15',display:''},
            { start: '17:20',display:''},
        ],
        halla: [
            { time: '10:00-10:30',session:'受付', title:'', name: '', post: '',display:'contents-other-session'},
            { time: '10:30-10:45',session:'オープニング', title:'', name: '', post: '' ,display:'contents-other-session'},
            { time: '10:50-11:35',session:'Keynote', title:'私の行動宣言 #BeEqual' , name: '戸倉彩', post: 'IBM Sr. Developer Advocate',display: 'contents' },
            { time: '11:40-12:10',session:'特別ゲスト', title:'"女性ならではの"って何？ 生理と女性の社会進出の歴史' , name: 'ハヤカワ五味', post: '株式会社ウツワ代表取締役／起業家',display: 'contents' },
            { time: '12:10-13:10',session:'ランチ懇親会', title:'' , name: '', post: '',display: 'contents-other-session' },
            { time: '13:10-13:50',session:'Special Talk', title:'How to create a great community', name: 'Jen Looper（通訳：安田クリスチーナ）', post: 'Google Developer Expert / Cloud Developer Advocate Lead at Microsoft',display:'contents' },
            { time: '13:50-14:10',session:'休憩', title:'', name: '', post: '',display:'contents-other-session' },
            { time: '14:10-14:40',session:'session1-1',title:'起業も結婚も出産も。女性のライフイベントをポジティブな力に変えながら、自分らしく働く方法', name: '福田恵里', post: 'SHE株式会社 Co-founder/CCO' ,display:'contents'},
            { time: '14:40-14:50',session:'休憩', title:'', name: '', post: '',display:'contents-other-session' },
            { time: '14:50-15:20',session:'session2-1', title:'エンジニアではない人のテクノロジーとの付き合い方' ,name: '安田クリスチーナ',  post: 'InternetBar.org 理事 (Forbes 30Under30)' ,display:'contents'},
            { time: '15:20-15:35',session:'休憩', title:'', name: '', post: '' ,display:'contents-other-session'},
            { time: '15:35-16:05',session:'session3-1',title:'「わたし」をふくむと世界はひろがる〜ITの世界であなたらしく生きる〜', name: '鳥井雪', post: '株式会社万葉 プログラマー' ,display:'contents'},
            { time: '16:05-16:15',session:'休憩', title:'', name: '', post: '' ,display:'contents-other-session'},
            { time: '16:15-16:45',session:'session4-1',title:'ダイバーシティ＆インクルージョンが当たり前になるのは不可能なのか？', name: '中村寛子', post: 'MASHING UP プロデューサー',display:'contents' },
            { time: '16:45-16:55',session:'休憩', title:'', name: '', post: '' ,display:'contents-other-session'},
            { time: '16:55-17:15',session:'session5-1',title:'性別は本当に関係ないの？社会の狭間で共に戦う仲間の見つけ方', name: '清水舞子(しみこ)', post: '株式会社祭　代表', display:'contents'},
            { time: '17:15-17:20',session:'休憩',title:'', name: '', post: '' ,display:'contents-other-session'},
            { time: '17:20-17:30',session:'クロージング', title:'', name: '', post: '' ,display:'contents-other-session'},
      ],
      hallb: [
            { time: '14:10-14:40',session:'session1-2', title:'グラフィックレコーディングが仕事になるまでの舞台裏 ー視覚表現を言語として使う世界を目指してー', name: '清水淳子', post: 'デザインリサーチャー/グラフィックレコーダー', display:'contents' },
            { time: '14:40-14:50',session:'休憩', title:'', name: '', post: '',display:'contents-other-session' },
            { time: '14:50-15:20',session:'session2-2', title:'オタクな私の拡がる世界 　〜BL同人作家から IT エンジニア、Microsoft のインターナショナルチームに〜', name: '千代田まどか (ちょまど)', post: 'Microsoft 社 Cloud Developer Advocate' ,display:'contents'},
            { time: '15:20-15:35',session:'休憩', title:'', name: '', post: '' ,display:'contents-other-session'},
            { time: '15:35-16:05',session:'session3-2', title:'よそはよそ、うちはうち 〜自分のものさしで、好きにエンジニアやる〜', name: '鈴木 順子', post: 'GitHub / Enterprise Support Engineer' ,display:'contents'},
            { time: '16:05-16:15',session:'休憩', title:'', name: '', post: '' ,display:'contents-other-session'},
            { time: '16:15-16:45',session:'session4-2', title:'私のエンジニアとしての10年、そしてダイバーシティのこととか', name: 'Kinuko Yasuda (安田絹子)', post: 'Google Engineering Manager',display:'contents'},
            { time: '16:45-16:55',session:'休憩', title:'', name: '', post: '' ,display:'contents-other-session'},
            { time: '16:55-17:15',session:'Session5-2', title:'DevFestWomenスポンサー企業に聞く〜ダイバーシティに取り組む企業のパネルディスカッション〜', name: '', post: '',display:'contents'},
      ],
      workshop: [
            { time: '13:20-14:40',session:'Workshop1', title:'初めてのGoogleアシスタント向けアクションの開発', name: '講師：田中 洋一郎', post: 'Google Developers Expert (Assistant, Web Technology)', display:'contents contents-workshop1'},
            { time: '14:40-14:50',session:'休憩', title:'', name: '', post: '', display:'contents-other-session'},
            { time: '14:50-16:10',session:'Workshop2', title:'Google Colaboratory で Python をはじめてみよう', name: '講師：中村 真由美', post: '', display:'contents contents-workshop2'},
            { time: '16:10-16:20',session:'休憩', title:'', name: '', post: '', display:'contents-other-session'},
            { time: '16:20-17:20',session:'Workshop3', title:'Kotlin Koans で Kotlin にチャレンジ！', name: '講師：あんざいゆき', post: '株式会社ウフィカ代表取締役', display:'contents contents-workshop3'},
      ],
      workshoptime: [
        { start: '13:20',display:'session-time workshop-time1'},
        { start: '14:40',display:''},
        { start: '14:50',display:'session-time workshop-time2'},
        { start: '16:10',display:''},
        { start: '16:20',display:'session-time workshop-time3'},
      ],
      dialog: false
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
  .hall-title {
    width: 240px;
    height: 40px;
    margin-bottom: 10px;
    display: table;
    text-align: center;

    @media only screen and (max-width: 960px), print {
      width: 95vw;
    }
    @media only screen and (min-width: 1264px), print {
      width: 270px;
    }
    .text {
        font-family: Avenir;
        font-size: 16px;
        font-weight: 900;
        color: #ffdedb;
        letter-spacing: 1.84px;
        display: table-cell;
        vertical-align: middle;
    }
  }

  .contents-none {
    visibility: hidden;
  }

  .contents-other-session, .contents, .contents-ask-the-speaker {
    margin-bottom: 10px;
    width: 240px;

    border-radius: 10px;
    background-color: #ffffff;
    padding: 15px;

    @media only screen and (max-width: 960px), print {
      width: 95vw;
    }
    @media only screen and (min-width: 1264px), print {
      width: 270px;
    }
    .session-name {
      font-family: HiraginoSans-W6;

      line-height: 1.39;
      text-align: center;
    }

    .session-title {
      min-height: 50px;
    }

    .session-title,
    .person {
      font-family: HiraginoSans-W7;
      font-size: 14px;
      line-height: 1.71;
      color: #100e17;
    }
  }

  .contents-other-session {
    height: 100px;
    @media only screen and (max-width: 960px), print {
      height: 50px;
    }
    .session-name {
      font-size: 18px;
    }
  }

  .contents {
    height: 290px;
    @media only screen and (max-width: 960px), print {
      height: 190px;
    }
    .session-name {
      font-size: 14px;
    }
  }
  .contents-ask-the-speaker {
    height: 290px;
    @media only screen and (max-width: 960px), print {
      height: 50px;
    }
    .session-name {
      font-size: 18px;
    }
  }

  .time-sp {
    display: none;
    @media only screen and (max-width: 960px), print {
      display: block;
      margin-bottom: 5px;
      font-family: Avenir;
      font-size: 18px;
      font-weight: 900;
      letter-spacing: 2.07px;
      color: #ffffff;
    }
  }

  .time-pc {
    display: none;
    @media only screen and (min-width: 960px), print {
      display: block;
      font-size: 0.9em;
    }
  }

  .hall-a {
    @media only screen and (max-width: 960px), print {
      margin: 0 auto 10px auto;
    }

    .hall-title {
      background-color: #ff6f61;
    }
    .session-name, .time-pc {
      color: #ff6f61;
    }
  }

  .hall-b {
    @media only screen and (max-width: 960px), print {
      margin: 0 auto 10px auto;
    }
    .hall-title {
      background-color: #db2a7b;
      margin-bottom: 1350px;

      @media only screen and (max-width: 960px), print {
        margin-bottom: 10px;
      }
    }
    .session-name, .time-pc {
      color: #ea4770;
    }
  }

  .workshop {
    @media only screen and (max-width: 960px), print {
      margin: 0 auto 10px auto;
    }
    .hall-title {
      background-color: #ff6f61;
      margin-bottom: 1000px;

      @media only screen and (max-width: 960px), print {
        margin-bottom: 10px;
      }
    }
    .session-name, .time-pc {
      color: #ff6f61;
    }
  }

  .timeline {
    .time-section {
      display: inline-block;
      position: relative;

    }
    @media only screen and (max-width: 960px), print {
      display:none;
    }
  }
  .timeline-session {
    margin-top:70px;
    padding: 0 0 0 24px;
    margin-right:-5px;
  }
  .timeline-workshop {
    margin-top: 1060px;
    padding: 0 0 0 24px;
    margin-right:-5px;
  }

  .start-time {
    font-size: 16px;
    height: 109px;
    line-height: 0;
    color: #fff;
    list-style: none;

    ::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      width: 2px;
      margin: auto;
    }
    ::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      width: 2px;
      height: 95px;
      margin: auto;
      background-color: #fff;
    }
  }

  .session-time {
    height: 300px;
    ::after{
      height: 175px;
    }
  }
  .start-time,
  .hall-a,
  .hall-b,
  .workshop {
    padding: 2%;
  }

  .contents-workshop1 {
    height: 640px;

    @media only screen and (max-width: 960px), print {
      height: 190px;
    }
  }

  .contents-workshop2 {
    height: 760px;

    @media only screen and (max-width: 960px), print {
      height: 190px;
    }
  }

  .contents-workshop3 {
    height: 750px;

    @media only screen and (max-width: 960px), print {
      height: 190px;
    }
  }

  .workshop-time1 {
    height: 645px;
  }

  .workshop-time2 {
    height: 775px;
  }

  .workshop-time3 {
    height: 755px;
  }

  @media only screen and (min-width: 960px), print {
    .flexbox {
      display: -webkit-flex;
      display: flex;
      }
    .hall-a, .hall-b, .workshop {
      -webkit-flex: 1;
      flex: 1;
    }
  }
  .session-container {
    display: inline-block;
    width: 100%;
  }
</style>
