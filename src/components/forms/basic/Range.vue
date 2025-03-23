<template>
  <b-form-input
    type="range"
    :min="min"
    :max="max"
    :step="step"
    :value="value"
    :disabled="disabled"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
  step: {
    type: Number,
    default: 1,
  },
  value: {
    type: Number,
    default: 0,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>