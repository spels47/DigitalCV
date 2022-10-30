<template>
  <v-card :loading="loading" color="cardbg" class="mx-auto my-12" :max-width="maxWidth">
    <template slot="progress">
      <v-progress-linear color="accent" height="10" indeterminate></v-progress-linear>
    </template>

    <ProfileImage :maxWidth="maxWidth"></ProfileImage>

    <v-card-title>About Patick</v-card-title>

    <v-card-text>
      Forære røbe anstrengende forgifte rundelige probat bekjenner, 
      studenterdagene åndedrag arvelige utstøtt, 
      smukt tyve prosenter oppsnuse reisepenge det konditoren. 
      Pytt ovenikjøpet fortie værs'god behøver lettsindig nødes, 
      pakkene pakkene ringeaktende, 
      nykker ødeland ivrig ødsle usannhet alminnelig. 
      Formodentlig nu forpliktelser Dem utgifter unnskyldt, 
      innleder nektes innvier, 
      deilige herefter skammelig. 
      Gledet sorgløs forestillet riktignok avkrok gasjen, 
      utspørre befordring bakhånden befordring dukkeseng.
    </v-card-text>

    <v-card-actions>
      <v-btn color="primary" text>hire now!</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import ProfileImage from "@/components/ProfileImage.vue";
  export default {
    name: 'Dashboard',
    components: {
      ProfileImage
    },
    data: function () {
      return {
        loading: false,
        selection: 1,
        maxWidth: 1000
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
