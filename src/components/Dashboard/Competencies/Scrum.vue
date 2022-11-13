<template>
  <div>
    <v-card-title class="text-h4" color="primary">
      <v-avatar tile class="mr-4"><v-img src="@/assets/methodologies/scrum.png"></v-img></v-avatar> Scrum
    </v-card-title>
    <v-card-subtitle>{{experience}} of experience</v-card-subtitle>
    <v-card-text style="max-height: 50vh; overflow-y: auto;">
      Tankeløse syltetøy tappert, 
      ekornet kontorforretninger velstående nebb. 
      Enkemann fruen barndomsvenninne, 
      handlings innlagt formiddag tiltrer hekling, 
      forkler beløpet børn duer. 
      Forskrekket kontorarbeide himmelens ytterdøren vimser makroner overlegger, 
      oppsatte moralsk riktignok innesto fornødne bekjenner husholdningspengene, 
      megen gjestebudene gasje. 
      Drakt tent Deres, 
      oppgitt barndomsvenninne deri betraktning fortjene.
    </v-card-text>
  </div>
</template>

<script>
import util from "@/helpers/util";
  export default {
    name: 'Scrum',
    components: {

    },
    props: {
      
    },
    data: function () {
      return {
        experienceStart: new Date(2019, 9),
        experienceStop: null
      }
    },
    methods: {
      
    },
    computed: {
      experience(){
        return util.calculateExperience(this.experienceStart, this.experienceStop);
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
