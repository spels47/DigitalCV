<template>
  <v-dialog :value="showDialog" @click:outside="closeDialog()" scrollable width="1200" class="competenceDialog">
    <v-card color="cardbg" outlined rounded class="competenceDialog" style="overflow: hidden;">
      <Csharp v-if="selectedCompetency == 'Csharp'"></Csharp>
      <Javascript v-if="selectedCompetency == 'Javascript'"></Javascript>
      <VisualBasic v-if="selectedCompetency == 'Visual Basic'"></VisualBasic>
      <Typescript v-if="selectedCompetency == 'Typescript'"></Typescript>
      <Mssql v-if="selectedCompetency == 'Mssql'"></Mssql>
      <MongoDB v-if="selectedCompetency == 'MongoDB'"></MongoDB>
      <RavenDB v-if="selectedCompetency == 'RavenDB'"></RavenDB>
      <GoogleFirebase v-if="selectedCompetency == 'Google Firebase'"></GoogleFirebase>
      <Docker v-if="selectedCompetency == 'Docker'"></Docker>
      <RabbitMQ v-if="selectedCompetency == 'RabbitMQ'"></RabbitMQ>
      <AngularJS v-if="selectedCompetency == 'AngularJS'"></AngularJS>
      <Vue v-if="selectedCompetency == 'Vue'"></Vue>
      <Bootstrap v-if="selectedCompetency == 'Bootstrap'"></Bootstrap>
      <Vuetify v-if="selectedCompetency == 'Vuetify'"></Vuetify>
      <Vuex v-if="selectedCompetency == 'Vuex'"></Vuex>
      <VueRouter v-if="selectedCompetency == 'Vue Router'"></VueRouter>
      <Kanban v-if="selectedCompetency == 'Kanban'"></Kanban>
      <Scrum v-if="selectedCompetency == 'Scrum'"></Scrum>
      <NPM v-if="selectedCompetency == 'Node Package Manager (NPM)'"></NPM>
      <Yarn v-if="selectedCompetency == 'Yarn'"></Yarn>
      <Paket v-if="selectedCompetency == 'Paket'"></Paket>
      <NuGet v-if="selectedCompetency == 'NuGet'"></NuGet>
    </v-card>
  </v-dialog>
</template>

<script>
  import { mapState, mapActions } from "vuex";
  import Csharp from "./Competencies/Csharp.vue";
  import Javascript from "./Competencies/Javascript.vue";
  import VisualBasic from "./Competencies/VisualBasic.vue";
  import Typescript from "./Competencies/Typescript.vue";
  import Mssql from "./Competencies/Mssql.vue";
  import MongoDB from "./Competencies/MongoDB.vue";
  import RavenDB from "./Competencies/RavenDB.vue";
  import GoogleFirebase from "./Competencies/Google-Firebase.vue";
  import Docker from "./Competencies/Docker.vue";
  import RabbitMQ from "./Competencies/RabbitMQ.vue";
  import AngularJS from "./Competencies/AngularJS.vue";
  import Vue from "./Competencies/Vue.vue";
  import Bootstrap from "./Competencies/Bootstrap.vue";
  import Vuetify from "./Competencies/Vuetify.vue";
  import Vuex from "./Competencies/Vuex.vue";
  import VueRouter from "./Competencies/Vue-Router.vue";
  import Kanban from "./Competencies/Kanban.vue";
  import Scrum from "./Competencies/Scrum.vue";
  import NPM from "./Competencies/NPM.vue";
  import Yarn from "./Competencies/Yarn.vue";
  import Paket from "./Competencies/Paket.vue";
  import NuGet from "./Competencies/NuGet.vue";
  export default {
    name: 'CompetenciesDialog',
    components: {
      Csharp,
      Javascript,
      VisualBasic,
      Typescript,
      Mssql,
      MongoDB,
      RavenDB,
      GoogleFirebase,
      Docker,
      RabbitMQ,
      AngularJS,
      Vue,
      Bootstrap,
      Vuetify,
      Vuex,
      VueRouter,
      Kanban,
      Scrum,
      NPM,
      Yarn,
      Paket,
      NuGet
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

<style lang="scss" scoped>
  .competenceDialog{
    height: 60vh;
  }
</style>  