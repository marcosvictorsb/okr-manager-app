<template>
  <DefaultLayout>
    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <UIComponentCard title="Custom Alerts">
          <AlertComponent
            variant="success"
            title="Well done!"
            message="You successfully read this important alert message."
            icon="fas fa-check"
            dismissible
            customClass="shadow-sm border-theme-white-2"
          />
          <AlertComponent
            variant="danger"
            title="Oh snap!"
            message="Change a few things up and try submitting again."
            icon="fas fa-xmark"
            dismissible
            customClass="shadow-sm border-theme-white-2"
          />
          <AlertComponent
            variant="warning"
            title="Warning!"
            message="An example warning alert with an icon."
            icon="fas fa-exclamation"
            customClass="shadow-sm border-theme-white-2"
          />
        </UIComponentCard>
      </b-col>
    </b-row>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import UIComponentCard from "@/components/UIComponentCard.vue";
import AlertComponent from "@/components/ui/Alert.vue";
</script>