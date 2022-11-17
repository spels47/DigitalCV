<template>
  <v-card class="mx-auto width" tile>
    <v-img height="250" id="backgroundPicture" lazy-src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg" :src="backgroundPictureWidth > 630 ? require('@/assets/programming.gif') : null">
      <v-row align="end" class="fill-height">
        <v-col align-self="start" class="pa-0" cols="12">
          <v-avatar class="profile" color="grey" :size="200" rounded>
            <v-img src="@/assets/patrick/patrick26.jpg"></v-img>
          </v-avatar>
        </v-col>
        <v-col class="py-0">
          <v-list-item color="rgba(0, 0, 0, .4)" dark>
            <v-list-item-content>
              <v-list-item-title class="text-h6">Patrick Brekke Johnsen</v-list-item-title>
              <v-list-item-subtitle>Software Engineer</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-img>
  </v-card>
</template>

<script>
  export default {
    name: 'ProfileImage',
    components: {

    },
    props: {
      
    },
    data: function () {
      return {
        backgroundPictureWidth: 0,
        resizeObserver: new ResizeObserver((elements) => {
          let element = elements[0].contentRect;

          let width = element.width;
          this.backgroundPictureWidth = width;
        })
      }
    },
    methods: {
      
    },
    computed: {
      
    },
    mounted() {
      this.backgroundPictureWidth = document.getElementById("backgroundPicture")?.offsetWidth;
      this.resizeObserver.observe(document.getElementById("backgroundPicture"));
    },
    unmounted(){
      this.resizeObserver.unobserve();
    },
    watch: {
      
    },
  }
</script>

<style lang="scss" scoped>
  .width{
    max-width: 30vw;
  }

  @media only screen and (max-width: 1220px) {
    .width{
      max-width: 70vw;
    }
  }
  @media only screen and (max-width: 900px) {
    .width{
      max-width: 90vw;
    }
  }
  @media only screen and (max-width: 700px) {

  }
</style>
