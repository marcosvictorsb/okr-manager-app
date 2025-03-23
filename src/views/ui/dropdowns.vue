<template>
  <DefaultLayout>
    <!-- Default Dropdown -->
    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <UIComponentCard title="Default Dropdown">
          <div class="d-flex flex-wrap gap-2">
            <DropdownExample variant="primary">
              <template #button-content>
                Primary <i class="las la-angle-down ms-1"></i>
              </template>
            </DropdownExample>
            <DropdownExample variant="secondary">
              <template #button-content>
                Secondary <i class="las la-angle-down ms-1"></i>
              </template>
            </DropdownExample>
            <DropdownExample variant="warning">
              <template #button-content>
                Warning <i class="las la-angle-down ms-1"></i>
              </template>
            </DropdownExample>
            <DropdownExample variant="info">
              <template #button-content>
                Info <i class="las la-angle-down ms-1"></i>
              </template>
            </DropdownExample>
            <DropdownExample variant="danger">
              <template #button-content>
                Danger <i class="las la-angle-down ms-1"></i>
              </template>
            </DropdownExample>
            <DropdownExample variant="dark">
              <template #button-content>
                Dark <i class="las la-angle-down ms-1"></i>
              </template>
            </DropdownExample>
            <DropdownExample variant="light">
              <template #button-content>
                Light <i class="las la-angle-down ms-1"></i>
              </template>
            </DropdownExample>
          </div>
        </UIComponentCard>
      </b-col>
      
      <!-- Dropdown Rounded -->
      <b-col md="6" lg="6">
        <UIComponentCard title="Dropdown Rounded">
          <div class="d-flex flex-wrap gap-2">
            <DropdownExample variant="primary" toggleClass="rounded-pill">
              <template #button-content>
                Primary <i class="las la-angle-down ms-1"></i>
              </template>
            </DropdownExample>
            <DropdownExample variant="secondary" toggleClass="rounded-pill">
              <template #button-content>
                Secondary <i class="las la-angle-down ms-1"></i>
              </template>
            </DropdownExample>
          </div>
        </UIComponentCard>
      </b-col>
    </b-row>

    
    

    <!-- Dropdown Outline Rounded -->
    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <UIComponentCard title="Dropdown Outline Rounded">
          <div class="d-flex flex-wrap gap-2">
            <DropdownExample variant="outline-primary" toggleClass="rounded-pill">
              <template #button-content>
                Primary <i class="las la-angle-down ms-1"></i>
              </template>
            </DropdownExample>
            <DropdownExample variant="outline-secondary" toggleClass="rounded-pill">
              <template #button-content>
                Secondary <i class="las la-angle-down ms-1"></i>
              </template>
            </DropdownExample>
          </div>
        </UIComponentCard>
      </b-col>

      <!-- Dropdown Size -->
      <b-col md="6" lg="6">
        <UIComponentCard title="Dropdown Size">
          <div class="d-flex flex-wrap gap-2">
            <DropdownExample variant="primary" size="lg">
              <template #button-content>
                Large <i class="las la-angle-down ms-1"></i>
              </template>
            </DropdownExample>
            <DropdownExample variant="secondary">
              <template #button-content>
                Default <i class="las la-angle-down ms-1"></i>
              </template>
            </DropdownExample>
            <DropdownExample variant="dark" size="sm">
              <template #button-content>
                Small <i class="las la-angle-down ms-1"></i>
              </template>
            </DropdownExample>
          </div>
        </UIComponentCard>
      </b-col>
    </b-row>

    <!-- Dropdown Button & Link -->
    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <UIComponentCard title="Dropdown Button & Link">
          <b-row class="g-2">
            <div class="col-sm-auto">
              <DropdownExample variant="outline-primary">
                <template #button-content>
                  Dropdown Button <i class="las la-angle-down ms-1"></i>
                </template>
              </DropdownExample>
            </div>
            <div class="col-sm-auto">
              <DropdownExample variant="outline-secondary">
                <template #button-content>
                  Dropdown Link <i class="las la-angle-down ms-1"></i>
                </template>
              </DropdownExample>
            </div>
          </b-row>
        </UIComponentCard>
      </b-col>

      <!-- Dropup Variation -->
      <b-col md="6" lg="6">
        <UIComponentCard title="Dropup Variation">
          <div class="d-flex flex-wrap gap-2 dropup">
            <DropdownExample dropup variant="primary">
              <template #button-content>
                Dropup <i class="las la-angle-up ms-1"></i>
              </template>
            </DropdownExample>
          </div>
        </UIComponentCard>
      </b-col>
    </b-row>

    
    <!-- Dropend Variation -->
    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <UIComponentCard title="Dropend Variation">
          <div class="d-flex flex-wrap gap-2 dropend">
            <DropdownExample dropend variant="primary">
              <template #button-content>
                Dropend <i class="las la-angle-right ms-1"></i>
              </template>
            </DropdownExample>
          </div>
        </UIComponentCard>
      </b-col>
      
      <!-- Menu Alignment -->
      <b-col md="6" lg="6">
        <UIComponentCard title="Menu Alignment">
          <DropdownExample variant="primary" menuClass="dropdown-menu-end">
            <template #button-content>
              Right-aligned Menu <i class="las la-angle-down ms-1"></i>
            </template>
          </DropdownExample>
        </UIComponentCard>
      </b-col>
    </b-row>

    
   <!-- Dropstart Variation -->
    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <UIComponentCard title="Dropstart Variation">
          <div class="d-flex flex-wrap gap-2 dropstart">
            <DropdownExample dropstart variant="primary">
              <template #button-content>
                <i class="las la-angle-left me-1"></i> Dropstart
              </template>
            </DropdownExample>
          </div>
        </UIComponentCard>
      </b-col>
    </b-row>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DropdownExample from "@/components/ui/Dropdown.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import UIComponentCard from "@/components/UIComponentCard.vue";
</script>