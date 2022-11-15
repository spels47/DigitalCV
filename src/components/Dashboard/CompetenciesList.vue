<template>
  <v-card :loading="loading" color="cardbg" class="pl-2 pr-2 pt-1 pb-1" width="15vw" style="max-height: 100%; overflow-x: auto;">
      <v-list color="cardbg" dense>
        <v-list-item-title>{{$t("technicalList.title")}}</v-list-item-title>

        <v-divider class="my-2"></v-divider>

        <v-subheader>{{$t("technicalList.codeLanguageHeader")}}</v-subheader>
        <v-list-item-group color="primary" :value="codeLanguageSelected" @change="changeGroupSelection($event, 'codeLanguage')">
          <v-list-item v-for="(codeLanguage, index) in codeLanguages" :key="index" :ripple="false" color="contrast" @click="displayCompetence(codeLanguage.name)">
            <v-list-item-icon >
              <v-icon>mdi-file-code</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{codeLanguage.name}}</v-list-item-title>
              <v-list-item-subtitle>{{experience(codeLanguage.experienceStart, codeLanguage.experienceStop)}} experience</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

        <v-divider class="my-2"></v-divider>

        <v-subheader>{{$t("technicalList.technologyHeader")}}</v-subheader>
        <v-list-item-group color="primary" :value="technologySelected" @change="changeGroupSelection($event, 'technology')">
          <v-list-item v-for="(technology, index) in technologies" :key="index" :ripple="false" color="contrast" @click="displayCompetence(technology.name)">
            <v-list-item-icon>
              <v-icon>mdi-cards-spade-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{technology.name}}</v-list-item-title>
              <v-list-item-subtitle>{{experience(technology.experienceStart, technology.experienceStop)}} experience</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

        <v-divider class="my-2"></v-divider>

        <v-subheader>{{$t("technicalList.frameworkHeader")}}</v-subheader>
        <v-list-item-group color="primary" :value="frameworkSelected" @change="changeGroupSelection($event, 'framework')">
          <v-list-item v-for="(framework, index) in frameworks" :key="index" :ripple="false" color="contrast" @click="displayCompetence(framework.name)">
            <v-list-item-icon>
              <v-icon>mdi-code-json</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{framework.name}}</v-list-item-title>
              <v-list-item-subtitle>{{experience(framework.experienceStart, framework.experienceStop)}} experience</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

        <v-divider class="my-2"></v-divider>

        <v-subheader>{{$t("technicalList.methodologyHeader")}}</v-subheader>
        <v-list-item-group color="primary" :value="methodologySelected" @change="changeGroupSelection($event, 'methodology')">
          <v-list-item v-for="(methodology, index) in methodologies" :key="index" :ripple="false" color="contrast" @click="displayCompetence(methodology.name)">
            <v-list-item-icon>
              <v-icon>mdi-book</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{methodology.name}}</v-list-item-title>
              <v-list-item-subtitle>{{experience(methodology.experienceStart, methodology.experienceStop)}} experience</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

        <v-divider class="my-2"></v-divider>

        <v-subheader>{{$t("technicalList.packageManagerHeader")}}</v-subheader>
        <v-list-item-group color="primary" :value="packageManagerSelected" @change="changeGroupSelection($event, 'packageManager')">
          <v-list-item v-for="(packageManager, index) in packageManagers" :key="index" :ripple="false" color="contrast" @click="displayCompetence(packageManager.name)">
            <v-list-item-icon>
              <v-icon>mdi-package-variant-closed</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{packageManager.name}}</v-list-item-title>
              <v-list-item-subtitle>{{experience(packageManager.experienceStart, packageManager.experienceStop)}} experience</v-list-item-subtitle>
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
        codeLanguages: [
          {
            name: "Csharp",
            experienceStart: new Date(2016, 8),
            experienceStop: null
          },
          {
            name: "Javascript",
            experienceStart: new Date(2019, 1, 27),
            experienceStop: null
          },
          {
            name: "Visual Basic",
            experienceStart: new Date(2020, 1),
            experienceStop: null
          },
          {
            name: "Typescript",
            experienceStart: new Date(2020, 8),
            experienceStop: new Date(2021, 2)
          }
        ],
        technologies: [
          {
            name: "Mssql",
            experienceStart: new Date(2019, 3),
            experienceStop: null
          },
          {
            name: "MongoDB",
            experienceStart: new Date(2020, 1),
            experienceStop: null
          },
          {
            name: "RavenDB",
            experienceStart: new Date(2019, 11),
            experienceStop: new Date(2020, 3)
          },
          {
            name: "Google Firebase",
            experienceStart: new Date(2019, 2),
            experienceStop: new Date(2019, 3)
          },
          {
            name: "Docker",
            experienceStart: new Date(2020, 2),
            experienceStop: null
          },
          {
            name: "RabbitMQ",
            experienceStart: new Date(2020, 7),
            experienceStop: null
          }
        ],
        frameworks: [
          {
            name: "AngularJS",
            experienceStart: new Date(2019, 9),
            experienceStop: new Date(2021, 2)
          },
          {
            name: "Vue",
            experienceStart: new Date(2019, 2),
            experienceStop: null
          },
          {
            name: "Bootstrap",
            experienceStart: new Date(2019, 2),
            experienceStop: new Date(2021, 2)
          },
          {
            name: "Vuetify",
            experienceStart: new Date(2022, 2),
            experienceStop: null
          },
          {
            name: "Vuex",
            experienceStart: new Date(2022, 2),
            experienceStop: null
          },
          {
            name: "Vue Router",
            experienceStart: new Date(2019, 2),
            experienceStop: null
          }
        ],
        methodologies: [
          {
            name: "Kanban",
            experienceStart: new Date(2019, 9),
            experienceStop: null
          },
          {
            name: "Scrum",
            experienceStart: new Date(2019, 9),
            experienceStop: null
          }
        ],
        packageManagers: [
          {
            name: "Node Package Manager (NPM)",
            experienceStart: new Date(2019, 1, 27),
            experienceStop: null
          },
          {
            name: "Yarn",
            experienceStart: new Date(2019, 9),
            experienceStop: new Date(2020, 1)
          },
          {
            name: "Paket",
            experienceStart: new Date(2019, 9),
            experienceStop: new Date(2021, 1)
          },
          {
            name: "NuGet",
            experienceStart: new Date(2019, 9),
            experienceStop: null
          }
        ]
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
        return util.calculateExperience(start, stop, this.$t("years"), this.$t("months"), this.$t("days"));
      }
    },
    computed: {
      ...mapState('CompetenciesModule', ['codeLanguageSelected', 'technologySelected', 'frameworkSelected', 'methodologySelected', 'packageManagerSelected']),
    },
    mounted() {
      
    },
    watch: {
      
    },
  }
</script>

<style lang="scss">

</style>  