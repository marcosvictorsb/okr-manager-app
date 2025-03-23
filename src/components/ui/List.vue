<template>
  <b-list-group :flush="flush" :horizontal="horizontal">
    <template v-for="(item, index) in items" :key="index">
      <b-list-group-item
        :active="item.active"
        :disabled="item.disabled"
        :variant="item.variant"
        :href="item.href"
        :type="item.type"
        :class="item.class"
      >
      <div class="d-flex align-items-center">
        <template v-if="item.icon">
          <i :class="item.icon" :style="item.iconStyle"></i>
        </template>
        <template v-if="item.badge">
          
            <div>{{ item.text }}</div>
            <b-badge
              :variant="item.badge.variant"
              :class="['ms-auto', item.badge.class].filter(c => c !== 'text-bg-secondary')"
            >
              {{ item.badge.text }}
            </b-badge>
          
        </template>
        <template v-else>
          {{ item.text }}
        </template>
      </div>
      </b-list-group-item>
    </template>
  </b-list-group>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface ListItem {
  text: string;
  icon?: string;
  iconStyle?: string;
  badge?: {
    text: string;
    variant?: string;
    class?: string;
  };
  active?: boolean;
  disabled?: boolean;
  variant?: string;
  href?: string;
  type?: string;
  class?: string;
}

const props = defineProps<{
  items: ListItem[];
  flush?: boolean;
  horizontal?: boolean | string;
}>();
</script>


<style lang="css" scoped>

</style>