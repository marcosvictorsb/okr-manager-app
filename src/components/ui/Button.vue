<template>
  <b-button
    :type="type"
    :variant="variant"
    :size="size"
    :pill="pill"
    :disabled="disabled"
    :class="customClass"
    :style="style"
  >
    <slot></slot>
  </b-button>
</template>

<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: "button",
  },
  variant: {
    type: String,
    default: "primary",
  },
  size: {
    type: String,
    default: "",
  },
  pill: {
    type: Boolean,
    default: false,
  },
  disabled: {
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