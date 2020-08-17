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
import  AppDataAccessor from '@/front_lib/AppDataAccessor';
Vue.use(VueCompositionApi);
export default Vue.extend({
  name: 'App',
  setup(){
    let db: DataAccessor;
    if(!process.env.IS_ELECTRON){
        console.log("Saver mode");
        db = new SeverDataAccessor() ;
     }else{
        console.log("App mode");
        db = new AppDataAccessor() ;
      //  db = new SeverDataAccessor() ;
    }
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
