<template>
    <v-card class="outerCard">
    <v-card-title><v-icon color="primary">mdi-account-school</v-icon><span class="pl-4">{{$t("education.title")}}</span></v-card-title>
    <div class="d-flex flex-wrap justify-start align-start boxSize">
      <v-card v-for="(certificate, index) in certificates.filter(cert => cert.show)" :key="index" class="ma-4 cardMain d-flex flex-column align-center" width="100%" height="100%" color="cardbg" @click="selectImage(certificate.pictures)">
        <v-card-title>{{certificate.name}}</v-card-title>
        <v-card-subtitle>{{certificate.type}}</v-card-subtitle>
        <v-img contain class="miniImage" :src="certificate.pictures[0]"></v-img>
        <v-card-subtitle>{{presentationDate(certificate.startDate)}} - {{presentationDate(certificate.stopDate)}}</v-card-subtitle>
      </v-card>
      <v-dialog id="dialogId" class="ma-4 dialogSize" :width="pictureWidth > 1220 ? '50%' : null" :value="showDialog" @click:outside="showDialog = false">
        <v-carousel hide-delimiters height="100%">
          <v-carousel-item v-for="(picture, index) in selectedImages" :key="index" :src="picture" reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
        </v-carousel>
      </v-dialog>
    </div>
  </v-card>
  </template>
  
  <script>
    export default {
      name: 'Education',
      components: {
        
      },
      data: function () {
        return {
          showDialog: false,
          selectedImages: null,
          pictureWidth: 0,
          resizeObserver: new ResizeObserver((entries) => {
            let rect = entries[0].contentRect;
            let width = rect.width;
            this.pictureWidth = width;
          }),
          certificates: [
            {
              name: "Thor Heyerdahl vgs",
              type: this.$t("education.highSchool"),
              pictures: [
                require("@/assets/education/vidregående-vitnemål.jpg")
              ],
              startDate: new Date(2011, 8, 15),
              stopDate: new Date(2015, 6, 22),
              show: false,
            },
            {
              name: "Get Academy",
              type: this.$t("education.certificate"),
              pictures: [
                require("@/assets/education/get-academy1.jpg"),
                require("@/assets/education/get-academy2.jpg")
              ],
              startDate: new Date(2019, 1, 28),
              stopDate: new Date(2020, 6, 19),
              show: true,
            },
            {
              name: "ABAX",
              type: this.$t("education.recommendation"),
              pictures: [
                require("@/assets/education/abax-recommendation.png")
              ],
              startDate: new Date(2020, 7, 1),
              stopDate: new Date(2023, 3, 31),
              show: true,
            }
          ]
        }
      },
      methods: {
        presentationDate(date){
          var year = date.getFullYear();
          var month = date.getMonth();
          if(month < 10) month = '0' + month;
          var day = date.getDate();
          if(day < 10) day = '0' + day;
          return `${day}-${month}-${year}`;
        },
        selectImage(image){
          this.selectedImages = image;
          this.showDialog = true;
        },
        startObserver(){
          this.pictureWidth = document.body.offsetWidth;
          this.resizeObserver.observe(document.body);
        },
        stopObserver(){
          this.pictureWidth = document.body.offsetWidth;
          this.resizeObserver.unobserve(document.body);
        }
      },
      computed: {
        
      },
      mounted() {

      },
      watch: {
        showDialog: function (newValue, oldValue){
          this.$nextTick(() => {
            if(!oldValue && newValue) this.startObserver();
            if(oldValue && !newValue) this.stopObserver();
          })
        }
      },
    }
  </script>
  
  <style lang="scss" scoped>
  .cardMain{
    max-width: 300px;
    max-height: 300px;
    overflow-y: hidden;
  }
  .boxSize{
    width: 100%;
    height: calc(100% - 200px);
    overflow-y: auto;
  }

  .outerCard{
    height: 100%;
  }
  .miniImage{
    max-height: 50%;
    max-width: 50%;
  }

  .dialogSize{
    width: 50%;
    height: 100vh;
  }

  @media only screen and (max-width: 1050px) {
    .boxSize{
      width: 100%;
      height: inherit;
      overflow-y: none;
    }
    .outerCard{
      height: initial;
      min-height: 100%;
    }
    .miniImage{
      max-height: 150px;
      max-width: 150px;
    }
    .dialogSize{
      width: 90%;
    }
  }
  </style>  