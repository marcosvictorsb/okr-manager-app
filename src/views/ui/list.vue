<template>
  <DefaultLayout>
    <!-- Badge Examples -->
    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <UIComponentCard title="Badge Examples">
          <ListExample
            :items="[
              { text: 'Cras justo odio', icon: 'la la-check text-success me-2' },
              { text: 'Dapibus ac facilisis in', icon: 'la la-check text-success me-2' },
              { text: 'Morbi leo risus', icon: 'la la-check text-success me-2' },
              { text: 'Disabled', icon: 'la la-check text-success me-2', disabled: true }
            ]"
          />
        </UIComponentCard>
      </b-col>

      <!-- Active Items -->
      <b-col md="6" lg="6">
        <UIComponentCard title="Active Items">
          <ListExample
            :items="[
              { text: 'Cras justo odio', icon: 'la la-arrow-right text-secondary me-2' },
              { text: 'Dapibus ac facilisis in', icon: 'la la-arrow-right me-2', active: true },
              { text: 'Morbi leo risus', icon: 'la la-arrow-right text-secondary me-2' },
              { text: 'Porta ac consectetur ac', icon: 'la la-arrow-right text-secondary me-2' }
            ]"
          />
        </UIComponentCard>
      </b-col>
    </b-row>

    <!-- Links And Buttons -->
    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <UIComponentCard title="Links And Buttons">
          <ListExample
            :items="[
              { text: 'Button Active', type: 'button', active: true, icon: 'la la-hand-o-right me-2' },
              { text: 'Button', type: 'button', icon: 'la la-hand-o-right text-primary me-2' },
              { text: 'Link', href: '#', icon: 'la la-hand-o-right text-primary me-2' },
              { text: 'Link disabled', href: '#', disabled: true, icon: 'la la-hand-o-right text-primary me-2' }
            ]"
          />
        </UIComponentCard>
      </b-col>

      <!-- Flush -->
      <b-col md="6" lg="6">
        <UIComponentCard title="Flush">
          <ListExample
            flush
            :items="[
              { text: 'Cras justo odio', icon: 'la la-angle-double-right text-info me-2' },
              { text: 'Dapibus ac facilisis in', icon: 'la la-angle-double-right text-info me-2' },
              { text: 'Morbi leo risus', icon: 'la la-angle-double-right text-info me-2' },
              { text: 'Vestibulum at eros', icon: 'la la-angle-double-right text-info me-2' }
            ]"
          />
        </UIComponentCard>
      </b-col>
    </b-row>

    <!-- Contextual Classes -->
    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <UIComponentCard title="Contextual Classes">
          <ListExample
            :items="[
              { text: 'Dapibus ac facilisis in' },
              { text: 'A simple primary list group item', variant: 'primary' },
              { text: 'A simple secondary list group item', variant: 'secondary' },
              { text: 'A simple success list group item', variant: 'success' },
              { text: 'A simple danger list group item', variant: 'danger' },
              { text: 'A simple warning list group item', variant: 'warning' },
              { text: 'A simple info list group item', variant: 'info' },
              { text: 'A simple light list group item', variant: 'light' },
              { text: 'A simple dark list group item', variant: 'dark' }
            ]"
          />
        </UIComponentCard>
      </b-col>

      <!-- Horizontal -->
      <b-col md="6" lg="6">
        <UIComponentCard title="Horizontal">
          <ListExample
            horizontal="md"
            :items="[
              { text: 'Cras justo', icon: 'la la-angle-double-right text-info me-2' },
              { text: 'Dapibus', icon: 'la la-angle-double-right text-info me-2' },
              { text: 'Morbi leo', icon: 'la la-angle-double-right text-info me-2' }
            ]"
          />
        </UIComponentCard>
      </b-col>
    </b-row>

    <!-- With Badges -->
    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <UIComponentCard title="With Badges">
          <ListExample
            :items="[
              { text: 'Cras justo odio', icon: 'la la-check text-muted font-16 me-2', badge: { text: '4', class: 'border border-primary text-primary badge-pill' } },
              { text: 'New Notifications', icon: 'la la-bell text-muted font-18 me-2', badge: { text: 'New', class: 'border border-secondary text-secondary badge-pill' } },
              { text: 'Payment Successfull', icon: 'la la-money text-muted font-16 me-2', badge: { text: 'Successfully', class: 'border border-success text-success badge-pill' } },
              { text: 'Payment pending', icon: 'la la-warning text-muted font-16 me-2', badge: { text: 'Pending', class: 'border border-warning text-warning badge-pill' } },
              { text: 'Good Morning!', icon: 'la la-comments text-muted font-16 me-2', badge: { text: '1', class: 'border border-info text-info badge-pill' } }
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
import ListExample from "@/components/ui/List.vue";
</script>
