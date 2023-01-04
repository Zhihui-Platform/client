<script setup lang="ts">
/* global defineProps, Deduction, DeductionTable, DeductionCallback */
import { ref, toRefs } from "vue";

const props = defineProps<{
  deductions: DeductionTable[];
  callback: (id: string) => void;
  getDetail: (id: string) => Promise<Deduction>;
  getStatus: (id: string) => DeductionCallback;
  disableExpand: boolean;
}>();

const detail = ref<Deduction>();

const showDetail = ref(false);

const { deductions, callback, getDetail, getStatus, disableExpand } =
  toRefs(props);

async function changeExpand(id: DeductionTable, useExpand: boolean) {
  // console.log(id);
  // detail.value =
  showDetail.value = false;
  if (!useExpand) {
    return;
  }
  detail.value = await getDetail.value(id.id);
  showDetail.value = true;
}
</script>

<template>
  <ElRow>
    <ElCol :span="22">
      <ElCard shadow="never">
        <ElTable
          :data="deductions"
          :type="disableExpand ? '' : 'expand'"
          empty-text="没有扣分，恭喜"
          @expandChange="changeExpand"
        >
          <ElTableColumn type="expand">
            <template #default> 123123 </template>
          </ElTableColumn>
          <ElTableColumn prop="deductee" label="被扣分者" />
          <ElTableColumn prop="deduction" label="扣分数" />
          <ElTableColumn prop="reason" label="原因" />
          <ElTableColumn prop="time" label="时间" />
          <ElTableColumn label="状态">
            <template #default="{ row }">
              <ElButton
                v-if="disableExpand && row.status === 'none'"
                size="small"
              >
                申斥
              </ElButton>
            </template>
          </ElTableColumn>
        </ElTable>
      </ElCard>
    </ElCol>
    <ElCol :span="2" />
  </ElRow>
</template>
