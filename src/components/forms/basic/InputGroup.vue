<template>
  <b-input-group>
    <b-input-group-text v-if="prependText">{{ prependText }}</b-input-group-text>
    <b-form-input :type="type" :placeholder="placeholder" />
    <b-input-group-text v-if="appendText">{{ appendText }}</b-input-group-text>
  </b-input-group>
</template>

<script setup lang="ts">
const props = defineProps({
  prependText: {
    type: String,
    default: "",
  },
  appendText: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
});
</script>