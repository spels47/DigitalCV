<template>
  <div>
    <v-card-title class="text-h4" color="primary">
      <v-avatar tile class="mr-4"><v-img src="@/assets/technologies/mongodb.png"></v-img></v-avatar> MongoDB
    </v-card-title>
    <v-card-subtitle>{{experience}} of experience</v-card-subtitle>
    <v-card-text style="max-height: 50vh; overflow-y: auto;">
      I first used MongoDB in ABAX,
      during that time i learned to use tools like Mongo Compass and Studio 3T.
      As well as using the Mongo Shell on occasion.
      During my time using MondoDB i have learned:
      <ul>
        <li>How to use the C# driver</li>
        <li>How to create new Indexes including TTL indexes (Time To Live)</li>
        <li>How to write queries using the C# driver</li>
      </ul>
      I have also used MongoDB in a personal project to store pdf documents as base64 string
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
