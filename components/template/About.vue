<template>
  <div class="bg">
    <v-container class="section-container d-flex flex-column justify-center align-center">
      <v-row justify="center">
        <v-col lg="6">
          <TitleBlack text="開催概要"></TitleBlack>
          <div class="content">
            DevFest Womenは、Diversity（多様性）とInclusion（仲間はずれにしない）ことを強調したテクノロジーカンファレンスです。本カンファレンスの登壇者は女性アイデンティティの方に限定しています。昨今のカンファレンスでは登壇者の多くが男性ですが、IT業界で活躍している女性やLGBTQの方も数多く存在しています。
            DevFest Womenでは、そんな彼女たちにスポットライトを当てます。そして彼女たちの知的好奇心をくすぐる発表を通して、次の日からの自信につなげられるようなカンファレンスを目指しています。
          </div>
          <!-- TODO:参加申し込みページができたら差し替え -->
          <div class="d-flex justify-center">
            <Button text="参加申し込み" link="#"></Button>
          </div>

          <v-container class="conference-info">
            <v-row v-for="item in items">
              <v-col sm="2" class="info-title">
                {{ item.title }}
              </v-col>
              <v-col v-html="item.description"　class="info-content">
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
          { title: '日時', description: '2019年10月14日（月・祝日)<br>10:30開始 （10:00受付開始）<br>17:00 終了予定' },
          { title: '対象', description: 'IT業界や関連する職種で働いている人<br>IT業界で働くことを目指している学生' },
          { title: '参加費', description: '一般 3,000円<br>学生 無料（先着100名）' },
          { title: '主催', description: '<img src="' + require("~/assets/img/wtm_logo_white.svg") + '"  alt="Women Techmakers Tokyo" title="Women Techmakers Tokyo">' },
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
  }
  .info-content{
    font-family: HiraginoSans-W4;
    font-size: 16px;
    line-height: 1.56;
    img{
      width: 100%;
    }
  }
  .conference-info{
    margin: 48px 0px 0px 0px;
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

