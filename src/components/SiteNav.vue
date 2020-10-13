<template>
  <div>
    <v-app-bar
      color="background"
      extended
      flat
      height="120"
      extension-height="60">
      <v-row justify="center">
        <v-toolbar-title>
          <v-img
            contain
            src="/img/mina-logo.png"
            class="logo"
            width="300"
            @click="GoHome" />
        </v-toolbar-title>
      </v-row>
    <template v-slot:extension>
      <!-- Mobile -->
      <v-row justify="center" class="hidden-lg-and-up">
        <div>
          <v-btn
              color="primary"
              rounded
              large
              text
              class="hidden-lg-and-up"
              @click="drawer = true">
            Menu
          </v-btn>
        </div>
      </v-row>
      <!-- Desktop -->
      <v-row justify="center" class="hidden-md-and-down">
        <v-col>
          <v-row justify="center">
            <div>
              <v-menu
                open-on-hover
                offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="primary"
                    class="title mx-2"
                    large
                    text
                    to="/collections"
                    v-bind="attrs"
                    v-on="on">
                    Collections
                  </v-btn>
                </template>
                <v-list color="secondary">
                  <v-list-item-group
                    v-for="collection in collections"
                    :key="collection.name">
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-subtitle class="title text--background">
                          {{ collection.name }}
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-menu>
            </div>
            <div v-for="button in buttons" :key="button.name">
              <v-btn
                :to="button.route"
                color="primary"
                class="title mx-2"
                large
                text>
              {{ button.name }}
              </v-btn>
            </div>
          </v-row>
        </v-col>
      </v-row>
    </template>
    </v-app-bar>    
    <v-navigation-drawer
      v-model="drawer"
      app
      bottom
      color="secondary"
      class="hidden-lg-and-up"
      temporary>
      <v-list color="secondary" nav dense>
        <v-list-item-group>
          <v-list-item to="/collections">
            <v-list-item-content>
              <v-list-item-subtitle class="text--background">
                Collections
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
              <v-list nav dense>
                <v-list-item-group v-for="collection in collections" :key="collection.name">
                  <v-list-item :to="collection.route" link>
                    <v-list-item-content>
                      <v-list-item-subtitle class="text--background">
                        {{ collection.name }}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
        </v-list-item-group>
        <v-list-item-group v-for="button in buttons" :key="button.name">
          <v-list-item :to="button.route" link>
            <v-list-item-content>
              <v-list-item-subtitle class="text--background">
                {{ button.name }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>          
    </v-navigation-drawer>
  </div>
</template>

<script>

export default {
  name: 'SiteNav',
  components: {
  },
  data: () => ({
    drawer: false,
    buttons: [
      {
        name: 'About',
        route: '/about'
      },
      {
        name: 'Shop',
        route: '/shop'
      },
      {
        name: 'Contact',
        route: '/contact'
      },
    ],
    collections: [
      {
        name: 'Mojave Sunset',
        route: ''
      },
      {
        name: 'Collection 2',
        route: ''
      },
      {
        name: 'Collection 3',
        route: ''
      },
    ]
  }),
  methods: {
    GoHome() {
      return this.$router.push('/');
    }
  }
};
</script>

<style>
.logo {
  cursor: pointer;
}
</style>