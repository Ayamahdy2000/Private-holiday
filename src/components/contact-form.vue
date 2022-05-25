<template>
  <form action="">
    <div class="input">
      <input
        type="text"
        class="input__control"
        placeholder="Your name"
        v-model="state.formData.name"
        @blur="v$.formData.name.$touch"
      />
      <div class="form__error" v-if="v$.formData.name.$error">
        Name is required
      </div>
    </div>
    <div class="input mt-4">
      <input
        type="email"
        class="input__control"
        placeholder="Email"
        v-model="state.formData.email"
        @blur="v$.formData.email.$touch"
      />
      <div class="form__error" v-if="v$.formData.email.$error">
        {{ v$.formData.email.$errors[0].$message }}
      </div>
    </div>
    <div class="input mt-4 mb-5">
      <input
        type="text"
        class="input__control"
        placeholder="Message"
        v-model="state.formData.message"
        @blur="v$.formData.message.$touch"
      />
      <div class="form__error" v-if="v$.formData.message.$error">
        {{ v$.formData.message.$errors[0].$message }}
      </div>
    </div>
    <button class="btn-button bg-danger" @click.prevent="submit">SEND</button>
  </form>
</template>
<!-- Start Script -->
<script>
import useVuelidate from "@vuelidate/core";

import { required, email, maxLength, helpers } from "@vuelidate/validators";

import { reactive } from "vue";

export default {
  setup() {
    const state = reactive({
      formData: {
        name: "",
        email: "",
        message: "",
      },
    });
    const rules = {
      formData: {
        email: {
          required: helpers.withMessage("Eamil is required", required),
          email: helpers.withMessage("Eamil not vaild", email),
        },
        name: { required },
        message: {
          required: helpers.withMessage("Message is required", required),
          maxLength: helpers.withMessage(
            "message must be less than 100 character",
            maxLength(100)
          ),
        },
      },
    };

    const v$ = useVuelidate(rules, state);

    return { state, v$ };
  },

  methods: {
    submit() {
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("name", this.state.formData.name);
        console.log("email", this.state.formData.email);
        console.log("message", this.state.formData.message);
      }
    },
  },
};
</script>
