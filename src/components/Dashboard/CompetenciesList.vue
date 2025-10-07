<template>
  <v-card :loading="loading" color="cardbg" class="pl-2 pr-2 pt-1 pb-1 listCard">
      <v-list color="cardbg" dense>
        <v-list-item-title>{{$t("technicalList.title")}}</v-list-item-title>

        <v-divider class="my-2"></v-divider>

        <v-subheader>{{$t("technicalList.codeLanguageHeader")}}</v-subheader>
        <v-list-item-group color="primary" :value="codeLanguageSelected" @change="changeGroupSelection($event, 'codeLanguage')">
          <v-list-item v-for="(codeLanguage, index) in sortedCodeLanguages" :key="index" :ripple="false" color="contrast" @click="displayCompetence(codeLanguage.name)">
            <v-list-item-icon >
              <v-icon>mdi-file-code</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{codeLanguage.name}}</v-list-item-title>
              <v-list-item-subtitle>{{experience(codeLanguage.experienceDates)}} {{$t("experience")}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

        <v-divider class="my-2"></v-divider>

        <v-subheader>{{$t("technicalList.technologyHeader")}}</v-subheader>
        <v-list-item-group color="primary" :value="technologySelected" @change="changeGroupSelection($event, 'technology')">
          <v-list-item v-for="(technology, index) in sortedTechnologies" :key="index" :ripple="false" color="contrast" @click="displayCompetence(technology.name)">
            <v-list-item-icon>
              <v-icon>mdi-cards-spade-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{technology.name}}</v-list-item-title>
              <v-list-item-subtitle>{{experience(technology.experienceDates)}} {{$t("experience")}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

        <v-divider class="my-2"></v-divider>

        <v-subheader>{{$t("technicalList.frameworkHeader")}}</v-subheader>
        <v-list-item-group color="primary" :value="frameworkSelected" @change="changeGroupSelection($event, 'framework')">
          <v-list-item v-for="(framework, index) in sortedFrameworks" :key="index" :ripple="false" color="contrast" @click="displayCompetence(framework.name)">
            <v-list-item-icon>
              <v-icon>mdi-code-json</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{framework.name}}</v-list-item-title>
              <v-list-item-subtitle>{{experience(framework.experienceDates)}} {{$t("experience")}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

        <v-divider class="my-2"></v-divider>

        <v-subheader>{{$t("technicalList.markupHeader")}}</v-subheader>
        <v-list-item-group color="primary" :value="markupSelected" @change="changeGroupSelection($event, 'markup')">
          <v-list-item v-for="(markup, index) in sortedMarkupAndDataFormats" :key="index" :ripple="false" color="contrast" @click="displayCompetence(markup.name)">
            <v-list-item-icon>
              <v-icon>mdi-marker</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{markup.name}}</v-list-item-title>
              <v-list-item-subtitle>{{experience(markup.experienceDates)}} {{$t("experience")}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

        <v-divider class="my-2"></v-divider>

        <v-subheader>{{$t("technicalList.methodologyHeader")}}</v-subheader>
        <v-list-item-group color="primary" :value="methodologySelected" @change="changeGroupSelection($event, 'methodology')">
          <v-list-item v-for="(methodology, index) in sortedMethodologies" :key="index" :ripple="false" color="contrast" @click="displayCompetence(methodology.name)">
            <v-list-item-icon>
              <v-icon>mdi-book</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{methodology.name}}</v-list-item-title>
              <v-list-item-subtitle>{{experience(methodology.experienceDates)}} {{$t("experience")}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

        <v-divider class="my-2"></v-divider>

        <v-subheader>{{$t("technicalList.packageManagerHeader")}}</v-subheader>
        <v-list-item-group color="primary" :value="packageManagerSelected" @change="changeGroupSelection($event, 'packageManager')">
          <v-list-item v-for="(packageManager, index) in sortedPackageManagers" :key="index" :ripple="false" color="contrast" @click="displayCompetence(packageManager.name)">
            <v-list-item-icon>
              <v-icon>mdi-package-variant-closed</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{packageManager.name}}</v-list-item-title>
              <v-list-item-subtitle>{{experience(packageManager.experienceDates)}} {{$t("experience")}}</v-list-item-subtitle>
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
            experienceDates: [
              {startDate: new Date(2016, 8), stopDate: new Date(2017, 5)},
              {startDate: new Date(2019, 4), stopDate: new Date(2020, 6, 19)},
              {startDate: new Date(2020, 7, 1), stopDate: new Date(2023, 3, 1)},
              {startDate: new Date(2023, 3, 1), stopDate: null}
            ]
          },
          {
            name: "Javascript",
            experienceDates: [
              {startDate: new Date(2019, 2), stopDate: new Date(2019, 4)},
              {startDate: new Date(2019, 9), stopDate: new Date(2023, 3)},
              {startDate: new Date(2024, 1, 19), stopDate: new Date(2024, 2, 1)},
              {startDate: new Date(2025, 10, 7), stopDate: null}
            ]
          },
          {
            name: "Visual Basic",
            experienceDates: [
              {startDate: new Date(2020, 7), stopDate: null}
            ]
          },
          {
            name: "Typescript",
            experienceDates: [
              {startDate: new Date(2020, 8), stopDate: new Date(2021, 2)},
              {startDate: new Date(2023, 3), stopDate: null}
            ]
          }
        ],
        technologies: [
          {
            name: "Mssql",
            experienceDates: [
              {startDate: new Date(2019, 3), stopDate: new Date(2019, 4)},
              {startDate: new Date(2019, 9), stopDate: null}
            ]
          },
          {
            name: "MongoDB",
            experienceDates: [
              {startDate: new Date(2020, 1), stopDate: null}
            ]
          },
          {
            name: "RavenDB",
            experienceDates: [
              {startDate: new Date(2019, 11), stopDate: new Date(2020, 3)}
            ]
          },
          {
            name: "Google Firebase",
            experienceDates: [
              {startDate: new Date(2019, 2), stopDate: new Date(2019, 3)}
            ]
          },
          {
            name: "Docker",
            experienceDates: [
              {startDate: new Date(2020, 2), stopDate: null}
            ]
          },
          {
            name: "RabbitMQ",
            experienceDates: [
              {startDate: new Date(2020, 7), stopDate: null}
            ]
          },
          {
            name: "Kafka",
            experienceDates: [
              {startDate: new Date(2023, 3), stopDate: null}
            ]
          }
        ],
        frameworks: [
          {
            name: "AngularJS",
            experienceDates: [
              {startDate: new Date(2019, 9), stopDate: new Date(2021, 2)}
            ]
          },
          {
            name: "React",
            experienceDates: [
              {startDate: new Date(2023, 3, 1), stopDate: null}
            ]
          },
          {
            name: "Vue",
            experienceDates: [
              {startDate: new Date(2019, 2), stopDate: new Date(2023, 3)},
              {startDate: new Date(2024, 1, 19), stopDate: new Date(2024, 2, 1)},
              {startDate: new Date(2025, 10, 7), stopDate: null}
            ]
          },
          {
            name: "Bootstrap",
            experienceDates: [
              {startDate: new Date(2019, 9), stopDate: new Date(2021, 2)}
            ]
          },
          {
            name: "Vuetify",
            experienceDates: [
              {startDate: new Date(2022, 2), stopDate: new Date(2023, 3)},
              {startDate: new Date(2024, 1, 19), stopDate: new Date(2024, 2, 1)},
              {startDate: new Date(2025, 10, 7), stopDate: null}
            ]
          },
          {
            name: "Vuex",
            experienceDates: [
              {startDate: new Date(2022, 2), stopDate: new Date(2023, 3)},
              {startDate: new Date(2024, 1, 19), stopDate: new Date(2024, 2, 1)},
              {startDate: new Date(2025, 10, 7), stopDate: null}
            ]
          },
          {
            name: "Vue Router",
            experienceDates: [
              {startDate: new Date(2019, 2), stopDate: new Date(2023, 3)},
              {startDate: new Date(2024, 1, 19), stopDate: new Date(2024, 2, 1)},
              {startDate: new Date(2025, 10, 7), stopDate: null}
            ]
          }
        ],
        markupAndDataFormats: [
          {
            name: "Json",
            experienceDates: [
              {startDate: new Date(2019, 2), stopDate: null}
            ]
          },
          {
            name: "Xml",
            experienceDates: [
              {startDate: new Date(2019, 9), stopDate: new Date(2023, 3)}
            ]
          },
          {
            name: "Yaml",
            experienceDates: [
              {startDate: new Date(2023, 3), stopDate: null}
            ]
          }
        ],
        methodologies: [
          {
            name: "Kanban",
            experienceDates: [
              {startDate: new Date(2019, 9), stopDate: null}
            ]
          },
          {
            name: "Scrum",
            experienceDates: [
              {startDate: new Date(2019, 9), stopDate: null}
            ]
          }
        ],
        packageManagers: [
          {
            name: "Node Package Manager (NPM)",
            experienceDates: [
              {startDate: new Date(2019, 1, 27), stopDate: null}
            ]
          },
          {
            name: "Yarn",
            experienceDates: [
              {startDate: new Date(2019, 9), stopDate: new Date(2020, 1)}
            ]
          },
          {
            name: "Paket",
            experienceDates: [
              {startDate: new Date(2019, 9), stopDate: new Date(2021, 1)}
            ]
          },
          {
            name: "NuGet",
            experienceDates: [
              {startDate: new Date(2019, 9), stopDate: null}
            ]
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
      experience(experienceList){
        return util.calculateExperienceList(experienceList, this.$t("years"), this.$t("months"), this.$t("days"));
      }
    },
    computed: {
      ...mapState('CompetenciesModule', ['codeLanguageSelected', 'technologySelected', 'frameworkSelected', 'markupSelected', 'methodologySelected', 'packageManagerSelected']),
      sortedCodeLanguages: function() {
        return this.codeLanguages.sort((a, b) => util.calculateExperienceAsTotalTime(b.experienceDates) - util.calculateExperienceAsTotalTime(a.experienceDates));
      },
      sortedTechnologies: function() {
        return this.technologies.sort((a, b) => util.calculateExperienceAsTotalTime(b.experienceDates) - util.calculateExperienceAsTotalTime(a.experienceDates));
      },
      sortedFrameworks: function() {
        return this.frameworks.sort((a, b) => util.calculateExperienceAsTotalTime(b.experienceDates) - util.calculateExperienceAsTotalTime(a.experienceDates));
      },
      sortedMarkupAndDataFormats: function() {
        return this.markupAndDataFormats.sort((a, b) => util.calculateExperienceAsTotalTime(b.experienceDates) - util.calculateExperienceAsTotalTime(a.experienceDates));
      },
      sortedMethodologies: function() {
        return this.methodologies.sort((a, b) => util.calculateExperienceAsTotalTime(b.experienceDates) - util.calculateExperienceAsTotalTime(a.experienceDates));
      },
      sortedPackageManagers: function() {
        return this.packageManagers.sort((a, b) => util.calculateExperienceAsTotalTime(b.experienceDates) - util.calculateExperienceAsTotalTime(a.experienceDates));
      }
    },
    mounted() {
      
    },
    watch: {
      
    },
  }
</script>

<style lang="scss" scoped>
  .listCard{
    width: 15vw;
    max-height: 100%;
    overflow-x: auto;
  }
  @media only screen and (max-width: 1220px) {
    .listCard{
      width: 70vw;
    }
  }
  @media only screen and (max-width: 900px) {
    .listCard{
      width: 90vw;
    }
  }
</style>  