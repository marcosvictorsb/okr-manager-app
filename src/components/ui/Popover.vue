<template>
  <b-popover
    :target="target"
    :triggers="triggers"
    :placement="placement"
    :class="customClass"
  >
    <template #title>{{ title }}</template>
    {{ content }}
  </b-popover>
</template>

<script setup lang="ts">
const props = defineProps({
  target: {
    type: String,
    required: true,
  },
  triggers: {
    type: String,
    default: "click",
  },
  placement: {
    type: String,
    default: "right",
  },
  title: {
    type: String,
    default: "",
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