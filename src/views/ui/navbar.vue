<template>
  <DefaultLayout>
    <b-row class="justify-content-center">
      <b-col md="12">
        <UIComponentCard title="Basic Navbar">
          <CustomNavbar
            collapseId="navbarSupportedContent"
            :navItems="[
              { text: 'Home', href: '#', active: true },
              { text: 'Link', href: '#' },
              {
                text: 'Dropdown',
                href: '#',
                dropdown: {
                  text: 'Dropdown',
                  items: [
                    { text: 'Action', href: '#' },
                    { text: 'Another action', href: '#' },
                    { text: 'Something else here', href: '#' },
                  ],
                },
              },
              { text: 'Disabled', href: '#', disabled: true },
            ]"
          />
        </UIComponentCard>
      </b-col>
    </b-row>

    <b-row class="justify-content-center">
      <b-col md="12">
        <UIComponentCard title="Navbar With Brand Image">
          <CustomNavbar
            collapseId="navbarSupportedContent2"
            brandImage="logoSm"
            :navItems="[
              { text: 'Home', href: '#', active: true },
              { text: 'Link', href: '#' },
              {
                text: 'Dropdown',
                href: '#',
                dropdown: {
                  text: 'Dropdown',
                  items: [
                    { text: 'Action', href: '#' },
                    { text: 'Another action', href: '#' },
                    { text: 'Something else here', href: '#' },
                  ],
                },
              },
              { text: 'Disabled', href: '#', disabled: true },
            ]"
          />

          <CustomNavbar
            collapseId="navbarSupportedContent3"
            brandImage="logoSm"
            brandText=""
            :navItems="[
              { text: 'Home', href: '#', active: true },
              { text: 'Link', href: '#' },
              {
                text: 'Dropdown',
                href: '#',
                dropdown: {
                  text: 'Dropdown',
                  items: [
                    { text: 'Action', href: '#' },
                    { text: 'Another action', href: '#' },
                    { text: 'Something else here', href: '#' },
                  ],
                },
              },
              { text: 'Disabled', href: '#', disabled: true },
            ]"
          />
        </UIComponentCard>
      </b-col>
    </b-row>

    <b-row class="justify-content-center">
      <b-col md="12">
        <UIComponentCard title="Theme Colors">
          <CustomNavbar
            variant="primary"
            navbarClass="navbar-dark mb-2"
            collapseId="navbarSupportedContent4"
            :navItems="[
              { text: 'Home', href: '#', active: true },
              { text: 'Link', href: '#' },
              {
                text: 'Dropdown',
                href: '#',
                dropdown: {
                  text: 'Dropdown',
                  items: [
                    { text: 'Action', href: '#' },
                    { text: 'Another action', href: '#' },
                    { text: 'Something else here', href: '#' },
                  ],
                },
              },
              { text: 'Disabled', href: '#', disabled: true },
            ]"
            searchInputClass="bg-white bg-opacity-25 border-white border-opacity-25"
            searchButtonVariant="dark"
          />

          <CustomNavbar
            variant="secondary"
            navbarClass="navbar-dark mb-2"
            collapseId="navbarSupportedContent4"
            :navItems="[
              { text: 'Home', href: '#', active: true },
              { text: 'Link', href: '#' },
              {
                text: 'Dropdown',
                href: '#',
                dropdown: {
                  text: 'Dropdown',
                  items: [
                    { text: 'Action', href: '#' },
                    { text: 'Another action', href: '#' },
                    { text: 'Something else here', href: '#' },
                  ],
                },
              },
              { text: 'Disabled', href: '#', disabled: true },
            ]"
            searchInputClass="bg-white bg-opacity-25 border-white border-opacity-25"
            searchButtonVariant="dark"
          />

          <CustomNavbar
            variant="dark"
            navbarClass="navbar-dark"
            collapseId="navbarSupportedContent"
            :navItems="[
              { text: 'Home', href: '#', active: true },
              { text: 'Link', href: '#' },
              {
                text: 'Dropdown',
                href: '#',
                dropdown: {
                  text: 'Dropdown',
                  items: [
                    { text: 'Action', href: '#' },
                    { text: 'Another action', href: '#' },
                    { text: 'Something else here', href: '#' },
                  ],
                },
              },
              { text: 'Disabled', href: '#', disabled: true },
            ]"
            searchInputClass="bg-white bg-opacity-25 border-white border-opacity-25"
            searchButtonVariant="secondary"
          />
        </UIComponentCard>
      </b-col>
    </b-row>
  </DefaultLayout>
</template>

<script setup lang="ts">
import logoSm from "@/assets/images/logo-sm.png";
import logoDark from "@/assets/images/logo-dark.png";

import DefaultLayout from "@/layouts/DefaultLayout.vue";
import UIComponentCard from "@/components/UIComponentCard.vue";
import CustomNavbar from "@/components/ui/Navbar.vue";
</script>