<template>
  <v-card :loading="loading" color="cardbg" class="pl-2 pr-2 pt-1 pb-1">
      <v-list color="cardbg" dense>
        <v-list-item-title>Technical Competencies</v-list-item-title>

        <v-divider></v-divider>

        <v-subheader>Code Languages</v-subheader>
        <v-list-item-group color="primary" :value="codeLanguageSelected" @change="changeGroupSelection($event, 'codeLanguage')">

          <v-list-item :ripple="false" color="contrast" @click="displayCompetence('Csharp')">
            <v-list-item-icon >
              <v-icon>mdi-file-code</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Csharp</v-list-item-title>
              <v-list-item-subtitle>{{experience(new Date(2016, 8), null)}} experience</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item :ripple="false" color="contrast" @click="displayCompetence('Javascript')">
            <v-list-item-icon>
              <v-icon>mdi-file-code</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Javascript</v-list-item-title>
              <v-list-item-subtitle>{{experience(new Date(2019, 9), null)}} experience</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item :ripple="false" color="contrast" @click="displayCompetence('Visual Basic')">
            <v-list-item-icon>
              <v-icon>mdi-file-code</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Visual Basic</v-list-item-title>
              <v-list-item-subtitle>{{experience(new Date(2020, 7), null)}} experience</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

        </v-list-item-group>

        <v-divider></v-divider>

        <v-subheader>Technologies</v-subheader>
        <v-list-item-group color="primary" :value="technologySelected" @change="changeGroupSelection($event, 'technology')">
          <v-list-item :ripple="false" color="contrast">
            <v-list-item-icon>
              <v-icon>mdi-all-inclusive-box-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Best Tecnology</v-list-item-title>
              <v-list-item-subtitle>2 years 5 months experience</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item :ripple="false" color="contrast">
            <v-list-item-icon>
              <v-icon>mdi-all-inclusive-box-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Best Tecnology</v-list-item-title>
              <v-list-item-subtitle>2 years 5 months experience</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item :ripple="false" color="contrast">
            <v-list-item-icon>
              <v-icon>mdi-all-inclusive-box-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Best Tecnology</v-list-item-title>
              <v-list-item-subtitle>2 years 5 months experience</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

        <v-divider></v-divider>

        <v-subheader>Frameworks</v-subheader>
        <v-list-item-group color="primary" :value="frameworkSelected" @change="changeGroupSelection($event, 'framework')">
          <v-list-item :ripple="false" color="contrast">
            <v-list-item-icon>
              <v-icon>mdi-all-inclusive-box-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Best Framework</v-list-item-title>
              <v-list-item-subtitle>2 years 5 months experience</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item :ripple="false" color="contrast">
            <v-list-item-icon>
              <v-icon>mdi-all-inclusive-box-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Best Framework</v-list-item-title>
              <v-list-item-subtitle>2 years 5 months experience</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item :ripple="false" color="contrast">
            <v-list-item-icon>
              <v-icon>mdi-all-inclusive-box-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Best Framework</v-list-item-title>
              <v-list-item-subtitle>2 years 5 months experience</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

      </v-list>
    </v-card>
</template>

<script>
  import { mapState, mapActions } from "vuex";
  import util from "@/helpers/util";
  export default {
    name: 'CompetenciesList',
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
        selection: 1,
      }
    },
    methods: {
      ...mapActions({
        changeSelectedCompetency: 'CompetenciesModule/setSelectedCompetency',
        changeCompetencyGroupSelection: 'CompetenciesModule/setListSelection'
      }),
      displayCompetence(competence){
        this.changeSelectedCompetency(competence);
      },
      changeGroupSelection(selection, group){
        this.changeCompetencyGroupSelection({type: group, value: selection});
      },
      experience(start, stop){
        return util.calculateExperience(start, stop);
      }
    },
    computed: {
      ...mapState('CompetenciesModule', ['codeLanguageSelected', 'technologySelected', 'frameworkSelected']),
    },
    mounted() {
      
    },
    watch: {
      
    },
  }
</script>

<style lang="scss">

</style>  