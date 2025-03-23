<template>
  <DefaultLayout>
    <b-row class="justify-content-center">
      <!-- Card 1 -->
      <b-col md="6" lg="3">
        <CardExample
          :imgSrc="img1"
          imgAlt="Card img cap"
          header="Card title"
          bodyText="Some quick example text to build on the card title and make up the bulk of the card's content."
        >
          <template #links>
            <a href="#" class="btn btn-outline-primary btn-sm">Go somewhere</a>
          </template>
        </CardExample>
      </b-col>

      <!-- Card 2 -->
      <b-col md="6" xl="3">
        <CardExample
          header="Card Body"
          bodyText="Some quick example text the bulk of the card's content. It is a long established fact that a reader will be distracted by the readable content."
        />
        <CardExample
        bodyClass="pt-3"
        >
          <template #body>
            <h6 class="card-subtitle fs-14 mb-2">This is the card subtitle</h6>
            <p class="card-text text-muted">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </template>
          <template #links>
            <a href="#" class="card-link text-primary">Card link</a>
            <a href="#" class="card-link text-primary">Another link</a>
          </template>
        </CardExample>
      </b-col>

      <!-- Card 3 -->
      <b-col md="6" xl="3">
        <CardExample
          header="Header - Primary"
          headerClass="bg-primary"
          headerTitleClass="text-white"
          bodyText="Some quick example text to build on the card title and make up the bulk of the card's content."
          footer="Footer - 2024 Rizz"
        />
        <CardExample :body-Class="null">
          <template #body>
            <blockquote class="card-bodyquote mb-0">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a amet, consectetur adipiscing elit ante.
              </p>
              <footer class="blockquote-footer fs-14 mb-0 mt-2">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </template>
        </CardExample>
      </b-col>

      <!-- Card 4 -->
      <b-col md="6" xl="3">
        <CardExample
          header="List Group"
          bodyText="Some quick example text to build on the card title and make up the bulk of the card's content."
        >
          <template #body>
            <ul class="list-group list-group-flush border mb-3">
              <li class="list-group-item">Cras justo odio</li>
              <li class="list-group-item">Dapibus ac facilisis in</li>
              <li class="list-group-item">Vestibulum at eros</li>
            </ul>
          </template>
          <template #links>
            <a href="#" class="btn btn-outline-primary btn-sm">Go somewhere</a>
            <a href="#" class="btn btn-outline-secondary btn-sm">Finish</a>
          </template>
        </CardExample>
      </b-col>
    </b-row>

    <b-row>
      <!-- Card 5 -->
      <b-col lg="4">
        <CardExample>
          <template #body>
            <b-row class="g-0">
              <b-col md="4">
                <img :src="vcard" class="img-fluid rounded-start" alt="..." />
              </b-col>
              <b-col md="8">
                <b-card-body>
                  <b-card-title tag="h5">Card title</b-card-title>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural lead-in to additional content.
                  </p>
                  <p class="card-text">
                    <small class="text-body-secondary">Last updated 3 mins ago</small>
                  </p>
                </b-card-body>
              </b-col>
            </b-row>
          </template>
        </CardExample>
      </b-col>

      <!-- Card 6 -->
      <b-col lg="4">
        <CardExample>
          <template #body>
            <b-card-header>
              <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item">
                  <a class="nav-link active" href="#">Active</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
              </ul>
            </b-card-header>
            <b-card-body>
              <b-card-title tag="h5" class="mb-2">Special title treatment</b-card-title>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional content.
              </p>
              <a href="#" class="btn btn-primary btn-sm">Go somewhere</a>
            </b-card-body>
          </template>
        </CardExample>
      </b-col>

      <!-- Card 7 -->
      <b-col lg="4">
        <CardExample>
          <template #body>
            <b-row class="g-0">
              <b-col md="8">
                <b-card-body>
                  <b-card-title tag="h5">Card title</b-card-title>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural lead-in to additional content.
                  </p>
                  <p class="card-text">
                    <small class="text-body-secondary">Last updated 3 mins ago</small>
                  </p>
                </b-card-body>
              </b-col>
              <b-col md="4">
                <img :src="vcard" class="img-fluid rounded-end" alt="..." />
              </b-col>
            </b-row>
          </template>
        </CardExample>
      </b-col>
    </b-row>

    <b-row>
      <!-- Card 8 -->
      <b-col lg="4">
        <CardExample
          header="Special title treatment"
          bodyText="With supporting text below as a natural lead-in to additional content."
        >
          <template #links>
            <a href="#" class="btn btn-primary btn-sm">Go somewhere</a>
          </template>
        </CardExample>
      </b-col>

      <!-- Card 9 -->
      <b-col lg="4">
        <CardExample
          header="Special title treatment"
          bodyText="With supporting text below as a natural lead-in to additional content."
        >
          <template #links>
            <a href="#" class="btn btn-primary btn-sm">Go somewhere</a>
          </template>
        </CardExample>
      </b-col>

      <!-- Card 10 -->
      <b-col lg="4">
        <CardExample
          header="Special title treatment"
          bodyText="With supporting text below as a natural lead-in to additional content."
        >
          <template #links>
            <a href="#" class="btn btn-primary btn-sm">Go somewhere</a>
          </template>
        </CardExample>
      </b-col>
    </b-row>

    <b-row>
      <!-- Card 11 -->
      <b-col lg="6">
        <div class="card-group mb-3">
          <CardExample
            :imgSrc="excard"
            header="Card Groups"
            bodyText="This is a wider card supporting text below to content."
          >
            <template #links>
              <small class="text-muted">Last updated 3 mins ago</small>
            </template>
          </CardExample>
        </div>
      </b-col>

      <!-- Card 12 -->
      <b-col lg="6">
        <CardExample>
          <template #body>
            <b-row class="row-cols-1 row-cols-md-2 gx-3">
              <b-col>
                <CardExample
                  :imgSrc="excard"
                  bodyText="This is a longer card with supporting text below as a natural lead-in to additional content."
                />
              </b-col>
            </b-row>
          </template>
        </CardExample>
      </b-col>
    </b-row>
  </DefaultLayout>
</template>

<script setup lang="ts">
import CardExample from "@/components/ui/Card.vue";
import avatar7 from "@/assets/images/users/avatar-7.jpg";
import img1 from "@/assets/images/extra/card/img-1.jpg";
import vcard from "@/assets/images/extra/card/v-card.jpg";
import excard from "@/assets/images/extra/card/ex-card.png";

import DefaultLayout from "@/layouts/DefaultLayout.vue";
</script>