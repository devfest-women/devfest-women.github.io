<template>
    <div class="title-container">
        <h1 class="title-text">
            {{ text }}
        </h1>
    </div>
</template>
<script>
export default {
  props: ['text']
}
</script>

<style scoped>
.title-text {
    font-family: HiraginoSans-W6;
    font-size: 34px;
    text-align: center;
    color: #ffffff;
}
.title-container{
    margin: 0px 0px 40px 0px
}
</style>
