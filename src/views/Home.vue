<template>
  <div class="home">
    <v-navigation-drawer app v-model="drawer" clipped>Navigation Lists</v-navigation-drawer>
    <v-app-bar color="primary" dark clipped-left>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Speedbee Viewer</v-toolbar-title>
    </v-app-bar>
    <StartContent />
    <v-footer color="primary" dark app>
      Speedbee Viewer
    </v-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import StartContent from '@/components/StartContent.vue'

export default {
  name: 'Home',
  components: {
    StartContent
  },
  data(){
    return{
        drawer: null
    }
  }
}
</script>
