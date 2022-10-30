import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

// import en from 'vuetify/src/locale/en'
// import no from 'vuetify/src/locale/no'
// import fr from 'vuetify/src/locale/fr'
// import es from 'vuetify/src/locale/es'
// import da from 'vuetify/src/locale/da'
// import de from 'vuetify/src/locale/de'
// import pl from 'vuetify/src/locale/pl'
// import fi from 'vuetify/src/locale/fi'
// import it from 'vuetify/src/locale/it'
// import nl from 'vuetify/src/locale/nl'
// import sv from 'vuetify/src/locale/sv'

export default new Vuetify({
    // lang: {
    //   locales: { en, no, fr, es, da, de, pl, fi, it, nl, sv },
    //   current: window.localStorage.getItem("selectedLanguage")?.toLowerCase() ?? 'en',
    // },
    theme: {
        options: { customProperties: true },
        themes: {
          light: {
            primary: "#03A9F4",
            secondary: "#8BC34A",
            accent: "#FF9E80",
            error: "#E5043A",
            info: "#C800A1",
            success: "#4CAA71",
            warning: "#FF9A00",
            background: "#BDBDBD",
            highlight: "#e0e0e0",
            faded: "#BBBBBB",
            black: "#000000",
            cardbg: "#E7E7E7",
            marked: "#00b7bd",
            tablered: "#ffcdd2",
            contrast: "#000000"
          },
          dark: {
            primary: "#E53935",
            secondary: "#FFEB3B",
            accent: "#5E35B1",
            error: "#E5043A",
            warning: "#FF9A00",
            info: "#03a9f4",
            success: "#4CAA71",
            background: "#2B2B2B",
            cardbg: "#474747",
            marked: "#BDBDBD",
            tablered: "#d32f2f",
            contrast: "#FFFFFF"
          }
        }
      }
});
