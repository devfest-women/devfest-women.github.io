<template>
  <div>
    <v-container class="section-container">
    <v-row align="center" justify="center">
      <v-col lg="8">
        <TitleGradient text="タイムスケジュール"></TitleGradient>
          <div class="flexbox">
            <div class="d-none d-sm-flex">
              <ul class="timeline time-section">
                <li class="start-time" v-for="item in time" :key="item.time"  v-bind:class="item.display">
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
                  <p class="session-name">{{item.session}}</p>
                  <!-- <p class="title">{{item.title}}</p> -->
                  <p class="person">{{item.post}}<br>{{item.name}}</p>
                </div>
              </div>
            </div>
            <div class="hall-b">
              <div class="hall-title"><p class="text">HallB</p></div>
              <div class="session" @click.stop="dialog = true" v-for="item in hallb" :key="item.name">
                <p class="time">{{item.time}}</p>
                <div v-bind:class="item.display">
                  <p class="session-name">{{item.session}}</p>
                  <!-- <p class="title">{{item.title}}</p> -->
                  <p class="person">{{item.post}}<br>{{item.name}}</p>
                </div>
              </div>
            </div>
            <div class="workshop">
              <div class="hall-title"><p class="text">Workshop</p></div>
              <div class="session" @click.stop="dialog = true" v-for="item in workshop" :key="item.name">
                <p class="time">{{item.time}}</p>
                <div class="contents">
                  <p class="session-name">{{item.session}}</p>
                  <p class="title">{{item.title}}</p>
                  <p class="person">{{item.post}}<br>{{item.name}}</p>
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
            { start: '11:45',display:'session-time'},
            { start: '12:30',display:''},
            { start: '14:00',display:''},
            { start: '14:20',display:'session-time'},
            { start: '14:55',display:'session-time'},
            { start: '15:25',display:''},
            { start: '15:40',display:'session-time'},
            { start: '16:15',display:'session-time'},
            { start: '16:50',display:'session-time'},
            { start: '17:20',display:''},
        ],        
        halla: [
            { time: '10:00-10:30',session:'受付', title:'', name: '', post: '',display:'contents-other-session'},
            { time: '10:30-10:45',session:'オープンニング', title:'', name: '', post: '' ,display:'contents-other-session'},
            { time: '10:50-11:35' ,session:'Keynote1', title:'TBD', name: '岩尾 エマ はるか', post: 'Developer Advocate',display: 'contents' },
            { time: '11:45-12:30',session:'Keynote2', title:'TBD' , name: '戸倉彩', post: 'IBM Sr. Developer Advocate',display: 'contents' },
            { time: '12:30-14:00',session:'ランチ懇親会', title:'パネルディスカッション' , name: '', post: '',display: 'contents-other-session' },
            { time: '14:00-14:20',session:'休憩', title:'', name: '', post: '',display:'contents-other-session' },
            { time: '14:20-14:50',session:'session1-1',title:'TBD', name: '福田恵里', post: 'SHE株式会社 Co-founder/CCO' ,display:'contents'},
            { time: '14:55-15:25',session:'session2-1', title:'TBD' ,name: '安田クリスチーナ',  post: 'InternetBar.org 理事 (Forbes 30Under30)' ,display:'contents'},
            { time: '15:25-15:40',session:'休憩', title:'', name: '', post: '' ,display:'contents-other-session'},
            { time: '15:40-16:10',session:'session3-1',title:'TBD', name: '鳥井雪', post: '株式会社万葉のプログラマー' ,display:'contents'},
            { time: '16:15-16:45',session:'session4-1',title:'スポンサーセッション', name: 'TBD', post: '',display:'contents' },
            { time: '16:50-17:20',session:'session5-1',title:'TBD', name: '中村寛子', post: 'MASHING UPプロデューサー' ,display:'contents'},
            { session:'クロージング', time:'17:20-17:30', title:'', name: '', post: '' ,display:'contents-other-session'}
      ],
      hallb: [
            { time: '14:20-14:50',session:'session1-2', title:'TBD', name: 'TBD', post: '',display:'contents'},
            { time: '14:55-15:25',session:'session2-2', title:'TBD', name: '清水淳子', post: 'デザインリサーチャー/グラフィックレコーダー', display:'contents' },
            { time: '15:25-15:40',session:'休憩', title:'', name: '', post: '' ,display:'contents-other-session'},
            { time: '15:40-16:10',session:'session3-2', title:'TBD', name: '千代田まどか (ちょまど)', post: 'Microsoft UPプロデューサー' ,display:'contents'},
            { time: '16:15-16:45',session:'session4-2', title:'スポンサーセッション', name: 'TBD', post: '' ,display:'contents'},
            { time: '16:50-17:20',session:'session5-2', title:'TBD', name: 'Kinuko Yasuda (安田絹子)', post: 'ソフトウェア・エンジニア／エンジニアリングマネジャ',display:'contents'}
      ],
      workshop: [
            { time: '13:00-14:20',session:'Workshop1', title:'Actions on Google', name: '講師：田中 洋一郎', post: 'Google Developers Expert (Assistant, Web Technology)'},
            { time: '14:20-14:30',session:'休憩', title:'', name: '', post: '' },
            { time: '14:30-15:50',session:'Workshop2', title:'Python', name: '講師：中村 真由美', post: ''},
            { time: '15:50-16:00',session:'休憩', title:'', name: '', post: '' },
            { time: '16:00-17:00',session:'Workshop3', title:'Android', name: '講師：あんざいゆき', post: '' },
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
    width: 380px;
    height: 40px;
    margin-bottom: 10px;
    display: table;
    text-align: center;

    @media only screen and (max-width: 900px), print {
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
    width: 380px;
    height: 50px;
    border-radius: 10px;
    background-color: #ffffff;
    padding: 15px;

    @media only screen and (max-width: 900px), print {
      width: 95vw;
    }
  .session-name{
    font-family: HiraginoSans-W6;
    font-size: 18px;
    line-height: 1.39;
    text-align: center;
    }
    .title,.person {
    font-family: HiraginoSans-W7;
    font-size: 14px;
    line-height: 1.71;
    color: #100e17;    
    }

  }

  .contents {
    margin-bottom: 10px;
    width: 380px;
    border-radius: 10px;
    background-color: #ffffff;
    padding: 15px;

    @media only screen and (max-width: 900px), print {
      width: 95vw;
    }
  .session-name{
    font-family: HiraginoSans-W6;
    font-size: 18px;
    line-height: 1.39;
    text-align: center;
    }
    .title,.person {
    font-family: HiraginoSans-W7;
    font-size: 14px;
    line-height: 1.71;
    color: #100e17;    
    }
  }
  .time {
    display: none;
    @media only screen and (max-width: 900px), print {
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
  @media only screen and (max-width: 900px), print {
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
  @media only screen and (max-width: 900px), print {
    margin: 0 auto 10px auto;
  }
  .hall-title {
    background-color: #db2a7b;
    margin-bottom: 537px;
    @media only screen and (max-width: 900px), print {
      margin-bottom: 10px;
    }   
  }
    .session-name{
      color: #ea4770;
    }
  }

.workshop {

  @media only screen and (min-width: 900px), print {
    display: none;
  }
  
  margin: 0 auto 10px auto;

  .hall-title {
    background-color: #ff6f61;
  }
  .contents {
    .session-name{
    color: #ff6f61;
    }
  }
}

.timeline{
  margin-top:80px;
  margin-right:-5px;

  .time-section {
    display: inline-block;
    position: relative;

  }
  @media only screen and (max-width: 900px), print {
  display:none;
  }
}

.start-time {
  font-size: 16px;
  height: 60px;
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
    height: 142px;
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

@media only screen and (min-width: 900px), print {
  .flexbox {
    display: -webkit-flex;
    display: flex;
    }
  .hall-a {
    -webkit-flex: 1;
    flex: 1;
  }
  .hall-b {
    -webkit-flex: 1;
    flex: 1;
  }
}
</style>