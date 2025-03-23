<template>
  <b-form-select
    :model-value="modelValue"
    :options="options"
    :multiple="multiple"
    :disabled="disabled"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  options: {
    type: Array as () => Array<{ value: string; text: string }>,
    default: () => [],
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>