<template>
  <v-container>

  <option-info
    v-for="(value, index) in info"
    v-bind:name="value.name"
    v-bind:info="value.value"
    v-bind:index="index"
    v-bind:key="index"
  ></option-info>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

import OptionInfo from "@/components/OptionInfo.vue";
export default Vue.extend({
  name:"OptionInfoList",
  components:{
    OptionInfo
  },
  props:{
    'info':{
      default:null,
      required: true
    }
  },
});
</script>
