<template>
  <div class="d-flex justify-space-around align-center" style="max-height: 100%; overflow: hidden;">
    <!-- <v-card>
      <v-carousel style="width: 500px;" height="350" :show-arrows="false" :value="previousPicture" hide-delimiters>
        <v-carousel-item v-for="(item,i) in pictures" :key="i" :src="item.src" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
      </v-carousel>
    </v-card>
    <v-card>
      <v-carousel style="width: 1000px;" height="550" v-model="selected" interval="10000" cycle progress progress-color="accent" hide-delimiters>
        <v-carousel-item v-for="(item,i) in pictures" :key="i" :src="item.src" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
      </v-carousel>
    </v-card>
    <v-card>
      <v-carousel style="width: 500px;" height="350" :show-arrows="false" :value="nextPicture" hide-delimiters>
        <v-carousel-item v-for="(item,i) in pictures" :key="i" :src="item.src" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
      </v-carousel>
    </v-card> -->

      <v-card>
      <v-carousel style="width: 20vw;" height="20vh" :show-arrows="false" :value="previousPicture" hide-delimiters>
        <v-carousel-item src="@/assets/patrick4.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item reverse-transition="slide-x-reverse-transition" transition="slide-x-transition">
          <v-img src="@/assets/patrick10.jpg" contain max-height="20vh"></v-img>
        </v-carousel-item>
        <v-carousel-item src="@/assets/patrick11.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item src="@/assets/patrick13.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item reverse-transition="slide-x-reverse-transition" transition="slide-x-transition">
          <v-img src="@/assets/patrick14.jpg" contain max-height="20vh"></v-img>
        </v-carousel-item>
        <v-carousel-item src="@/assets/patrick15.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item reverse-transition="slide-x-reverse-transition" transition="slide-x-transition">
          <v-img src="@/assets/patrick16.jpg" contain max-height="20vh"></v-img>
        </v-carousel-item>
        <v-carousel-item reverse-transition="slide-x-reverse-transition" transition="slide-x-transition">
          <v-img src="@/assets/patrick17.jpg" contain max-height="20vh"></v-img>
        </v-carousel-item>
        <v-carousel-item reverse-transition="slide-x-reverse-transition" transition="slide-x-transition">
          <v-img src="@/assets/patrick18.jpg" contain max-height="20vh"></v-img>
        </v-carousel-item>
        <v-carousel-item src="@/assets/patrick19.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item reverse-transition="slide-x-reverse-transition" transition="slide-x-transition">
          <v-img src="@/assets/patrick20.jpg" contain max-height="20vh"></v-img>
        </v-carousel-item>
        <v-carousel-item reverse-transition="slide-x-reverse-transition" transition="slide-x-transition">
          <v-img src="@/assets/patrick21.jpg" contain max-height="20vh"></v-img>
        </v-carousel-item>
        <v-carousel-item reverse-transition="slide-x-reverse-transition" transition="slide-x-transition">
          <v-img src="@/assets/patrick22.jpg" contain max-height="20vh"></v-img>
        </v-carousel-item>
        <v-carousel-item reverse-transition="slide-x-reverse-transition" transition="slide-x-transition">
          <v-img src="@/assets/patrick23.jpg" contain max-height="20vh"></v-img>
        </v-carousel-item>
        <v-carousel-item src="@/assets/patrick24.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item src="@/assets/patrick25.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
      </v-carousel>
    </v-card>
    <v-card>
      <v-carousel style="width: 40vw;" height="35vh" v-model="selected" interval="10000" cycle progress progress-color="accent" hide-delimiters>
        <v-carousel-item src="@/assets/patrick4.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item reverse-transition="slide-x-reverse-transition" transition="slide-x-transition">
          <v-img src="@/assets/patrick10.jpg" contain max-height="35vh"></v-img>
        </v-carousel-item>
        <v-carousel-item src="@/assets/patrick11.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item src="@/assets/patrick13.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item reverse-transition="slide-x-reverse-transition" transition="slide-x-transition">
          <v-img src="@/assets/patrick14.jpg" contain max-height="35vh"></v-img>
        </v-carousel-item>
        <v-carousel-item src="@/assets/patrick15.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item reverse-transition="slide-x-reverse-transition" transition="slide-x-transition">
          <v-img src="@/assets/patrick16.jpg" contain max-height="35vh"></v-img>
        </v-carousel-item>
        <v-carousel-item reverse-transition="slide-x-reverse-transition" transition="slide-x-transition">
          <v-img src="@/assets/patrick17.jpg" contain max-height="35vh"></v-img>
        </v-carousel-item>
        <v-carousel-item reverse-transition="slide-x-reverse-transition" transition="slide-x-transition">
          <v-img src="@/assets/patrick18.jpg" contain max-height="35vh"></v-img>
        </v-carousel-item>
        <v-carousel-item src="@/assets/patrick19.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item reverse-transition="slide-x-reverse-transition" transition="slide-x-transition">
          <v-img src="@/assets/patrick20.jpg" contain max-height="35vh"></v-img>
        </v-carousel-item>
        <v-carousel-item reverse-transition="slide-x-reverse-transition" transition="slide-x-transition">
          <v-img src="@/assets/patrick21.jpg" contain max-height="35vh"></v-img>
        </v-carousel-item>
        <v-carousel-item reverse-transition="slide-x-reverse-transition" transition="slide-x-transition">
          <v-img src="@/assets/patrick22.jpg" contain max-height="35vh"></v-img>
        </v-carousel-item>
        <v-carousel-item reverse-transition="slide-x-reverse-transition" transition="slide-x-transition">
          <v-img src="@/assets/patrick23.jpg" contain max-height="35vh"></v-img>
        </v-carousel-item>
        <v-carousel-item src="@/assets/patrick24.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item src="@/assets/patrick25.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
      </v-carousel>
    </v-card>
    <v-card>
      <v-carousel style="width: 20vw;" height="20vh" :show-arrows="false" :value="nextPicture" hide-delimiters>
        <v-carousel-item src="@/assets/patrick4.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item reverse-transition="slide-x-reverse-transition" transition="slide-x-transition">
          <v-img src="@/assets/patrick10.jpg" contain max-height="20vh"></v-img>
        </v-carousel-item>
        <v-carousel-item src="@/assets/patrick11.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item src="@/assets/patrick13.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item reverse-transition="slide-x-reverse-transition" transition="slide-x-transition">
          <v-img src="@/assets/patrick14.jpg" contain max-height="20vh"></v-img>
        </v-carousel-item>
        <v-carousel-item src="@/assets/patrick15.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item reverse-transition="slide-x-reverse-transition" transition="slide-x-transition">
          <v-img src="@/assets/patrick16.jpg" contain max-height="20vh"></v-img>
        </v-carousel-item>
        <v-carousel-item reverse-transition="slide-x-reverse-transition" transition="slide-x-transition">
          <v-img src="@/assets/patrick17.jpg" contain max-height="20vh"></v-img>
        </v-carousel-item>
        <v-carousel-item reverse-transition="slide-x-reverse-transition" transition="slide-x-transition">
          <v-img src="@/assets/patrick18.jpg" contain max-height="20vh"></v-img>
        </v-carousel-item>
        <v-carousel-item src="@/assets/patrick19.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item reverse-transition="slide-x-reverse-transition" transition="slide-x-transition">
          <v-img src="@/assets/patrick20.jpg" contain max-height="20vh"></v-img>
        </v-carousel-item>
        <v-carousel-item reverse-transition="slide-x-reverse-transition" transition="slide-x-transition">
          <v-img src="@/assets/patrick21.jpg" contain max-height="20vh"></v-img>
        </v-carousel-item>
        <v-carousel-item reverse-transition="slide-x-reverse-transition" transition="slide-x-transition">
          <v-img src="@/assets/patrick22.jpg" contain max-height="20vh"></v-img>
        </v-carousel-item>
        <v-carousel-item reverse-transition="slide-x-reverse-transition" transition="slide-x-transition">
          <v-img src="@/assets/patrick23.jpg" contain max-height="20vh"></v-img>
        </v-carousel-item>
        <v-carousel-item src="@/assets/patrick24.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
        <v-carousel-item src="@/assets/patrick25.jpg" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition"></v-carousel-item>
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
        togglePatrick: true,
        pictureCount: 16
      }
    },
    methods: {
      
    },
    computed: {
      previousPicture(){
        let previous = this.selected -1;
        if(previous == -1) previous = this.pictureCount -1;
        return previous % this.pictureCount;
      },
      nextPicture(){
        let next = (this.selected +1) % this.pictureCount;
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