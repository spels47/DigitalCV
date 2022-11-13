<template>
  <div>
    <v-card-title class="text-h4" color="primary">
      <v-avatar tile class="mr-4"><v-img src="@/assets/package-managers/paket.png"></v-img></v-avatar> Paket
    </v-card-title>
    <v-card-subtitle>{{experience}} of experience</v-card-subtitle>
    <v-card-text style="max-height: 50vh; overflow-y: auto;">
      I have used paket to install dependencies for a .net project that had paket as its way of fetching packages.
      Paket was also used to lock versions of packages in that project and it was all very legacy, 
      things would break and stop working if packages were updated to latest version.
      An unfortunate side effect of the projects Legacy state at the time, However this would gradually improve over time.
      So my experience with Paket is rather isolated to that project.
    </v-card-text>
  </div>
</template>

<script>
import util from "@/helpers/util";
  export default {
    name: 'Paket',
    components: {

    },
    props: {
      
    },
    data: function () {
      return {
        experienceStart: new Date(2019, 9),
        experienceStop: new Date(2021, 1)
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
