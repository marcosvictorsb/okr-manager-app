<template>
  <DefaultLayout>
    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <UIComponentCard title="Avatars Circle">
          <AvatarComponent
            type="image"
            shape="circle"
            :items="imageAvatars"
          />
        </UIComponentCard>
      </b-col>

      <b-col md="6" lg="6">
        <UIComponentCard title="Avatars Square">
          <AvatarComponent
            type="image"
            shape="square"
            :items="imageAvatars"
          />
        </UIComponentCard>
      </b-col>
    </b-row>

    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <UIComponentCard title="Text Avatars Circle">
          <AvatarComponent
            type="text"
            shape="circle"
            :items="textAvatars"
          />
        </UIComponentCard>
      </b-col>

      <b-col md="6" lg="6">
        <UIComponentCard title="Text Avatars Square">
          <AvatarComponent
            type="text"
            shape="square"
            :items="textAvatars"
          />
        </UIComponentCard>
      </b-col>
    </b-row>

    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <UIComponentCard title="Icon Avatars Circle">
          <AvatarComponent
            type="icon"
            shape="circle"
            :items="iconAvatars"
          />
        </UIComponentCard>
      </b-col>

      <b-col md="6" lg="6">
        <UIComponentCard title="Icon Avatars Square">
          <AvatarComponent
            type="icon"
            shape="square"
            :items="iconAvatars"
          />
        </UIComponentCard>
      </b-col>
    </b-row>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import UIComponentCard from "@/components/UIComponentCard.vue";
import AvatarComponent from "@/components/ui/Avatar.vue";
import avatar9 from "@/assets/images/users/avatar-9.jpg";

const imageAvatars = [
  { src: avatar9, size: "xxl" },
  { src: avatar9, size: "xl" },
  { src: avatar9, size: "lg" },
  { src: avatar9, size: "md" },
  { src: avatar9, size: "sm" },
  { src: avatar9, size: "xs" },
];

const textAvatars = [
  { text: "MT", size: "xxl", bgClass: "bg-success-subtle", textClass: "text-success" },
  { text: "MT", size: "xl", bgClass: "bg-pink-subtle", textClass: "text-pink" },
  { text: "MT", size: "lg", bgClass: "bg-purple-subtle", textClass: "text-purple" },
  { text: "MT", size: "md", bgClass: "bg-warning-subtle", textClass: "text-warning" },
  { text: "MT", size: "sm", bgClass: "bg-info-subtle", textClass: "text-info" },
  { text: "MT", size: "xs", bgClass: "bg-dark-subtle", textClass: "text-dark" },
];

const iconAvatars = [
  { icon: "iconoir-profile-circle", size: "xxl", bgClass: "bg-success" },
  { icon: "iconoir-profile-circle", size: "xl", bgClass: "bg-pink" },
  { icon: "iconoir-profile-circle", size: "lg", bgClass: "bg-purple" },
  { icon: "iconoir-profile-circle", size: "md", bgClass: "bg-warning" },
  { icon: "iconoir-profile-circle", size: "sm", bgClass: "bg-info" },
  { icon: "iconoir-profile-circle", size: "xs", bgClass: "bg-dark" },
];
</script>