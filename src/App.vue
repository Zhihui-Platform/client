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
import { useHeaderStore } from "@/stores/header";

const header = useHeaderStore();

const router = useRouter();

const darkmode = useDark();

function fullScreen() {
  window.zhihui.fullscreen(header.window);
}

function maximize() {
  window.zhihui.maximize(header.window);
}

function minimize() {
  window.zhihui.minimize(header.window);
}

function close() {
  window.zhihui.close(header.window);
}

function toConfig() {
  window.zhihui.useSettings();
}
</script>

<template>
  <div class="drag">
    <header class="pr-4 pb-8 drag" @contextmenu.prevent>
      <ElImage
        key="scale-down"
        src="/icon.png"
        style="
          zoom: 12%;
          left: 1rem;
          position: fixed;
          backdrop-filter: blur(8rem);
        "
        class="drag"
      />
      <div
        class="text-right pt-4 no-drag"
        style="position: fixed; right: 1rem; backdrop-filter: blur(16px)"
      >
        <ElButton
          v-if="header.settings"
          text
          type="info"
          @click="toConfig"
          circle
          :icon="Setting"
        />
        <ElDivider direction="vertical" v-if="header.settings" />
        <ElSwitch
          v-if="header.darkmode"
          v-model="darkmode"
          style="--el-switch-off-color: #f1f1f1; --el-switch-on-color: #3e3e3e"
          inline-prompt
          :active-icon="Moon"
          :inactive-icon="Sunny"
        />
        <ElDivider direction="vertical" v-if="header.darkmode" />
        <ElButton
          v-if="header.fullscreen"
          text
          type="primary"
          @click="fullScreen"
          circle
          :icon="FullScreen"
        />
        <ElButton
          v-if="header.minimize"
          text
          type="warning"
          @click="minimize"
          circle
          :icon="Minus"
        />
        <ElButton
          v-if="header.maximize"
          text
          type="success"
          @click="maximize"
          circle
          :icon="Plus"
        />
        <ElButton text type="danger" @click="close" circle :icon="Close" />
      </div>
    </header>
    <main class="px-16 pt-8 no-drag" @contextmenu.prevent>
      <RouterView />
    </main>
  </div>
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

.drag {
  -webkit-app-region: drag;
}

.no-drag {
  -webkit-app-region: no-drag;
}
</style>
