<template>
  <div>
    <v-card-title class="text-h4" color="primary">
      <v-avatar tile class="mr-4"><v-img src="@/assets/methodologies/scrum.png"></v-img></v-avatar> Scrum
    </v-card-title>
    <v-card-subtitle>{{experience}} of experience</v-card-subtitle>
    <v-card-text style="max-height: 50vh; overflow-y: auto;">
      While working in ABAX we followed the SCRUM framework for project management,
      We would hold Standup meetings in the mornings, taking turns explaining what we did yesterday and if we were stuck on something / needed help from somebody on the team with something.
      We would estimate our tasks and break the bigger tasks into smaller, more easy to define in technical steps needed to finish, tasks.
      Then we would work with those smaller tasks in our Kanban board.
      We would also hold weekly meetings with the teams Business Analyst in order to look at progress and also to look at specs for upcoming tasks and plan forward for when different new tasks should start being worked on.
    </v-card-text>
  </div>
</template>

<script>
import util from "@/helpers/util";
  export default {
    name: 'Scrum',
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
