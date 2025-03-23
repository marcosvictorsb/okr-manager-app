<template>
  <DefaultLayout>
    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <UIComponentCard title="Badge Examples">
          <BadgeComponent :badges="badgeExamples" />
        </UIComponentCard>
      </b-col>

      <b-col md="6" lg="6">
        <UIComponentCard title="Pill Badges">
          <BadgeComponent :badges="pillBadges" />
        </UIComponentCard>
      </b-col>
    </b-row>

    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <UIComponentCard title="Links Badges">
          <BadgeComponent :badges="linkBadges" />
        </UIComponentCard>
      </b-col>

      <b-col md="6" lg="6">
        <UIComponentCard title="Buttons With Badge">
          <BadgeComponent :badges="buttonBadges" />
        </UIComponentCard>
      </b-col>
    </b-row>

    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <UIComponentCard title="Buttons With Positioned Badge">
          <BadgeComponent :badges="positionedBadges" />
        </UIComponentCard>
      </b-col>

      <b-col md="6" lg="6">
        <UIComponentCard title="Outline Badges">
          <BadgeComponent :badges="outlineBadges" />
        </UIComponentCard>
      </b-col>
    </b-row>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import UIComponentCard from "@/components/UIComponentCard.vue";
import BadgeComponent, { type Badge } from "@/components/ui/Badge.vue";

const badgeExamples: Badge[] = [
  { type: "badge", text: "Primary", variant: "primary", class: "text-white" },
  { type: "badge", text: "Secondary", variant: "secondary", class: "text-white" },
  { type: "badge", text: "Success", variant: "success", class: "text-white" },
  { type: "badge", text: "Danger", variant: "danger", class: "text-white" },
  { type: "badge", text: "Warning", variant: "warning", class: "text-white" },
  { type: "badge", text: "Info", variant: "info", class: "text-white" },
];

const pillBadges = badgeExamples.map((badge) => ({
  ...badge,
  pill: true,
}));

const linkBadges: Badge[] = [
  { type: "link", text: "Primary", class: "bg-primary" },
  { type: "link", text: "Secondary", class: "bg-secondary" },
  { type: "link", text: "Success", class: "bg-success" },
  { type: "link", text: "Danger", class: "bg-danger" },
];

const buttonBadges : Badge[] = [
  {
    type: "button",
    text: "Notifications",
    variant: "primary",
    size: "sm",
    badgeText: "4",
    badgeVariant: "light",
    badgeClass: "text-dark",
  },
  {
    type: "button",
    text: "Notifications",
    variant: "secondary",
    size: "sm",
    badgeText: "8",
    badgeVariant: "light",
    badgeClass: "text-dark",
  },
];

const positionedBadges : Badge[] = [
  {
    type: "positioned",
    text: "Notifications",
    variant: "primary",
    badgeText: "12",
    badgeClass: "bg-danger border border-light rounded-circle",
  },
  {
    type: "positioned",
    text: "Notifications",
    variant: "secondary",
    badgeText: "New",
    badgeClass: "bg-primary px-1 border border-light rounded",
  },
];

const outlineBadges : Badge[] = [
  { type: "badge", text: "Primary", variant: "outline-primary", class: "bg-transparent border border-primary text-primary" },
  { type: "badge", text: "Secondary", variant: "outline-secondary", class: "bg-transparent border border-secondary text-secondary" },
  { type: "badge", text: "Success", variant: "outline-success", class: "bg-transparent border border-success text-success" },
  { type: "badge", text: "Danger", variant: "outline-danger", class: "bg-transparent border border-danger text-danger" },
  { type: "badge", text: "Warning", variant: "outline-warning", class: "bg-transparent border border-warning text-warning" },
  { type: "badge", text: "Info", variant: "outline-info", class: "bg-transparent border border-info text-info" },
  { type: "badge", text: "Light", variant: "outline-light", class: "bg-transparent border border-purple text-purple" },
  { type: "badge", text: "Dark", variant: "outline-dark", class: "bg-transparent border border-dark text-dark" },
];
</script>