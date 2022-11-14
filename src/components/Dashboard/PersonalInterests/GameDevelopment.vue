<template>
  <div>
    <v-card-title class="text-h4" color="primary">
      <v-avatar class="mr-4"><v-img src="@/assets/hobbies/game-development.png"></v-img></v-avatar> {{$t("gameDevelopment.title")}}
    </v-card-title>
    <v-card-text style="max-height: 50vh; overflow-y: auto;">
      {{$t("gameDevelopment.content1")}}
      <v-divider class="my-2"></v-divider>
      {{$t("gameDevelopment.content2")}}
      <v-img height="50vh" contain src="@/assets/flurry-turry.jpg"></v-img>
      <v-divider class="my-2"></v-divider>
      {{$t("gameDevelopment.content3")}}
      <v-divider class="my-2"></v-divider>
      {{$t("gameDevelopment.content4")}} <a href="https://www.dropbox.com/sh/jqcvsbb1s1m8spu/AACbJrEl0xSO-fnWj-zV1xv2a?dl=0" target="_blank">{{$t("gameDevelopment.here")}}</a>
      <v-img src="https://user-images.githubusercontent.com/34216925/200139627-f70e0530-1fb2-467c-a606-8393b4aae828.png"></v-img>
      <v-divider class="my-2"></v-divider>
      {{$t("gameDevelopment.content5")}}
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
