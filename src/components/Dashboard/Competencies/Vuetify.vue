<template>
  <div>
    <v-card-title class="text-h4" color="primary">
      <v-avatar tile class="mr-4"><v-img src="@/assets/frameworks/vuetify.png"></v-img></v-avatar> Vuetify
    </v-card-title>
    <v-card-subtitle>{{experience}} of experience</v-card-subtitle>
    <v-card-text style="max-height: 50vh; overflow-y: auto;">
      Vuetify was the framework we used for our internal tooling in ABAX, its a framework that has really grown on me.
      <v-divider class="my-2"></v-divider>
      This page was also written using Vuetufy!
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
