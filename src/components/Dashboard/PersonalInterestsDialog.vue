<template>
  <v-dialog v-model="showDialog" max-width="290">
      <v-card>
        <v-card-title class="text-h5" color="primary">
          Personal Interest test
        </v-card-title>
        <v-card-subtitle>{{selectedPersonalInterest}}</v-card-subtitle>
      </v-card>
    </v-dialog>
</template>

<script>
  import { mapState } from "vuex";
  export default {
    name: 'PersonalInterestsDialog',
    components: {
      
    },
    props: {
      loading: {
        type: Boolean,
        default: false,
        required: false
      }
    },
    data: function () {
      return {
        
      }
    },
    methods: {
      
    },
    computed: {
      ...mapState('PersonalInterestsModule', ['selectedPersonalInterest', 'showDialog']),
    },
    mounted() {
      
    },
    watch: {
      
    },
  }
</script>

<style lang="scss">

</style>  