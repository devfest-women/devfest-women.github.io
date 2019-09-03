<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      right
      touchless
      hide-overlay
      temporary
    >
      <v-list v-if="pages === 'top'">
        <v-list-item class="menu-line menu-head">
          <nuxt-link class="l-text" to="/">
            <v-list-item-title>
              DevFest Women Tokyo 2019
            </v-list-item-title>
          </nuxt-link>
        </v-list-item>
        <v-list-item
          class="menu-line"
          v-for="(item, index) in menu"
          :key="index"
          @click=""
        >
        <nuxt-link class="menu-text" v-scroll-to="item.link" to>
          <v-list-item-title>
             {{ item.title }}
          </v-list-item-title>
        </nuxt-link>          
      </v-list-item>
    </v-list>

    <v-list v-else>
        <v-list-item class="menu-line menu-head">
          <nuxt-link class="l-text" to="/">
            <v-list-item-title>
              DevFest Women Tokyo 2019
            </v-list-item-title>
          </nuxt-link>
        </v-list-item>
      <v-list-item
        class="menu-line"
        v-for="(item, index) in menu2"
        :key="index"
        @click=""
      >
      <nuxt-link class="menu-text" v-bind:to="item.link">
        <v-list-item-title>
          {{ item.title }}
        </v-list-item-title>
      </nuxt-link>
    </v-list-item>
    </v-list>
    </v-navigation-drawer>

      <v-app-bar
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
        class="l-header">
      
      <v-container class="d-none d-sm-flex">
       <v-row class="d-flex space-between justify-center">
        <v-toolbar-items v-if="pages === 'top'">
          <v-btn
          min-height="60"
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
          min-height="60"
          :elevation="0"
           v-for="item in menu2"
          :key="item.title"
          color="transparent"
          >
            <nuxt-link class="l-text" v-bind:to="item.link"> {{ item.title }} </nuxt-link>
          </v-btn>
        </v-toolbar-items> 

      </v-row>
      </v-container>

      <v-container class="d-flex d-sm-none">
        <v-row class="justify-end">
          <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="white"></v-app-bar-nav-icon>
      </v-row>    
    </v-container>
  </v-app-bar>
</div>
</template>
<script>
export default {
  props: ['pages'],
  data: () => ({
      drawer:null,
      menu: [
        { title: "DevFest Women Tokyo とは", link: "#aboutdevfestwomen" },
        { title: "開催概要", link: "#aboutevent" },
        { title: "スケジュール", link: "#schedule" },
        { title: "スポンサー", link: "#sponsor" }
        // { title: "スタッフ", link: "#staff" }
      ],
      menu2 : [
        { title: "TOP", link: "/" },
        { title: "DevFest Women Tokyo とは", link: "/#aboutdevfestwomen" },
        { title: "開催概要", link: "/#aboutevent" },
        { title: "スケジュール", link: "/#schedule" },
        { title: "スポンサー", link: "/#sponsor" }
        // { title: "スタッフ", link: "#staff" }
    ],
})
}
</script>
<style scoped>
.l-header {
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
.menu-line {
 border-bottom: solid 0.5px #ff6f61;
 }
.menu-text {
  font-family: Avenir;
  font-size: 18px;
  font-weight: 900;
  color: #ff6f61;
  text-decoration: none;
  padding-right: 200px;
}
.menu-head {
  background-image: linear-gradient(to left, #da297b, #ff6f61);
  margin-top:-10px;
}
</style>
