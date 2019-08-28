<template>
  <div class="bg">
    <v-container class="section-container d-flex flex-column justify-center align-center" xs6>
      <v-row justify="center" class="speaker_row">
        <v-col lg="6">
          <TitleBlack text="登壇者"></TitleBlack>
          <div class="content">
              <div class="speaker-box">
                  <div class="item">
                        <a href="#"><img src="http://marunuki.tools-base.biz/wp-content/uploads/2014/10/marunuki036.png"
                                                                         alt="test"
                                                                         title="test"></a>
                        <p class="name">foo bar</p>
                        <p class="account">@foobar</p>
                  </div>
                <div class="item">
                        <a href="#"><img src="http://marunuki.tools-base.biz/wp-content/uploads/2014/10/marunuki036.png"
                                                                         alt="test"
                                                                         title="test"></a>
                        <p class="name">foo bar</p>
                        <p class="account">@foobar</p>
                  </div>
                  <div class="item">
                        <a href="#"><img src="http://marunuki.tools-base.biz/wp-content/uploads/2014/10/marunuki036.png"
                                                                         alt="test"
                                                                         title="test"></a>
                        <p class="name">foo bar</p>
                        <p class="account">@foobar</p>
                  </div>
                  <div class="item">
                        <a href="#"><img src="http://marunuki.tools-base.biz/wp-content/uploads/2014/10/marunuki036.png"
                                                                         alt="test"
                                                                         title="test"></a>
                        <p class="name">foo bar</p>
                        <p class="account">@foobar</p>
                  </div>
              </div>
              <div class="speaker-box">
                  <div class="item">
                        <a href="#"><img src="http://marunuki.tools-base.biz/wp-content/uploads/2014/10/marunuki036.png"
                                                                         alt="test"
                                                                         title="test"></a>
                        <p class="name">foo bar</p>
                        <p class="account">@foobar</p>
                  </div>
                  <div class="item">
                        <a href="#"><img src="http://marunuki.tools-base.biz/wp-content/uploads/2014/10/marunuki036.png"
                                                                         alt="test"
                                                                         title="test"></a>
                        <p class="name">foo bar</p>
                        <p class="account">@foobar</p>
                  </div>
                  <div class="item">
                        <a href="#"><img src="http://marunuki.tools-base.biz/wp-content/uploads/2014/10/marunuki036.png"
                                                                         alt="test"
                                                                         title="test"></a>
                        <p class="name">foo bar</p>
                        <p class="account">@foobar</p>
                  </div>
                  <div class="item">
                        <a href="#"><img src="http://marunuki.tools-base.biz/wp-content/uploads/2014/10/marunuki036.png"
                                                                         alt="test"
                                                                         title="test"></a>
                        <p class="name">foo bar</p>
                        <p class="account">@foobar</p>
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
      TitleBlack,
    },
    data() {
      return {
        name: '登壇者',
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
  }

  .speaker-box .item{
    padding: 10px;
    display: inline-block;
    text-align: center;
  }

  .speaker-box .item img {
      height: 200px;
  }
</style>

