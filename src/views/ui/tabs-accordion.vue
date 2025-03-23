<template>
  <DefaultLayout>
    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <UIComponentCard title="Tabs">
          <CustomTabs
            :tabs="[
              { title: 'Home', content: 'Raw denim you probably haven\'t heard of them jean shorts Austin.', active: true },
              { title: 'Profile', content: 'Food truck fixie locavore, accusamus mcsweeney\'s single-origin coffee squid.' },
              { title: 'Settings', content: 'Trust fund seitan letterpress, keytar raw denim keffiyeh etsy.' },
            ]"
          />
        </UIComponentCard>
      </b-col>
      <b-col md="6" lg="6">
        <UIComponentCard title="Pills">
          <CustomTabs
            pills
            justified
            :tabs="[
              { title: 'Home', content: 'Raw denim you probably haven\'t heard of them jean shorts Austin.', active: true },
              { title: 'Profile', content: 'Food truck fixie locavore, accusamus mcsweeney\'s single-origin coffee squid.' },
              { title: 'Settings', content: 'Trust fund seitan letterpress, keytar raw denim keffiyeh etsy.' },
            ]"
          />
        </UIComponentCard>
      </b-col>
    </b-row>
    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <UIComponentCard title="Vertical Pills">
          <b-row>
            <CustomTabs
              vertical
              pills
              justified
              nav-wrapper-class="col-lg-3 col-sm-4"
              :tabs="[
                { title: 'Home', id: 'home', content: 'Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater.', active: true },
                { title: 'Profile', id: 'profile', content: 'Food truck fixie locavore, accusamus mcsweeney\'s marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson.' },
                { title: 'Settings', id: 'settings', content: 'Exercitation commodo enim craft beer mlkshk +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress.' },
              ]"
            />
          </b-row>
        </UIComponentCard>
      </b-col>
      <b-col md="6" lg="6">
        <UIComponentCard title="Custom Tabs">
          <CustomTabs
            nav-wrapper-class="nav-tabs-custom text-center"
            :tabs="[
              { title: 'Home', content: 'Raw denim you probably haven\'t heard of them jean shorts Austin.' },
              { title: 'Events', content: 'Food truck fixie locavore, accusamus mcsweeney\'s marfa nulla.' },
              { title: 'Settings', content: 'Trust fund seitan letterpress, keytar raw denim keffiyeh etsy.' },
            ]"
          />
        </UIComponentCard>
      </b-col>
    </b-row>
    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <UIComponentCard title="Collapse">
          <p class="d-flex flex-wrap gap-2">
            <a class="btn btn-primary" v-b-toggle.collapse-1>
              Link with href
            </a>
            <b-button variant="secondary" type="button" v-b-toggle.collapse-1>
              Button with data-target
            </b-button>
          </p>
          <b-collapse id="collapse-1" visible>
            <b-card-body class="mb-0 border-dashed border-theme-color rounded">
              <p class="mb-0 text-muted">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              </p>
            </b-card-body>
          </b-collapse>
        </UIComponentCard>
      </b-col>
      <b-col md="6" lg="6">
        <UIComponentCard title="Flush Example">
          <CustomAccordion
            flush
            :items="[
              {
                title: 'Accordion Item #1',
                content: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.',
                headerClass: 'm-0',
                buttonClass: 'fw-semibold',
              },
              {
                title: 'Accordion Item #2',
                content: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.',
                headerClass: 'm-0',
                buttonClass: 'fw-semibold',
              },
              {
                title: 'Accordion Item #3',
                content: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.',
                headerClass: 'm-0',
                buttonClass: 'fw-semibold',
              },
            ]"
          />
        </UIComponentCard>
      </b-col>
    </b-row>
    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <UIComponentCard title="Accordion Example">
          <CustomAccordion
            :items="[
              {
                title: 'Accordion Item #1',
                content: '<strong>This is the first item\'s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',
                headerClass: 'm-0',
                buttonClass: 'fw-semibold',
                visible: true,
              },
              {
                title: 'Accordion Item #2',
                content: '<strong>This is the second item\'s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',
                headerClass: 'm-0',
                buttonClass: 'fw-semibold',
              },
              {
                title: 'Accordion Item #3',
                content: '<strong>This is the third item\'s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',
                headerClass: 'm-0',
                buttonClass: 'fw-semibold',
              },
            ]"
          />
        </UIComponentCard>
      </b-col>
      <b-col md="6" lg="6">
        <UIComponentCard title="Always open">
          <CustomAccordion
            free
            :items="[
              {
                title: 'Accordion Item #1',
                content: '<strong>This is the first item\'s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',
                headerClass: 'm-0',
                buttonClass: 'fw-semibold',
                visible: true,
              },
              {
                title: 'Accordion Item #2',
                content: '<strong>This is the second item\'s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',
                headerClass: 'm-0',
                buttonClass: 'fw-semibold',
              },
              {
                title: 'Accordion Item #3',
                content: '<strong>This is the third item\'s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',
                headerClass: 'm-0',
                buttonClass: 'fw-semibold',
              },
            ]"
          />
        </UIComponentCard>
      </b-col>
    </b-row>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import UIComponentCard from "@/components/UIComponentCard.vue";
import CustomTabs from "@/components/ui/Tab.vue";
import CustomAccordion from "@/components/ui/Accordion.vue";
</script>