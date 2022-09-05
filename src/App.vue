<script setup lang="ts">
import { RouterView, useRouter } from "vue-router";
import {
  Close,
  FullScreen,
  Minus,
  Moon,
  Plus,
  Setting,
  Sunny,
} from "@element-plus/icons-vue";
import { useDark } from "@vueuse/core";
import { window } from "@tauri-apps/api";

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
  <header class="pl-12 pt-4 pr-4 pb-6" @contextmenu.prevent>
    <ElRow id="nav" style="position: fixed; right: 0">
      <ElCol :span="4" class="pt-2">
        <!-- <span class="text-m text-left">智会平台</span> -->
        <ElButton
          text
          class="text-left"
          size="small"
          @click="router.push('/')"
          style="left: 2rem; position: fixed; backdrop-filter: blur(8rem)"
        >
          <span class="text-lg px-2 py-2">智会平台</span>
        </ElButton>
      </ElCol>
      <ElCol :span="15" class="drag"></ElCol>
      <ElCol :span="5">
        <div
          class="text-right py-0"
          style="position: fixed; right: 1rem; backdrop-filter: blur(16px)"
        >
          <ElButton
            text
            bg
            type="info"
            @click="toConfig"
            circle
            :icon="Setting"
          />
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
  <main class="px-16 pt-8" @contextmenu.prevent>
    <RouterView />
  </main>
</template>

<style>
#nav {
  background-color: rgba(216, 216, 216, 0.7);
  /* backdrop-filter: blur(6px); */
}
body {
  user-select: none;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: unset;
}

::-webkit-scrollbar {
  display: none;
}
</style>
