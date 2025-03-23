<template>
  <DefaultLayout>
    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <UIComponentCard title="Popovers Example">
          <div class="button-items d-flex flex-wrap gap-1">
            <b-button
              variant="primary"
              v-b-popover.click.top="
                `Vivamus sagittis lacus vel augue laoreet rutrum faucibus.`
              "
            >
              Popover on top
            </b-button>
            <b-button
              variant="primary"
              v-b-popover.click.right="
                `Vivamus sagittis lacus vel augue laoreet rutrum faucibus.`
              "
            >
              Popover on right
            </b-button>
            <b-button
              variant="primary"
              v-b-popover.click.bottom="
                `Vivamus sagittis lacus vel augue laoreet rutrum faucibus.`
              "
            >
              Popover on bottom
            </b-button>
            <b-button
              variant="primary"
              v-b-popover.click.left="
                `Vivamus sagittis lacus vel augue laoreet rutrum faucibus.`
              "
            >
              Popover on left
            </b-button>
          </div>
        </UIComponentCard>
      </b-col>
      <b-col md="6" lg="6">
        <UIComponentCard title="Bootstrap Tooltips">
          <div class="button-items d-flex flex-wrap gap-1">
            <b-button
              variant="primary"
              v-b-tooltip.hover.top="'Tooltip on top'"
            >
              Tooltip on top
            </b-button>
            <b-button
              variant="primary"
              v-b-tooltip.hover.right="'Tooltip on right'"
            >
              Tooltip on right
            </b-button>
            <b-button
              variant="primary"
              v-b-tooltip.hover.bottom="'Tooltip on bottom'"
            >
              Tooltip on bottom
            </b-button>
            <b-button
              variant="primary"
              v-b-tooltip.hover.left="'Tooltip on left'"
            >
              Tooltip on left
            </b-button>
          </div>
        </UIComponentCard>
      </b-col>
    </b-row>
    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <UIComponentCard title="Custom & Dismiss Popover">
          <div class="button-items d-flex flex-wrap gap-1">
            <b-button type="button" variant="secondary" id="popover-target-1">
              Custom popover
            </b-button>
            <CustomPopover
              target="popover-target-1"
              triggers="click"
              placement="right"
              title="Custom popover"
              content="This popover is themed via CSS variables."
              custom-class="custom-popover"
            />
            <a
              tabindex="0"
              class="btn btn-danger"
              role="button"
              id="popover-target-2"
            >
              Dismissible popover
            </a>
            <CustomPopover
              target="popover-target-2"
              triggers="focus"
              placement="right"
              title="Dismissible popover"
              content="And here's some amazing content. It's very engaging. Right?"
            />
          </div>
        </UIComponentCard>
      </b-col>
      <b-col md="6" lg="6">
        <UIComponentCard title="Custom Tooltip">
          <div class="button-items d-flex flex-wrap gap-2">
            <b-button variant="light" id="tooltip1"> Custom tooltip </b-button>
            <CustomTooltip
              target="tooltip1"
              content="This top tooltip is themed via CSS variables."
              custom-class="custom-tooltip"
            />
          </div>
        </UIComponentCard>
      </b-col>
    </b-row>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import UIComponentCard from "@/components/UIComponentCard.vue";
import CustomPopover from "@/components/ui/Popover.vue";
import CustomTooltip from "@/components/ui/Tooltip.vue";
</script>