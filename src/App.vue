<template>
  <v-app class="app">
    <v-main>
      <v-app-bar color="background" app>

        <v-btn class="ml-2 mr-2" text color="primary" to="/dashboard">
          <v-icon left>mdi-home</v-icon>
          <span style="color: var(--v-contrast-base)">Dashboard</span>
        </v-btn>
        <v-btn class="ml-2 mr-2" text color="primary" to="/about">
          <v-icon left>mdi-card-account-mail</v-icon>
          <span style="color: var(--v-contrast-base)">Contact Patrick</span>
        </v-btn>

        <v-spacer></v-spacer>

        <TooltipIconButton v-if="darkModeState" @clicked="toggleDarkMode()" color="contrast" icon="mdi-weather-night" tooltip="Toggle dark mode"/>
        <TooltipIconButton v-if="!darkModeState" @clicked="toggleDarkMode()" color="contrast" icon="mdi-weather-sunny" tooltip="Toggle dark mode"/>
        <v-menu offset-y>
          <template #activator="menu">
            <v-tooltip bottom>
              <template #activator="tooltip">
                <v-btn v-on="{ ...menu.on, ...tooltip.on }" v-bind="{...menu.attrs, ...tooltip.attrs}" color="contrast" icon>
                  <v-icon>mdi-translate</v-icon>
                </v-btn>
              </template>
              <span>Change language</span>
            </v-tooltip>
          </template>

          <v-list>
            <v-list-item-group v-model="selectedLanguageIndex" color="primary">
              <v-list-item v-for="(language, index) in languages" :key="index">
                <v-list-item-icon>
                  <v-icon>mdi-flag</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="language.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
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
    this.selectedLanguageIndex = this.languages.indexOf(this.getLanguageByValue(window.localStorage.getItem("selectedLanguage"))) ?? 0;
    this.selectedLanguage = this.getLanguageByValue(window.localStorage.getItem("selectedLanguage")) ?? this.languages[0]; // replace default with what country the browser says the user is from
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
        selectedLanguageIndex: null,
        selectedLanguage: null,
        languages: [
          {
            text: "English",
            value: "EN"
          },
          {
            text: "Norwegian",
            value: "NO"
          }
        ]
      }
    },
  methods: {
      toggleDarkMode: function (){
        this.$store.commit("updateVuetifyDarkMode", !this.$vuetify.theme.dark);
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      },
      getLanguageByValue(value){
        return this.languages.find(x => x.value == value);
      }
    },
    computed: {
      darkModeState() {
        return this.$vuetify.theme.dark;
      }
    },
  watch: {
    selectedLanguageIndex: {
      handler: function (newValue, oldValue) {
        this.selectedLanguage = this.languages[newValue];
        window.localStorage.setItem("selectedLanguage", this.languages[newValue]?.value);
      },
      deep: false
    }
  },
};
</script>

<style lang="scss">
//variables
/*
var(--v-NAME_OF_VARIABLE-base)
var(--v-NAME_OF_VARIABLE-lighten[1 - 5])
var(--v-NAME_OF_VARIABLE-darken[1 - 5])
*/

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
  // border-radius: 20px;
  background-color: var(--v-background-base);
}

*::-webkit-scrollbar-track:hover {
  background-color: var(--v-highlight-base);
}

*::-webkit-scrollbar-track:active {
  background-color: var(--v-marked-base);
}

*::-webkit-scrollbar-thumb {
  border-radius: 100px;
  background-color: var(--v-primary-base);
}

*::-webkit-scrollbar-thumb:hover {
  background-color: var(--v-primary-lighten1);
}

*::-webkit-scrollbar-thumb:active {
  background-color: var(--v-primary-lighten2);
}
</style>
