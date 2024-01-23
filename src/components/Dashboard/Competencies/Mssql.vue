<template>
  <div>
    <v-card-title class="text-h4" color="primary">
      <v-avatar tile class="mr-4"><v-img src="@/assets/technologies/sql.png"></v-img></v-avatar> {{$t("mssql.title")}}
    </v-card-title>
    <v-card-subtitle>{{experience}} {{$t("ofExperience")}}</v-card-subtitle>
    <v-card-text style="max-height: 50vh; overflow-y: auto;">
      {{$t("mssql.content1")}}
      <ul>
        <li>{{$t("mssql.listItem1")}}</li>
        <li>{{$t("mssql.listItem2")}}</li>
        <li>{{$t("mssql.listItem3")}}</li>
        <li>{{$t("mssql.listItem4")}}</li>
        <li>{{$t("mssql.listItem5")}}</li>
        <li>{{$t("mssql.listItem6")}}</li>
        <li>{{$t("mssql.listItem7")}}</li>
      </ul>
      {{$t("mssql.content2")}}
    </v-card-text>
  </div>
</template>

<script>
import util from "@/helpers/util";
  export default {
    name: 'Mssql',
    components: {

    },
    props: {
      
    },
    data: function () {
      return {
        experienceDates: [
          {startDate: new Date(2019, 3), stopDate: new Date(2019, 4)},
          {startDate: new Date(2019, 9), stopDate: null}
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
