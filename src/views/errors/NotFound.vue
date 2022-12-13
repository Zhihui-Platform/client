<script lang="ts" setup>
import { ElCard, ElCol, ElRow, ElResult, ElButton } from "element-plus";
</script>

<template>
  <ElRow>
    <ElCol :span="2"></ElCol>
    <ElCol :span="20">
      <ElCard shadow="never">
        <ElResult
          icon="error"
          title="页面未找到"
          sub-title="请检查是否正确访问"
        >
          <template #extra>
            <ElButton type="primary">Back</ElButton>
          </template>
        </ElResult>
      </ElCard>
    </ElCol>
    <ElCol :span="2"></ElCol>
  </ElRow>
</template>
