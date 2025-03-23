<template>
  <b-nav :tabs="tabs" :pills="pills" :justified="justified">
    <b-nav-item
      v-for="(item, index) in items"
      :key="index"
      :active="item.active"
      :disabled="item.disabled"
    >
      {{ item.text }}
      <b-nav-item-dropdown v-if="item.dropdown" :text="item.dropdown.text" toggle-class="nav-link">
        <b-dropdown-item v-for="(dropdownItem, idx) in item.dropdown.items" :key="idx">
          {{ dropdownItem.text }}
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </b-nav-item>
  </b-nav>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  tabs: {
    type: Boolean,
    default: false,
  },
  pills: {
    type: Boolean,
    default: false,
  },
  justified: {
    type: Boolean,
    default: false,
  },
  items: {
    type: Array as () => Array<{
      text: string;
      active?: boolean;
      disabled?: boolean;
      dropdown?: {
        items: Array<{ text: string }>;
      };
    }>,
    default: () => [],
  },
});
</script>