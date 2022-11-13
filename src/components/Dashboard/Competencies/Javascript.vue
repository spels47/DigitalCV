<template>
  <div>
    <v-card-title class="text-h4" color="primary">
      <v-avatar tile class="mr-4"><v-img src="@/assets/programming-languages/javascript.png"></v-img></v-avatar> Javascript
    </v-card-title>
    <v-card-subtitle>{{experience}} of experience</v-card-subtitle>
    <v-card-text style="max-height: 50vh; overflow-y: auto;">
      I learned Javascript when i started at Get Academy in 2019,
      And have only used it in context of creating web clients (web pages)

      <v-divider class="my-2"></v-divider>

      The first real project that i used javascript on was when Get Academy was comissioned to make a proof of concept for a dating app, that i was delegated to work on.
      the first iteration was made using only javascript, html and css, i would later refactor this to work with Vue, and bootstrap which was the first time i used frameworks.

      <v-divider class="my-2"></v-divider>

      During my time in ABAX i also used Javascript when maintining or creating solutions for the different web clients there,
      and learned and developed my skills with Javascript there.
    </v-card-text>
  </div>
</template>

<script>
import util from "@/helpers/util";
  export default {
    name: 'Javascript',
    components: {

    },
    props: {
      
    },
    data: function () {
      return {
        experienceStart: new Date(2019, 9),
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
