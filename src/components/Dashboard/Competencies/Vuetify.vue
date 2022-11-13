<template>
  <div>
    <v-card-title class="text-h4" color="primary">
      <v-avatar tile class="mr-4"><v-img src="@/assets/frameworks/vuetify.png"></v-img></v-avatar> Vuetify
    </v-card-title>
    <v-card-subtitle>{{experience}} of experience</v-card-subtitle>
    <v-card-text style="max-height: 50vh; overflow-y: auto;">
      Punge piken godhet tilføyet krog, 
      skilling han nærhet, 
      besynderlighet arvet efterlot kontordøren. 
      Skyndte besynderlig sunne, 
      dødsfallet mangen megen noe syden skyldbevisst nærhet. 
      Hjelpeløs voldt gjeldsbeviset, 
      vimser veie kontorforretninger, 
      forskrekket at ubesindighet. 
      Fornøyelig luner lirke, 
      ødsle menneskers hykler opplevet drift, 
      oppholdt sanglerke overga nippet. 
      Fjerdingår måttet forgifte arkskrift egensindige, 
      hvorledes rår vitende biomstendighetene anfører skyldte en.
    </v-card-text>
  </div>
</template>

<script>
import util from "@/helpers/util";
  export default {
    name: 'Vuetify',
    components: {

    },
    props: {
      
    },
    data: function () {
      return {
        experienceStart: new Date(2022, 2),
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
