<template>
  <v-container id='carousel' fluid class="pa-0">
    <v-row v-resize="onResize" align-content="stretch">
      <v-col class="pa-0">
        <v-carousel
          width="100%"
          continuoues
          cycle
          show-arrows-on-hover
          :height="carouselHeight">
          <v-carousel-item
          v-for="(item, i) in items"
          :key="i">
           <v-img contain :src="item.src" />
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
        src: '/img/outfit3.jpg'
      },
      {
        src: '/img/outfit6.jpg'
      },
      {
        src: '/img/outfit4.jpg'
      },
      {
        src: '/img/outfit1.jpg'
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