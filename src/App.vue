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
import { useWindowSize } from "@vueuse/core";
import { UA } from "@/plugins/agent";
import { ref, watch } from "vue";

const { width, height } = useWindowSize();

const header = useHeaderStore();

const router = useRouter();

const darkmode = useDark();
const mainColor = ref(darkmode.value ? "#1e293b" : "#f8fafc");
watch(
  darkmode,
  () => (mainColor.value = darkmode.value ? "#1e293b" : "#f8fafc")
);

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
  <div
    class="drag dark:bg-gray-900 bg-opacity-60 bg-gray-200"
    :style="{ height }"
  >
    <header class="pb-8 drag rounded" @contextmenu.prevent>
      <div>
        <ElImage
          key="scale-down"
          src="/icon.png"
          style="zoom: 6%; left: 1rem; position: fixed"
          class="drag"
        >
        </ElImage>
      </div>
      <div
        v-if="UA.os.name === 'Windows' || UA.os.name === 'Linux'"
        class="no-drag text-left"
        style="position: fixed; right: 0; top: 0; backdrop-filter: blur(16px)"
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
        <ElButton
          v-if="header.darkmode"
          text
          bg
          circle
          :icon="darkmode ? Moon : Sunny"
          @click="darkmode = !darkmode"
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
      <div
        v-if="UA.os.name === 'Mac OS'"
        class="no-drag text-left"
        :style="{
          position: 'fixed',
          left: '6.4rem',
          top: 0,
          'backdrop-filter': 'blur(16px)',
        }"
      >
        <ElDivider direction="vertical" v-if="header.settings" />
        <ElButton
          v-if="header.settings"
          text
          type="info"
          @click="toConfig"
          circle
          :icon="Setting"
        />
        <ElDivider direction="vertical" v-if="header.darkmode" />
        <ElButton
          v-if="header.darkmode"
          text
          bg
          circle
          :icon="darkmode ? Moon : Sunny"
          @click="darkmode = !darkmode"
        />
      </div>
    </header>
    <div class="no-drag" :style="{ height }">
      <ElRow class="no-drag">
        <ElCol :span="2" v-if="header.menu" class="rounded">
          <RouterView name="SideBar" />
        </ElCol>
        <ElCol :span="header.menu ? 22 : 24" class="main rounded-xl">
          <div
            class="px-16 pt-8 pr-8 no-drag"
            :style="{
              width: header.menu ? 0.93 * width : width + 'px',
              height: 0.93 * height + 'px',
            }"
            @contextmenu.prevent
          >
            <RouterView class="view main" />
          </div>
        </ElCol>
      </ElRow>
    </div>
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

.main {
  height: 100%;
  width: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  background-color: v-bind(mainColor) !important;
}
</style>
