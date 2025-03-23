<template>
  <b-navbar :variant="variant" :toggleable="toggleable" :class="navbarClass">
    <b-navbar-brand :href="brandHref">
      <img v-if="brandImage" :src="brandImage" :height="brandImageHeight" alt="" class="me-1" />
      {{ brandText }}
    </b-navbar-brand>
    <b-navbar-toggle :target="collapseId">
      <span class="navbar-toggler-icon"></span>
    </b-navbar-toggle>
    <b-collapse :id="collapseId" is-nav>
      <b-navbar-nav class="me-auto mb-2 mb-lg-0">
        <b-nav-item v-for="(item, index) in navItems" :key="index" :href="item.href" :active="item.active" :disabled="item.disabled">
          {{ item.text }}
          <b-nav-item-dropdown v-if="item.dropdown">
            <template #button-content>
              {{ item.dropdown.text }} <i class="la la-angle-down"></i>
            </template>
            <b-dropdown-item v-for="(dropdownItem, idx) in item.dropdown.items" :key="idx" :href="dropdownItem.href">
              {{ dropdownItem.text }}
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-nav-item>
      </b-navbar-nav>
      <form class="d-flex">
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            :class="searchInputClass"
            placeholder="Search"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <b-button
            :variant="searchButtonVariant"
            class="btn-soft-secondary"
            type="button"
            id="button-addon2"
          >
            <i class="fas fa-search"></i>
          </b-button>
        </div>
      </form>
    </b-collapse>
  </b-navbar>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "light",
  },
  toggleable: {
    type: String,
    default: "lg",
  },
  navbarClass: {
    type: String,
    default: "navbar-light",
  },
  brandHref: {
    type: String,
    default: "#",
  },
  brandImage: {
    type: String,
    default: "",
  },
  brandImageHeight: {
    type: Number,
    default: 26,
  },
  brandText: {
    type: String,
    default: "Navbar",
  },
  collapseId: {
    type: String,
    required: true,
  },
  navItems: {
    type: Array as () => Array<{
      text: string;
      href: string;
      active?: boolean;
      disabled?: boolean;
      dropdown?: {
        text: string;
        items: Array<{ text: string; href: string }>;
      };
    }>,
    default: () => [],
  },
  searchInputClass: {
    type: String,
    default: "",
  },
  searchButtonVariant: {
    type: String,
    default: "null",
  },
});
</script>