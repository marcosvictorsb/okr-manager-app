<template>
  <DefaultLayout>
    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <UIComponentCard title="Border spinner">
          <CustomSpinner variant="primary" />
        </UIComponentCard>
      </b-col>
      <b-col md="6" lg="6">
        <UIComponentCard title="Growing spinner">
          <CustomSpinner variant="primary" type="grow" />
        </UIComponentCard>
      </b-col>
    </b-row>
    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <UIComponentCard title="Colors">
          <div class="hstack gap-1">
            <CustomSpinner variant="primary" />
            <CustomSpinner variant="secondary" />
            <CustomSpinner variant="success" />
            <CustomSpinner variant="danger" />
            <CustomSpinner variant="warning" />
            <CustomSpinner variant="info" />
            <CustomSpinner :variant="undefined" custom-class="text-purple" />
            <CustomSpinner variant="light" />
            <CustomSpinner variant="dark" />
          </div>
        </UIComponentCard>
      </b-col>
      <b-col md="6" lg="6">
        <UIComponentCard title="Colors Growing">
          <div class="hstack gap-1">
            <CustomSpinner type="grow" variant="primary" />
            <CustomSpinner type="grow" variant="secondary" />
            <CustomSpinner type="grow" variant="success" />
            <CustomSpinner type="grow" variant="danger" />
            <CustomSpinner type="grow" variant="warning" />
            <CustomSpinner type="grow" variant="info" />
            <CustomSpinner type="grow" :variant="undefined" custom-class="text-purple" />
            <CustomSpinner type="grow" variant="light" />
            <CustomSpinner type="grow" variant="dark" />
          </div>
        </UIComponentCard>
      </b-col>
    </b-row>
    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <UIComponentCard title="Alignment">
          <div class="d-flex justify-content-center">
            <CustomSpinner variant="primary" />
          </div>
        </UIComponentCard>
      </b-col>
      <b-col md="6" lg="6">
        <UIComponentCard title="Placement">
          <div class="d-flex align-items-center">
            <strong>Loading...</strong>
            <CustomSpinner variant="primary" custom-class="text-primary ms-auto" />
          </div>
        </UIComponentCard>
      </b-col>
    </b-row>
    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <UIComponentCard title="Size">
          <b-row>
            <b-col lg="4" class="d-flex gap-1">
              <CustomSpinner :style="{ width: '3rem', height: '3rem' }" variant="primary" />
              <CustomSpinner :style="{ width: '3rem', height: '3rem' }" type="grow" />
            </b-col>

            <b-col lg="4" class="d-flex gap-1">
              <CustomSpinner variant="primary" />
              <CustomSpinner type="grow" />
            </b-col>

            <b-col lg="4" class="d-flex gap-1">
              <CustomSpinner variant="primary" small />
              <CustomSpinner type="grow" small />
            </b-col>
          </b-row>
        </UIComponentCard>
      </b-col>
      <b-col md="6" lg="6">
        <UIComponentCard title="Buttons spinners">
          <div class="d-flex flex-wrap gap-2">
            <b-button variant="primary" type="button" disabled>
              <CustomSpinner small />
            </b-button>
            <b-button variant="primary" type="button" disabled>
              <CustomSpinner small />
              Loading...
            </b-button>
            <b-button variant="primary" type="button" disabled>
              <CustomSpinner type="grow" small />
            </b-button>
            <b-button variant="primary" type="button" disabled>
              <CustomSpinner type="grow" small />
              Loading...
            </b-button>
          </div>
        </UIComponentCard>
      </b-col>
    </b-row>
    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <UIComponentCard title="Custom spinners">
          <div class="hstack gap-1">
            <CustomSpinner
              :variant="undefined"
              custom-class="spinner-border spinner-border-custom-1 text-primary"
            />
            <CustomSpinner
              :variant="undefined"
              custom-class="spinner-border spinner-border-custom-2 text-secondary"
            />
            <CustomSpinner
              :variant="undefined"
              custom-class="spinner-border spinner-border-custom-3 border-success"
            />
            <CustomSpinner
              :variant="undefined"
              custom-class="spinner-border spinner-border-custom-4 text-warning"
            />
            <CustomSpinner
              :variant="undefined"
              custom-class="spinner-border spinner-border-custom-5 border-info"
            />
          </div>
        </UIComponentCard>
      </b-col>
      <b-col md="6" lg="6">
        <UIComponentCard title="Custom Icon Spinners">
          <b-row>
            <b-col md="3">
              <div class="text-center">
                <i
                  class="la la-spinner text-primary la-spin progress-icon-spin"
                ></i>
              </div>
            </b-col>
            <b-col md="3">
              <div class="text-center">
                <i
                  class="la la-refresh text-secondary la-spin progress-icon-spin"
                ></i>
              </div>
            </b-col>
            <b-col md="3">
              <div class="text-center">
                <i
                  class="la la-sun-o text-warning la-spin progress-icon-spin"
                ></i>
              </div>
            </b-col>
            <b-col md="3">
              <div class="text-center">
                <i class="la la-cog la-spin progress-icon-spin"></i>
              </div>
            </b-col>
          </b-row>
        </UIComponentCard>
      </b-col>
    </b-row>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import UIComponentCard from "@/components/UIComponentCard.vue";
import CustomSpinner from "@/components/ui/Spinner.vue";
</script>