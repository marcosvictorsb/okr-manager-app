<template>
  <div>
    <template v-for="(badge, index) in badges" :key="index">
      <template v-if="badge.type === 'badge'">
        <b-badge
          :variant="badge.variant"
          :pill="badge.pill"
          :class="badge.class"
        >
          {{ badge.text }}
        </b-badge>
        {{ " " }}
      </template>

      <template v-else-if="badge.type === 'link'">
        <a
          :href="badge.href || '#'"
          :class="`badge ${badge.class || ''}`"
        >
          {{ badge.text }}
        </a>
        {{ " " }}
      </template>

      <template v-else-if="badge.type === 'button'">
        <b-button
          :type="badge.buttonType || 'button'"
          :variant="badge.variant"
          :size="badge.size"
          :class="badge.class"
        >
          {{ badge.text }}
          <b-badge
            v-if="badge.badgeText"
            :variant="badge.badgeVariant"
            :class="badge.badgeClass"
          >
            {{ badge.badgeText }}
          </b-badge>
        </b-button>
        {{ " " }}
      </template>

      <template v-else-if="badge.type === 'positioned'">
        <b-button
          :type="badge.buttonType || 'button'"
          :variant="badge.variant"
          :class="`position-relative ${badge.class || ''}`"
        >
          {{ badge.text }}
          <span
            class="position-absolute top-0 start-100 translate-middle"
            :class="badge.badgeClass"
          >
            <small class="thumb-xs" >{{ badge.badgeText }}</small>
          </span>
        </b-button>
        {{ "   " }}
      </template>
    </template>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

// Defina o tipo dos badges
export interface Badge {
  type: "badge" | "link" | "button" | "positioned"; // Tipo do badge
  text: string; // Texto do badge
  variant?: string; // Variante do badge (primary, secondary, etc.)
  pill?: boolean; // Se o badge é arredondado
  class?: string; // Classes adicionais
  href?: string; // Para badges de link
  buttonType?: string; // Tipo do botão (button, submit, etc.)
  size?: string; // Tamanho do botão
  badgeText?: string; // Texto do badge interno (para botões)
  badgeVariant?: string; // Variante do badge interno
  badgeClass?: string; // Classe do badge interno
}

// Propriedades do componente
const props = defineProps<{
  badges: Badge[]; // Array de badges
}>();
</script>