<template>
  <div>
    <v-card-title class="text-h4" color="primary">
      <v-avatar class="mr-4"><v-img src="@/assets/hobbies/pathfinder.png"></v-img></v-avatar> {{$t("pathfinder.title")}}
    </v-card-title>
    <v-card-text style="max-height: 50vh; overflow-y: auto;">
      <v-img height="250px" src="https://3.bp.blogspot.com/-pTeFQGUFKtM/VLuyAvCQzUI/AAAAAAAAIWM/nQdiZUgXcBQ/s1600/Logo%2BPathfinder_Roleplaying_Game.png"></v-img>
      {{$t("pathfinder.content1")}} <a href="https://en.wikipedia.org/wiki/Tabletop_role-playing_game" target="_blank">{{$t("pathfinder.tabletopLink")}}</a>, {{$t("pathfinder.content2")}}
      <v-divider class="my-2"></v-divider>
      {{$t("pathfinder.content3")}}
      <v-divider class="my-2"></v-divider>
      {{$t("pathfinder.content4")}}
    </v-card-text>
  </div>
</template>

<script>
  export default {
    name: 'Pathfinder',
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
