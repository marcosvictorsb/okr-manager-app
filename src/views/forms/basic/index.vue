<template>
  <DefaultLayout>
    <b-row class="justify-content-center">
      <b-col cols="12">
        <UIComponentCard title="Textual Inputs">
          <b-row>
            <b-col lg="6">
              <b-row class="mb-3">
                <label
                  for="example-text-input"
                  class="col-sm-2 col-form-label text-lg-end"
                  >Text</label
                >
                <b-col sm="10">
                  <Input
                    id="example-text-input"
                    value="Artisanal kale"
                    placeholder="Artisanal kale"
                  />
                </b-col>
              </b-row>
              <b-row class="mb-3">
                <label
                  for="example-email-input"
                  class="col-sm-2 col-form-label text-lg-end"
                  >Email</label
                >
                <b-col sm="10">
                  <Input
                    type="email"
                    id="example-email-input"
                    value="bootstrap@example.com"
                    placeholder="bootstrap@example.com"
                  />
                </b-col>
              </b-row>
              <b-row class="mb-3">
                <label
                  for="example-tel-input"
                  class="col-sm-2 col-form-label text-lg-end"
                  >Telephone</label
                >
                <b-col sm="10">
                  <Input
                    type="tel"
                    id="example-tel-input"
                    value="1-(555)-555-5555"
                    placeholder="1-(555)-555-5555"
                  />
                </b-col>
              </b-row>
              <b-row class="mb-3">
                <label
                  for="example-password-input"
                  class="col-sm-2 col-form-label text-lg-end"
                  >Password</label
                >
                <b-col sm="10">
                  <Input
                    type="password"
                    id="example-password-input"
                    value="hunter2"
                  />
                </b-col>
              </b-row>
              <b-row class="mb-3">
                <label
                  for="example-number-input"
                  class="col-sm-2 col-form-label text-lg-end"
                  >Number</label
                >
                <b-col sm="10">
                  <Input
                    type="number"
                    id="example-number-input"
                    value="42"
                    placeholder="42"
                  />
                </b-col>
              </b-row>
              <b-row class="mb-3">
                <label
                  for="example-datetime-local-input"
                  class="col-sm-2 col-form-label text-lg-end"
                  >Date and time</label
                >
                <b-col sm="10">
                  <Input
                    type="datetime-local"
                    id="example-datetime-local-input"
                    value="2011-08-19T13:45:00"
                    placeholder="2011-08-19T13:45:00"
                  />
                </b-col>
              </b-row>
              <b-row class="mb-3">
                <label
                  for="exampleColorInput"
                  class="col-sm-2 col-form-label text-lg-end"
                  >Color</label
                >
                <b-col sm="10">
                  <Input
                    type="color"
                    id="exampleColorInput"
                    value="#0b51b7"
                  />
                </b-col>
              </b-row>
              <b-row class="mb-3">
                <label class="col-sm-2 col-form-label text-lg-end"
                  >Select</label
                >
                <b-col sm="10">
                  <Select
                    id="required"
                    model-value="select"
                    :options="[
                      { value: 'select', text: 'Open this select menu' },
                      { value: '1', text: 'One' },
                      { value: '2', text: 'Two' },
                      { value: '3', text: 'Three' }
                    ]"
                  />
                </b-col>
              </b-row>
              <b-row class="mb-3">
                <label
                  for="example-text-input-lg"
                  class="col-sm-2 col-form-label text-lg-end"
                  >Large</label
                >
                <b-col sm="10">
                  <Input
                    type="text"
                    id="example-text-input-lg"
                    size="lg"
                    placeholder=".form-control-lg"
                  />
                </b-col>
              </b-row>
              <b-row class="mb-3">
                <label
                  for="example-text-input-sm"
                  class="col-sm-2 col-form-label text-lg-end"
                  >Small</label
                >
                <b-col sm="10">
                  <Input
                    type="text"
                    id="example-text-input-sm"
                    size="sm"
                    placeholder=".form-control-sm"
                  />
                </b-col>
              </b-row>
            </b-col>

            <b-col lg="6">
              <b-row class="mb-3">
                <label
                  for="example-search-input"
                  class="col-sm-2 col-form-label text-lg-end"
                  >Search</label
                >
                <b-col sm="10">
                  <Input
                    type="search"
                    id="example-search-input"
                    value="How do I shoot web"
                    placeholder="How do I shoot web"
                  />
                </b-col>
              </b-row>
              <b-row class="mb-3">
                <label
                  for="example-url-input"
                  class="col-sm-2 col-form-label text-lg-end"
                  >URL</label
                >
                <b-col sm="10">
                  <Input
                    type="url"
                    id="example-url-input"
                    value="https://getbootstrap.com"
                    placeholder="https://getbootstrap.com"
                  />
                </b-col>
              </b-row>
              <b-row class="mb-3">
                <label
                  for="example-date-input"
                  class="col-sm-2 col-form-label text-lg-end"
                  >Date</label
                >
                <b-col sm="10">
                  <Input
                    type="date"
                    id="example-date-input"
                    value="2011-08-19"
                    placeholder="2011-08-19"
                  />
                </b-col>
              </b-row>
              <b-row class="mb-3">
                <label
                  for="example-month-input"
                  class="col-sm-2 col-form-label text-lg-end"
                  >Month</label
                >
                <b-col sm="10">
                  <Input
                    type="month"
                    id="example-month-input"
                    value="2011-08"
                    placeholder="2011-08"
                  />
                </b-col>
              </b-row>
              <b-row class="mb-3">
                <label
                  for="example-week-input"
                  class="col-sm-2 col-form-label text-lg-end"
                  >Week</label
                >
                <b-col sm="10">
                  <Input
                    type="week"
                    id="example-week-input"
                    value="2011-W33"
                    placeholder="2011-W33"
                  />
                </b-col>
              </b-row>
              <b-row class="mb-3">
                <label
                  for="example-time-input"
                  class="col-sm-2 col-form-label text-lg-end"
                  >Time</label
                >
                <b-col sm="10">
                  <Input
                    type="time"
                    id="example-time-input"
                    value="13:45:00"
                    placeholder="13:45:00"
                  />
                </b-col>
              </b-row>
              <b-row class="mb-3 has-warning">
                <label
                  for="inputHorizontalWarning"
                  class="col-sm-2 col-form-label text-lg-end"
                  >Email</label
                >
                <b-col sm="10">
                  <Input
                    type="email"
                    id="inputHorizontalWarning"
                    placeholder="name@example.com"
                  />
                  <small class="form-text text-muted"
                    >Example help text that remains unchanged.</small
                  >
                </b-col>
              </b-row>
              <b-row class="mb-3 has-success">
                <label
                  for="inputHorizontalSuccess"
                  class="col-sm-2 col-form-label text-lg-end"
                  >Email</label
                >
                <b-col sm="10">
                  <Input
                    type="email"
                    id="inputHorizontalSuccess"
                    placeholder="name@example.com"
                    :state="true"
                  />
                  <b-form-valid-feedback>
                    Success! You've done it.
                  </b-form-valid-feedback>
                </b-col>
              </b-row>
              <b-row class="mb-3 has-error">
                <label
                  for="inputHorizontalDnger"
                  class="col-sm-2 col-form-label text-lg-end"
                  >Email</label
                >
                <b-col sm="10">
                  <Input
                    type="email"
                    id="inputHorizontalDnger"
                    placeholder="name@example.com"
                    :state="false"
                  />
                  <b-form-invalid-feedback>
                    Sorry, that username's taken. Try another?
                  </b-form-invalid-feedback>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </UIComponentCard>
      </b-col>
    </b-row>

    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <UIComponentCard title="Basic Form">
          <form>
            <b-form-group
              label="Email address"
              label-for="exampleInputEmail1"
              class="mb-3"
            >
              <Input
                type="email"
                placeholder="Enter email"
                id="exampleInputEmail1"
              />
              <small id="emailHelp" class="form-text text-muted"
                >We'll never share your email with anyone else.</small
              >
            </b-form-group>

            <b-form-group
              label="Password"
              label-for="exampleInputPassword1"
              class="mb-3"
            >
              <Input
                type="password"
                placeholder="Password"
                id="exampleInputPassword1"
              />
            </b-form-group>

            <b-form-group class="mb-3">
              <Checkbox id="flexCheckDefaultdemo" name="checkbox-1">
                Check me out
              </Checkbox>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
            {{ " " }}
            <b-button type="button" variant="danger">Cancel</b-button>
          </form>
        </UIComponentCard>
      </b-col>
      <b-col md="6" lg="6">
        <UIComponentCard title="Horizontal Form">
          <b-form>
            <b-row class="mb-3">
              <label for="horizontalInput1" class="col-sm-2 col-form-label"
                >Email</label
              >
              <b-col sm="10">
                <Input
                  type="email"
                  id="horizontalInput1"
                  placeholder="Enter Email"
                />
              </b-col>
            </b-row>

            <b-row class="mb-3">
              <label for="horizontalInput2" class="col-sm-2 col-form-label"
                >Password</label
              >
              <b-col sm="10">
                <Input
                  type="password"
                  id="horizontalInput2"
                  placeholder="Password"
                />
              </b-col>
            </b-row>

            <b-row>
              <b-col sm="10" class="ms-auto">
                <Checkbox
                  id="flexCheckDefaultdemo2"
                  name="checkbox"
                  class="mb-3"
                >
                  Remember me
                </Checkbox>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="10" class="ms-auto">
                <b-button type="submit" variant="primary">Submit</b-button>
                {{ " " }}
                <b-button type="button" variant="danger">Cancel</b-button>
              </b-col>
            </b-row>
          </b-form>
        </UIComponentCard>
      </b-col>
    </b-row>

    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <UIComponentCard title="Custom Styles">
          <b-form>
            <b-row>
              <b-col md="4">
                <b-form-group label="Name" label-for="username" class="mb-3">
                  <Input type="text" id="username" />
                </b-form-group>
              </b-col>
              <b-col md="4">
                <b-form-group
                  label="Email address"
                  label-for="useremail"
                  class="mb-3"
                >
                  <Input type="email" id="useremail" />
                </b-form-group>
              </b-col>
              <b-col md="4">
                <b-form-group label="Subject" label-for="subject" class="mb-3">
                  <Input type="text" id="subject" />
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="12">
                <b-form-group label="Message" label-for="message" class="mb-3">
                  <TextArea rows="5" id="message" />
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="12" class="text-end">
                <b-button type="submit" variant="primary" class="px-4"
                  >Send Message</b-button
                >
              </b-col>
            </b-row>
          </b-form>
        </UIComponentCard>

        <UIComponentCard title="Inline Form">
          <b-form class="row align-items-center">
            <div class="col-auto">
              <InputGroup prepend-text="@" placeholder="Username" />
            </div>
            <div class="col-auto">
              <b-input-group>
                <Select
                  model-value="select"
                  id="required"
                  :options="[
                    { value: 'select', text: 'Choose...' },
                    { value: '1', text: 'One' },
                    { value: '2', text: 'Two' },
                    { value: '3', text: 'Three' }
                  ]"
                />
              </b-input-group>
            </div>
            <div class="col-auto">
              <b-button type="submit" variant="primary">Submit</b-button>
            </div>
          </b-form>
        </UIComponentCard>

        <UIComponentCard title="Input Size">
          <b-form>
            <Input
              type="text"
              class="mb-2"
              size="lg"
              placeholder=".form-control-lg"
            />
            <Input
              type="text"
              size="sm"
              placeholder=".form-control-sm"
            />
          </b-form>
        </UIComponentCard>

        <UIComponentCard title="File Browser">
          <b-input-group class="mb-3">
            <b-input-group-text>Upload</b-input-group-text>
            <FileInput />
          </b-input-group>

          <b-input-group class="mb-3">
            <FileInput />
            <b-input-group-text>Upload</b-input-group-text>
          </b-input-group>

          <b-input-group class="mb-3">
            <b-input-group-text class="btn btn-outline-secondary"
              >Button</b-input-group-text
            >
            <FileInput />
          </b-input-group>

          <b-input-group>
            <FileInput />
            <b-input-group-text class="btn btn-outline-secondary"
              >Button</b-input-group-text
            >
          </b-input-group>
        </UIComponentCard>
      </b-col>
      <b-col md="6" lg="6">
        <UIComponentCard title="Form Controls">
          <form>
            <b-form-group
              label="Email address"
              label-for="exampleFormControlInput1"
              class="mb-3"
            >
              <Input
                type="email"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </b-form-group>

            <b-form-group
              label="Example select"
              label-for="exampleFormControlSelect1"
              class="mb-3"
            >
              <Select
                model-value="1"
                id="exampleFormControlSelect1"
                :options="[
                  { value: '1', text: '1' },
                  { value: '2', text: '2' },
                  { value: '3', text: '3' },
                  { value: '4', text: '4' },
                  { value: '5', text: '5' }
                ]"
              />
            </b-form-group>

            <b-form-group
              label="Example multiple select"
              label-for="exampleFormControlSelect2"
              class="mb-3"
            >
              <Select
                model-value="1"
                id="exampleFormControlSelect2"
                :options="[
                  { value: '1', text: '1' },
                  { value: '2', text: '2' },
                  { value: '3', text: '3' },
                  { value: '4', text: '4' },
                  { value: '5', text: '5' }
                ]"
                :multiple="true"
              />
            </b-form-group>

            <b-form-group
              label="Example textarea"
              label-for="exampleFormControlTextarea1"
            >
              <TextArea
                rows="3"
                id="exampleFormControlTextarea1"
              />
            </b-form-group>
          </form>
        </UIComponentCard>

        <UIComponentCard title="Range">
          <b-form-group label="Example range" label-for="customRange1">
            <Range id="customRange1" />
          </b-form-group>
          <b-form-group label="Min and max" label-for="customRange2">
            <Range id="customRange2" :min="0" :max="5" />
          </b-form-group>
          <b-form-group label="Steps" label-for="customRange3">
            <Range
              id="customRange3"
              :min="0"
              :max="5"
              :step="0.5"
            />
          </b-form-group>
        </UIComponentCard>

        <UIComponentCard title="Switches">
          <b-row>
            <b-col lg="4">
              <Checkbox switch>Default switch</Checkbox>
              <Checkbox switch disabled>Disabled switch</Checkbox>
            </b-col>
            <b-col lg="4">
              <div class="form-switch-secondary">
                <Checkbox switch checked>Secondary</Checkbox>
              </div>
              <div class="form-switch-success">
                <Checkbox switch checked>Success</Checkbox>
              </div>
              <div class="form-switch-warning">
                <Checkbox switch checked>Warning</Checkbox>
              </div>
              <div class="form-switch-info">
                <Checkbox switch checked>Info</Checkbox>
              </div>
            </b-col>
            <b-col lg="4">
              <div class="form-switch-danger">
                <Checkbox switch checked>Danger</Checkbox>
              </div>

              <div class="form-switch-dark">
                <Checkbox switch checked>Dark</Checkbox>
              </div>

              <div class="form-switch-purple">
                <Checkbox switch checked>Purple</Checkbox>
              </div>

              <div class="form-switch-pink">
                <Checkbox switch checked>Pink</Checkbox>
              </div>
            </b-col>
          </b-row>
        </UIComponentCard>
      </b-col>
    </b-row>

    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <UIComponentCard title="Checkboxs">
          <b-form class="form">
            <b-row class="mb-3">
              <label class="col-md-3 my-2 control-label">Checkboxes</label>
              <b-col md="9">
                <Checkbox>Default checkbox</Checkbox>
                <Checkbox checked>Checked checkbox</Checkbox>
                <Checkbox disabled>Disabled checkbox</Checkbox>
                <Checkbox checked disabled
                  >Disabled checked checkbox</Checkbox
                >
              </b-col>
            </b-row>

            <b-row class="mb-3">
              <label class="col-md-3 my-2 control-label"
                >Inline Checkboxes</label
              >
              <b-col md="9">
                <Checkbox inline>HTML5</Checkbox> {{ " " }}
                <Checkbox inline>Css3</Checkbox> {{ " " }}
                <Checkbox inline>Javascript</Checkbox>
              </b-col>
            </b-row>

            <b-row>
              <label class="col-md-3 my-1 control-label">Button Checkbox</label>
              <b-col md="9">
                <Checkbox
                  checked
                  size="sm"
                  button
                  button-variant="outline-primary"
                >
                  Single toggle
                </Checkbox>
              </b-col>
            </b-row>
          </b-form>
        </UIComponentCard>
      </b-col>
      <b-col md="6" lg="6">
        <UIComponentCard title="Radios">
          <b-form class="form">
            <b-row class="mb-3">
              <label class="col-md-3 my-2 control-label">Radios</label>
              <b-col md="9">
                <Radio name="exampleRadios" value="1" checked
                  >Default radio</Radio
                >
                {{ " " }}
                <Radio name="exampleRadios" value="2"
                  >Second default radio</Radio
                >
                {{ " " }}
                <Radio name="exampleRadios" value="3" disabled
                  >Disabled radio</Radio
                >
              </b-col>
            </b-row>

            <b-row class="mb-3">
              <label class="col-md-3 my-1 control-label">Inline Radios</label>
              <b-col md="9">
                <Radio name="radioDefault" value="1" inline
                  >HTML5</Radio
                >
                <Radio name="radioDefault" value="2" inline
                  >Css</Radio
                >
                <Radio name="radioDefault" value="3" inline
                  >Javascript</Radio
                >
              </b-col>
            </b-row>

            <b-row>
              <label class="col-md-3 my-1 control-label">Button Radios</label>
              <b-col md="9" class="d-flex gap-1">
                <Radio
                  name="radioDefault"
                  value="1"
                  button
                  button-variant="outline-success"
                  size="sm"
                  checked
                  >Checked success radio</Radio
                >
                {{ " " }}
                <Radio
                  name="radioDefault"
                  value="1"
                  button
                  button-variant="outline-danger"
                  size="sm"
                  >Danger radio</Radio
                >
              </b-col>
            </b-row>
          </b-form>
        </UIComponentCard>
      </b-col>
    </b-row>

    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <UIComponentCard title="Input Groups Static">
          <InputGroup
            prepend-text="@"
            placeholder="Username"
            class="mb-3"
          />

          <InputGroup
            append-text="@mannatthemes.com"
            placeholder="Recipient's username"
            class="mb-3"
          />

          <label for="basic-url" class="form-label">Your vanity URL</label>
          <InputGroup
            prepend-text="https://mannatthemes.com"
            class="mb-3"
          />

          <b-input-group class="mb-3">
            <b-input-group-text>{{ currency }}</b-input-group-text>
            <Input type="text" />
            <b-input-group-text>.00</b-input-group-text>
          </b-input-group>

          <b-input-group class="mb-3">
            <Input type="text" placeholder="Username" />
            <b-input-group-text>@</b-input-group-text>
            <Input type="text" placeholder="Server" />
          </b-input-group>

          <b-input-group>
            <b-input-group-text>With textarea</b-input-group-text>
            <TextArea />
          </b-input-group>
        </UIComponentCard>
      </b-col>
      <b-col md="6" lg="6">
        <UIComponentCard title="Input Groups Buttons">
          <form>
            <b-row class="mb-3 g-2">
              <b-col md="6">
                <b-input-group>
                  <b-input-group-text is-text>
                    <input
                      type="checkbox"
                      class="form-check-input mt-0"
                      aria-label="Checkbox for following text input"
                    />
                  </b-input-group-text>
                  <Input aria-label="Text input with checkbox" />
                </b-input-group>
              </b-col>
              <b-col md="6">
                <b-input-group>
                  <b-input-group-text is-text>
                    <input
                      type="radio"
                      class="form-check-input mt-0"
                      aria-label="Checkbox for following text input"
                    />
                  </b-input-group-text>
                  <Input aria-label="Text input with checkbox" />
                </b-input-group>
              </b-col>
            </b-row>
            <b-input-group class="mb-3">
              <b-input-group-text class="btn btn-secondary"
                ><i class="fas fa-search"></i
              ></b-input-group-text>
              <Input type="text" />
            </b-input-group>

            <b-input-group class="mb-3">
              <Input type="text" placeholder="Search" />
              <b-input-group-text class="btn btn-secondary"
                >Go!</b-input-group-text
              >
            </b-input-group>

            <b-input-group class="mb-3">
              <Input type="text" placeholder="Email" />
              <b-input-group-text class="btn btn-secondary"
                >Submit</b-input-group-text
              >
            </b-input-group>

            <b-input-group>
              <Select 
                model-value="select" 
                id="required"
                :options="[
                  { value: 'select', text: 'Choose...' },
                  { value: '1', text: 'One' },
                  { value: '2', text: 'Two' },
                  { value: '3', text: 'Three' }
                ]"
              />
              <b-input-group-text class="btn btn-secondary"
                >Button</b-input-group-text
              >
            </b-input-group>
          </form>
        </UIComponentCard>
      </b-col>
    </b-row>
  </DefaultLayout>
</template>
<script setup lang="ts">
import { currency } from "@/helpers/constants";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import UIComponentCard from "@/components/UIComponentCard.vue";
import Input from '@/components/forms/basic/Input.vue'
import Select from '@/components/forms/basic/Select.vue';
import TextArea from '@/components/forms/basic/TextArea.vue';
import Range from '@/components/forms/basic/Range.vue';
import Checkbox from '@/components/forms/basic/Checkbox.vue';
import Radio from '@/components/forms/basic/Radio.vue';
import InputGroup from '@/components/forms/basic/InputGroup.vue';
import FileInput from '@/components/forms/basic/FileInput.vue';
</script>
