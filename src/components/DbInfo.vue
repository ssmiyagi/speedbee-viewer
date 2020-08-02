<template>
  <v-container>
    <db-info-table/>    
    <option-info-list/>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

import DbInfoTable from "@/components/DbInfoTable.vue";
import OptionInfoList from "@/components/OptionInfoList.vue";
export default Vue.extend({
  name:"DbInfo",
  components: {
    DbInfoTable,
    OptionInfoList
  },
});
</script>
