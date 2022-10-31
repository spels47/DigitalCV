<template>
  <v-card :loading="loading" color="cardbg" class="pl-2 pr-2 pt-1 pb-1">
      <v-list color="cardbg" dense>
        <v-list-item-title>Technical Competencies</v-list-item-title>
        <v-divider></v-divider>
        <v-subheader>Code Languages</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item :ripple="false" color="contrast">
            <v-list-item-icon >
              <v-icon>mdi-all-inclusive-box-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Best Programming Language</v-list-item-title>
              <v-list-item-subtitle>2 years 5 months experience</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item :ripple="false" color="contrast">
            <v-list-item-icon>
              <v-icon>mdi-all-inclusive-box-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Best Programming Language</v-list-item-title>
              <v-list-item-subtitle>2 years 5 months experience</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item :ripple="false" color="contrast">
            <v-list-item-icon>
              <v-icon>mdi-all-inclusive-box-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Best Programming Language</v-list-item-title>
              <v-list-item-subtitle>2 years 5 months experience</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
        <v-divider></v-divider>
        <v-subheader>Technologies</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item :ripple="false" color="contrast">
            <v-list-item-icon>
              <v-icon>mdi-all-inclusive-box-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Best Tecnology</v-list-item-title>
              <v-list-item-subtitle>2 years 5 months experience</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item :ripple="false" color="contrast">
            <v-list-item-icon>
              <v-icon>mdi-all-inclusive-box-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Best Tecnology</v-list-item-title>
              <v-list-item-subtitle>2 years 5 months experience</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item :ripple="false" color="contrast">
            <v-list-item-icon>
              <v-icon>mdi-all-inclusive-box-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Best Tecnology</v-list-item-title>
              <v-list-item-subtitle>2 years 5 months experience</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
        <v-divider></v-divider>
        <v-subheader>Frameworks</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item :ripple="false" color="contrast">
            <v-list-item-icon>
              <v-icon>mdi-all-inclusive-box-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Best Framework</v-list-item-title>
              <v-list-item-subtitle>2 years 5 months experience</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item :ripple="false" color="contrast">
            <v-list-item-icon>
              <v-icon>mdi-all-inclusive-box-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Best Framework</v-list-item-title>
              <v-list-item-subtitle>2 years 5 months experience</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item :ripple="false" color="contrast">
            <v-list-item-icon>
              <v-icon>mdi-all-inclusive-box-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Best Framework</v-list-item-title>
              <v-list-item-subtitle>2 years 5 months experience</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
</template>

<script>
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
        selection: 1,
      }
    },
    methods: {
      
    },
    computed: {
      
    },
    mounted() {
      
    },
    watch: {
      
    },
  }
</script>

<style lang="scss">

</style>  