<template>
  <v-dialog :value="showDialog" @click:outside="closeDialog()" max-width="290">
      <v-card color="cardbg" outlined>
        <v-card-title class="text-h5" color="primary">
          Competencies test
        </v-card-title>
        <v-card-subtitle>{{selectedCompetency}}</v-card-subtitle>
      </v-card>
    </v-dialog>
</template>

<script>
  import { mapState, mapActions } from "vuex";
  export default {
    name: 'CompetenciesDialog',
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
      ...mapActions({
        changeSelectedCompetency: 'CompetenciesModule/setSelectedCompetency',
        disableListSelection: 'CompetenciesModule/resetListSelection'
      }),
      closeDialog(){
        var activeElements = document.getElementsByClassName("v-list-item--active");
        for (let i = 0; i < activeElements.length; i++) {
          const element = activeElements[i];
          element.classList.remove("v-item--active");
          element.classList.remove("v-list-item--active");
        }
        this.disableListSelection(null);
        this.changeSelectedCompetency(null);
      }
    },
    computed: {
      ...mapState('CompetenciesModule', ['selectedCompetency', 'showDialog']),
    },
    mounted() {
      
    },
    watch: {
      
    },
  }
</script>

<style lang="scss">

</style>  