<template>
  <b-form-radio
    :value="value"
    :name="name"
    :checked="checked"
    :disabled="disabled"
    :inline="inline"
    :button="button"
    :button-variant="buttonVariant"
    :size="size"
  >
    <slot></slot>
  </b-form-radio>
</template>

<script setup lang="ts">
const props = defineProps({
  value: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  checked: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  inline: {
    type: Boolean,
    default: false,
  },
  button: {
    type: Boolean,
    default: false,
  },
  buttonVariant: {
    type: String,
    default: "primary",
  },
  size: {
    type: String,
    default: "",
  },
});
</script>