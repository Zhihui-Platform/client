<script lang="ts" setup>
/**
 * Viewport: SideBar, for the menu part of class viewport.
 */

import { ref, type DefineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";
import { ElIcon, ElButton } from "element-plus";
import {
  Avatar,
  UserFilled,
  HomeFilled,
  Management,
  List,
  Histogram,
  Briefcase,
  SwitchButton,
  ArrowLeft,
  ArrowRight,
} from "@element-plus/icons-vue";
import { useWindowSize } from "@vueuse/core";

const { width, height } = useWindowSize();
const route = useRoute();
const router = useRouter();

const active = ref(route.path ?? "home");

const hovered = ref("home");

const menuList = ref<
  Array<{ label: string; value: string; icon: DefineComponent }>
>([
  { label: "关于", value: "about", icon: Avatar },
  { label: "主页", value: "home", icon: HomeFilled },
  { label: "学生", value: "students", icon: UserFilled },
  { label: "信息", value: "data", icon: List },
  { label: "值周", value: "management", icon: Management },
  { label: "数据", value: "histogram", icon: Histogram },
  { label: "通知", value: "briefcase", icon: Briefcase },
]);
</script>

<template>
  <div
    :style="{
      'text-align': 'center',
      height: height + 'px',
      'padding-top': '5%',
    }"
  >
    <div v-for="item in menuList" :key="item.value">
      <ElButton
        :type="item.value === active ? 'primary' : 'text'"
        round
        @mouseover="hovered = item.value"
        @mouseleave="hovered = ''"
        @click="
          active = item.value;
          router.push(`/class/${item.value}`);
        "
        class="pt-1"
        text
        size="large"
        :bg="item.value === active ? true : false"
        :icon="item.icon"
      >
        <span>{{ item.label }}</span>
      </ElButton>
    </div>
    <div style="bottom: 3rem; left: 1rem; position: absolute">
      <ElButton circle @click="router.push('/')" text :icon="SwitchButton" />
      <br />
      <ElButton circle @click="router.push('/')" text :icon="ArrowLeft" />
      <ElButton circle @click="router.push('/')" text :icon="ArrowRight" />
    </div>
  </div>
</template>
