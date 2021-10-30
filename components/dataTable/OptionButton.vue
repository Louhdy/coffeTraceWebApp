<template>
  <v-btn
    class="buttons"
    rounded
    color="primary"
    dark
    @click="handleClick"
  >
    <v-icon left>
      {{ icon }}
    </v-icon>
    {{ buttonName }}
  </v-btn>
</template>

<script>
export default {
  name: "OptionButton",
  props: {
    'buttonName': {
      default: '',
      type: String,
    },
    'icon': {
      default: '',
      type: String,
    },
  },
  methods: {
    handleClick() {
      this.$emit('clicked');
    },
  },

}
</script>

<style scoped>
.buttons {
  font-family: "Roboto", sans-serif;
}
</style>
