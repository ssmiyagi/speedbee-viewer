<template>
  <v-container>
    <data-list :dbData="dbData"/>
    <db-info-content :dbInfo="dbInfo"/>
    </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import DataList from "@/components/DataList.vue";
import DbInfoContent from "@/components/DbInfoContent.vue";
import { inject , ref, onMounted } from "@vue/composition-api";
import { DataAccessorSybol,DataAccessor, DbInfo, DbData } from '@/front_lib/DataAccessor';

export default Vue.extend({
  setup(){
    const db: DataAccessor | any = inject<DataAccessor>(DataAccessorSybol)
    const dbInfo = ref<DbInfo>();
    const dbData = ref<DbData[]>([]);
    onMounted(async () => {
      try {
        dbInfo.value = await db.info();
        dbData.value = await db.getData();
      } catch (e) {
        console.log(e);
      }
    });
    return {
      dbInfo,
      dbData
    };
  },
  components: {
    DataList,
    DbInfoContent,
  },
});
</script>
