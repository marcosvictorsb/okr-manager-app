<template>
  <b-alert
    v-if="visible"
    :model-value="true"
    :variant="variant"
    :dismissible="dismissible"
    :class="customClass"
  >
    <div
      v-if="icon"
      class="d-inline-flex justify-content-center align-items-center thumb-xs"
      :class="`bg-${variant || 'primary'} rounded-circle mx-auto me-1`"
    >
      <i :class="`${icon} align-self-center mb-0 text-white`"></i>
    </div>
    <slot>
      <strong>{{ title }}</strong> {{ message }}
    </slot>
    <button
      v-if="dismissible"
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
      @click="hideAlert"
    ></button>
  </b-alert>
</template>

<script setup lang="ts">
import { defineProps, ref, onMounted } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "primary", // Default variant
  },
  title: {
    type: String,
    default: "", // Title of the alert
  },
  message: {
    type: String,
    default: "", // Message content
  },
  icon: {
    type: String,
    default: "", // Icon class (e.g., "fas fa-check")
  },
  dismissible: {
    type: Boolean,
    default: false, // Whether the alert is dismissible
  },
  customClass: {
    type: String,
    default: "", // Additional custom classes
  },
  autoDismiss: {
    type: Boolean,
    default: false, // Whether the alert should auto-dismiss
  },
  dismissTimeout: {
    type: Number,
    default: 5000, // Time in milliseconds before the alert disappears
  },
});

const visible = ref(true);

const hideAlert = () => {
  visible.value = false;
};

onMounted(() => {
  if (props.autoDismiss) {
    setTimeout(() => {
      hideAlert();
    }, props.dismissTimeout);
  }
});
</script>