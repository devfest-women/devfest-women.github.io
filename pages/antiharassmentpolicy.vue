<template>
  <v-app>
    <v-layout
            column
            justify-center
            align-center
    >
      <v-flex
              xs12
              sm8
              md6
      >
        <div class="text-xs-center">
          <Header></Header>
          <AntiHarassmentPolicy class="bg bg_black"></AntiHarassmentPolicy>
          <Footer class="bg bg_gradient"></Footer>
        </div>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
  import Header from '~/components/template/Header.vue'
  import AntiHarassmentPolicy from '~/components/template/AntiHarassmentPolicy.vue'
  import Footer from '~/components/template/Footer.vue'

  export default {
    components: {
      Header,
      AntiHarassmentPolicy,
      Footer
    }
  }
</script>


<style scoped>
  .bg_black {
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    background-color: #100e17;
  }
  .bg_gradient {
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    background-image: linear-gradient(to left, #da297b, #ff6f61);
  }
</style>
