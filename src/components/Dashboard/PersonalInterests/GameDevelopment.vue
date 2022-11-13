<template>
  <div>
    <v-card-title class="text-h4" color="primary">
      <v-avatar class="mr-4"><v-img src="@/assets/hobbies/game-development.png"></v-img></v-avatar> Game Development
    </v-card-title>
    <v-card-text style="max-height: 50vh; overflow-y: auto;">
      I first learned how to do game development when i went to Bjerkely Folkehøyskole in 2016-2017.
      While there i learned how to program C# in the Unity engine, and how to use the Unity engine in general.
      I also learned the basics of 3d modeling using Blender, and texturing 3d models, that includes creating textures that simulate 3d using bump maps and has metadata on how light interacts with the texture using diffusion maps etc.
      The projects i made that year is gone since i didnt work with any technology that kept backups during that time.
      <v-divider class="my-2"></v-divider>
      But i did make some games since i left school, i made a mobile game that i had hosted on Google Play store for a limited time until it was removed by google, it was called FlurryTurry and it was a relatively fun tower defence game i had made.
      <v-img height="50vh" contain src="@/assets/flurry-turry.jpg"></v-img>
      <v-divider class="my-2"></v-divider>
      The reason why the game was taken down from the Google Play store was because i had used an SDK a package of tools for making the builds of my mobile game that also included tools for in app purchase functionality,
      not that i knew about this or had used these tools, but since they were part of the toolset that the game was built with, Google thought my game had in app purchases in it. And since i hadnt declared any in app purchases Google took down the game.
      So it was taken down over a misunderstanding, however i managed to corrupt the projects files when i accidentally updated Unity to a beta version, which made it impossible to fix this and create another build of the game sadly.
      <v-divider class="my-2"></v-divider>
      I also made a Console App text adventure game called Ogrevent, which is available for download <a href="https://www.dropbox.com/sh/jqcvsbb1s1m8spu/AACbJrEl0xSO-fnWj-zV1xv2a?dl=0" target="_blank">here</a>
      <v-img src="https://user-images.githubusercontent.com/34216925/200139627-f70e0530-1fb2-467c-a606-8393b4aae828.png"></v-img>
      <v-divider class="my-2"></v-divider>
      Game development is something i find fun, but it is very time consuming and difficult to do alone so its not something i get around to very often anymore.
    </v-card-text>
  </div>
</template>

<script>
  export default {
    name: 'GameDevelopment',
    components: {

    },
    props: {
      
    },
    data: function () {
      return {
        
      }
    },
    methods: {
      
    },
    computed: {
      
    },
    mounted() {
      
    },
    watch: {
      
    },
  }
</script>

<style lang="scss">

</style>
