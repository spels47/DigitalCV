<template>
  <div>
    <v-card-title class="text-h4" color="primary">
      <v-avatar class="mr-4"><v-img src="@/assets/programming-languages/csharp.png"></v-img></v-avatar> Csharp
    </v-card-title>
    <v-card-subtitle>{{experience}} of experience</v-card-subtitle>
    <v-card-text style="max-height: 50vh; overflow-y: auto;">
      I learned C# in 2016-2017 when i went to Bjerkely Folkehøyskole, where i studied game development.
      There were many different roles that could be chosen when it comes to game development.
      A game typically contains images, animations, 3d models or 2d sprites, sound effects, music and of course code that dictates the behaviour and interactability of the game.
      And it was the code, the programming that caught my interest the most.
      So i spent the majority of my time that year learning to write C# in the Unity game engine.

      <v-divider class="my-2"></v-divider>

      After my year at Bjerkely i still did some occasional game development, but few of the projects i worked on became anything functional as i didnt have any artists or animators or sound engineers to work with,
      so even if i could get the code working, my motivation began to suffer pretty quickly when i realised that i was unable to make the game look and sound good on my own.

      <v-divider class="my-2"></v-divider>

      In 2019 when i went to Get Academy i learned more about C# for business purposes and creating REST api's with .net framework.
      I would learn even more about this when i would later that year begin as an intern in ABAX and would maintain and fix bugs in their WebApi which was .net framework, but would later also interact with api's in modern .net core
      I have also used C# to consume and emit events over Message Queues (RabbitMQ) during my time in ABAX.
      I have also written a lot of Unit tests and Integration tests in XUnit, using Substitutes for external services and data providers when writing Unit tests.

      <v-divider class="my-2"></v-divider>

      I have also made a Console App text adventure game that is available on my github profile.
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
