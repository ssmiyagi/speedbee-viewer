<template>
  <div>
    <v-navigation-drawer permanent expand-on-hover clipped app>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" link @click="sendClickValue(item.value)">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "SideBar",
  data() {
    return {
      items: [
        { title: "infomation", icon: "mdi-information"      ,value:"info" },
        { title: "Data list",  icon: "mdi-database"         ,value:"list"},
        { title: "Data chart", icon: "mdi-chart-bell-curve" ,value:"chart"},
        ],
    };
  },
  methods:{
    sendClickValue:function(value: string){
      this.$emit('input', value);
    }
  }
});
</script>
