
<template>
  <div id="app">
    <v-app id="inspire">
      <v-toolbar color="indigo" fixed app>
        <v-toolbar-title>Toolbar Mobile Menu</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn v-for="item in menu" :key="item.icon" :to="item.link" flat>{{
            item.title
          }}</v-btn>
        </v-toolbar-items>
        <v-menu class="hidden-md-and-up">
          <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
          <v-list>
            <v-list-tile v-for="item in menu" :key="item.icon">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar>

      <v-content>
        <v-container fluid fill-height>
          <v-flex xs12 sm6 offset-sm3>
            <v-card>
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                aspect-ratio="2.75"
              ></v-img>

              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">
                    Vuetify Mobile Navbar using v-menu
                  </h3>
                  <div>
                    <p>
                      Quick example of collapsable mobile menu
                      <tt>&lt;v-toolbar&gt;</tt>, with a
                      <tt>&lt;v-menu&gt;</tt> for mobile screens.
                    </p>
                    <p>
                      Also shows how to use <tt>.hidden-md-and-up</tt> CSS
                      classes to appropriately hide/show the menu depending upon
                      window width.
                    </p>
                  </div>
                </div>
              </v-card-title>

              <v-card-actions>
                <v-btn flat color="orange">Share</v-btn>
                <v-btn flat color="orange">Explore</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-container>
      </v-content>

      <v-footer height="auto" color="indigo" dark>
        <v-layout justify-center row wrap>
          <v-flex color="indigo" dark py-3 text-xs-center white--text xs12>
            &copy;2018 — <strong>Vuetify</strong>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { icon: "home", title: "Link A" },
        { icon: "info", title: "Link B" },
        { icon: "warning", title: "Link C" }
      ]
    };
  },

  methods: {
    menuItems() {
      return this.menu;
    }
  }
};
</script>
