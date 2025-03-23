<template>
  <b-table-simple
    :responsive="responsive"
    :bordered="bordered"
    :striped="striped"
    :hover="hover"
    :dark="dark"
    :small="small"
    class="mb-0 table-centered"
  >
    <!-- Cabeçalho da tabela -->
    <b-thead :class="theadClass">
      <b-tr>
        <b-th v-for="(header, index) in headers" :key="index">{{ header }}</b-th>
        <!-- Coluna de ações (adicionada automaticamente) -->
        <b-th v-if="actions" class="text-end">Action</b-th>
      </b-tr>
    </b-thead>

    <!-- Corpo da tabela -->
    <b-tbody>
      <b-tr
        v-for="(row, rowIndex) in rows"
        :key="rowIndex"
        :class="row.class" 
      >
        <b-td v-for="(cell, cellIndex) in row.cells" :key="cellIndex">
          <!-- Renderiza imagens se a célula for uma imagem -->
          <template v-if="typeof cell === 'object' && 'type' in cell">
            <template v-if="cell.type === 'image'">
              <img
                :src="cell.src"
                :alt="cell.alt"
                class="rounded-circle thumb-md me-1 d-inline"
              />
              {{ cell.text }}
            </template>
            
            <!-- Renderiza badges se a célula for um badge -->
            <template v-else-if="cell.type === 'badge'">
              <b-badge :variant="cell.variant">{{ cell.text }}</b-badge>
            </template>

          </template>

          <!-- Renderiza conteúdo padrão -->
          <template v-else>
            {{ cell }}
          </template>
        </b-td>

        <!-- Coluna de ações (adicionada automaticamente) -->
        <b-td v-if="actions" class="text-end">
          <!-- Dropdown para ações -->
          <b-dropdown
            :variant="null"
            class="d-inline-block"
            menu-class="dropdown-menu-end"
            toggle-class="p-0 m-0"
          >
            <template #button-content>
              <i class="las la-ellipsis-v fs-20 text-muted"></i>
            </template>
            <!-- Link para abrir outra página -->
            <b-dropdown-item v-if="actions.view" @click="actions.view(row)">
              View
            </b-dropdown-item>
            <!-- Abrir modal para editar -->
            <b-dropdown-item v-if="actions.edit" @click="actions.edit(row)">
              Edit
            </b-dropdown-item>
            <!-- Outras ações personalizadas -->
            <b-dropdown-item
              v-for="(action, index) in actions.custom"
              :key="index"
              @click="action.handler(row)"
            >
              {{ action.label }}
            </b-dropdown-item>
          </b-dropdown>
        </b-td>
      </b-tr>
    </b-tbody>
  </b-table-simple>
</template>

<script setup lang="ts">
defineProps({
  responsive: {
    type: Boolean,
    default: true,
  },
  bordered: {
    type: Boolean,
    default: false,
  },
  striped: {
    type: Boolean,
    default: false,
  },
  hover: {
    type: Boolean,
    default: false,
  },
  dark: {
    type: Boolean,
    default: false,
  },
  small: {
    type: Boolean,
    default: false,
  },
  theadClass: {
    type: String,
    default: "table-light",
  },
  headers: {
    type: Array as () => string[],
    required: true,
  },
  rows: {
    type: Array as () => {
      class?: string; // Classe de contexto para a linha (ex: "table-primary")
      cells: Array<
        | string
        | {
            type: "image"; // Tipo de célula para imagens
            src: string; // Caminho da imagem
            alt: string; // Texto alternativo da imagem
            text: string; // Texto ao lado da imagem
          }
        | {
            type: "badge"; // Tipo de célula para badges
            variant: string; // Variante do badge (ex: "success")
            text: string; // Texto do badge
          }
      >;
    }[],
    required: true,
  },
  actions: {
    type: Object as () => {
      view?: (row: any) => void; // Função para visualizar
      edit?: (row: any) => void; // Função para editar
      custom?: Array<{ label: string; handler: (row: any) => void }>; // Ações personalizadas
    },
    default: null,
  },
});
</script>