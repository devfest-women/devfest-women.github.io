<template>
<div v-if="buttonstyle === bg_white">
  <v-btn
    rounded
    min-width = "260px"
    max-widht = "370px"
    min-height = "54px"
    color = "#fff"
    href = "https://google.com"
    target="_blank"
    class="white"
   >
    <span class="button-text">
      {{ text }}
    </span>
  </v-btn>
</div>
<div v-else-if="buttonstyle === gradation">
  <v-btn
    rounded
    min-width = "260px"
    max-widht = "370px"
    min-height = "54px"
    color = "linear-gradient(to left, #da297b, #ff6f61);"
    href = "https://google.com"
    target="_blank"
   >
    <span class="button-text">
      {{ text }}
    </span>
  </v-btn>
</div>
</template>
<script>
export default {
  props: ['text','link','buttonstyle']
  
}
</script>
<style lang="scss" scoped>
.white {
    .button-text {
    font-family: HiraginoSans-W7;
    font-size: 16px;
    text-align: center;
    color: #ff6f61;
  }
}

</style>
