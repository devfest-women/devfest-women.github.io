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
  layout: 'top',
  components: {
      Header,
      Footer
  }
}
</script>
<style>
</style>
