<template>
  <div>
    <v-card-title class="text-h4" color="primary">
      <v-avatar tile class="mr-4"><v-img src="@/assets/methodologies/kanban.png"></v-img></v-avatar> Kanban
    </v-card-title>
    <v-card-subtitle>{{experience}} of experience</v-card-subtitle>
    <v-card-text style="max-height: 50vh; overflow-y: auto;">
      Throughout my time in ABAX i have tracked my task in Kanban boards.
      I have used Jira and Gitlab boards primarily to track the tasks i personally work on.
      But have also used Monday but primarily Monday is a place where roadmap items were tracked which is often big long term tasks,
      that the tasks i tracked in Gitlab represented a small part of.
    </v-card-text>
  </div>
</template>

<script>
import util from "@/helpers/util";
  export default {
    name: 'Kanban',
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
