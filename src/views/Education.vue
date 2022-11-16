<template>
    <v-card height="100%">
    <v-card-title><v-icon color="primary">mdi-account-school</v-icon><span class="pl-4">{{$t("education.title")}}</span></v-card-title>
    <div class="d-flex flex-wrap justify-start align-start" style="width: 100%; height: calc(100% - 200px); overflow-y: auto;">
      <v-card v-for="(certificate, index) in certificates.filter(cert => cert.show)" :key="index" class="ma-4 cardMain d-flex flex-column align-center" width="100%" height="100%" color="cardbg" @click="selectImage(certificate.pictures)">
        <v-card-title>{{certificate.name}}</v-card-title>
        <v-card-subtitle>{{certificate.type}}</v-card-subtitle>
        <v-img contain max-height="50%" max-width="50%" :src="certificate.pictures[0]"></v-img>
        <v-card-subtitle>{{presentationDate(certificate.startDate)}} - {{presentationDate(certificate.stopDate)}}</v-card-subtitle>
      </v-card>
      <v-dialog width="50%" height="100vh" class="ma-4" :value="showDialog" @click:outside="showDialog = false">
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
              type: this.$t("education.codeBootcamp"),
              pictures: [
                require("@/assets/education/get-academy1.jpg"),
                require("@/assets/education/get-academy2.jpg")
              ],
              startDate: new Date(2019, 1, 28),
              stopDate: new Date(2020, 6, 19),
              show: true,
            },
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
        }
      },
      computed: {
        
      },
      mounted() {
        
      },
      watch: {
        
      },
    }
  </script>
  
  <style lang="scss" scoped>
  .cardMain{
    max-width: 300px;
    max-height: 300px;
    overflow-y: hidden;
  }
  </style>  