<template>
  <div class="my-12 mx-4">
    <div class="d-flex mb-4 justify-space-around mobileFlex">
      <PersonalInterestsList class="hideBelow1220" :loading="loading"></PersonalInterestsList>

      <v-card :loading="loading" color="cardbg" class="mx-auto maxWidth aboutCard">
        <template slot="progress">
          <v-progress-linear color="accent" height="10" indeterminate></v-progress-linear>
        </template>

        <ProfileImage></ProfileImage>

        <v-card-title>{{$t("dashboard.about")}}</v-card-title>

        <v-card-text class="aboutText">
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

      <CompetenciesList class="mx-auto mt-4 hideAbove1220" :loading="loading"></CompetenciesList>
      <PersonalInterestsList class="mx-auto mt-4 hideAbove1220" :loading="loading"></PersonalInterestsList>

      <CompetenciesList class="hideBelow1220" :loading="loading"></CompetenciesList>

      <CompetenciesDialog></CompetenciesDialog>
      <PersonalInterestsDialog></PersonalInterestsDialog>
    </div>
    <!-- <div class="hideAbove1220 maxWidth">
      <PersonalInterestsList :loading="loading"></PersonalInterestsList>
      <CompetenciesList :loading="loading"></CompetenciesList>
    </div> -->
    
    <div class="pictureCarousel">
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
      }
    },
    methods: {
      age(start){
        return util.calculateAge(start);
      },
      experience(start, stop){
        return util.calculateExperience(start, stop, this.$t("years"), this.$t("months"), this.$t("days"));
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

<style lang="scss" scoped>
.pictureCarousel{
  max-height: 35vh;
  overflow: hidden;
}

.maxWidth{
  max-width: 30vw;
}

.aboutCard{
  max-height: 100%; 
  overflow-y: hidden;
}

.aboutText{
  max-height: calc(25vh - 64px);
  overflow-y: auto;
}

.hideAbove1220{
  display: none;
}

.mobileFlex{
  max-height: 50vh;
}

@media only screen and (max-width: 1220px) {
  .pictureCarousel{
    display: none;
  }
  .hideAbove1220{
    display: initial;
  }
  .hideBelow1220{
    display: none;
  }
  .mobileFlex{
    flex-direction: column;
    max-height: none;
  }
  .maxWidth{
    max-width: 70vw;
  }
  .aboutText{
    max-height: none;
  }
}

@media only screen and (max-width: 900px) {
  .maxWidth{
    max-width: 90vw;
  }
}
</style>
