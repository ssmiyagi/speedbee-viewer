
<template>
  <v-container>
    <v-switch v-model="formatKey" :label="`formatKey`"/>
    <v-data-table :headers="headers" :items="dbData" item-key="key">
      <template v-slot:body="{ items }">
        <tbody>
          <tr v-for="item in items" :key="item.name">
            <td>{{item.type}}</td>
            <td>{{format(item.key,item.keyType)}}</td>
            <td>{{item.keyType}}</td>
            <td>{{item.dataType}}</td>
            <td>{{item.data}}</td>
          </tr>
        </tbody>
      </template>
    </v-data-table>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import NanoDate from "nano-date"

export default Vue.extend({
  name: "DataList",
  props:{
    'dbData':{
      type: Array,
      default: ()=>{[]},
      required: true
    }
  },
  data: () => ({
    formatKey:false,
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
    // dbData: [
    //   {
    //     type: "Col1",
    //     key: "1",
    //     keyType: "timestamp",
    //     dataType: "int",
    //     data: 1
    //   },
    // ],
  }),

  methods: {
    format(keyValue: number,key: string) {
      if(!this.formatKey){
        return keyValue;
      }
      if(key === 'timestamp'){
        const date = new NanoDate(String(keyValue)); 
        // const mon = date.getMonth();
        // const day = date.getDay();
        // const hour =  date.getHours();
        // const min = date.getMinutes();
        // const sec = date.getSeconds();
        // const mils =  date.getMilliseconds();
        // const mirs =  date.getMicroseconds();
        // const nanos =  date.getNanoseconds();
        // const dispDay = mon + '-' + day + ' ' + hour + ':'+ min + ':'+ sec + mils + mirs + nanos
        return date.toString()
        // return `${month}/${day}/${year}`;
      }else{
        return keyValue;
      }
    }
  }
});
</script>
