<template>
  <div>
    <v-card-title class="text-h4" color="primary">
      <v-avatar tile class="mr-4"><v-img src="@/assets/package-managers/yarn.png"></v-img></v-avatar> Yarn
    </v-card-title>
    <v-card-subtitle>{{experience}} of experience</v-card-subtitle>
    <v-card-text style="max-height: 50vh; overflow-y: auto;">
      I used Yarn for a short period of time for installing the dependencies for the frontend to a project because if you installed those dependencies with NPM it wouldnt work for reasons we never investigated deeper.
      But we found that if you installed those dependencies with Yarn it would work just fine, so we just used that for that specific project, until one day when NPM worked with that project as well. This was pretty early in my internship with ABAX.
    </v-card-text>
  </div>
</template>

<script>
import util from "@/helpers/util";
  export default {
    name: 'Yarn',
    components: {

    },
    props: {
      
    },
    data: function () {
      return {
        experienceStart: new Date(2019, 9),
        experienceStop: new Date(2020, 1)
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
