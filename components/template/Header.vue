<template>
  <div>
      <v-app-bar
        scroll-target="#playground-example"
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
        :clipped-right="false"
      >
      <v-container>
       <v-row
        :align="center"
        :justify="center"
        class="grey lighten-5"
        >
        <v-toolbar-items>
          <v-btn
           v-for="item in menu"
          :key="item.title">
            <nuxt-link v-scroll-to="item.link" to> {{ item.title }} </nuxt-link>
          </v-btn>
        </v-toolbar-items> 
      </v-row>
      </v-container>
      <v-container col-sm-5 col-md-6>
        <v-menu>
          <template v-slot:activator="{ on }">
            <v-app-bar-nav-icon
              v-on="on"
            ></v-app-bar-nav-icon>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in menu"
              :key="index"
              @click=""
            >
              <v-list-item-title>
                <nuxt-link v-scroll-to="item.link" to>{{ item.title }}</nuxt-link>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>        
      </v-container>
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
    },
      menu: [
        { title: "Dev Fest Women とは", link: "#about-devfetwomen" },
        { title: "開催概要", link: "#about" },
        { title: "スケジュール", link: "#schedule" },
        { title: "スポンサー", link: "#sponsor" }
        // { title: "スタッフ", link: "#staff" }
      ]
  })
}
</script>
<style scoped>
.layout-header {}
</style>
