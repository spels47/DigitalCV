import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: { customProperties: true },
        themes: {
          light: {
            primary: "#707070",
            secondary: "#25BACA",
            accent: "#C800A1",
            error: "#E5043A",
            info: "#C800A1",
            success: "#4CAA71",
            warning: "#FF9A00",
            background: "9B9B9B",
            highlight: "#e0e0e0",
            faded: "#BBBBBB",
            black: "#000000",
            cardbg: "#FFFFFF",
            marked: "#00b7bd",
            tablered: "#ffcdd2",
            contrast: "#000000"
          },
          dark: {
            primary: "#00bcd4",
            secondary: "#009688",
            accent: "#C800A1",
            error: "#E5043A",
            warning: "#FF9A00",
            info: "#03a9f4",
            success: "#4CAA71",
            background: "#2B2B2B",
            cardbg: "#1E1E1E",
            marked: "#00b7bd",
            tablered: "#d32f2f",
            contrast: "#FFFFFF"
          }
        }
      }
});
