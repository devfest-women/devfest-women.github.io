<template>
<div class="bg_img">
  <Header class="header"></Header>
  <div class="contents">
    <div class="hero-logo" justify-center="center">
      <img src="~/assets/img/wtm_logo_white.svg">
      <p class="hero-days">{{ hero.days }}</p>   
      <p >{{ hero.place }}</p>
    </div>
    <div class="hero-link">
      <p class="label-text">{{ hero.button.description }}</p>
      <Button v-bind:text='hero.button.text' v-bind:link="hero.button.link"></Button>
    </div>
  </div>
</div>
</template>

<script>
import Header from '~/components/template/Header.vue'
import Button from '~/components/module/Button.vue'

  export default {
    components: {
      Header,
      Button
    },
    data() {
      return {
        hero: {
          days:'2019.10.14 (Mon.)',
          place:'@御茶ノ水ソラシティカンファレンスセンター',
          button:{
            description:'スポンサーを募集中です！',
            text:'スポンサー申し込み',
            link:'https://googlle.com'
          },
        }
      }
    }
  }</script>
<style scoped>
.contents {
  text-align: center;
}
.header {
  margin: 0;
  position: relative;
  z-index: 10;
}
.bg_img {
  background-image: url("~@/assets/img/hero.JPG");
  background-color: #da297b;
  background-size: 1024px auto;
  background-position: center top;
  background-attachment: fixed;
  width: 100vw;
  height: 600px;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  z-index: 0;
}
.bg_img::after{
  content: '';
  background-image: linear-gradient(to left, #da297b, #ff6f61);
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0.85;
  z-index: 1;
}
.label-text {
  margin-bottom: 21px;
  font-family: HiraginoSans-W7;
  color: #ffdedb;
}
.hero-logo {
  width: auto;
  margin: 0;
  top: 100px;
  position: relative;
  z-index: 10;
}
.hero-logo img {
  width: 261px;
  height: auto;
}
.hero-days {
  margin-top: 28px;
  font-family: Avenir;
  font-size: 20px;
  font-weight: 900;
  letter-spacing: 2px;
  color: #ffffff;
}
.hero-place {
  font-family: HiraginoSans-W3;
  font-size: 15px;
  color: #ffffff;
}
.hero-link {
  width: auto;
  height: 154px;
  margin: 0;
  padding-top: 31px;
  position: relative;
  top: 118px;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
