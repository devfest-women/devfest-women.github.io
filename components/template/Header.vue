<template>
  <div>
      <v-app-bar
        scroll-target="#playground-example"
        :color="transparent"
        :elevate-on-scroll="true"
        :hide-on-scroll="false"
        :fade-on-scroll="false"
        :fade-img-on-scroll="false"
        :inverted-scroll="false"
        :collapse="false"
        :collapse-on-scroll="false"
        :shrink-on-scroll="false"
        :extended="false"
        :fixed="true"
        :clipped-right="true"
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-items>      
          <v-btn text><nuxt-link v-scroll-to="'#about-devfetwomen'" to>{{ text.Link1 }}</nuxt-link></v-btn>
          <v-btn text><nuxt-link v-scroll-to="'#about'" to>{{ text.Link2 }}</nuxt-link></v-btn>
          <v-btn text><nuxt-link v-scroll-to="'#schedule'" to>{{ text.Link3 }}</nuxt-link></v-btn>
          <v-btn text><nuxt-link v-scroll-to="'#sponsor'" to>{{ text.Link4 }}</nuxt-link></v-btn>
          <v-btn text><nuxt-link v-scroll-to="'#staff'" to>{{ text.Link5 }}</nuxt-link></v-btn>
        </v-toolbar-items>

      </v-app-bar>
      <v-sheet
        id="playground-example"
        class="overflow-y-auto"
        max-height="600"
      >
      </v-sheet>

</div>
</template>
<script>
export default {
  data: () => ({
      text : {
        Link1 : "Dev Fest Women とは",
        Link2 : "開催概要",
        Link3 : "スケジュール",
        Link4 : "スポンサー",
        Link5 : "スタッフ"
    }
  })
}
</script>
<style scoped>

</style>
