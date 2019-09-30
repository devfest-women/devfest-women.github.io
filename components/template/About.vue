<template>
  <div class="bg">
    <v-container class="section-container d-flex flex-column justify-center align-center" xs6>
      <v-row justify="center" class="about_row">
        <v-col lg="6">
          <TitleBlack text="開催概要"></TitleBlack>
          <div class="content">
            DevFest Women Tokyoは、Diversity（多様性）とInclusion（認知と尊重）を強調したテクノロジーカンファレンスです。<br>
            本カンファレンスの登壇者は女性アイデンティティの方に限定しています。<br>
            DevFest Women Tokyoでは、IT業界で活躍している女性やLGBTQの方にスポットライトを当て、彼女たちの知的好奇心をそそる発表を通して、次の日からの自信につなげられるようなカンファレンスを目指しています。
          </div>
          <div class="d-flex justify-center">
            <Button
             text="参加申し込み"
             link="https://devfestwomen2019.peatix.com/view"
             buttonstyle="join"
            ></Button>
          </div>

          <v-container class="conference-info">
            <v-row class="conference-row" v-for="item in items" :key="item.title">
              <v-col sm="2" class="info-title">
                {{ item.title }}
              </v-col>
              <v-col v-html="item.description" class="info-content">
              </v-col>
            </v-row>
          </v-container>

          <div id="map" class="map"/>

          <script type="application/javascript">
            function initMap() {
              const latlng = new google.maps.LatLng(35.698700, 139.766438);
              const map = new google.maps.Map(document.getElementById('map'), {
                center: latlng,
                zoom: 16
              });
              const marker = new google.maps.Marker({
                position: latlng,
                map: map,
                title: '御茶ノ水ソラシティカンファレンスセンター'
              });
              marker.setMap(map);
            }
          </script>
          <!-- eslint-enable vue/html-indent -->

          <script
                  type="application/javascript"
                  :src=" `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&callback=initMap` "
                  async
                  defer
          />

          <p class="notice">
            <a
                    href="https://goo.gl/maps/dbuicaxHic1nTk438"
                    target="_blank"
                    rel="noopener"
            >
              Google マップを開く
            </a>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import TitleBlack from '~/components/module/TitleBlack.vue'
  import Button from '~/components/module/Button.vue'

  export default {
    components: {
      TitleBlack,
      Button
    },
    data() {
      return {
        name: '開催概要',
        googleMapsApiKey: 'AIzaSyAeVWtU00lTzsYyUv6XPLscA5KD1DJi0y4', //TODO: 環境変数で入れれるようにする
        item: 1,
        items: [
          { title: '日時', description: '2019年10月14日（月・祝日)<br>10:30開始 （10:00受付開始）<br>17:30 終了予定' },
          { title: '対象', description: 'IT業界や関連する職種で働いている人<br>IT業界で働くことを目指している学生<br>※性別不問です' },
          { title: '参加費', description: '一般 1,000円<br>学生 無料（先着100名）' },
          { title: '主催', description: '<img style="width: 330px"src="' + require("~/assets/img/wtm_logo_white.svg") + '"  alt="Women Techmakers Tokyo" title="Women Techmakers Tokyo">' },
          { title: '会場', description: '御茶ノ水ソラシティカンファレンスセンター<br>（東京都千代田区神田駿河台4丁目4-6）' },
        ],
      }
    }
  }
</script>

<style lang="scss" scoped>
  .section-container{
    padding: 45px 0px 90px 0px;
    color: #ffffff;
    @media (max-width:960px) {
      padding: 30px 20px;
    }
  }
  .about_row{
    width: 100%;
  }

  .content{
    font-family: HiraginoSans-W3;
    font-size: 16px;
    line-height: 1.56;
    margin: 0px 0px 30px 0px;
  }
  .info-title{
    font-family: HiraginoSans-W6;
    font-size: 20px;
    line-height: 1.25;
    @media (max-width:960px) {
      padding: 0px;
    }
  }
  .info-content{
    font-family: HiraginoSans-W4;
    font-size: 16px;
    line-height: 1.56;
    img{
      width: 100%;
    }
    @media (max-width:960px) {
      font-size: 14px;
      padding: 10px 0px 20px 0px;
    }
  }
  .conference-info {
    margin: 48px 0px 0px 0px;
  }
  .conference-row{
    @media (max-width:960px) {
        display: flex;
        flex-direction: column;
    }
  }
  .map{
    height: 360px;
    color: #100e17;
  }
  .notice{
    text-align: right;
    margin: 15px 0px 0px 0px;
      a{
        text-decoration: none;
        font-family: GillSans;
        font-size: 16px;
        color: #7a7a8c;
        text-align: right;
      }
  }
</style>

