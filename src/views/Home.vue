<template>
  <div class="home">
    <side-bar  @input="show = $event"/> 
    <v-app-bar color="primary" dark clipped-left>
      <!-- <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon> -->
      <v-toolbar-title>Speedbee Viewer</v-toolbar-title>
    </v-app-bar>
    <start-content :show="show"/>
    <v-footer color="primary" dark app>Speedbee Viewer</v-footer>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import StartContent from "@/components/StartContent.vue";
import SideBar from "@/components/SideBar.vue";

export default {
  name: "Home",
  components: {
    StartContent,
    SideBar
  },
  data() {
    return {
      drawer: false,
      show:"info"
    };
  },
};
</script>
