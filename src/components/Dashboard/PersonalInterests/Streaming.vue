<template>
  <div>
    <v-card-title class="text-h4" color="primary">
      <v-avatar class="mr-4"><v-img src="@/assets/hobbies/twitch.png"></v-img></v-avatar> {{$t("streaming.title")}}
    </v-card-title>
    <v-card-text style="max-height: 50vh; overflow-y: auto;">
      {{$t("streaming.content1")}}
    </v-card-text>
  </div>
</template>

<script>
  export default {
    name: 'Streaming',
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
