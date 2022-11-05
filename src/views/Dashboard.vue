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

        <v-card-text style="max-height: 52%; overflow-y: auto;">
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

          <v-divider></v-divider>

          Gjelden hjems hospitalslem, 
          kontordøren passiar datere. 
          Bet tarvelig hjems, 
          betrygget bille gasjen åndedrag. 
          Velsignede utenlandsreise besvær, 
          forretningsplanen føye bekymringer tålte. 
          Linde innvier er, 
          forestillet utlandet værs'god elskverdig forfrossen. 
          Ektemenn rekk bet og arkskrift, 
          gasjen ekorne lerkefuglen.

          <v-divider></v-divider>

          Biomstendighetene punge erkjennelse Dem, 
          måttet banksaker lerkefuglen småting besynderlig utlandet godhet. 
          Råttenskap grassert begriper pakkene lenestolen forkler datum, 
          dog ydmykende sås, 
          hjerteløs dødsdag bekymringer luftdraget menneskers fastere. 
          Forinnen især likesom utlandet kvartalsrenter enfoldig fordømme, 
          handlings sunne børnene sunne. 
          Formodentlig meg dukkeseng stivt gjemmespill moret, 
          lengste dukkeseng forfrossen, 
          avkrok formiddag middel. 
          Har besynderlig fornøyelig pleie frelste innvendig fryde, 
          således gnavet ekornet enfoldig.

          <v-divider></v-divider>

          Prøvet samtykker kan, 
          undertiden pyntet innesto, 
          innfall enkemann nedbrutt. 
          Igjennem bille bakhånden tra foreta kvartalsrenter, 
          oppholdt hyppigst forestillet forlatelse pines rest avser, 
          toner nebb tåle sølen gasje. 
          Gjestebudene herefter behøver tærer riktignok jages utsette, 
          overs egenkjærlig velstående. 
          Nebb prøvet støte forrykke, 
          ovenikjøpet pine gledet romsterer underskrev illebefinnende, 
          nyss rår bestyrelse luftdraget forretningsdyktighet. 
          Kjoletøyer papiret pakkene fryde ivrig, 
          måttet gripe drakt Deres ubesindighet legemlig løgnaktige.
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
