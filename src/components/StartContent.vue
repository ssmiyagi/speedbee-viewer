<template>
  <v-container>
    <data-list />
    <db-info/>
     <p>{{message}}</p>
    </v-container>
</template>

<script lang="ts">
import Vue from "vue";

import DataList from "@/components/DataList.vue";
import DbInfo from "@/components/DbInfo.vue";
export default Vue.extend({
  components: {
    DataList,
    DbInfo,
  },
  computed: {
    message () {
      let message = ''
      message = 'iueo'
      const req = new XMLHttpRequest
      req.open('GET', '/foo', false)
      req.onload = function () {
        console.log("res",req.responseText);
        message = JSON.parse(req.responseText).msg
      }
      req.send(null)
      return message
    }
  }
});
</script>
