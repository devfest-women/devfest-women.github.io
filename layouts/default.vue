<template>
  <v-content>
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
        <Header pages="top"></Header>
          <v-container class="default-setting">
            <nuxt />
          </v-container>
        <Footer class="bg-gradient l-footer"></Footer>
        </v-flex>
      </v-layout>
    </v-app>
  </v-content>    
</template>

<script>
import Header from '~/components/template/Header.vue'
import Footer from '~/components/template/Footer.vue'

export default {
    components: {
    Header,
    Footer
  }
}
</script>
<style>
.default-setting {
margin-top: 40px;
}
.bg-black {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background-color: #100e17;
}
.bg-gradient {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background-image: linear-gradient(to left, #da297b, #ff6f61);
}
.l-footer{
  margin-top: -12px;
}
</style>
