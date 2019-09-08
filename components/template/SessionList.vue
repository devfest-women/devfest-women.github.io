<template>
  <div>
    <v-container class="section-container">
    <v-row align="center" justify="center">
      <v-col lg="6">
        <TitleGradient text="タイムスケジュール"></TitleGradient>
          <div class="flexbox">
            <div class="timelist .d-sm-flex .d-md-flex">
              10:30
            </div>
            <div class="hall-a">
              <div class="hall-title"><p class="text">HallA</p></div>
              <div class="session" @click.stop="dialog = true" v-for="item in halla" :key="item.name">
                <p class="time d-flex d-sm-none">{{item.time}}</p>
                <div class="contents">
                  <p class="session-name">{{item.session}}</p>
                  <p class="title">{{item.title}}</p>
                  <p class="person">{{item.post}}<br>{{item.name}}</p>
                </div>
              </div>
            </div>
            <div class="hall-b">
              <div class="hall-title"><p class="text">HallB</p></div>
              <div class="session" @click.stop="dialog = true" v-for="item in hallb" :key="item.name">
                <p class="time d-flex d-sm-none">{{item.time}}</p>
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
        halla: [
            { time: '10:30-10:45',session:'オープンニング', title:'', name: '', post: '' },
            { time: '10:50-11:35' ,session:'Keynote1', title:'TBD', name: '岩尾 エマ はるか', post: 'Developer Advocate' },
            { time: '11:45-12:30',session:'Keynote2', title:'TBD' , name: '戸倉彩', post: 'IBM Sr. Developer Advocate'},
            { time: '12:30-14:00',session:'ランチ懇親会', title:'パネルディスカッション' , name: '', post: ''},
            { time: '14:20-14:50',session:'session1-1',title:'TBD', name: '福田恵里', post: 'SHE株式会社 Co-founder/CCO' },
            { time: '14:55-15:25',session:'session2-1', title:'TBD' ,name: '安田クリスチーナ',  post: 'InternetBar.org 理事 (Forbes 30Under30)' },
            { time: '15:40-16:10',session:'session3-1',title:'TBD', name: '鳥井雪', post: '株式会社万葉のプログラマー' },
            { time: '16:15-16:45',session:'session4-1',title:'スポンサーセッション', name: '', post: 'TBD' },
            { time: '16:50-17:20',session:'session5-1',title:'TBD', name: '千代田まどか (ちょまど)', post: 'Microsoft' },
            { session:'クロージング', time:'17:20-17:30', title:'', name: '', post: '' }
      ],
      hallb: [
            { time: '14:20-14:50',session:'session1-2', title:'TBD', name: 'TBD', post: 'TBD' },
            { time: '14:55-15:25',session:'session2-2', title:'TBD', name: '清水淳子', post: 'デザインリサーチャー / グラフィックレコーダー' },
            { time: '15:40-16:10',session:'session3-2', title:'TBD', name: '中村ひろこ', post: '' },
            { time: '16:15-16:45',session:'session4-2', title:'スポンサーセッション', name: '', post: 'TBD' },
            { time: '16:50-17:20',session:'session5-2', title:'TBD', name: 'Kinuko Yasuda (安田絹子)', post: 'ソフトウェア・エンジニア／エンジニアリングマネジャ' }
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
    width: 374px;
    height: 40px;
    margin-bottom: 10px;
    display: table;
    text-align: center;

    @media only screen and (max-width: 800px), print {
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
  .contents {
    margin-bottom: 10px;
    width: 374px;
    border-radius: 10px;
    background-color: #ffffff;
    padding: 15px;

    @media only screen and (max-width: 800px), print {
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
    font-family: Avenir;
    font-size: 18px;
    font-weight: 900;
    letter-spacing: 2.07px;
    color: #ffffff;

  }

.hall-a {
  @media only screen and (max-width: 800px), print {
    margin: 0 auto 10px auto;
  }

  .hall-title {
    background-color: #ff6f61;
  }
  .contents {
    .session-name{
    color: #ff6f61;
    }
  }
}

.hall-b {
  @media only screen and (max-width: 800px), print {
    margin: 0 auto 10px auto;
  }
  .hall-title {
    background-color: #db2a7b;
  }
    .session-name{
      color: #ea4770;
    }
  }

.timelist {
  position: relative;
  display: inline-block;
  font-size: 16px;
  height: 100px;
  line-height: 0;
  color: #fff;

  @media only screen and (max-width: 800px), print {
    display:none;
  }
 
}
.timelist::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 2px;
  margin: auto;
  // background-color: #000;
}

.timelist::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 2px;
  height: 80px;
  margin: auto;
  background-color: #fff;
}
.timelist,
.hall-a,
.hall-b {
  padding: 2%;
  border-radius: 10px
}

@media only screen and (min-width: 800px), print {
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

