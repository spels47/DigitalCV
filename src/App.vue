<template>
  <v-app class="app">
    <v-main>
      <v-app-bar color="background" app>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-toolbar-title>Page title</v-toolbar-title>

        <v-spacer></v-spacer>

        <TooltipIconButton v-if="darkModeState" @clicked="toggleDarkMode()" color="contrast" icon="mdi-weather-night" tooltip="Toggle dark mode"/>
        <TooltipIconButton v-if="!darkModeState" @clicked="toggleDarkMode()" color="contrast" icon="mdi-weather-sunny" tooltip="Toggle dark mode"/>
      </v-app-bar>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import TooltipIconButton from "@/components/TooltipIconButton";
export default {
  name: 'App',
  components: {
    TooltipIconButton
  },
  mounted() {
    if (window.localStorage.getItem("darkmode") == "true" || window.localStorage.getItem("darkmode") == null) {
      this.$vuetify.theme.dark = true;
      this.$store.commit("updateVuetifyDarkMode", true);
    } 
    else {
      this.$vuetify.theme.dark = false;
      this.$store.commit("updateVuetifyDarkMode", false);
    }
  },
  data: function () {
      return {
        drawer: false,
        group: null,
      }
    },
  methods: {
      toggleDarkMode: function (){
        this.$store.commit("updateVuetifyDarkMode", !this.$vuetify.theme.dark);
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      }
    },
    computed: {
      darkModeState() {
        return this.$vuetify.theme.dark;
      }
    }
};
</script>

<style lang="scss">
.app{
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

* {
  scrollbar-width: thin;
  scrollbar-color: var(--v-secondary) var(--v-background);
}

/* Chrome, Edge and Safari */
*::-webkit-scrollbar {
  width: 10px;
}
*::-webkit-scrollbar-track {
  border-radius: 20px;
  background-color: var(--v-background);
}

*::-webkit-scrollbar-track:hover {
  background-color: var(--v-highlight);
}

*::-webkit-scrollbar-track:active {
  background-color: var(--v-marked);
}

*::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: var(--v-primary);
}

*::-webkit-scrollbar-thumb:hover {
  background-color: var(--v-primary-lighten1);
}

*::-webkit-scrollbar-thumb:active {
  background-color: var(--v-primary-lighten2);
}
</style>
