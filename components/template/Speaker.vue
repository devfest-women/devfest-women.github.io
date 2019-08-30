<template>
  <div class="bg">
    <v-container class="section-container d-flex flex-column justify-center align-center" xs6>
      <v-row justify="center" class="speaker_row">
        <v-col lg="6">
          <TitleBlack text="登壇者"></TitleBlack>
          <div class="content">
              <div class="speaker-box">
                  <div class="item" v-for="item in items" :key="item.name">
                        <a href="#"><img :src=item.img_src
                                         :alt=item.name
                        ></a>
                        <p class="name">{{item.name}}</p>
                        <!-- TODO: SNSへのリンクにする -->
                        <p class="account">{{item.account}}</p>
                  </div>
              </div>
          </div>
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
            { name: 'hoge', account: 'hoge', img_src: require("~/assets/img/speaker/emma.jpg") },
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
  .speaker_row{
    width: 100%;
  }

  .content{
    font-family: HiraginoSans-W3;
    font-size: 16px;
    line-height: 1.56;
  }

  .speaker-box {
      display: flex;
      .item{
          padding: 10px;
          display: inline-block;
          text-align: center;
      }

      .item img {
          height: 200px;
      }
  }
</style>

