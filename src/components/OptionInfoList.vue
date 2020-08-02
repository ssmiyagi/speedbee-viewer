<template>
  <v-container>
    <OptionInfo/>
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
});
</script>
