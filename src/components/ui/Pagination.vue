<template>
  <b-pagination
    v-model="currentPage"
    :total-rows="totalRows"
    :per-page="perPage"
    :prev-text="prevText"
    :next-text="nextText"
    :first-number="firstNumber"
    :last-number="lastNumber"
    :size="size"
    :class="alignmentClass"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  totalRows: {
    type: Number,
    required: true,
  },
  perPage: {
    type: Number,
    required: true,
  },
  prevText: {
    type: String,
    default: "Previous",
  },
  nextText: {
    type: String,
    default: "Next",
  },
  firstNumber: {
    type: Boolean,
    default: false,
  },
  lastNumber: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "",
  },
  alignmentClass: {
    type: String,
    default: "",
  },
});

const currentPage = ref(1);
</script>