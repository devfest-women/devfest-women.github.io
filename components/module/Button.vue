<template>
<div v-if="buttonstyle === 'white'">
  <v-btn
    rounded
    height="50px"
    :href = "link"
    target="_blank"
    class="button-layout button-normal"
   >
    <span :class="textcolor">
      {{ text }}
    </span>
  </v-btn>
</div>
<div v-else-if="buttonstyle === 'gradation'">
  <v-btn
    rounded
    height="50px"
    :href = "link"
    target="_blank"
    class="button-layout button-gradesion"
   >
    <span class="button-text">
      {{ text }}
    </span>
  </v-btn>
</div>
</template>
<script>
export default {
  props: ['text','link','textcolor','buttonstyle']
}
</script>
<style lang="scss" scoped>
.button-layout {
  font-family: HiraginoSans-W7;
  font-size: 16px;
  text-align: center;
  width: 260px;
}
@media screen and (max-width:375px) {
.button-layout {
  width: 360px;
  }
}
.button-normal {
  color: #ffffff;
  .text-sponsor {
    color: #ff6f61; // #salmon
  }
  .text-staff {
    color: #ea4770; // #darkish-pink
   }  
}
.button-gradesion{
  background-image: linear-gradient(to left, #da297b, #ff6f61);
  color:#ffffff;
  border: solid 4px #ffffff;
}
</style>
