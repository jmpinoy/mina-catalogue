<template>
  <v-container id='carousel' fluid class="pa-0">
    <v-row v-resize="onResize" align-content="stretch">
      <v-col class="pa-0">
        <v-carousel
          style="background: black !important"
          width="100%"
          continuoues
          cycle
          show-arrows-on-hover
          :height="carouselHeight">
          <v-carousel-item
          v-for="(item, i) in items"
          :key="i">
           <v-img contain :height="item.height" :src="item.src" />
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'Carousel',
  data: () => ({
    carouselHeight: 0,
    items: [
      {
        src: '/img/mojavesunset.png',
        height: '120%'
      },
      {
        src: '/img/collection.jpg',
        height: '150%'
      },
      {
        src: '/img/model5.jpg',
        height: '155%'
      },
      {
        src: '/img/outfit1.jpg',
        height: '155%'
      },
    ]
  }),
  mounted () {
    this.onResize()
  },
  methods: {
    onResize () {
      this.carouselHeight = window.innerHeight - 225
    }
  }
};
</script>