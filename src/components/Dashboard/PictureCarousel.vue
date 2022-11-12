<template>
  <div class="d-flex justify-space-around align-center" style="max-height: 100%; overflow: hidden;">
    <v-card>
      <v-carousel style="width: 20vw;" height="20vh" :show-arrows="false" :value="previousPicture" hide-delimiters>
        <v-carousel-item v-for="(picture, index) in pictures" :key="index" :src="picture.crop ? '' : picture.src" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition">
          <v-img v-if="picture.crop" :src="picture.src" contain max-height="20vh"></v-img>
        </v-carousel-item>
      </v-carousel>
    </v-card>
    <v-card>
      <v-carousel style="width: 40vw;" height="35vh" v-model="selected" interval="10000" cycle progress progress-color="accent" hide-delimiters>
        <v-carousel-item v-for="(picture, index) in pictures" :key="index" :src="picture.crop ? '' : picture.src" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition">
          <v-img v-if="picture.crop" :src="picture.src" contain max-height="35vh"></v-img>
        </v-carousel-item>
      </v-carousel>
    </v-card>
    <v-card>
      <v-carousel style="width: 20vw;" height="20vh" :show-arrows="false" :value="nextPicture" hide-delimiters>
        <v-carousel-item v-for="(picture, index) in pictures" :key="index" :src="picture.crop ? '' : picture.src" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition">
          <v-img v-if="picture.crop" :src="picture.src" contain max-height="20vh"></v-img>
        </v-carousel-item>
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
        pictures: [
          {
            src: require('@/assets/patrick/patrick4.jpg'),
            crop: false
          },
          {
            src: require('@/assets/patrick/patrick10.jpg'),
            crop: true
          },
          {
            src: require('@/assets/patrick/patrick11.jpg'),
            crop: false
          },
          {
            src: require('@/assets/patrick/patrick13.jpg'),
            crop: false
          },
          {
            src: require('@/assets/patrick/patrick14.jpg'),
            crop: true
          },
          {
            src: require('@/assets/patrick/patrick15.jpg'),
            crop: false
          },
          {
            src: require('@/assets/patrick/patrick16.jpg'),
            crop: true
          },
          {
            src: require('@/assets/patrick/patrick17.jpg'),
            crop: true
          },
          {
            src: require('@/assets/patrick/patrick18.jpg'),
            crop: true
          },
          {
            src: require('@/assets/patrick/patrick19.jpg'),
            crop: false
          },
          {
            src: require('@/assets/patrick/patrick20.jpg'),
            crop: true
          },
          {
            src: require('@/assets/patrick/patrick21.jpg'),
            crop: true
          },
          {
            src: require('@/assets/patrick/patrick22.jpg'),
            crop: true
          },
          {
            src: require('@/assets/patrick/patrick23.jpg'),
            crop: true
          },
          {
            src: require('@/assets/patrick/patrick24.jpg'),
            crop: false
          },
          {
            src: require('@/assets/patrick/patrick25.jpg'),
            crop: false
          },
          {
            src: require('@/assets/patrick/patrick26.jpg'),
            crop: true
          },
        ],
        selected: 0,
        togglePatrick: true
      }
    },
    methods: {
      
    },
    computed: {
      previousPicture(){
        let previous = this.selected -1;
        if(previous == -1) previous = this.pictures.length -1;
        return previous % this.pictures.length;
      },
      nextPicture(){
        let next = (this.selected +1) % this.pictures.length;
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