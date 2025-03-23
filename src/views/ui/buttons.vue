<template>
  <DefaultLayout>
    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <UIComponentCard title="Default Buttons">
          <div class="d-flex flex-wrap gap-2">
            <CustomButton variant="primary">Primary</CustomButton>
            <CustomButton variant="secondary">Secondary</CustomButton>
            <CustomButton variant="success">Success</CustomButton>
            <CustomButton variant="warning">Warning</CustomButton>
            <CustomButton variant="info">Info</CustomButton>
            <CustomButton variant="danger">Danger</CustomButton>
            <CustomButton variant="dark">Dark</CustomButton>
            <CustomButton variant="light">Light</CustomButton>
          </div>
        </UIComponentCard>
      </b-col>
      <b-col md="6" lg="6">
        <UIComponentCard title="Outline Buttons">
          <div class="d-flex flex-wrap gap-2">
            <CustomButton variant="outline-primary">Primary</CustomButton>
            <CustomButton variant="outline-secondary">Secondary</CustomButton>
            <CustomButton variant="outline-success">Success</CustomButton>
            <CustomButton variant="outline-warning">Warning</CustomButton>
            <CustomButton variant="outline-info">Info</CustomButton>
            <CustomButton variant="outline-danger">Danger</CustomButton>
            <CustomButton variant="outline-dark">Dark</CustomButton>
            <CustomButton variant="outline-light">Light</CustomButton>
          </div>
        </UIComponentCard>
      </b-col>
    </b-row>

    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <UIComponentCard title="Round Buttons">
          <div class="d-flex flex-wrap gap-2">
            <CustomButton pill variant="primary">Primary</CustomButton>
            <CustomButton pill variant="secondary">Secondary</CustomButton>
            <CustomButton pill variant="success">Success</CustomButton>
            <CustomButton pill variant="warning">Warning</CustomButton>
            <CustomButton pill variant="info">Info</CustomButton>
            <CustomButton pill variant="danger">Danger</CustomButton>
            <CustomButton pill variant="dark">Dark</CustomButton>
            <CustomButton pill variant="light">Light</CustomButton>
          </div>
        </UIComponentCard>
      </b-col>
      <b-col md="6" lg="6">
        <UIComponentCard title="Round Outline Buttons">
          <div class="d-flex flex-wrap gap-2">
            <CustomButton pill variant="outline-primary">Primary</CustomButton>
            <CustomButton pill variant="outline-secondary">Secondary</CustomButton>
            <CustomButton pill variant="outline-success">Success</CustomButton>
            <CustomButton pill variant="outline-warning">Warning</CustomButton>
            <CustomButton pill variant="outline-info">Info</CustomButton>
            <CustomButton pill variant="outline-danger">Danger</CustomButton>
            <CustomButton pill variant="outline-dark">Dark</CustomButton>
            <CustomButton pill variant="outline-light">Light</CustomButton>
          </div>
        </UIComponentCard>
      </b-col>
    </b-row>

    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <UIComponentCard title="Buttons Sizes">
          <div class="d-flex flex-wrap align-items-center gap-2">
            <CustomButton size="lg" variant="primary">Primary</CustomButton>
            <CustomButton variant="secondary">Secondary</CustomButton>
            <CustomButton size="sm" variant="dark">Dark</CustomButton>
          </div>
        </UIComponentCard>
      </b-col>
      <b-col md="6" lg="6">
        <UIComponentCard title="Outline Buttons Sizes">
          <div class="d-flex flex-wrap align-items-center gap-2">
            <CustomButton size="lg" variant="outline-primary">Primary</CustomButton>
            <CustomButton variant="outline-secondary">Secondary</CustomButton>
            <CustomButton size="sm" variant="outline-dark">Dark</CustomButton>
          </div>
        </UIComponentCard>
      </b-col>
    </b-row>

    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <UIComponentCard title="Disabled Buttons">
          <div class="d-flex flex-wrap gap-2">
            <CustomButton variant="primary" disabled>Primary</CustomButton>
            <CustomButton variant="secondary" disabled>Secondary</CustomButton>
          </div>
        </UIComponentCard>
      </b-col>
      <b-col md="6" lg="6">
        <UIComponentCard title="Disabled Outline Buttons">
          <div class="d-flex flex-wrap gap-2">
            <CustomButton variant="outline-primary" disabled>Primary</CustomButton>
            <CustomButton variant="outline-secondary" disabled>Secondary</CustomButton>
          </div>
        </UIComponentCard>
      </b-col>
    </b-row>

    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <UIComponentCard title="Block Buttons">
          <div class="d-flex flex-wrap gap-2">
            <CustomButton variant="primary" custom-class="w-100">Primary</CustomButton>
            <CustomButton variant="secondary" custom-class="w-100">Secondary</CustomButton>
          </div>
        </UIComponentCard>
      </b-col>
      <b-col md="6" lg="6">
        <UIComponentCard title="Block Outline Buttons">
          <div class="d-flex flex-wrap gap-2">
            <CustomButton variant="outline-primary" custom-class="w-100">Primary</CustomButton>
            <CustomButton variant="outline-secondary" custom-class="w-100">Secondary</CustomButton>
          </div>
        </UIComponentCard>
      </b-col>
    </b-row>

    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <UIComponentCard title="Check And Radio Buttons">
          <b-button-group class="mb-2 mb-lg-0">
            <input
              type="checkbox"
              class="btn-check"
              id="btncheck1"
              autocomplete="off"
            />
            <label class="btn btn-outline-primary" for="btncheck1"
              >Checkbox 1</label
            >

            <input
              type="checkbox"
              class="btn-check"
              id="btncheck2"
              autocomplete="off"
            />
            <label class="btn btn-outline-primary" for="btncheck2"
              >Checkbox 2</label
            >

            <input
              type="checkbox"
              class="btn-check"
              id="btncheck3"
              autocomplete="off"
            />
            <label class="btn btn-outline-primary" for="btncheck3"
              >Checkbox 3</label
            >
          </b-button-group>
          <b-button-group class="float-end">
            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio1"
              autocomplete="off"
              checked
            />
            <label class="btn btn-outline-secondary" for="btnradio1"
              >Radio 1</label
            >

            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio2"
              autocomplete="off"
            />
            <label class="btn btn-outline-secondary" for="btnradio2"
              >Radio 2</label
            >

            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio3"
              autocomplete="off"
            />
            <label class="btn btn-outline-secondary" for="btnradio3"
              >Radio 3</label
            >
          </b-button-group>
        </UIComponentCard>

        <UIComponentCard title="Button Group">
          <div class="btn-group-vertical">
            <CustomButton variant="primary">Button 1</CustomButton>
            <CustomButton variant="primary">Button 2</CustomButton>
            <b-dropdown text="Button 3" variant="primary">
              <b-dropdown-item>Dropdown link</b-dropdown-item>
              <b-dropdown-item>Dropdown link</b-dropdown-item>
            </b-dropdown>
          </div>
        </UIComponentCard>
      </b-col>
      <b-col md="6" lg="6">
        <UIComponentCard title="Button Group">
          <div class="mb-3">
            <b-button-group>
              <CustomButton variant="outline-secondary"
                ><i class="fa fa-align-left"></i
              ></CustomButton>
              <CustomButton variant="outline-secondary"
                ><i class="fa fa-align-center"></i
              ></CustomButton>
              <CustomButton variant="outline-secondary"
                ><i class="fa fa-align-right"></i
              ></CustomButton>
            </b-button-group>
          </div>
          <div class="mb-3">
            <b-button-group>
              <CustomButton variant="outline-secondary"
                ><i class="las la-play"></i
              ></CustomButton>
              <CustomButton variant="outline-primary" active
                ><i class="las la-pause"></i
              ></CustomButton>
              <CustomButton variant="outline-secondary"
                ><i class="las la-stop"></i
              ></CustomButton>
            </b-button-group>
          </div>
          <div class="mb-3">
            <b-button-group>
              <CustomButton variant="outline-secondary">Left</CustomButton>
              <CustomButton variant="outline-secondary">Middle</CustomButton>
              <CustomButton variant="outline-secondary">Right</CustomButton>
            </b-button-group>
          </div>
          <div class="mb-3">
            <b-button-group>
              <CustomButton variant="outline-secondary">1</CustomButton>
              <CustomButton variant="outline-secondary">2</CustomButton>
              <CustomButton variant="primary" active>3</CustomButton>
              <CustomButton variant="outline-secondary">4</CustomButton>
            </b-button-group>
            <b-button-group>
              <CustomButton variant="outline-secondary">5</CustomButton>
              <CustomButton variant="primary" active>6</CustomButton>
              <CustomButton variant="outline-secondary">7</CustomButton>
            </b-button-group>
            <b-button-group>
              <CustomButton variant="outline-secondary">8</CustomButton>
            </b-button-group>
          </div>
        </UIComponentCard>
      </b-col>
    </b-row>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import UIComponentCard from "@/components/UIComponentCard.vue";
import CustomButton from "@/components/ui/Button.vue";
</script>