<template>
  <div>
    <v-card-title class="text-h4" color="primary">
      <v-avatar tile class="mr-4"><v-img src="@/assets/programming-languages/typescript.png"></v-img></v-avatar> Typescript
    </v-card-title>
    <v-card-subtitle>{{experience}} of experience</v-card-subtitle>
    <v-card-text style="max-height: 50vh; overflow-y: auto;">
      I have only used Typescript a little bit, i have a basic understanding of it.
      I used Typescript on occasion when i worked on a pretty big frontend refactor project for ABAX, for some specific components that required this.
      However for the most part i used Javascript during my time on that project.

      <v-divider class="my-2"></v-divider>

      Still i do have some experience with Typescript, so i wouldnt be starting from scratch should i encounter it again in the future.
    </v-card-text>
  </div>
</template>

<script>
import util from "@/helpers/util";
  export default {
    name: 'Typescript',
    components: {

    },
    props: {
      
    },
    data: function () {
      return {
        experienceStart: new Date(2020, 8),
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
