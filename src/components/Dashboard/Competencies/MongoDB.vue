<template>
  <div>
    <v-card-title class="text-h4" color="primary">
      <v-avatar tile class="mr-4"><v-img src="@/assets/technologies/mongodb.png"></v-img></v-avatar> {{$t("mongoDb.title")}}
    </v-card-title>
    <v-card-subtitle>{{experience}} {{$t("ofExperience")}}</v-card-subtitle>
    <v-card-text style="max-height: 50vh; overflow-y: auto;">
      {{$t("mongoDb.content1")}}
      <ul>
        <li>{{$t("mongoDb.listItem1")}}</li>
        <li>{{$t("mongoDb.listItem2", {TTL: "TTL", TTLText: "(Time To Live)"})}}</li>
        <li>{{$t("mongoDb.listItem3")}}</li>
      </ul>
      {{$t("mongoDb.content2")}}
    </v-card-text>
  </div>
</template>

<script>
import util from "@/helpers/util";
  export default {
    name: 'MongoDB',
    components: {

    },
    props: {
      
    },
    data: function () {
      return {
        experienceStart: new Date(2020, 1),
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
