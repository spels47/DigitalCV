import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
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
            cardbg: "#FFFFFF",
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
            cardbg: "#424242",
            marked: "#BDBDBD",
            tablered: "#d32f2f",
            contrast: "#FFFFFF"
          }
        }
      }
});
