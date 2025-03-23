<template>
  <b-tooltip :target="target" :class="customClass">
    {{ content }}
  </b-tooltip>
</template>

<script setup lang="ts">
const props = defineProps({
  target: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    default: "",
  },
  customClass: {
    type: String,
    default: "",
  },
});
</script>