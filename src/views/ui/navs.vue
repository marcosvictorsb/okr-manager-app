<template>
  <DefaultLayout>
    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <UIComponentCard title="Base Nav">
          <CustomNav
            :items="[
              { text: 'Active', active: true },
              { text: 'Link' },
              { text: 'Link' },
              { text: 'Disabled', disabled: true },
            ]"
          />
        </UIComponentCard>
      </b-col>
      <b-col md="6" lg="6">
        <UIComponentCard title="Nav Tabs">
          <CustomNav
            tabs
            :items="[
              { text: 'Active', active: true },
              { text: 'Link' },
              { text: 'Link' },
              { text: 'Disabled', disabled: true },
            ]"
          />
        </UIComponentCard>
      </b-col>
    </b-row>

    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <UIComponentCard title="Nav Justified">
          <CustomNav
            pills
            justified
            :items="[
              { text: 'Active', active: true },
              { text: 'Longer nav link' },
              { text: 'Link' },
              { text: 'Disabled', disabled: true },
            ]"
          />
        </UIComponentCard>
      </b-col>
      <b-col md="6" lg="6">
        <UIComponentCard title="Nav Pills">
          <CustomNav
            pills
            :items="[
              { text: 'Active', active: true },
              { text: 'Link' },
              { text: 'Link' },
              { text: 'Disabled', disabled: true },
            ]"
          />
        </UIComponentCard>
      </b-col>
    </b-row>

    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <UIComponentCard title="Nav Tabs With Dropdowns">
          <CustomNav
            tabs
            :items="[
              { text: 'Active', active: true },
              {
                text: 'Dropdown',
                dropdown: {
                  items: [
                    { text: 'Action' },
                    { text: 'Another action' },
                    { text: 'Something else here' },
                    { text: 'Separated link' },
                  ],
                },
              },
              { text: 'Link' },
              { text: 'Disabled', disabled: true },
            ]"
          />
        </UIComponentCard>
      </b-col>
      <b-col md="6" lg="6">
        <UIComponentCard title="Nav Pills With Dropdowns">
          <CustomNav
            pills
            :items="[
              { text: 'Active', active: true },
              {
                text: 'Dropdown',
                dropdown: {
                  items: [
                    { text: 'Action' },
                    { text: 'Another action' },
                    { text: 'Something else here' },
                    { text: 'Separated link' },
                  ],
                },
              },
              { text: 'Link' },
              { text: 'Disabled', disabled: true },
            ]"
          />
        </UIComponentCard>
      </b-col>
    </b-row>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import UIComponentCard from "@/components/UIComponentCard.vue";
import CustomNav from "@/components/ui/Nav.vue";
</script>