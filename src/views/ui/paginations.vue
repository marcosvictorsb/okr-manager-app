<template>
  <DefaultLayout>
    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <UIComponentCard title="Default Example">
          <CustomPagination
            :total-rows="15"
            :per-page="perPageItem"
            prev-text="Previous"
            next-text="Next"
          />
          <CustomPagination
            :total-rows="15"
            :per-page="perPageItem"
            :first-number="true"
            :last-number="true"
          />
        </UIComponentCard>
      </b-col>
      <b-col md="6" lg="6">
        <UIComponentCard title="Disabled And Active States">
          <CustomPagination
            :total-rows="15"
            :per-page="perPageItem"
            prev-text="Previous"
            next-text="Next"
          />
          <CustomPagination
            :total-rows="15"
            :per-page="perPageItem"
            prev-text="Previous"
            next-text="Next"
          />
        </UIComponentCard>
      </b-col>
    </b-row>

    <b-row class="justify-content-center">
      <b-col md="12">
        <UIComponentCard title="Sizing Example">
          <CustomPagination
            :total-rows="15"
            :per-page="perPageItem"
            :first-number="true"
            :last-number="true"
            size="lg"
          />
          <CustomPagination
            :total-rows="15"
            :per-page="perPageItem"
            :first-number="true"
            :last-number="true"
            size="sm"
          />
        </UIComponentCard>
      </b-col>
    </b-row>

    <b-row class="justify-content-center">
      <b-col md="12">
        <UIComponentCard title="Alignment Example">
          <CustomPagination
            :total-rows="15"
            :per-page="perPageItem"
            prev-text="Previous"
            next-text="Next"
          />
          <CustomPagination
            :total-rows="15"
            :per-page="perPageItem"
            prev-text="Previous"
            next-text="Next"
            alignment-class="justify-content-center"
          />
          <CustomPagination
            :total-rows="15"
            :per-page="perPageItem"
            prev-text="Previous"
            next-text="Next"
            alignment-class="justify-content-end"
          />
        </UIComponentCard>
      </b-col>
    </b-row>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { ref } from "vue";
const perPageItem = ref(5);

import DefaultLayout from "@/layouts/DefaultLayout.vue";
import UIComponentCard from "@/components/UIComponentCard.vue";
import CustomPagination from "@/components/ui/Pagination.vue";
</script>