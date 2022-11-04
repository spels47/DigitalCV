<template>
  <div class="my-12 mx-4">
    <div class="d-flex mb-4 justify-space-around" style="max-height: 50vh;">
      <PersonalInterestsList :loading="loading"></PersonalInterestsList>

      <v-card :loading="loading" color="cardbg" class="mx-auto" :max-width="maxWidth" style="max-height: 100%; overflow-x: auto;">
        <template slot="progress">
          <v-progress-linear color="accent" height="10" indeterminate></v-progress-linear>
        </template>

        <ProfileImage :maxWidth="maxWidth"></ProfileImage>

        <v-card-title>About Patrick</v-card-title>

        <v-card-text>
          Forære røbe anstrengende forgifte rundelige probat bekjenner, 
          studenterdagene åndedrag arvelige utstøtt, 
          smukt tyve prosenter oppsnuse reisepenge det konditoren. 
          Pytt ovenikjøpet fortie værs'god behøver lettsindig nødes, 
          pakkene pakkene ringeaktende, 
          nykker ødeland ivrig ødsle usannhet alminnelig. 
          Formodentlig nu forpliktelser Dem utgifter unnskyldt, 
          innleder nektes innvier, 
          deilige herefter skammelig. 
          Gledet sorgløs forestillet riktignok avkrok gasjen, 
          utspørre befordring bakhånden befordring dukkeseng.
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
import ProfileImage from "@/components/ProfileImage.vue";
import CompetenciesList from "@/components/Dashboard/CompetenciesList.vue";
import CompetenciesDialog from "@/components/Dashboard/CompetenciesDialog.vue";
import PersonalInterestsDialog from "@/components/Dashboard/PersonalInterestsDialog.vue";
import PersonalInterestsList from "@/components/Dashboard/PersonalInterestsList.vue";
import PictureCarousel from "@/components/Dashboard/PictureCarousel.vue";
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
