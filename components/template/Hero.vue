<template>
<div class="bg-img" id="hero">
  <div class="contents">
    <div class="hero-logo" justify-center="center">
      <img src="~/assets/img/logo_white.svg" alt="DevFest Women2019">
      <p class="hero-days">{{ hero.days }}</p>   
      <p class="hero-place">{{ hero.place }}</p>
      <div>
        <Button 
          v-bind:text='hero.join.text'
          v-bind:link='hero.join.link'
          buttonstyle="join"></Button>
      </div>
    </div>
    <div class="l-"></div>
    <div class="hero-link">
      <div class="l-sponsor">
        <p class="label-text">{{ hero.sponsor.description }}</p>
        <Button
          v-bind:text='hero.sponsor.text'
          v-bind:link='hero.sponsor.link'
          textcolor='text-sponsor'
          buttonstyle="nomal">
        </Button>
      </div>
      <div class="l-staff">
        <p class="label-text">{{ hero.staff.description }}</p>
        <Button
          v-bind:text='hero.staff.text'
          v-bind:link='hero.staff.link'
          textcolor='text-staff'
          buttonstyle="nomal">
        </Button>
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
          },
          sponsor:{            
            description:'スポンサーを募集中です！',
            text:'スポンサー申し込み',
            link:'https://docs.google.com/forms/d/e/1FAIpQLSfwIrV6HXRztZF0L6Z0aBj4zdmV5AWtbyVWg77i0Ho25LANVA/viewform'
          },
          staff:{            
            description:'当日スタッフを募集中です！',
            text:'当日スタッフに応募',
            link:'https://docs.google.com/forms/d/e/1FAIpQLSd3w2qG43B7RjYEyCb0d_HUI-9i2jkEeUcSm6jTMWxpTuCuow/viewform'
          },
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
  height: 780px;
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
  margin: 0 auto 0 27px;
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
  height: 250px;
  top: 145px;
  margin: 0;
  position: relative;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.2);
}
.l-sponsor {
  padding-top: 15px;
}
.l-staff
{
  padding-top: 15px;
}

@media only screen and (min-width: 600px), print {
  .bg-img{
    height: 680px;
  }
  .hero-link{
    height: 600px;
    overflow: hidden;
    height: 154px;
  }
  .l-sponsor {
    width: 50%;
    float: left;
  }
  .l-staff {
    width: 50%;
    float: right;
  }
}
</style>
