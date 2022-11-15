<template>
  <div>
    <v-card-title class="text-h4" color="primary">
      <v-avatar class="mr-4"><v-img src="@/assets/programming-languages/csharp.png"></v-img></v-avatar> {{$t("csharp.title")}}
    </v-card-title>
    <v-card-subtitle>{{experience}} {{$t("ofExperience")}}</v-card-subtitle>
    <v-card-text style="max-height: 50vh; overflow-y: auto;">
      {{$t("csharp.content1")}}

      <v-divider class="my-2"></v-divider>

      {{$t("csharp.content2")}}

      <v-divider class="my-2"></v-divider>

      {{$t("csharp.content3")}}

      <v-divider class="my-2"></v-divider>

      {{$t("csharp.content4")}}
    </v-card-text>
  </div>
</template>

<script>
import util from "@/helpers/util";
  export default {
    name: 'Csharp',
    components: {

    },
    props: {
      
    },
    data: function () {
      return {
        experienceStart: new Date(2016, 8),
        experienceStop: null
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
