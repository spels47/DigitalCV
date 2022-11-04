<template>
  <div class="d-flex justify-space-around align-center" style="max-height: 100%; overflow: hidden;">
    <v-card v-if="!togglePatrick">
      <v-carousel style="width: 20vw;" height="20vh" :show-arrows="false" :value="previousPicture" hide-delimiters>
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
      </v-carousel>
    </v-card>
    <v-card v-if="!togglePatrick">
      <v-carousel style="width: 40vw;" height="35vh" v-model="selected" interval="10000" cycle progress progress-color="accent" hide-delimiters>
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
      </v-carousel>
    </v-card>
    <v-card v-if="!togglePatrick">
      <v-carousel style="width: 20vw;" height="20vh" :show-arrows="false" :value="nextPicture" hide-delimiters>
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
      </v-carousel>
    </v-card>

    <!-- <v-card v-if="togglePatrick">
      <v-carousel style="width: 500px;" height="350" :show-arrows="false" :value="previousPicture2" hide-delimiters>
        <v-carousel-item v-for="(item,i) in pictures" :key="i" :src="item.src" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
      </v-carousel>
    </v-card>
    <v-card v-if="togglePatrick">
      <v-carousel style="width: 1000px;" height="550" v-model="selected" interval="10000" cycle progress progress-color="accent" hide-delimiters>
        <v-carousel-item v-for="(item,i) in pictures" :key="i" :src="item.src" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
      </v-carousel>
    </v-card>
    <v-card v-if="togglePatrick">
      <v-carousel style="width: 500px;" height="350" :show-arrows="false" :value="nextPicture2" hide-delimiters>
        <v-carousel-item v-for="(item,i) in pictures" :key="i" :src="item.src" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
      </v-carousel>
    </v-card> -->

      <v-card v-if="togglePatrick">
      <v-carousel style="width: 20vw;" height="20vh" :show-arrows="false" :value="previousPicture2" hide-delimiters>
        <v-carousel-item src="@/assets/patrick1.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item src="@/assets/patrick2.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item src="@/assets/patrick3.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item src="@/assets/patrick4.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item src="@/assets/patrick5.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item src="@/assets/patrick6.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item src="@/assets/patrick7.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item src="@/assets/patrick8.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item src="@/assets/patrick9.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item src="@/assets/patrick10.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item src="@/assets/patrick11.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item src="@/assets/patrick12.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
      </v-carousel>
    </v-card>
    <v-card v-if="togglePatrick">
      <v-carousel style="width: 40vw;" height="35vh" v-model="selected" interval="10000" cycle progress progress-color="accent" hide-delimiters>
        <v-carousel-item src="@/assets/patrick1.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item src="@/assets/patrick2.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item src="@/assets/patrick3.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item src="@/assets/patrick4.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item src="@/assets/patrick5.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item src="@/assets/patrick6.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item src="@/assets/patrick7.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item src="@/assets/patrick8.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item src="@/assets/patrick9.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item src="@/assets/patrick10.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item src="@/assets/patrick11.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item src="@/assets/patrick12.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
      </v-carousel>
    </v-card>
    <v-card v-if="togglePatrick">
      <v-carousel style="width: 20vw;" height="20vh" :show-arrows="false" :value="nextPicture2" hide-delimiters>
        <v-carousel-item src="@/assets/patrick1.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item src="@/assets/patrick2.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item src="@/assets/patrick3.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item src="@/assets/patrick4.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item src="@/assets/patrick5.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item src="@/assets/patrick6.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item src="@/assets/patrick7.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item src="@/assets/patrick8.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item src="@/assets/patrick9.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item src="@/assets/patrick10.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item src="@/assets/patrick11.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item src="@/assets/patrick12.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
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
        pictures: [
        {
            src: '@/assets/patrick1.jpg',
          },
          {
            src: '@/assets/patrick2.jpg',
          },
          {
            src: '@/assets/patrick3.jpg',
          },
          {
            src: '@/assets/patrick4.jpg',
          },
          {
            src: '@/assets/patrick5.jpg',
          },
          {
            src: '@/assets/patrick6.jpg',
          },
          {
            src: '@/assets/patrick7.jpg',
          },
          {
            src: '@/assets/patrick8.jpg',
          },
          {
            src: '@/assets/patrick9.jpg',
          },
          {
            src: '@/assets/patrick10.jpg',
          },
          {
            src: '@/assets/patrick11.jpg',
          },
          {
            src: '@/assets/patrick12.jpg',
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
        if(previous == -1) previous = this.items.length -1;
        return previous % this.items.length;
      },
      nextPicture(){
        let next = (this.selected +1) % this.items.length;
        return next;
      },
      previousPicture2(){
        let previous = this.selected -1;
        if(previous == -1) previous = this.pictures.length -1;
        return previous % this.pictures.length;
      },
      nextPicture2(){
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