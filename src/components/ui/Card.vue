<template>
  <b-card :no-body="noBody" class="mb-3">
    <template v-if="imgSrc">
      <img :src="imgSrc" class="card-img-top img-fluid bg-light-alt" :alt="imgAlt" />
    </template>
    <template v-if="header">
      <b-card-header :class="headerClass">
        <b-card-title :class="headerTitleClass">{{ header }}</b-card-title>
      </b-card-header>
    </template>
    <b-card-body :class="bodyClass">
      <slot name="body">
        <p class="card-text text-muted">{{ bodyText }}</p>
      </slot>
      <slot name="links"></slot>
    </b-card-body>
    <template v-if="footer">
      <p class="card-footer bg-light-alt m-0">{{ footer }}</p>
    </template>
  </b-card>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  noBody: { type: Boolean, default: true },
  imgSrc: { type: String, default: null },
  imgAlt: { type: String, default: "Card image" },
  header: { type: String, default: null },
  headerClass: { type: String, default: "" },
  headerTitleClass: { type: String, default: "" },
  bodyClass: { type: String, default: "null" },
  bodyText: { type: String, default: "" },
  footer: { type: String, default: null },
});
</script>