<template>
  <b-form-file :disabled="disabled" />
</template>

<script setup lang="ts">
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>