<template>
  <v-container>
    <!-- <data-list /> -->
    <db-info-list/>    
    <option-info-list/>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

// import DataList from "@/components/DataList.vue";
import DbInfoList from "@/components/DbInfoList.vue";
import OptionInfoList from "@/components/OptionInfoList.vue";
export default Vue.extend({
  components: {
    // DataList
    DbInfoList,
    OptionInfoList
  },
});
</script>
