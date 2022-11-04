<template>
  <v-card :loading="loading" color="cardbg" class="pl-2 pr-2 pt-1 pb-1" style="max-height: 100%; overflow-x: auto;">
      <v-list color="cardbg" dense>
        <v-list-item-title>Hobbies & Spare time activities</v-list-item-title>
        <v-divider></v-divider>
        <v-list-item-group color="primary" :value="hobbySelected" @change="changeGroupSelection($event)">

          <v-list-item :ripple="false" color="contrast" @click="displayPersonalInterest('Pathfinder')">
            <v-list-item-icon >
              <v-icon>mdi-all-inclusive-box-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Pathfinder</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item :ripple="false" color="contrast">
            <v-list-item-icon>
              <v-icon>mdi-all-inclusive-box-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>My super fascinating hobby</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item :ripple="false" color="contrast">
            <v-list-item-icon>
              <v-icon>mdi-all-inclusive-box-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>My super fascinating spare time activity</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
</template>

<script>
import { mapState, mapActions } from "vuex";
  export default {
    name: 'PersonalInterestsList',
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
        changeSelectedPersonalInterest: 'PersonalInterestsModule/setSelectedPersonalInterest',
        changeHobbyGroupSelection: 'PersonalInterestsModule/setListSelection'
      }),
      displayPersonalInterest(personalInterest){
        this.changeSelectedPersonalInterest(personalInterest);
      },
      changeGroupSelection(selection){
        this.changeHobbyGroupSelection(selection);
      },
    },
    computed: {
      ...mapState('PersonalInterestsModule', ['hobbySelected']),
    },
    mounted() {
      
    },
    watch: {
      
    },
  }
</script>

<style lang="scss">

</style>  