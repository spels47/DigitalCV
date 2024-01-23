<template>
  <div>
    <v-card-title class="text-h4" color="primary">
      <v-avatar tile class="mr-4"><v-img src="@/assets/frameworks/bootstrap.png"></v-img></v-avatar> {{$t("bootstrap.title")}}
    </v-card-title>
    <v-card-subtitle>{{experience}} {{$t("ofExperience")}}</v-card-subtitle>
    <v-card-text style="max-height: 50vh; overflow-y: auto;">
      {{$t("bootstrap.content")}}
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
        experienceDates: [
          {startDate: new Date(2019, 9), stopDate: new Date(2021, 2)}
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
