<template>
<div v-if="buttonstyle === 'white'">
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
    <span class="button-text color-pink">
      {{ text }}
    </span>
  </v-btn>
</div>
<div v-else-if="buttonstyle === 'gradation'">
  <v-btn
    rounded
    min-width = "260px"
    max-widht = "370px"
    min-height = "54px"
    href = "https://google.com"
    target="_blank"
    style="background-image: linear-gradient(to left, #da297b, #ff6f61);"
   >
    <span class="button-text color-white">
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
.button-text {
  font-family: HiraginoSans-W7;
  font-size: 16px;
  text-align: center;
  color: #ff6f61;
}
.color-white {
  color: #ffffff;
}
.color-pink {
  color: #ff6f61;
}
</style>
