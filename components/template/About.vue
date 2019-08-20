<template>
  <div class="bg">
    <v-container class="about-container d-flex flex-column justify-center align-center">
      <v-row justify="center">
        <v-col lg="6">
          <SessionTitle text="開催概要"></SessionTitle>
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
              <v-col lg="2" class="info-title">
                {{ item.title }}
              </v-col>
              <v-col class="info-description">
                {{ item.description }}
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>>
  </div>
</template>

<script>
  import SessionTitle from '~/components/module/SessionTitle.vue'
  import Button from '~/components/module/Button.vue'

  export default {
    components: {
      SessionTitle,
      Button
    },
    data() {
      return {
        name: '開催概要',
        item: 1,
        items: [
          { title: 'Real-Time', description: 'mdi-clock' },
          { title: 'Audience', description: 'mdi-account' },
          { title: 'Conversions', description: 'mdi-flag' },
        ],
      }
    }
  }
</script>

<style lang="scss" scoped>
  .about-container{
    padding: 45px 0px 45px 0px;
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
      margin: 0px 50px 0px 0px;
  }
  .conference-info{
    margin: 48px 0px 0px 0px;
  }
</style>

