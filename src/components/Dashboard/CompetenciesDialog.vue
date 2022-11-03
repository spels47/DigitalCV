<template>
  <v-dialog :value="showDialog" @click:outside="closeDialog()" scrollable width="1200" :height="height">
    <v-card color="cardbg" outlined rounded :height="height" style="overflow: hidden;">
      <Csharp :height="height" v-if="selectedCompetency == 'Csharp'"></Csharp>
      <Javascript :height="height" v-if="selectedCompetency == 'Javascript'"></Javascript>
      <VisualBasic :height="height" v-if="selectedCompetency == 'Visual Basic'"></VisualBasic>
    </v-card>
  </v-dialog>
</template>

<script>
  import { mapState, mapActions } from "vuex";
  import Csharp from "./Competencies/Csharp.vue";
  import Javascript from "./Competencies/Javascript.vue";
  import VisualBasic from "./Competencies/VisualBasic.vue";
  export default {
    name: 'CompetenciesDialog',
    components: {
      Csharp,
      Javascript,
      VisualBasic
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
        height: 750,
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