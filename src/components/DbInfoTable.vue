<template>
  <v-container>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">設定名</th>
            <th class="text-left">値</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in info" :key="item.key">
            <td>{{ item.key }}</td>
            <td>{{ item.value }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name:"DbInfoTable",
  props:{
    'info':{
      default:null,
      required: true
    }
  },
  // data() {
  //   return {
  //     dbInfo: [
  //       {
  //         key:"dbパス",
  //         value:"c/x/x/x",
  //       },
  //       {
  //         key:"カラム数",
  //         value:"4",
  //       }
  //     ]
  //   }
  // },
});
</script>
