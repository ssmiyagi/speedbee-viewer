<template>
  <v-container>
    <!-- <data-list /> -->
    <db-info-list/>    
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

// import DataList from "@/components/DataList.vue";
import DbInfoList from "@/components/DbInfoList.vue";
export default Vue.extend({
  components: {
    // DataList
    DbInfoList,
  },
});
</script>
