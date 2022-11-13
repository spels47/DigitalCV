<template>
  <div>
    <v-card-title class="text-h4" color="primary">
      <v-avatar tile class="mr-4"><v-img src="@/assets/frameworks/vue-router.png"></v-img></v-avatar> Vue Router
    </v-card-title>
    <v-card-subtitle>{{experience}} of experience</v-card-subtitle>
    <v-card-text style="max-height: 50vh; overflow-y: auto;">
      Vue Router is an optional package for Vue applications.
      It makes it easy to route between different pages within the application, making it possible to have the application be a SPA (Single Page Application) easily.
      Most modern pages are a form of SPA application as loading a full web page just to navigate to a different place on the same web page is very much a thing of the past.
      <v-divider class="my-2"></v-divider>
      Every Vue project i have worked on has used Vue Router, including this one!
    </v-card-text>
  </div>
</template>

<script>
import util from "@/helpers/util";
  export default {
    name: 'Vue-Router',
    components: {

    },
    props: {
      
    },
    data: function () {
      return {
        experienceStart: new Date(2019, 2),
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
