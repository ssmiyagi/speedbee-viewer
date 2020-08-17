
<template>
  <v-container>
    <h2 @click="show = !show">
      {{name}}  
    </h2> 
    <option-table v-if="show==true" :info='info'/>
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
  data: () => ({
    show: false,
  })
});
</script>
