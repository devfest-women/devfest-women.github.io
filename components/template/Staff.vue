<template>
  <div class="bg">
    <v-container class="section-container d-flex justify-center align-center" >
      <v-row justify="center" class="staff_row">
        <v-col lg="6">
          <TitleBlack text="運営スタッフ"></TitleBlack>
          <v-container class="content">
            <v-row class="staff-box d-flex">
              <v-col xs="2" sm="2" class="item" v-for="item in items" :key="item.name">
                <a :href=item.account_link target="_blank" class="d-flex justify-center">
                  <div class="staff-item-box d-flex flex-column justify-center align-center">
                    <img :src=item.img_src :alt=item.name >
                    <!--<p class="name">{{item.name}}</p> -->
                    <p class="account">{{item.account}}</p>
                  </div>
                </a>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import TitleBlack from '~/components/module/TitleBlack.vue'

  export default {
    components: {
      TitleBlack
    },
    data() {
      return {
        items: [
          { name: 'しょこ', account: '@_okohs', account_link: 'https://twitter.com/_okohs', img_src: require("~/assets/img/staff/_okohs.png") },
          { name: 'りほ', account: '@rllllho', account_link: 'https://twitter.com/rllllho', img_src: require("~/assets/img/staff/rllllho.png") },
          { name: 'yanzm', account: '@yanzm', account_link: 'https://twitter.com/yanzm', img_src: require("~/assets/img/staff/yanzm.png") },
          { name: 'Ivy', account: '@ivy_sayaka', account_link: 'https://twitter.com/ivy_sayaka', img_src: require("~/assets/img/staff/ivy_sayaka.png") },
          { name: 'あいかちゃん', account: '@aicayamazaki', account_link: 'https://twitter.com/aicayamazaki', img_src: require("~/assets/img/staff/aicayamazaki.png") },
          { name: 'しょーこ', account: '@satoshoco', account_link: 'https://twitter.com/satoshoco', img_src: require("~/assets/img/staff/satoshoco.png") },
          { name: 'まっつん', account: '@mtmn0784', account_link: 'https://twitter.com/mtmn07384', img_src: require("~/assets/img/staff/mtmn0784.png") },
          { name: 'まいまい', account: '@maimai', account_link: 'https://twitter.com/maimai628', img_src: require("~/assets/img/staff/maimai800.png") },
        ],
      }
    }
  }
</script>

<style lang="scss" scoped>
  .section-container{
    padding: 45px 0px 90px 0;
    color: #ffffff;
    @media (max-width:960px) {
      padding: 30px 20px;
    }
  }
  .staff_row{
    width: 100%;
  }

  .content{
    font-family: HiraginoSans-W3;
    font-size: 16px;
    line-height: 1.56;
  }

  .staff-box {
    .item{
      padding: 10px 0px 30px 0;
      display: inline-block;
      margin: 0px 10px;
      a{
        text-decoration: none;
        max-width: 100%;
      }
      .name{
        font-family: HiraginoSans-W7;
        font-size: 16px;
        line-height: 1.5;
        color: #ffffff;
      }
      .account{
        margin-top: 5px;
        font-family: GillSans;
        font-size: 16px;
        color: #7a7a8c;
      }
      .post{
        font-family: HiraginoSans-W4;
        font-size: 14px;
        line-height: 1.43;
        color: #ffffff;
      }
      p{
        margin-bottom: 4px;
      }
    }

    .item img {
      max-width: 92px;
      border-radius: 50%;
    }
  }
</style>

