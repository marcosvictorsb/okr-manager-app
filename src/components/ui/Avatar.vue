<template>
  <div class="d-flex align-items-center">
    <template v-for="(item, index) in items" :key="index">
      <a
        v-if="type === 'image'"
        class="me-2 d-inline-block"
        href="#"
      >
        <img
          :src="item.src"
          :alt="item.alt || 'user'"
          :class="`thumb-${item.size} ${shapeClass}`"
        />
      </a>
      <span
        v-else-if="type === 'text'"
        :class="`thumb-${item.size} justify-content-center d-flex align-items-center ${item.bgClass} ${item.textClass} ${shapeClass} me-2`"
      >
        {{ item.text }}
      </span>
      <span
        v-else-if="type === 'icon'"
        :class="`thumb-${item.size} justify-content-center d-flex align-items-center ${item.bgClass} text-white ${shapeClass} me-2`"
      >
        <i :class="item.icon"></i>
      </span>
    </template>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

// Defina o tipo dos itens no array
interface AvatarItem {
  src?: string; // Para avatares de imagem
  alt?: string; // Texto alternativo para imagens
  size: string; // Tamanho do avatar (xxl, xl, lg, md, sm, xs)
  text?: string; // Para avatares de texto
  bgClass?: string; // Classe de fundo para texto ou ícone
  textClass?: string; // Classe de texto para avatares de texto
  icon?: string; // Classe do ícone para avatares de ícone
}

// Defina as propriedades do componente
const props = defineProps<{
  type: "image" | "text" | "icon"; // Tipo de avatar
  shape?: "circle" | "square"; // Forma do avatar
  items: AvatarItem[]; // Array de itens do tipo AvatarItem
}>();

// Classe de forma (círculo ou quadrado)
const shapeClass = props.shape === "circle" ? "rounded-circle" : "rounded";
</script>