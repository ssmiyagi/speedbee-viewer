<template>
  <v-app>
    <v-main>
      <Home/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Home from './views/Home.vue';
import VueCompositionApi, { provide } from "@vue/composition-api";
import { DataAccessorSybol,DataAccessor } from '@/front_lib/DataAccessor';
import { SeverDataAccessor } from '@/front_lib/SeverDataAccessor';
Vue.use(VueCompositionApi);
export default Vue.extend({
  name: 'App',
  setup(){
    const db: DataAccessor = new SeverDataAccessor();
    // let db: DataAccessor;
    // if(!process.env.IS_APP){
      // db = new SeverDataAccessor() ;
    // }else{
      // 
    // }
    provide<DataAccessor>(DataAccessorSybol,db);
    return;
  },
  components: {
    Home,
  },

  data: () => ({
    //
  }),
});
</script>
