<template>
  <v-container>
    <!-- <data-list /> -->
    <db-info/>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

// import DataList from "@/components/DataList.vue";
import DbInfo from "@/components/DbInfo.vue";
export default Vue.extend({
  components: {
    DbInfo,
  },
});
</script>
