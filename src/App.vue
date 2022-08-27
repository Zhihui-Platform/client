<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import {
  Close,
  Plus,
  Minus,
  Moon,
  Sunny,
  FullScreen,
  Setting,
} from "@element-plus/icons-vue";
import { useDark } from "@vueuse/core";
import { window } from "@tauri-apps/api";
import { useRouter } from "vue-router";

const router = useRouter();

const darkmode = useDark();

function fullScreen() {
  window.appWindow.setFullscreen(!window.appWindow.isFullscreen());
}

function maximize() {
  window.appWindow.toggleMaximize();
}

function minimize() {
  window.appWindow.minimize();
}

function close() {
  window.appWindow.close();
}

function toConfig() {
  router.push("/config");
}
</script>

<template>
  <header class="pl-12 pt-4 pr-4 pd-0">
    <ElRow>
      <ElCol :span="4" class="pt-2">
        <!-- <span class="text-m text-left">智会平台</span> -->
        <ElButton text class="text-left" size="small" @click="router.push('/')">
          <span class="text-lg">智会平台</span>
        </ElButton>
      </ElCol>
      <ElCol :span="14" class="drag"></ElCol>
      <ElCol :span="6">
        <div class="text-right py-0">
          <ElButton
            text
            bg
            type="info"
            @click="toConfig"
            circle
            :icon="Setting"
          ></ElButton>
          <ElDivider direction="vertical" />
          <ElSwitch
            v-model="darkmode"
            style="
              --el-switch-off-color: #f1f1f1;
              --el-switch-on-color: #3e3e3e;
            "
            inline-prompt
            :active-icon="Moon"
            :inactive-icon="Sunny"
          />
          <ElDivider direction="vertical" />
          <ElButton
            text
            bg
            type="primary"
            @click="fullScreen"
            circle
            :icon="FullScreen"
          />
          <ElButton
            text
            bg
            type="warning"
            @click="minimize"
            circle
            :icon="Minus"
          />
          <ElButton
            text
            bg
            type="success"
            @click="maximize"
            circle
            :icon="Plus"
          />
          <ElButton text bg type="danger" @click="close" circle :icon="Close" />
        </div>
      </ElCol>
    </ElRow>
  </header>
  <main class="px-16 pt-8">
    <RouterView />
  </main>
</template>
