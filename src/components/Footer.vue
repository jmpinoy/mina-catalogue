<template>
  <div class="footer">
      <v-footer
      height="50"
      color="secondary"
      absolute
      padless>
      <v-row justify="center" align="center">
        @ Mina Catalogue
            <v-btn
            v-for="icon in icons"
            target="_blank"
            :to="icon.route"
            :key="icon.icon"
            icon>
                <v-icon size="24px">
                {{ icon.icon }}
                </v-icon>
            </v-btn>
      </v-row>
  </v-footer>
  </div>
</template>

<script>

export default {
  name: 'Footer',
  data: () => ({
    icons: [
        {
            icon: 'mdi-facebook',
            route: ''
        },
        {
            icon: 'mdi-twitter',
            route: ''
        },
        {
            icon: 'mdi-instagram',
            route: ''
        },
        {
            icon: 'mdi-pinterest',
            route: ''
        },
        {
            icon: 'mdi-youtube',
            route: ''
        }
    ],
  }),
  methods: {
    GoHome() {
      return this.$router.push('/');
    }
  }
};
</script>