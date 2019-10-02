<template>
<div class="bg-img" id="hero">
  <div class="contents">
    <div class="hero-logo" justify-center="center">
      <img src="~/assets/img/logo_white.svg" alt="DevFest Women2019">
      <p class="hero-days">{{ hero.days }}</p>
      <p class="hero-place">{{ hero.place }}</p>
      <div>
      <div class="l-join">
        <Button
          v-bind:text='hero.join.text'
          v-bind:link='hero.join.link'
          buttonstyle="join"></Button>
      </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Button from '~/components/module/Button.vue'

  export default {
    components: {
      Button
    },
    data() {
      return {
        hero: {
          days:'2019.10.14 (Mon.)',
          place:'@御茶ノ水ソラシティカンファレンスセンター',
          join:{
             text:"参加申し込み",
             link:"https://devfestwomen2019.peatix.com/view"
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.contents {
  text-align: center;
}
.bg-img {
  background-image: url("~@/assets/img/hero.JPG");
  background-color: #da297b;
  background-size: 100% auto;
  background-position: center top;
  background-repeat: no-repeat;
  width: 100vw;
  height: 680px;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  z-index: 0;
}
@media screen and (max-width:1200px) {
  .bg-img {
    background-size:1200px auto;
  }
}
.bg-img::after{
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

.hero-logo {
  width: auto;
  margin: 0 auto 0 auto;
  top: 100px;
  position: relative;
  z-index: 10;
}
.hero-logo img {
  margin: 0 auto 0 27px;
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
  margin-top: -15px;
  font-family: HiraginoSans-W3;
  font-size: 15px;
  color: #ffffff;
}
.label-text {
  margin-bottom: 21px;
  font-family: HiraginoSans-W7;
  color: #ffdedb;
}

.hero-link {
  width: auto;
  height: 150px;
  top: 145px;
  margin: 0;
  position: relative;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.2);
}
.l-join
{
  padding-top: 60px;
}

@media only screen and (min-width: 900px), print {
  .bg-img{
    height: 680px;
  }
  .hero-link{
    height: 600px;
    overflow: hidden;
    height: 154px;
  }
}
</style>
