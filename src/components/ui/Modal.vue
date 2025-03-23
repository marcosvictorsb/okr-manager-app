<template>
  <b-modal
    v-model="modelValue"
    :title="title"
    :size="size"
    :ok-title="okTitle"
    :cancel-title="cancelTitle"
    :centered="centered"
    :scrollable="scrollable"
    :fullscreen="fullscreen"
    :header-class="headerClass"
    :title-class="titleClass"
    :ok-variant="okVariant"
    :hide-footer="hideFooter"
    :body-class="bodyClass"
  >
    <slot></slot>
  </b-modal>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "",
  },
  okTitle: {
    type: String,
    default: "Save changes",
  },
  cancelTitle: {
    type: String,
    default: "Close",
  },
  centered: {
    type: Boolean,
    default: false,
  },
  scrollable: {
    type: Boolean,
    default: false,
  },
  fullscreen: {
    type: [Boolean, String],
    default: false,
  },
  headerClass: {
    type: String,
    default: "",
  },
  titleClass: {
    type: String,
    default: "",
  },
  okVariant: {
    type: String,
    default: "primary",
  },
  hideFooter: {
    type: Boolean,
    default: false,
  },
  bodyClass: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

const modelValue = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newVal) => {
    modelValue.value = newVal;
  }
);

watch(
  () => modelValue.value,
  (newVal) => {
    emit("update:modelValue", newVal);
  }
);
</script>