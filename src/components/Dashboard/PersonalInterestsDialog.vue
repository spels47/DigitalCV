<template>
  <v-dialog :value="showDialog" @click:outside="closeDialog()" scrollable width="1200" class="hobbyDialog">
    <v-card color="cardbg" outlined rounded class="hobbyDialog" style="overflow: hidden;">
      <Pathfinder v-if="selectedPersonalInterest == 'Pathfinder'"></Pathfinder>
      <GameDevelopment v-if="selectedPersonalInterest == $t('hobbiesList.gameDevelopment')"></GameDevelopment>
      <Streaming v-if="selectedPersonalInterest == $t('hobbiesList.streaming')"></Streaming>
    </v-card>
  </v-dialog>
</template>

<script>
  import { mapState, mapActions } from "vuex";
  import Pathfinder from "./PersonalInterests/Pathfinder.vue";
  import GameDevelopment from "./PersonalInterests/GameDevelopment.vue";
  import Streaming from "./PersonalInterests/Streaming.vue";
  export default {
    name: 'PersonalInterestsDialog',
    components: {
      Pathfinder,
      GameDevelopment,
      Streaming
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
        changeSelectedPersonalInterest: 'PersonalInterestsModule/setSelectedPersonalInterest',
        disableListSelection: 'PersonalInterestsModule/resetListSelection'
      }),
      closeDialog(){
        var activeElements = document.getElementsByClassName("v-list-item--active");
        for (let i = 0; i < activeElements.length; i++) {
          const element = activeElements[i];
          element.classList.remove("v-item--active");
          element.classList.remove("v-list-item--active");
        }
        this.disableListSelection();
        this.changeSelectedPersonalInterest(null);
      }
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

<style lang="scss" scoped>
  .hobbyDialog{
    height: 60vh;
  }
</style>  