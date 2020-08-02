
<template>
  <v-container>
    <h2>
      {{name}}  
    </h2> 
    <option-table :info='info'/>
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
  props:{
    'name':{
      type:String,
      default:null,
      required: true
    },
    'info':{
      type:Array,
      default:null,
      required: true
    }
  },
  // data() {
  //   return {
  //     colName:"col1"
  //   }
  // },
});
</script>
