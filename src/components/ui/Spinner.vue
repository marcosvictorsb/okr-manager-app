<template>
  <b-spinner
    :variant="variant"
    :type="type"
    :small="small"
    :class="customClass"
    :style="style"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  variant: {
    type: String,
    default: "primary",
  },
  type: {
    type: String,
    default: "border", // 'border' or 'grow'
  },
  small: {
    type: Boolean,
    default: false,
  },
  customClass: {
    type: String,
    default: "",
  },
  style: {
    type: Object,
    default: () => ({}),
  },
});
</script>