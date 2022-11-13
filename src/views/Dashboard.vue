<template>
  <div class="my-12 mx-4">
    <div class="d-flex mb-4 justify-space-around" style="max-height: 50vh;">
      <PersonalInterestsList :loading="loading"></PersonalInterestsList>

      <v-card :loading="loading" color="cardbg" class="mx-auto" :max-width="maxWidth" style="max-height: 100%; overflow-y: hidden;">
        <template slot="progress">
          <v-progress-linear color="accent" height="10" indeterminate></v-progress-linear>
        </template>

        <ProfileImage :maxWidth="maxWidth"></ProfileImage>

        <v-card-title>About Patrick</v-card-title>

        <v-card-text style="max-height: 25vh; overflow-y: auto;">
          {{$t("dashboard.content1", {age: age(new Date(1995, 9, 3))})}}

          <v-divider class="my-2"></v-divider>

          {{$t("dashboard.content2")}}

          <v-divider class="my-2"></v-divider>

          {{$t("dashboard.content3")}}

          <v-divider class="my-2"></v-divider>

          {{$t("dashboard.content4", {experience: experience(new Date(2016, 9))})}}

          <br>
          {{$t("dashboard.content5", {experience: experience(new Date(2019, 1, 27))})}}
        </v-card-text>
      </v-card>

      <CompetenciesList :loading="loading"></CompetenciesList>

      <CompetenciesDialog></CompetenciesDialog>
      <PersonalInterestsDialog></PersonalInterestsDialog>
    </div>
    <div style="max-height: 35vh; overflow: hidden;">
      <PictureCarousel></PictureCarousel>
    </div>
    
  </div>
</template>

<script>
import ProfileImage from "@/components/Dashboard/ProfileImage.vue";
import CompetenciesList from "@/components/Dashboard/CompetenciesList.vue";
import CompetenciesDialog from "@/components/Dashboard/CompetenciesDialog.vue";
import PersonalInterestsDialog from "@/components/Dashboard/PersonalInterestsDialog.vue";
import PersonalInterestsList from "@/components/Dashboard/PersonalInterestsList.vue";
import PictureCarousel from "@/components/Dashboard/PictureCarousel.vue";
import util from "@/helpers/util";
  export default {
    name: 'Dashboard',
    components: {
      ProfileImage,
      CompetenciesList,
      CompetenciesDialog,
      PersonalInterestsList,
      PersonalInterestsDialog,
      PictureCarousel
    },
    data: function () {
      return {
        loading: false,
        maxWidth: 750,
      }
    },
    methods: {
      age(start){
        return util.calculateAge(start);
      },
      experience(start, stop){
        return util.calculateExperience(start, stop);
      }
    },
    computed: {
      itemValue: function(){
        return undefined;
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
