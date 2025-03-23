<template>
  <div>
    <img
      :src="src"
      :alt="alt"
      :class="imageClass"
      :style="imageStyle"
    />
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: "Image" },
  imageClass: { type: String, default: "" },
  imageStyle: { type: Object, default: () => ({}) },
});
</script>