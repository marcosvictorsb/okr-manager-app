<template>
  <DefaultLayout>
    <b-row class="justify-content-center">
      <b-col cols="12">
        <b-card no-body>
          <b-card-header>
            <b-row class="align-items-center">
              <b-col>
                <b-card-title>Customers Details</b-card-title>
              </b-col>
            </b-row>
          </b-card-header>
          <b-card-body class="pt-0">
            <DataTable
              id="datatable_1"
              :headers="['Name', 'Ext.', 'City', 'Start Date', 'Completion']"
              :rows="[
                ['Unity Pugh', '9958', 'Curicó', '2005/02/11', '37%'],
                ['Theodore Duran', '8971', 'Dhanbad', '1999/04/07', '97%'],
                ['Kylie Bishop', '3147', 'Norman', '2005/09/08', '63%'],
                ['Willow Gilliam', '3497', 'Amqui', '2009/29/11', '30%'],
                ['Blossom Dickerson', '5018', 'Kempten', '2006/11/09', '17%'],
                ['Elliott Snyder', '3925', 'Enines', '2006/03/08', '57%'],
                ['Castor Pugh', '9488', 'Neath', '2014/23/12', '93%'],
                ['Pearl Carlson', '6231', 'Cobourg', '2014/31/08', '100%'],
                ['Deirdre Bridges', '1579', 'Eberswalde-Finow', '2014/26/08', '44%'],
                ['Daniel Baldwin', '6095', 'Moircy', '2000/11/01', '33%'],
                ['Pearl Carlson', '6231', 'Cobourg', '2014/31/08', '100%'],
              ]"
              selectable
            />
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>

    <b-row class="justify-content-center">
      <b-col cols="12">
        <b-card no-body>
          <b-card-header>
            <b-row class="align-items-center">
              <b-col>
                <b-card-title>Export Table</b-card-title>
              </b-col>
            </b-row>
          </b-card-header>
          <b-card-body class="pt-0">
            <DataTable
              id="datatable_2"
              :headers="['Name', 'Ext.', 'City', 'Start Date', 'Completion']"
              :rows="[
                ['Unity Pugh', '9958', 'Curicó', '2005/02/11', '37%'],
                ['Theodore Duran', '8971', 'Dhanbad', '1999/04/07', '97%'],
                ['Kylie Bishop', '3147', 'Norman', '2005/09/08', '63%'],
                ['Willow Gilliam', '3497', 'Amqui', '2009/29/11', '30%'],
                ['Blossom Dickerson', '5018', 'Kempten', '2006/11/09', '17%'],
                ['Elliott Snyder', '3925', 'Enines', '2006/03/08', '57%'],
                ['Castor Pugh', '9488', 'Neath', '2014/23/12', '93%'],
                ['Pearl Carlson', '6231', 'Cobourg', '2014/31/08', '100%'],
                ['Deirdre Bridges', '1579', 'Eberswalde-Finow', '2014/26/08', '44%'],
                ['Daniel Baldwin', '6095', 'Moircy', '2000/11/01', '33%'],
                ['Pearl Carlson', '6231', 'Cobourg', '2014/31/08', '100%'],
              ]"
              :selectable="true"
              exportable
            />
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DataTable from "@/components/tables/DataTable.vue"; // Ajuste o caminho conforme necessário
import DefaultLayout from "@/layouts/DefaultLayout.vue";
</script>