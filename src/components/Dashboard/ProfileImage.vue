<template>
  <v-card class="mx-auto" :max-width="maxWidth" tile>
    <v-img height="250" lazy-src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg" src="@/assets/programming.gif">
      <v-row align="end" class="fill-height">
        <v-col align-self="start" class="pa-0" cols="12">
          <v-avatar class="profile" color="grey" :size="200" rounded>
            <v-img src="@/assets/patrick10.jpg"></v-img>
          </v-avatar>
        </v-col>
        <v-col class="py-0">
          <v-list-item color="rgba(0, 0, 0, .4)" dark>
            <v-list-item-content>
              <v-list-item-title class="text-h6">Patrick Brekke Johnsen</v-list-item-title>
              <v-list-item-subtitle>Software Engineer</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-img>
  </v-card>
</template>

<script>

  export default {
    name: 'ProfileImage',
    components: {

    },
    props: {
      maxWidth: {
        type: Number,
        required: true,
        default: null
      },
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
