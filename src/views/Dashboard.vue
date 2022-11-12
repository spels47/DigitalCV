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

        <v-card-text style="max-height: 20vh; overflow-y: auto;">
          Hello 😁 i'm a {{age(new Date(1995, 9, 3))}} year old full stack developer from Larvik, Norway.
          I take pride in my work, and like to work on my deliveries until im proud of what i deliver.
          I strive to improve myself professionally regardless of how good i might get at what i do.

          <v-divider class="my-2"></v-divider>

          I'm an objective thinker, that is good at identifying issues and actively work on solutions.
          I like to work closely with the product department and pitch ideas for changes or improvements as i do get creative inspirations while implementing the spec provided to me.

          <v-divider class="my-2"></v-divider>

          Outside the workplace i spend time with friends, watch movies, play pathfinder, enjoy documentaries and play video games.
          I like spending time on game development and other creative side projects.

          <v-divider class="my-2"></v-divider>

          I was first introduced to programming when i went to a community college back in 2016, and fell in love with game development that year.
          I learned to use programming for more business related purposes when i entered Get Academy in 2019, and have a total experience with programming of {{experience(new Date(2016, 9))}},
          <br>
          but i have {{experience(new Date(2019, 1, 27))}} experience, working with programming professionally
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
        selection: 1,
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
