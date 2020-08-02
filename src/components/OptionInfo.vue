
<template>
  <v-container>
    <h2>
      {{colName}}  
    </h2> 
    <OptionTable/>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

import OptionTable from "@/components/OptionTable.vue";
export default Vue.extend({
  name:"OptionInfo",
  components:{
    OptionTable
  },
  data() {
    return {
      colName:"col1"
    }
  },
});
</script>
