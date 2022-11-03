<template>
  <div class="d-flex justify-space-around align-center">
    <v-card>
      <v-carousel style="width: 500px;" height="350" :show-arrows="false" :value="previousPicture" hide-delimiters>
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
      </v-carousel>
    </v-card>
    <v-card>
      <v-carousel style="width: 1000px;" height="550" v-model="selected" interval="10000" cycle progress progress-color="accent" hide-delimiters>
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
      </v-carousel>
    </v-card>
    <v-card>
      <v-carousel style="width: 500px;" height="350" :show-arrows="false" :value="nextPicture" hide-delimiters>
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
      </v-carousel>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: 'PictureCarousel',
    components: {
      
    },
    props: {
      loading: {
        type: Boolean,
        default: false,
        required: false
      }
    },
    data: function () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
        selected: 0
      }
    },
    methods: {
      
    },
    computed: {
      previousPicture(){
        let previous = this.selected -1;
        if(previous == -1) previous = this.items.length -1;
        return previous % this.items.length;
      },
      nextPicture(){
        let next = (this.selected +1) % this.items.length;
        return next;
      }
    },
    mounted() {
      
    },
    watch: {
      
    },
  }
</script>

<style lang="scss">

</style>  