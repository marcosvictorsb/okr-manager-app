<template>
  <DefaultLayout>
    <!-- Responsive Image -->
    <b-row class="justify-content-center">
      <b-col md="12">
        <UIComponentCard title="Responsive Images">
          <ImageExample :src="colorBg2" alt="Responsive Image" imageClass="img-fluid rounded" />
        </UIComponentCard>
      </b-col>
    </b-row>

    <!-- User Profiles -->
    <b-row class="justify-content-center">
      <b-col md="6" lg="4">
        <b-card no-body>
          <b-card-body>
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <ImageExample :src="avatar1" alt="Kathryn Money" imageClass="img-thumbnail" />
              </div>
              <div class="flex-grow-1 ms-3 text-truncate">
                <h4 class="mb-1 fw-semibold">Kathryn Money</h4>
                <p class="text-muted mb-3 font-13">UI & UX Designer, Japan</p>
                <b-button type="button" size="sm" variant="primary">Message</b-button>
              </div>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col md="6" lg="4">
        <b-card no-body>
          <b-card-body>
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <ImageExample :src="avatar10" alt="Anthony Stover" imageClass="rounded" />
              </div>
              <div class="flex-grow-1 ms-3 text-truncate">
                <h4 class="mb-1 fw-semibold">Anthony Stover</h4>
                <p class="text-muted mb-3 font-13">Frontend Developer, USA</p>
                <b-button type="button" size="sm" variant="primary">Message</b-button>
              </div>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col md="6" lg="4">
        <b-card no-body>
          <b-card-body>
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <ImageExample :src="avatar8" alt="Catherine Orman" imageClass="rounded-circle" />
              </div>
              <div class="flex-grow-1 ms-3 text-truncate">
                <h4 class="mb-1 fw-semibold">Catherine Orman</h4>
                <p class="text-muted mb-3 font-13">Backend Developer, Canada</p>
                <b-button type="button" size="sm" variant="primary">Message</b-button>
              </div>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>

    <!-- Aligning Images -->
    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <UIComponentCard title="Aligning Images (float)">
          <ImageExample :src="avatar4" alt="Float Start" imageClass="rounded float-start" />
          <ImageExample :src="avatar7" alt="Float End" imageClass="rounded float-end" />
        </UIComponentCard>
      </b-col>
      <b-col md="6" lg="6">
        <UIComponentCard title="Aligning Images">
          <ImageExample :src="avatar6" alt="Centered Image" imageClass="rounded d-block mx-auto" />
        </UIComponentCard>
      </b-col>
    </b-row>
  </DefaultLayout>
</template>

<script setup lang="ts">
import colorBg2 from "@/assets/images/extra/color-bg-2.jpg";

import avatar1 from "@/assets/images/users/avatar-1.jpg";
import avatar4 from "@/assets/images/users/avatar-4.jpg";
import avatar6 from "@/assets/images/users/avatar-6.jpg";
import avatar7 from "@/assets/images/users/avatar-7.jpg";
import avatar8 from "@/assets/images/users/avatar-8.jpg";
import avatar10 from "@/assets/images/users/avatar-10.jpg";

import DefaultLayout from "@/layouts/DefaultLayout.vue";
import UIComponentCard from "@/components/UIComponentCard.vue";
import ImageExample from "@/components/ui/Image.vue";
</script>