<template>
  <v-card :loading="loading" color="cardbg" class="pl-2 pr-2 pt-1 pb-1" width="15vw" style="max-height: 100%; overflow-x: auto;">
      <v-list color="cardbg" dense>
        <v-list-item-title>{{$t("hobbiesList.title")}}</v-list-item-title>
        <v-divider></v-divider>
        <v-subheader>{{$t("hobbiesList.hobbyHeader")}}</v-subheader>
        <v-list-item-group color="primary" :value="hobbySelected" @change="changeGroupSelection($event)">
          <v-list-item v-for="(hobby, index) in hobbies" :key="index" :ripple="false" color="contrast" @click="displayPersonalInterest(hobby.name())">
            <v-list-item-icon>
              <v-icon>mdi-dice-multiple-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{hobby.name()}}</v-list-item-title>
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
        hobbies: [
          {
            name: () => "Pathfinder",
          },
          {
            name: () => this.$t("hobbiesList.gameDevelopment")
          },
          {
            name: () => this.$t("hobbiesList.streaming")
          }
        ]
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