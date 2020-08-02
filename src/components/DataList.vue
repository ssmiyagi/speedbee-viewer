
<template>
  <v-container>
    <v-data-table :headers="headers" :items="dbData" item-key="key">
      <!-- //todo: keyTypeでKeyをformatする -->
      <!-- <tr @click="props.expanded = !props.expanded">
        <td>{{ props.item.title }}</td>
        <td>{{ format(props.item.premiere) }}</td>
        <td>{{ props.item.rating }}</td>
      </tr> -->
    </v-data-table>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "DataList",
  data: () => ({
    headers: [
      {
        text: "TYPE",
        value: "type",
        align: "left",
        sortable: true
      },
      {
        text: "Key",
        value: "key"
      },
      {
        text: "Key_TYPE",
        value: "keyType"
      },
      {
        text: "DATA_TYPE",
        value: "dataType"
      },
      {
        text: "DATA",
        value: "data"
      }
    ],
    dbData: [
      {
        type: "Col1",
        dataType: "int",
        keyType: "timestamp",
        key: "1",
        data: 1
      },
      {
        type: "Col2",
        dataType: "int",
        keyType: "timestamp",
        key: "2",
        data: 2
      }
    ],
    lazy: `https://goo.gl/jbJWmK`
  }),

  methods: {
    format(date: Date) {
      date = new Date(date);
      const day = `${date.getUTCDate()}`.padStart(2, "0");
      const month = `${date.getUTCMonth() + 1}`.padStart(2, "0");
      const year = date.getFullYear();
      return `${month}/${day}/${year}`;
    }
  }
});
</script>
