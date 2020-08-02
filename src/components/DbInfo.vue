<template>
  <v-container>
    <db-info-list/>    
    <option-info-list/>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

import DbInfoList from "@/components/DbInfoList.vue";
import OptionInfoList from "@/components/OptionInfoList.vue";
export default Vue.extend({
  name:"DbInfo",
  components: {
    DbInfoList,
    OptionInfoList
  },
});
</script>
