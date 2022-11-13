<template>
  <div>
    <v-card-title class="text-h4" color="primary">
      <v-avatar tile class="mr-4"><v-img src="@/assets/technologies/sql.png"></v-img></v-avatar> Mssql
    </v-card-title>
    <v-card-subtitle>{{experience}} of experience</v-card-subtitle>
    <v-card-text style="max-height: 50vh; overflow-y: auto;">
      I first learned the basics of sql querying language when i went to Get Academy.
      I got a deeper understanding of the querying language when worked at ABAX.
      During my time at ABAX i have written complicated queries, i have learned about:
      <ul>
        <li>Indexes</li>
        <li>How to hit indexes</li>
        <li>How to measure performance</li>
        <li>How to improve performance in queries</li>
        <li>How to link databases</li>
        <li>How to use temp tables</li>
        <li>How to set up transactions and using them for both comitting or rolling back changes</li>
      </ul>
      I personally prefer Relational Database technologies over Document Database technologies in general, but both have their strengths and weaknesses.
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
        experienceStart: new Date(2019, 3),
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
