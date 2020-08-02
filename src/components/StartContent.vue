<template>
  <v-container>
    <data-list />
    <db-info-content :dbInfo="dbInfo"/>
    </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import DataList from "@/components/DataList.vue";
import DbInfoContent from "@/components/DbInfoContent.vue";
import { inject , ref, onMounted } from "@vue/composition-api";
import { DataAccessorSybol,DataAccessor, DbInfo } from '@/front_lib/DataAccessor';

export default Vue.extend({
  setup(){
    const db: DataAccessor | any = inject<DataAccessor>(DataAccessorSybol)
    const dbInfo = ref<DbInfo>();
    onMounted(async () => {
      try {
        dbInfo.value = await db.info();
      } catch (e) {
        console.log(e);
      }
    });
    return {
      dbInfo,
    };
  },
  components: {
    DataList,
    DbInfoContent,
  },
});
</script>
