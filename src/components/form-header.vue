<template>
  <form action="">
    <div class="row align-items-center">
      <div class="col-lg-11 col-md-11 col-sm-11">
        <div class="row">
          <div class="col-lg-3 mt-1 mb-1 col-md-6 col-sm-6 orders-1">
            <multiselect
              v-model="state.formData.country"
              placeholder="Country"
              @blur="v$.formData.country.$touch"
              :options="state.countries"
              :class="[state.formData.country != '' ? 'active' : '']"
            ></multiselect>
            <div class="form__error" v-if="v$.formData.country.$error">
              country is required
            </div>
          </div>
          <div class="col-lg-6 mt-1 mb-1 col-md-12 col-sm-12 orders-3">
            <DatePicker
              v-model="state.formData.range"
              is-range
              @blur="v$.formData.range.$touch"
              :select-attribute="state.attrs"
              :masks="masks"
            >
              <template v-slot="{ inputValue, inputEvents }">
                <div class="row">
                  <div class="col-sm-6 col-12">
                    <div class="input">
                      <input
                        :value="inputValue.start"
                        v-on="inputEvents.start"
                        class="px-2 py-1 w-32 input__control"
                      />
                      <div class="input__icon"></div>
                    </div>
                  </div>

                  <div class="col-sm-6 col-12">
                    <div class="input">
                      <input
                        :value="inputValue.end"
                        v-on="inputEvents.end"
                        class="px-2 py-1 w-32 input__control"
                      />
                      <div class="input__icon"></div>
                    </div>
                  </div>
                </div>
                <div class="form__error" v-if="v$.formData.range.$error">
                  Range is required
                </div>
              </template>
            </DatePicker>
          </div>

          <div class="col-lg-3 mt-1 mb-1 col-md-6 col-sm-6 orders-2">
            <multiselect
              v-model="state.formData.bedroom"
              placeholder="Bedrooms"
              @blur="v$.formData.bedroom.$touch"
              :options="state.bedrooms"
              :class="[state.formData.bedroom != '' ? 'active' : '']"
            ></multiselect>
            <div class="form__error" v-if="v$.formData.bedroom.$error">
              Bedrooms is required
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-1 mt-1 mb-1 col-md-1 col-sm-1">
        <div class="bg-danger form__submit pointer" @click="submit()">
          <span class="icon-arrow-right2"></span>
        </div>
      </div>
    </div>
  </form>
</template>
<!-- Start Script -->
<script>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import multiselect from "vue-multiselect";
import { reactive } from "vue";
import { DatePicker } from "v-calendar";
// import "v-calendar/dist/style.css";
export default {
  components: { multiselect, DatePicker },
  setup() {
    const state = reactive({
      formData: {
        country: "",
        bedroom: "",
        range: {
          start: new Date(2020, 9, 12),
          end: new Date(2020, 9, 16),
        },
      },
      countries: ["Egypt", "South Korea", "USA"],
      bedrooms: [
        "1 Bedrooms",
        "2 Bedrooms",
        "3 Bedrooms",
        "4 Bedrooms",
        "5 Bedrooms",
        "1 Bedrooms",
        "2 Bedrooms",
        "3 Bedrooms",
        "4 Bedrooms",
        "5 Bedrooms",
      ],
      attrs: {
        highlight: "green",
      },
    });
    const rules = {
      formData: {
        country: { required },
        bedroom: { required },
        range: { required },
      },
    };

    const v$ = useVuelidate(rules, state);
    return { state, v$ };
  },
  data() {
    return {
      masks: {
        input: "YYYY MMM DD",
      },
    };
  },
  methods: {
    submit() {
      this.v$.$validate(); // checks all inputs
      if (!this.v$.$error) {
        console.log("country", this.state.formData.country);
        console.log("range", this.state.formData.range);
        console.log("bedrooms", this.state.formData.bedroom);
      }
    },
  },
};
</script>
