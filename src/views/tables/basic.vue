<template>
  <DefaultLayout>
    <!-- Primeira linha de tabelas -->
    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <b-card no-body>
          <b-card-header>
            <b-row class="align-items-center">
              <b-col>
                <b-card-title>Basic Example</b-card-title>
              </b-col>
            </b-row>
          </b-card-header>
          <b-card-body class="pt-0">
            <CustomTable
              :headers="['Company', 'Bill', 'Average Bill', 'Paid Bill']"
              :rows="[
                {
                  cells: [
                    { type: 'image', src: chatgpt, alt: 'Micromin', text: 'Micromin' },
                    '4',
                    '250',
                    '800',
                  ],
                },
                {
                  cells: [
                    { type: 'image', src: nextjs, alt: 'ZZ Diamond', text: 'ZZ Diamond' },
                    '2',
                    '180',
                    '400',
                  ],
                },
                {
                  cells: [
                    { type: 'image', src: reactjs, alt: 'Dairy Sweet', text: 'Dairy Sweet' },
                    '6',
                    '210',
                    '500',
                  ],
                },
                {
                  cells: [
                    { type: 'image', src: symfony, alt: 'Corner Tea', text: 'Corner Tea' },
                    '3',
                    '80',
                    '350',
                  ],
                },
              ]"
              :actions="{
                view: (row) => handleView(row),
                edit: (row) => handleEdit(row),
                custom: [
                  { label: 'Delete', handler: (row) => handleDelete(row) },
                ],
              }"
            />
          </b-card-body>
        </b-card>
      </b-col>
      <b-col md="6" lg="6">
        <b-card no-body>
          <b-card-header>
            <b-row class="align-items-center">
              <b-col>
                <b-card-title>Bordered Table</b-card-title>
              </b-col>
            </b-row>
          </b-card-header>
          <b-card-body class="pt-0">
            <CustomTable
              bordered
              :headers="['Transaction ID', 'Date', 'Price', 'Order Status']"
              :rows="[
                {
                  cells: [
                    '#124781',
                    '25/11/2018',
                    '321',
                    { type: 'badge', variant: 'success', text: 'Approved' },
                  ],
                },
                {
                  cells: [
                    '#542136',
                    '19/11/2018',
                    '227',
                    { type: 'badge', variant: 'success', text: 'Approved' },
                  ],
                },
                {
                  cells: [
                    '#234578',
                    '11/10/2018',
                    '442',
                    { type: 'badge', variant: 'danger', text: 'Rejected' },
                  ],
                },
                {
                  cells: [
                    '#951357',
                    '03/12/2018',
                    '625',
                    { type: 'badge', variant: 'success', text: 'Approved' },
                  ],
                },
              ]"
              :actions="{
                view: (row) => handleView(row),
                edit: (row) => handleEdit(row),
              }"
            />
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>

    <!-- Segunda linha de tabelas -->
    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <b-card no-body>
          <b-card-header>
            <b-row class="align-items-center">
              <b-col>
                <b-card-title>Striped Rows</b-card-title>
              </b-col>
            </b-row>
          </b-card-header>
          <b-card-body class="pt-0">
            <CustomTable
              striped
              :headers="['Customer', 'Email', 'Contact No']"
              :rows="[
                {
                  cells: [
                    { type: 'image', src: avatar3, alt: 'Aaron Poulin', text: 'Aaron Poulin' },
                    'Aaron@example.com',
                    '+21 21547896',
                  ],
                },
                {
                  cells: [
                    { type: 'image', src: avatar4, alt: 'Richard Ali', text: 'Richard Ali' },
                    'Richard@example.com',
                    '+41 21547896',
                  ],
                },
                {
                  cells: [
                    { type: 'image', src: avatar5, alt: 'Juan Clark', text: 'Juan Clark' },
                    'Juan@example.com',
                    '+65 21547896',
                  ],
                },
                {
                  cells: [
                    { type: 'image', src: avatar6, alt: 'Albert Hull', text: 'Albert Hull' },
                    'Albert@example.com',
                    '+88 21547896',
                  ],
                },
              ]"
              :actions="{
                view: (row) => handleView(row),
                edit: (row) => handleEdit(row),
              }"
            />
          </b-card-body>
        </b-card>
      </b-col>
      <b-col md="6" lg="6">
        <b-card no-body>
          <b-card-header>
            <b-row class="align-items-center">
              <b-col>
                <b-card-title>Table Head Options</b-card-title>
              </b-col>
            </b-row>
          </b-card-header>
          <b-card-body class="pt-0">
            <CustomTable
              :headers="['#', 'Name', 'Email', 'Access']"
              :rows="[
                {
                  cells: [
                    '1',
                    'Mark',
                    'XYZ@Example.com',
                    { type: 'badge', variant: 'success', text: 'Business' },
                  ],
                },
                {
                  cells: [
                    '2',
                    'Jacob',
                    'XYZ@Example.com',
                    { type: 'badge', variant: 'warning', text: 'Personal' },
                  ],
                },
                {
                  cells: [
                    '3',
                    'Larry',
                    'XYZ@Example.com',
                    { type: 'badge', variant: 'danger', text: 'Disabled' },
                  ],
                },
                {
                  cells: [
                    '4',
                    'Mark',
                    'XYZ@Example.com',
                    { type: 'badge', variant: 'success', text: 'Business' },
                  ],
                },
                {
                  cells: [
                    '5',
                    'Jacob',
                    'XYZ@Example.com',
                    { type: 'badge', variant: 'warning', text: 'Personal' },
                  ],
                },
              ]"
              :actions="{
                view: (row) => handleView(row),
                edit: (row) => handleEdit(row),
              }"
            />
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>

    <!-- Terceira linha de tabelas -->
    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <b-card no-body>
          <b-card-header>
            <b-row class="align-items-center">
              <b-col>
                <b-card-title>Hoverable Rows</b-card-title>
              </b-col>
            </b-row>
          </b-card-header>
          <b-card-body class="pt-0">
            <CustomTable
              hover
              :headers="['#', 'First Name', 'Last Name', 'Username']"
              :rows="[
                { cells: ['1', 'Mark', 'Otto', '@mdo'] },
                { cells: ['2', 'Jacob', 'Thornton', '@fat'] },
                { cells: ['3', 'Larry the Bird', '', '@twitter'] },
              ]"
              :actions="{
                view: (row) => handleView(row),
                edit: (row) => handleEdit(row),
              }"
            />
          </b-card-body>
        </b-card>
      </b-col>
      <b-col md="6" lg="6">
        <b-card no-body>
          <b-card-header>
            <b-row class="align-items-center">
              <b-col>
                <b-card-title>Dark Table</b-card-title>
              </b-col>
            </b-row>
          </b-card-header>
          <b-card-body class="pt-0">
            <CustomTable
              dark
              :headers="['#', 'First Name', 'Last Name', 'Username']"
              :rows="[
                { cells: ['1', 'Mark', 'Otto', '@mdo'] },
                { cells: ['2', 'Jacob', 'Thornton', '@fat'] },
                { cells: ['3', 'Larry', 'the Bird', '@twitter'] },
              ]"
              :actions="{
                view: (row) => handleView(row),
                edit: (row) => handleEdit(row),
              }"
            />
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>

    <!-- Quarta linha de tabelas -->
    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <b-card no-body>
          <b-card-header>
            <b-row class="align-items-center">
              <b-col>
                <b-card-title>Contextual Classes</b-card-title>
              </b-col>
            </b-row>
          </b-card-header>
          <b-card-body class="pt-0">
            <CustomTable
              :headers="['#', 'First Name', 'Last Name', 'Username']"
              :rows="[
                { class: 'table-primary', cells: ['1', 'Mark', 'Otto', '@mdo'] },
                { cells: ['2', 'Jacob', 'Thornton', '@fat'] },
                { class: 'table-secondary', cells: ['3', 'Larry', 'the Bird', '@twitter'] },
                { cells: ['4', 'Mark', 'Otto', '@mdo'] },
                { class: 'table-success', cells: ['5', 'Jacob', 'Thornton', '@fat'] },
                { cells: ['6', 'Larry', 'the Bird', '@twitter'] },
                { class: 'table-info', cells: ['7', 'Jacob', 'Thornton', '@fat'] },
                { cells: ['8', 'Larry', 'the Bird', '@twitter'] },
                { class: 'table-warning', cells: ['9', 'Jacob', 'Thornton', '@fat'] },
                { cells: ['10', 'Larry', 'the Bird', '@twitter'] },
              ]"
              :actions="{
                view: (row) => handleView(row),
                edit: (row) => handleEdit(row),
              }"
            />
          </b-card-body>
        </b-card>
      </b-col>
      <b-col md="6" lg="6">
        <b-card no-body>
          <b-card-header>
            <b-row class="align-items-center">
              <b-col>
                <b-card-title>Captions Table</b-card-title>
              </b-col>
            </b-row>
          </b-card-header>
          <b-card-body class="pt-0">
            <CustomTable
              :headers="['#', 'First Name', 'Last Name', 'Username']"
              :rows="[
                { cells: ['1', 'Mark', 'Otto', '@mdo'] },
                { cells: ['2', 'Jacob', 'Thornton', '@fat'] },
                { cells: ['3', 'Larry', 'the Bird', '@twitter'] },
              ]"
              :actions="{
                view: (row) => handleView(row),
                edit: (row) => handleEdit(row),
              }"
            />
          </b-card-body>
        </b-card>

        <b-card no-body>
          <b-card-header>
            <b-row class="align-items-center">
              <b-col>
                <b-card-title>Small Table</b-card-title>
              </b-col>
            </b-row>
          </b-card-header>
          <b-card-body class="pt-0">
            <CustomTable
              small
              :headers="['#', 'First Name', 'Last Name', 'Username']"
              :rows="[
                { cells: ['1', 'Mark', 'Otto', '@mdo'] },
                { cells: ['2', 'Jacob', 'Thornton', '@fat'] },
                { cells: ['3', 'Larry the Bird', '', '@twitter'] },
              ]"
              :actions="{
                view: (row) => handleView(row),
                edit: (row) => handleEdit(row),
              }"
            />
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CustomTable from "@/components/tables/basic.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

import chatgpt from "@/assets/images/logos/lang-logo/chatgpt.png";
import nextjs from "@/assets/images/logos/lang-logo/nextjs.png";
import reactjs from "@/assets/images/logos/lang-logo/reactjs.png";
import symfony from "@/assets/images/logos/lang-logo/symfony.png";

import avatar3 from "@/assets/images/users/avatar-3.jpg";
import avatar4 from "@/assets/images/users/avatar-4.jpg";
import avatar5 from "@/assets/images/users/avatar-5.jpg";
import avatar6 from "@/assets/images/users/avatar-6.jpg";

// Funções de exemplo para ações
const handleView = (row: any) => {
  console.log("View row:", row);
};

const handleEdit = (row: any) => {
  console.log("Edit row:", row);
};

const handleDelete = (row: any) => {
  console.log("Delete row:", row);
};
</script>