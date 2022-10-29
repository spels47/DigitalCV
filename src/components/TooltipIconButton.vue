<template>
  <v-tooltip bottom>
    <template #activator="{ on, attrs }">
      <v-icon v-if="!clickable" :color="color" v-on="on" v-bind="attrs">{{ icon }}</v-icon>
      <v-btn
        v-if="clickable"
        :color="color"
        :class="{ 'disable-events': disabled }"
        v-on="on"
        v-bind="attrs"
        :loading="loading"
        icon
        @click.stop="buttonClicked"
     >
        <v-icon> {{ icon }}</v-icon>
        <span
          v-if="shouldWarn"
          class="error--text headline"
        >
          !
        </span>
      </v-btn>
    </template>
    <span>{{ tooltip }}</span>
  </v-tooltip>
</template>

<script>
export default {
  name: "TooltipIconButton",
  props: {
    icon: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean
    },
    loading: {
      type: Boolean,
    },
    color: {
      type: String,
      default: "secondary"
    },
    tooltip: {
      type: String,
      required: true
    },
    shouldWarn: {
      type: Boolean
    },
    clickable: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    buttonClicked() {
      if (!this.disabled)
        this.$emit("clicked");
    }
  },
};
</script>

<style scoped>
.disable-events {
  pointer-events: none
}
</style>
