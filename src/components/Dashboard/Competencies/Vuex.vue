<template>
  <div>
    <v-card-title class="text-h4" color="primary">
      <v-avatar tile class="mr-4"><v-img src="@/assets/frameworks/vuex.png"></v-img></v-avatar> Vuex
    </v-card-title>
    <v-card-subtitle>{{experience}} of experience</v-card-subtitle>
    <v-card-text style="max-height: 50vh; overflow-y: auto;">
      Vuex is a global stateholder that is an optional addon for Vue applications.
      I heard about this back in Get Academy but didn't really start using it before i started working with the internal tools project in ABAX.
      But i am glad that i did and i am a big fan of it now that i am familiar with it.
      <v-divider class="my-2"></v-divider>
      This web page also used Vuex!
    </v-card-text>
  </div>
</template>

<script>
import util from "@/helpers/util";
  export default {
    name: 'Vuex',
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
