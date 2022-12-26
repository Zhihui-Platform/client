<script lang="ts" setup>
/**
 * Viewport: SideBar, for the menu part of class viewport.
 */

import { ref, type DefineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";
import { ElButton, ElTooltip } from "element-plus";
import {
  Avatar,
  UserFilled,
  HomeFilled,
  Management,
  List,
  Histogram,
  Briefcase,
  SwitchButton,
} from "@element-plus/icons-vue";
import { useWindowSize, useDark } from "@vueuse/core";

const { height } = useWindowSize();
const darkMode = useDark();
const route = useRoute();
const router = useRouter();

const active = ref(route.params.path ?? "");

const menuList = ref<
  Array<{ label: string; value: string; icon: DefineComponent }>
>([
  { label: "关于", value: "about", icon: Avatar },
  { label: "主页", value: "", icon: HomeFilled },
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
      <ElTooltip
        :content="item.label"
        :effect="darkMode ? 'dark' : 'light'"
        placement="right"
      >
        <ElButton
          :type="item.value === active ? 'primary' : ''"
          circle
          @click="
            active = item.value;
            router.push(`/class/${item.value}`);
          "
          class="pt-1"
          text
          size="large"
          :icon="item.icon"
        />
      </ElTooltip>
    </div>
    <div style="bottom: 3rem; left: 1rem; position: absolute">
      <ElTooltip
        content="退出"
        :effect="darkMode ? 'dark' : 'light'"
        placement="right"
      >
        <ElButton circle @click="router.push('/')" text :icon="SwitchButton" />
      </ElTooltip>
    </div>
  </div>
</template>
