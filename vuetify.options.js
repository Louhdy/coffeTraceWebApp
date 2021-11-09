import colors from 'vuetify/es5/util/colors'
import es from 'vuetify/es5/locale/es';
import en from 'vuetify/es5/locale/en';

export default {
  customVariables: ['~/assets/variables.scss'],
  optionsPath: './vuetify.options.js',
  treeShake: true,
  lang: {
    locales: { es, en },
    current: 'es',
  },
  theme: {
    dark: false,
      themes: {
      dark: {
        primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
      },
      light: {
        primary: '#1ECD96',
          secondary: colors.grey.darken3,
          accent: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
      }
    }
  }
}
