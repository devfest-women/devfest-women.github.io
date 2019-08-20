<template>
  <div class="about">
    <div class="about-container">
      <div class="page-title">
        <h1 class="title">
            DevFest Womenとは
        </h1>
        <div class="line"></div>
      </div>
      <div class="content">
        DevFest WomenはIT業界において、ダイバーシティとインクルージョンに興味のある方のためのテクノロジーカンファレンスです。
        エンジニア、デザイナー、ディレクター、プロダクトマネージャーなど様々な職種の方にとって、自分のなりたい像がみつかったり、自分の知っていることやできることを増やして明日からの自信につなげるイベントを目指しています。
      </div>
      <div class="hashtag">
        <span class="tag">ハッシュタグ</span>
        <a href="https://twitter.com/search?q=%23DevFestWomen" class="link">#DevFestWomen</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: 'About'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .about-container{
    max-width: 1280px;
    display: flex;
    margin: 0px 400px 0px 400px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .page-title {
    margin: 0px 0px 25px 0px;
    .title {
      font-family: Avenir, HiraginoSans-W6;
      font-size: 34px;
      font-weight: 900;
      color: #ffffff;
    }
    .line {
      width: 298px;
      height: 3px;
      background-image: linear-gradient(to left, #100e17, #da297b 35%, #ff6f61 71%, #100e17);
    }
  }
  .content{
    font-family: HiraginoSans-W3;
    font-size: 16px;
    line-height: 1.56;
    color: #ffffff;
    margin: 0px 0px 30px 0px;
  }
  .hashtag{
    display: flex;
    .tag{
      color: #7a7a8c;
      font-family: HiraginoSans-W6;
      margin: 0px 10px 0px 0px;
    }
    .link{
      color: #ff6f61;
      font-weight: 900;
      font-family: Avenir;
    }
  }
</style>
