<template>
  <div class="table-responsive m-0">
    <table :id="id" class="table datatable">
      <thead :class="theadClass">
        <tr>
          <th v-if="selectable" style="width: 16px">
            <div class="form-check mb-0 ms-n1">
              <input
                type="checkbox"
                class="form-check-input"
                name="select-all"
                :id="`select-all-${id}`"
                :checked="allSelected"
                @click="toggleSelectAll"
              />
            </div>
          </th>
          <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
          <td v-if="selectable" style="width: 16px">
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                name="check"
                :id="`customCheck-${id}-${rowIndex}`"
                :checked="isRowSelected(row)"
                @change="toggleRowSelection(row)"
              />
            </div>
          </td>
          <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
        </tr>
      </tbody>
    </table>

    <!-- Botões de exportação -->
    <div v-if="exportable" class="d-flex flex-wrap gap-2 mt-2">
      <b-button variant="primary" size="sm" @click="exportCSV">Export CSV</b-button>
      <b-button variant="primary" size="sm" @click="exportSQL">Export SQL</b-button>
      <b-button variant="primary" size="sm" @click="exportTXT">Export TXT</b-button>
      <b-button variant="primary" size="sm" @click="exportJSON">Export JSON</b-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { DataTable, exportCSV, exportSQL, exportTXT, exportJSON } from "simple-datatables";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  headers: {
    type: Array as () => string[],
    required: true,
  },
  rows: {
    type: Array as () => any[][],
    required: true,
  },
  theadClass: {
    type: String,
    default: "table-light",
  },
  selectable: {
    type: Boolean,
    default: false,
  },
  exportable: {
    type: Boolean,
    default: false,
  },
});

const selectedRows = ref<any[]>([]);

// Verifica se todas as linhas estão selecionadas
const allSelected = computed(() => {
  return selectedRows.value.length === props.rows.length;
});

// Verifica se uma linha específica está selecionada
const isRowSelected = (row: any) => {
  return selectedRows.value.includes(row);
};

// Alterna a seleção de uma linha
const toggleRowSelection = (row: any) => {
  const index = selectedRows.value.indexOf(row);
  if (index === -1) {
    selectedRows.value.push(row);
  } else {
    selectedRows.value.splice(index, 1);
  }
};

// Alterna a seleção de todas as linhas
const toggleSelectAll = (event: Event) => {
  console.log('toggleSelectAll')
  const target = event.target as HTMLInputElement;
  console.log(target)
  if (target.checked) {
    selectedRows.value = [...props.rows];
  } else {
    selectedRows.value = [];
  }
};

let dataTableInstance: DataTable;

onMounted(() => {
  dataTableInstance = new DataTable(`#${props.id}`, {
    searchable: true,
    fixedHeight: false,
  });
});

const exportCSV = () => {
  exportCSV(dataTableInstance, {
    download: true,
    lineDelimiter: "\n\n",
    columnDelimiter: ";",
  });
};

const exportSQL = () => {
  exportSQL(dataTableInstance, {
    download: true,
    tableName: "export_table",
  });
};

const exportTXT = () => {
  exportTXT(dataTableInstance, {
    download: true,
  });
};

const exportJSON = () => {
  exportJSON(dataTableInstance, {
    download: true,
    space: 3,
  });
};
</script>