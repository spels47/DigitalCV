<template>
  <div>
    <v-card-title class="text-h4" color="primary">
      <v-avatar tile class="mr-4"><v-img src="@/assets/frameworks/vue.png"></v-img></v-avatar> {{$t("vue.title")}}
    </v-card-title>
    <v-card-subtitle>{{experience}} {{$t("ofExperience")}}</v-card-subtitle>
    <v-card-text style="max-height: 50vh; overflow-y: auto;">
      {{$t("vue.content1")}}

      <v-divider class="my-2"></v-divider>

      {{$t("vue.content2")}}
      
      <v-divider class="my-2"></v-divider>

      {{$t("vue.content3")}}
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
        experienceDates: [
          {startDate: new Date(2019, 2), stopDate: new Date(2023, 3)},
          {startDate: new Date(2024, 1, 19), stopDate: new Date(2024, 2, 1)},
          {startDate: new Date(2025, 10, 7), stopDate: null}
        ]
      }
    },
    methods: {
      
    },
    computed: {
      experience(){
        return util.calculateExperienceList(this.experienceDates, this.$t("years"), this.$t("months"), this.$t("days"));
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
