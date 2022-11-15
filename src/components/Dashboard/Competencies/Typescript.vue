<template>
  <div>
    <v-card-title class="text-h4" color="primary">
      <v-avatar tile class="mr-4"><v-img src="@/assets/programming-languages/typescript.png"></v-img></v-avatar> {{$t("typescript.title")}}
    </v-card-title>
    <v-card-subtitle>{{experience}} {{$t("ofExperience")}}</v-card-subtitle>
    <v-card-text style="max-height: 50vh; overflow-y: auto;">
      {{$t("typescript.content1")}}

      <v-divider class="my-2"></v-divider>

      {{$t("typescript.content2")}}
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
        return util.calculateExperience(this.experienceStart, this.experienceStop, this.$t("years"), this.$t("months"), this.$t("days"));
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
