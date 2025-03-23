<template>
  <b-progress
    :value="value"
    :max="max"
    :variant="variant"
    :striped="striped"
    :animated="animated"
    :show-value="showValue"
    :class="customClass"
    :style="style"
  >
    <b-progress-bar
      v-for="(bar, index) in bars"
      :key="index"
      :value="bar.value"
      :variant="bar.variant"
      :striped="bar.striped"
      :animated="bar.animated"
      :show-value="bar.showValue"
    />
  </b-progress>
</template>

<script setup lang="ts">
const props = defineProps({
  value: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
  variant: {
    type: String,
    default: "",
  },
  striped: {
    type: Boolean,
    default: false,
  },
  animated: {
    type: Boolean,
    default: false,
  },
  showValue: {
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
  bars: {
    type: Array as () => Array<{
      value: number;
      variant?: string;
      striped?: boolean;
      animated?: boolean;
      showValue?: boolean;
    }>,
    default: () => [],
  },
});
</script>