<template>
    <div class="d-flex flex-column justify-center align-center session-title">
        <h1 class="title-text">
            {{ text }}
        </h1>
        <div class="line"></div>
    </div>
</template>
<script>
export default {
  props: ['text']
  
}
</script>

<style scoped>
.session-title {
    margin: 0px 0px 25px 0px;
}
.title-text {
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
</style>