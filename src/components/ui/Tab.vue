<template>
  <b-tabs :pills="pills" :justified="justified" :vertical="vertical" :nav-wrapper-class="navWrapperClass">
    <b-tab
      v-for="(tab, index) in tabs"
      :key="index"
      :title="tab.title"
      :active="tab.active"
      :id="tab.id"
    >
      <p class="mb-0 text-muted p-3">{{ tab.content }}</p>
    </b-tab>
  </b-tabs>
</template>

<script setup lang="ts">
const props = defineProps({
  pills: {
    type: Boolean,
    default: false,
  },
  justified: {
    type: Boolean,
    default: false,
  },
  vertical: {
    type: Boolean,
    default: false,
  },
  navWrapperClass: {
    type: String,
    default: "",
  },
  tabs: {
    type: Array as () => Array<{
      title: string;
      content: string;
      active?: boolean;
      id?: string;
    }>,
    default: () => [],
  },
});
</script>