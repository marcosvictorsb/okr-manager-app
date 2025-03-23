<template>
  <b-form-input
    :type="type"
    :placeholder="placeholder"
    :value="value"
    :size="size"
    :state="state"
    :disabled="disabled"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
  value: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "",
  },
  state: {
    type: Boolean,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>