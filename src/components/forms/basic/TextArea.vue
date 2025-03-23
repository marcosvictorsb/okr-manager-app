<template>
  <b-form-textarea
    :rows="rows"
    :placeholder="placeholder"
    :value="value"
    :disabled="disabled"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  rows: {
    type: Number,
    default: 3,
  },
  placeholder: {
    type: String,
    default: "",
  },
  value: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>