<template>
  <div>
      <v-app-bar
        scroll-target="#playground"
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
        :color="transparent"
        class="l-header pc-only"
      >
      <div class="sp-only"></div>
      <v-container>
       <v-row class="text-center">
        <v-toolbar-items v-if="pages === 'top'">
          <v-btn
          :elevation="0"
           v-for="item in menu"
          :key="item.title"
          color="transparent"
          >
            <nuxt-link class="l-text" v-scroll-to="item.link" to> {{ item.title }} </nuxt-link>
          </v-btn>
        </v-toolbar-items> 
        <v-toolbar-items v-else>
          <v-btn
          :elevation="0"
           v-for="item in menu2"
          :key="item.title"
          color="transparent"
          >
            <nuxt-link class="l-text" vind:to="item.link"> {{ item.title }} </nuxt-link>
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
          <v-list v-if="pages === 'top'">
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
          <v-list v-else>
            <v-list-item
              v-for="(item, index) in menu2"
              :key="index"
              @click=""
            >
              <v-list-item-title>
                <nuxt-link v-bind:to="item.link">{{ item.title }}</nuxt-link>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>        
      </v-container>
      </v-app-bar>
      <v-sheet
        id="playground"
        class="overflow-y-auto"
        max-height="600"
      >
      </v-sheet>
</div>
</template>
<script>
export default {
  props: ['pages'],
  data: () => ({
      menu: [
        { title: "Dev Fest Women とは", link: "#aboutdevfestwomen" },
        { title: "開催概要", link: "#about" },
        { title: "スケジュール", link: "#schedule" },
        { title: "スポンサー", link: "#sponsor" }
        // { title: "スタッフ", link: "#staff" }
      ],
      menu2 : [
        { title: "TOP", link: "/" },
        { title: "Dev Fest Women とは", link: "/#aboutdevfestwomen" },
        { title: "開催概要", link: "/#about" },
        { title: "スケジュール", link: "/#schedule" },
        { title: "スポンサー", link: "/#sponsor" }
        // { title: "スタッフ", link: "#staff" }
    ],

})
}
</script>
<style scoped>
.l-header {
  /* background-image: linear-gradient(to left, #da297b, #ff6f61); */
  background-image: linear-gradient(to left,rgba(218,41,123,1), rgba(255,111,97,1));
}
.l-text {
    color: #fff;
    font-size: 16px;
    font-family: Avenir,HiraginoSans-W6;
    font-size: 16px;
    font-weight: 900;
    text-decoration: none;
}
.l-transport{
  opacity: unset;
}
</style>
