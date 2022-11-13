<template>
  <div>
    <v-card-title class="text-h4" color="primary">
      <v-avatar tile class="mr-4"><v-img src="@/assets/frameworks/bootstrap.png"></v-img></v-avatar> Bootstrap
    </v-card-title>
    <v-card-subtitle>{{experience}} of experience</v-card-subtitle>
    <v-card-text style="max-height: 50vh; overflow-y: auto;">
      Bootstrap is the first styling focused library i ever used.
      I learned about it in Get Academy first, but also used it in ABAX for a time.
      However it is worth mentioning that the Bootstrap i used in ABAX was highly customized and not vanilla Bootstrap.
    </v-card-text>
  </div>
</template>

<script>
import util from "@/helpers/util";
  export default {
    name: 'Bootstrap',
    components: {

    },
    props: {
      
    },
    data: function () {
      return {
        experienceStart: new Date(2019, 2),
        experienceStop: new Date(2021, 2)
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
