<template>
<div class="bg">
  <div>

  </div>
  <div>
    <p></p>
  </div>
  <div>
    <p class="description">{{hero.sponser.description}}</p>
    <Button text="スポンサー申し込み" link="https://google.com"></Button>
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
          sponser:{
            description:'スポンサーを募集中です！',
            button:'スポンサー申し込み',
          },
          staff:{
            description:'',
            button:'',
          }
        }
      }
    }
  }</script>
<style scoped>
.bg{
  background-image: url("~@/assets/img/hero.JPG");
  /*背景の高さ */
  width: 100vw;
  height: 600px;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}
.description {
  width: 192px;
  height: 16px;
  font-family: HiraginoSans-W7;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffdedb;
}

</style>
