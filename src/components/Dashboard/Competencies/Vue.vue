<template>
  <div>
    <v-card-title class="text-h4" color="primary">
      <v-avatar tile class="mr-4"><v-img src="@/assets/frameworks/vue.png"></v-img></v-avatar> Vue
    </v-card-title>
    <v-card-subtitle>{{experience}} of experience</v-card-subtitle>
    <v-card-text style="max-height: 50vh; overflow-y: auto;">
      Vue is the first framework i learned how to use, and it is also my favorite framework out of all the frameworks of its kind that i have had the pleasure of experiencing throughout my career.
      I used it first in a refactor of a dating app i was working on back when i went to Get Academy.
      Then i used it in some learning projects where my focus was primarily on learning technologies other than Vue.
      Some time after this i used the framework while working on a project focused on refactoring our frontend from old AngularJS to new Vue3 for ABAX.
      After this project i worked on maintenance and feature development for internal tools that also used Vue for its frontend.

      <v-divider class="my-2"></v-divider>

      I am primarily familiar with writing Vue in the options api,
      but have a basic understanding of the compositions api also.
      
      <v-divider class="my-2"></v-divider>

      This web page is also written in Vue!
    </v-card-text>
  </div>
</template>

<script>
import util from "@/helpers/util";
  export default {
    name: 'Vue',
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
