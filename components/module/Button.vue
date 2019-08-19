<template>
<div>
  <v-btn
    rounded
    min-width = "370px"
    min-height = "54px"
    color = "#fff"
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
  props: ['text','link']
  
}
</script>
<style scoped>
.button-text {
  font-family: HiraginoSans-W7;
  font-size: 18px;
  text-align: center;
  color: #ff6f61;
}
</style>