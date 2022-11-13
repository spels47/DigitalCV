<template>
  <div>
    <v-card-title class="text-h4" color="primary">
      <v-avatar tile class="mr-4"><v-img src="@/assets/technologies/google-firebase.png"></v-img></v-avatar> Google Firebase
    </v-card-title>
    <v-card-subtitle>{{experience}} of experience</v-card-subtitle>
    <v-card-text style="max-height: 50vh; overflow-y: auto;">
      I used google firebase as database technology of choice when working on the dating app that was comissioned while i went to Get Academy.
      In that database i stored things like user credentials and profile pictures, and other user information.
    </v-card-text>
  </div>
</template>

<script>
import util from "@/helpers/util";
  export default {
    name: 'Google-Firebase',
    components: {

    },
    props: {
      
    },
    data: function () {
      return {
        experienceStart: new Date(2019, 2),
        experienceStop: new Date(2019, 3)
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
