<template>
  <v-app class="app">
    <v-main class="main">
      <v-app-bar color="background lighten-1" app>

        <v-app-bar-nav-icon @click="navDrawerOpen = true"></v-app-bar-nav-icon>
        <v-btn class="ml-2 mr-2" text color="primary" to="/dashboard">
          <v-icon left>mdi-home</v-icon>
          <span style="color: var(--v-contrast-base)">{{$t("topBar.dashboard")}}</span>
        </v-btn>
        <v-btn class="ml-2 mr-2 contactButtonTop" text color="primary" to="/contact">
          <v-icon left>mdi-card-account-mail</v-icon>
          <span style="color: var(--v-contrast-base)">{{$t("topBar.contact")}}</span>
        </v-btn>

        <v-spacer></v-spacer>

        <TooltipIconButton v-if="darkModeState" @clicked="toggleDarkMode()" color="contrast" icon="mdi-weather-night" :tooltip="$t('topBar.darkMode')"/>
        <TooltipIconButton v-if="!darkModeState" @clicked="toggleDarkMode()" color="contrast" icon="mdi-weather-sunny" :tooltip="$t('topBar.darkMode')"/>
        <v-menu offset-y>
          <template #activator="menu">
            <v-tooltip bottom>
              <template #activator="tooltip">
                <v-btn v-on="{ ...menu.on, ...tooltip.on }" v-bind="{...menu.attrs, ...tooltip.attrs}" color="contrast" icon>
                  <v-icon>mdi-translate</v-icon>
                </v-btn>
              </template>
              <span>{{$t("topBar.languagePicker")}}</span>
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

      <v-navigation-drawer v-model="navDrawerOpen" absolute temporary>
        <v-list nav dense>
          <v-list-item-group v-model="navDrawerGroup" active-class="primary--text text--accent-4">
            <v-list-item to="/education">
              <v-list-item-icon>
                <v-icon>mdi-account-school</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{$t("topBar.education")}}</v-list-item-title>
            </v-list-item>

            <v-list-item to="/references">
              <v-list-item-icon>
                <v-icon>mdi-account-heart</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{$t("topBar.references")}}</v-list-item-title>
            </v-list-item>

            <v-list-item class="contactButtonDrawer" to="/contact">
              <v-list-item-icon>
                <v-icon>mdi-card-account-mail</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{$t("topBar.contact")}}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

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
    this.$i18n.locale = this.selectedLanguage.value.toLowerCase();
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
        ],
        navDrawerOpen: false,
        navDrawerGroup: []
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
        if(newValue < 0) {
          this.selectedLanguageIndex = oldValue;
          return;
        }
        if(newValue == null) newValue = oldValue;
        this.selectedLanguage = this.languages[newValue];
        window.localStorage.setItem("selectedLanguage", this.languages[newValue]?.value);
        this.$i18n.locale = this.selectedLanguage.value.toLowerCase();
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
  scrollbar-color: var(--v-secondary-base) var(--v-background-lighten1);
}

.main{
  background-color: var(--v-background-base);
}

/* Chrome, Edge and Safari */
*::-webkit-scrollbar {
  width: 10px;
}
*::-webkit-scrollbar-track {
  // border-radius: 20px;
  background-color: var(--v-background-lighten1);
}

*::-webkit-scrollbar-track:hover {
  background-color: var(--v-highlight-base);
}

*::-webkit-scrollbar-track:active {
  background-color: var(--v-secondary-base);
}

*::-webkit-scrollbar-thumb {
  border-radius: 100px;
  background-color: var(--v-primary-darken1);
}

*::-webkit-scrollbar-thumb:hover {
  background-color: var(--v-primary-base);
}

*::-webkit-scrollbar-thumb:active {
  background-color: var(--v-primary-lighten1);
}

.contactButtonDrawer{
  visibility: hidden;
}

@media only screen and (max-width: 1220px) {
  .app{
    overflow-y: auto;
  }
}
@media only screen and (max-width: 530px) {
  .contactButtonTop{
    display: none;
  }
  .contactButtonDrawer{
    visibility: initial;
  }
}
</style>
