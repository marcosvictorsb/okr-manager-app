<template>
  <b-accordion :flush="flush" :free="free">
    <b-accordion-item
      v-for="(item, index) in items"
      :key="index"
      :title="item.title"
      :header-class="item.headerClass"
      :button-class="item.buttonClass"
      :visible="item.visible"
    >
      {{ item.content }}
    </b-accordion-item>
  </b-accordion>
</template>

<script setup lang="ts">
const props = defineProps({
  flush: {
    type: Boolean,
    default: false,
  },
  free: {
    type: Boolean,
    default: false,
  },
  items: {
    type: Array as () => Array<{
      title: string;
      content: string;
      headerClass?: string;
      buttonClass?: string;
      visible?: boolean;
    }>,
    default: () => [],
  },
});
</script>