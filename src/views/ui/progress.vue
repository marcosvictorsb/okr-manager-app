<template>
  <DefaultLayout>
    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <UIComponentCard title="Basic">
          <CustomProgress class="mb-3" :value="10" />
          <CustomProgress class="mb-3" :value="20" />
          <CustomProgress class="mb-3" :value="30" />
          <CustomProgress class="mb-3" :value="40" />
          <CustomProgress class="mb-3" :value="50" />
          <CustomProgress :value="60" />
        </UIComponentCard>
      </b-col>
      <b-col md="6" lg="6">
        <UIComponentCard title="Striped And Animated">
          <CustomProgress class="mb-3" variant="warning" striped :value="15" />
          <CustomProgress class="mb-3" variant="success" striped :value="30" />
          <CustomProgress class="mb-3" variant="primary" striped :value="45" />
          <CustomProgress
            class="mb-3"
            variant="info"
            striped
            animated
            :value="60"
          />
          <CustomProgress
            class="mb-3"
            variant="danger"
            striped
            animated
            :value="75"
          />
          <CustomProgress variant="primary" striped animated :value="90" />
        </UIComponentCard>
      </b-col>
    </b-row>

    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <UIComponentCard title="Labels And Multiple Bars">
          <CustomProgress class="mb-3" variant="secondary" show-value :value="20" />
          <CustomProgress
            class="mb-3"
            variant="secondary"
            show-value
            :value="40"
            striped
          />
          <CustomProgress class="mb-3">
            <b-progress-bar :value="20" show-value variant="primary" />
            <b-progress-bar
              :value="20"
              show-value
              variant="secondary"
              striped
            />
            <b-progress-bar
              :value="20"
              show-value
              variant="info"
              striped
              animated
            />
          </CustomProgress>

          <CustomProgress>
            <b-progress-bar :value="20" variant="primary" />
            <b-progress-bar :value="40" variant="secondary" />
            <b-progress-bar :value="20" variant="info" />
          </CustomProgress>
        </UIComponentCard>
      </b-col>
      <b-col md="6" lg="6">
        <UIComponentCard title="Height">
          <CustomProgress class="mb-3" show-value :value="15" :style="{ height: '3px' }" />
          <CustomProgress class="mb-3" striped :value="45" />
          <CustomProgress striped animated :value="60" :style="{ height: '14px' }" />
        </UIComponentCard>
      </b-col>
    </b-row>

    <b-row class="justify-content-center">
      <b-col md="12">
        <UIComponentCard title="Vertical">
          <b-row>
            <b-col md="4" class="d-flex justify-content-center">
              <div class="progress progress-vertical my-3" style="height: 8px">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                  role="progressbar"
                  style="height: 25%"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div class="progress progress-vertical my-3" style="height: 8px">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated bg-secondary"
                  role="progressbar"
                  style="height: 50%"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div class="progress progress-vertical my-3" style="height: 8px">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  style="height: 75%"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </b-col>

            <b-col md="4" class="d-flex justify-content-center">
              <div
                class="progress progress-vertical-bottom my-3"
                style="height: 8px"
              >
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                  role="progressbar"
                  style="height: 10%"
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div
                class="progress progress-vertical-bottom my-3"
                style="height: 8px"
              >
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                  role="progressbar"
                  style="height: 25%"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div
                class="progress progress-vertical-bottom my-3"
                style="height: 8px"
              >
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated bg-secondary"
                  role="progressbar"
                  style="height: 50%"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </b-col>

            <b-col md="4" class="d-flex justify-content-center">
              <div
                class="progress progress-vertical-bottom my-3"
                style="width: 30px"
              >
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  style="height: 75%"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>

              <div
                class="progress progress-vertical-bottom my-3"
                style="width: 30px"
              >
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated bg-secondary"
                  role="progressbar"
                  style="height: 100%"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  100%
                </div>
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
import CustomProgress from "@/components/ui/Progress.vue";
</script>