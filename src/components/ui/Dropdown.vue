<template>
  <b-dropdown :variant="variant" :size="size" :menu-class="menuClass" :toggle-class="toggleClass" :dropup="dropup" :dropend="dropend" :dropstart="dropstart">
    <template #button-content>
      <slot name="button-content">Dropdown <i class="las la-angle-down ms-1"></i></slot>
    </template>
    <template v-for="(item, index) in items" :key="index">
      <b-dropdown-divider v-if="item.divider" />
      <b-dropdown-item v-else-if="item.link" :href="item.link">{{ item.text }}</b-dropdown-item>
      <b-dropdown-item v-else @click="item.action">{{ item.text }}</b-dropdown-item>
    </template>
  </b-dropdown>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  variant: { type: String, default: "primary" },
  size: { type: String, default: null },
  menuClass: { type: String, default: null },
  toggleClass: { type: String, default: null },
  dropup: { type: Boolean, default: false },
  dropend: { type: Boolean, default: false },
  dropstart: { type: Boolean, default: false },
  items: {
    type: Array,
    default: () => [
      { text: "Action", action: () => console.log("Action clicked") },
      { text: "Another action", action: () => console.log("Another action clicked") },
      { text: "Something else here", action: () => console.log("Something else clicked") },
      { divider: true },
      { text: "Separated link", link: "#" },
    ],
  },
});
</script>