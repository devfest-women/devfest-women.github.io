<template>
  <div>
    <v-container class="section-container">
    <v-row align="center" justify="center">
      <v-col lg="10">
        <TitleGradient text="タイムテーブル"></TitleGradient>
          <div class="flexbox">
            <div class="d-none d-sm-flex">
              <ul class="timeline timeline-left time-section">
                <li class="start-time" v-for="item in time" :key="item.time" v-bind:class="item.display">
                  {{item.start}}
                </li>
                <li class="start-time">17:30</li>
              </ul>
            </div>
            <div class="hall-a">
              <div class="hall-title"><p class="text">HallA</p></div>
              <div class="session" @click.stop="dialog = true" v-for="item in halla" :key="item.name">
                <p class="time">{{item.time}}</p>
                <div v-bind:class="item.display">
                    <div class="session-container">
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
              <div class="session" @click.stop="dialog = true" v-for="item in hallb" :key="item.name">
                <p class="time">{{item.time}}</p>
                <div v-bind:class="item.display">
                  <p class="session-name">{{item.session}}</p>
                  <!-- #TODO セッションタイトルのcss直す -->
                  <p class="session-title">{{item.title}}</p>
                  <p class="person">{{item.post}}<br>{{item.name}}</p>
                </div>
              </div>
            </div>
            <div class="workshop">
              <div class="hall-title"><p class="text">Workshop</p></div>
              <div class="session" @click.stop="dialog = true" v-for="item in workshop" :key="item.name">
                <p class="time">{{item.time}}</p>
                <div v-bind:class="item.display">
                  <p class="session-name">{{item.session}}</p>
                  <!-- #TODO セッションタイトルのcss直す -->
                  <p class="session-title">{{item.title}}</p>
                  <p class="person">{{item.post}}<br>{{item.name}}</p>
                </div>
              </div>
            </div>
            <div class="d-none d-sm-flex">
              <ul class="timeline timeline-right time-section">
                <li class="start-time" v-for="item in workshoptime" :key="item.time" v-bind:class="item.display">
                  {{item.start}}
                </li>
                <li class="start-time">17:20</li>
              </ul>
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
            { start: '10:40',display:'session-time'},
            { start: '11:30',display:'session-time'},
            { start: '12:20',display:''},
            { start: '13:20',display:'session-time'},
            { start: '13:50',display:''},
            { start: '14:10',display:'session-time'},
            { start: '14:45',display:'session-time'},
            { start: '15:15',display:''},
            { start: '15:30',display:'session-time'},
            { start: '16:05',display:'session-time'},
            { start: '16:40',display:'session-time'},
            { start: '17:10',display:''},
            { start: '17:20',display:''},
        ],
        halla: [
            { time: '10:00-10:30',session:'受付', title:'', name: '', post: '',display:'contents-other-session'},
            { time: '10:30-10:40',session:'オープニング', title:'', name: '', post: '' ,display:'contents-other-session'},
            { time: '10:40-11:25',session:'Keynote1', title:'調整中', name: '岩尾 エマ はるか', post: 'Google Developer Advocate',display: 'contents' },
            { time: '11:30-12:15',session:'Keynote2', title:'私の行動宣言 #BeEqual' , name: '戸倉彩', post: 'IBM Sr. Developer Advocate',display: 'contents' },
            { time: '12:20-13:20',session:'ランチ懇親会', title:'' , name: '', post: '',display: 'contents-other-session' },
            { time: '13:20-13:50',session:'特別ゲスト', title:'調整中' , name: 'ハヤカワ五味', post: '',display: 'contents' },
            { time: '13:50-14:10',session:'休憩', title:'', name: '', post: '',display:'contents-other-session' },
            { time: '14:10-14:40',session:'session1-1',title:'起業も結婚も出産も。女性のライフイベントをポジティブな力に変えながら、自分らしく働く方法', name: '福田恵里', post: 'SHE株式会社 Co-founder/CCO' ,display:'contents'},
            { time: '14:45-15:15',session:'session2-1', title:'調整中' ,name: '安田クリスチーナ',  post: 'InternetBar.org 理事 (Forbes 30Under30)' ,display:'contents'},
            { time: '15:15-15:30',session:'休憩', title:'', name: '', post: '' ,display:'contents-other-session'},
            { time: '15:30-16:00',session:'session3-1',title:'「わたし」をふくむと世界はひろがる〜ITの世界であなたらしく生きる〜', name: '鳥井雪', post: '株式会社万葉 プログラマー' ,display:'contents'},
            { time: '16:05-16:35',session:'session4-1',title:'調整中', name: '中村寛子', post: 'MASHING UP プロデューサー',display:'contents' },
            { time: '16:40-17:10',session:'session5-1',title:'調整中', name: 'クロエ', post: '' ,display:'contents'},
            { time: '17:10-17:20',session:'休憩',title:'', name: '', post: '' ,display:'contents-other-session'},
            { time: '17:20-17:30', session:'クロージング', title:'', name: '', post: '' ,display:'contents-other-session'},
      ],
      hallb: [
            { time: '14:10-14:40',session:'session1-2', title:'グラフィックレコーディングが仕事になるまでの舞台裏 ー視覚表現を言語として使う世界を目指してー', name: '清水淳子', post: 'デザインリサーチャー/グラフィックレコーダー', display:'contents' },
            { time: '14:45-15:15',session:'session2-2', title:'オタクな私の拡がる世界 　〜BL同人作家から IT エンジニア、Microsoft のインターナショナルチームに〜', name: '千代田まどか (ちょまど)', post: 'Microsoft' ,display:'contents'},
            { time: '15:15-15:30',session:'休憩', title:'', name: '', post: '' ,display:'contents-other-session'},
            { time: '15:30-16:00',session:'session3-2', title:'よそはよそ、うちはうち 〜自分のものさしで、好きにエンジニアやる〜', name: '鈴木 順子', post: 'GitHub / Enterprise Support Engineer' ,display:'contents'},
            { time: '16:05-16:35',session:'session4-2', title:'私のエンジニアとしての10年、そしてダイバーシティのこととか', name: 'Kinuko Yasuda (安田絹子)', post: 'ソフトウェア・エンジニア／エンジニアリングマネジャ',display:'contents'},
            { time: '16:40-17:10',session:'Ask the Speaker', title:'', name: '', post: '',display:'contents-other-session'},
      ],
      workshop: [
            { time: '13:20-14:40',session:'Workshop1', title:'初めてのGoogleアシスタント向けアクションの開発', name: '講師：田中 洋一郎', post: 'Google Developers Expert (Assistant, Web Technology)', display:'contents contents80min'},
            { time: '14:40-14:50',session:'休憩', title:'', name: '', post: '', display:'contents-other-session'},
            { time: '14:50-16:10',session:'Workshop2', title:'Google Colaboratory で Python をはじめてみよう', name: '講師：中村 真由美', post: '', display:'contents contents80min'},
            { time: '16:10-16:20',session:'休憩', title:'', name: '', post: '', display:'contents-other-session'},
            { time: '16:20-17:20',session:'Workshop3', title:'Kotlin Koans で Kotlin にチャレンジ！', name: '講師：あんざいゆき', post: '株式会社ウフィカ代表取締役', display:'contents contents60min'},
      ],
      workshoptime: [
        { start: '13:20',display:'session-time session-time-80min'},
        { start: '14:40',display:''},
        { start: '14:50',display:'session-time session-time-80min'},
        { start: '16:10',display:''},
        { start: '16:20',display:'session-time session-time-60min'},
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
  .contents-other-session {
    margin-bottom: 10px;
    width: 240px;
    height: 50px;
    border-radius: 10px;
    background-color: #ffffff;
    padding: 15px;

    @media only screen and (max-width: 960px), print {
      width: 95vw;
    }
    .session-name {
      font-family: HiraginoSans-W6;
      font-size: 18px;
      line-height: 1.39;
      text-align: center;
    }

    .session-title{
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
  .contents {
    margin-bottom: 10px;
    width: 240px;
    height: 240px;
    border-radius: 10px;
    background-color: #ffffff;
    padding: 15px;

    @media only screen and (max-width: 960px), print {
      width: 95vw;
      height: 190px;
    }
    .session-name{
      font-family: HiraginoSans-W6;
      font-size: 14px;
      line-height: 1.39;
      text-align: center;
    }

    .session-title{
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

  .contents-ask-the-speaker {
    margin-bottom: 10px;
    width: 240px;
    height: 240px;
    border-radius: 10px;
    background-color: #ffffff;
    padding: 15px;

    @media only screen and (max-width: 960px), print {
      width: 95vw;
      height: 50px;
    }
    .session-name{
    font-family: HiraginoSans-W6;
    font-size: 18px;
    line-height: 1.39;
    text-align: center;
    }

    .session-title{
      height: 80px;
    }
    .session-title,.person {
      font-family: HiraginoSans-W7;
      font-size: 14px;
      line-height: 1.71;
      color: #100e17;
    }
  }
  .time {
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

  .hall-a {
    @media only screen and (max-width: 960px), print {
      margin: 0 auto 10px auto;
    }

    .hall-title {
      background-color: #ff6f61;
    }
    .session-name{
      color: #ff6f61;
    }
  }

  .hall-b {
    @media only screen and (max-width: 960px), print {
      margin: 0 auto 10px auto;
    }
    .hall-title {
      background-color: #db2a7b;
      margin-bottom: 1000px;

      @media only screen and (max-width: 960px), print {
        margin-bottom: 10px;
      }
    }
    .session-name{
      color: #ea4770;
    }
  }

  .workshop {
    @media only screen and (max-width: 960px), print {
      margin: 0 auto 10px auto;
    }
    .hall-title {
      background-color: #ff6f61;
      margin-bottom: 690px;

      @media only screen and (max-width: 960px), print {
        margin-bottom: 10px;
      }
    }
    .session-name{
      color: #ff6f61;
    }
  }

  .timeline{
    .time-section {
      display: inline-block;
      position: relative;

    }
    @media only screen and (max-width: 960px), print {
      display:none;
    }
  }
  .timeline-left {
    margin-top:70px;
    padding: 0 0 0 24px;
    margin-right:-5px;
  }
  .timeline-right {
    margin-top: 740px;
    padding: 0 24px 0 0;
    margin-left: -15px;
  }

  .start-time {
    font-size: 16px;
    height: 57px;
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
      height: 250px;
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

  .contents80min {
    height: 530px;

    @media only screen and (max-width: 960px), print {
      height: 190px;
    }
  }
  .contents60min {
    height: 470px;

    @media only screen and (max-width: 960px), print {
      height: 190px;
    }
  }

  .session-time-80min {
    height: 545px;
  }

  .session-time-60min {
    height: 465px;
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
