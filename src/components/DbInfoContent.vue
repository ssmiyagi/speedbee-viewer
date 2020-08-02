<template>
  <v-container>
    <db-info-table :info="dbInfo.info"/>    
    <option-info-list :info="dbInfo.options"/>
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
  props:{
    'dbInfo':{
    type     : Object,
    'default': () => (
      {
        info:null,
        options:null
      }
      ),
     required: true
    }
  }
});
</script>
