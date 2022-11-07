<template>
    <v-card height="100%">
    <v-card-title><v-icon color="primary">mdi-account-school</v-icon><span class="pl-4">Education & Certificates</span></v-card-title>
    <div class="d-flex flex-wrap justify-start align-start" style="width: 100%; height: calc(100% - 200px); overflow-y: auto;">
      <v-card v-for="(certificate, index) in certificates" :key="index" class="ma-4 cardMain d-flex flex-column align-center" width="100%" height="100%" color="cardbg" @click="selectImage(certificate.picture)">
        <v-card-title>{{certificate.name}}</v-card-title>
        <v-card-subtitle>{{certificate.type}}</v-card-subtitle>
        <v-img contain max-height="50%" max-width="50%" :src="certificate.picture"></v-img>
        <v-card-subtitle>{{presentationDate(certificate.startDate)}} - {{presentationDate(certificate.stopDate)}}</v-card-subtitle>
      </v-card>
      <v-dialog width="50%" height="50%" class="ma-4" :value="showDialog" @click:outside="showDialog = false">
        <v-img contain :src="selectedImage"></v-img>
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
          selectedImage: null,
          certificates: [
            {
              name: "Thor Heyerdahl vgs",
              type: "High School",
              picture: require("@/assets/education/vidregående-vitnemål.jpg"),
              startDate: new Date(2011, 8, 15),
              stopDate: new Date(2015, 6, 22)
            },
            {
              name: "Get Academy",
              type: "Code Bootcamp",
              picture: require("@/assets/education/vidregående-vitnemål.jpg"),
              startDate: new Date(2019, 1, 28),
              stopDate: new Date(2020, 6, 19)
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
          this.selectedImage = image;
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