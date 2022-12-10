<script lang="ts" setup>
import { ref, h } from "vue";
import { useHeaderStore } from "@/stores/header";
import { ElMessageBox, ElLink } from "element-plus";

const slideName = ref("");
const slideLocation = ref("");

const header = useHeaderStore();

header.useFunctions(["close", "minimize"], "show");

header.useWindow("createslide");

function useCustom() {
  ElMessageBox.prompt("请输入主题包名称", {
    message: h("p", null, [
      h("span", null, "您可以从"),
      h(
        "a",
        { underline: false, href: "https://cn.sli.dev/themes/gallery.html" },
        "Sli.Dev官网上"
      ),
      h("span", null, "查看主题，或者从 "),
      h(
        "a",
        {
          underline: false,
          href: "https://www.npmjs.com/search?q=keywords%3Aslidev-theme",
        },
        "npm 上寻找全部主题包。"
      ),
      h("b", null, "请勿在输入时携带 slidev-theme- 前缀"),
    ]),
    center: true,
  });
}

async function setLocation() {
  const result = await window.zhihui.slides.getSlidePath();
  console.log(result);
}
</script>

<template>
  <p class="text-2xl">新建幻灯片</p>

  <br />

  <ElForm>
    <ElFormItem label="幻灯片名">
      <ElInput v-model="slideName"></ElInput>
    </ElFormItem>
    <ElFormItem label="保存位置">
      <ElInput
        readonly
        class="w-full"
        @focus="window.alert('ok')"
        v-model="slideLocation"
      >
        <template #append>
          <ElButton @click="setLocation">选择位置</ElButton>
        </template>
      </ElInput>
    </ElFormItem>
  </ElForm>

  <ElDivider />

  <p class="text-lg">选择主题</p>

  <br />

  <ElSpace size="small">
    <ElCard shadow="never">
      <img
        style="padding: 0; zoom: 10%; border-radius: 15px"
        src="@/assets/slidev-themes/screenshots/theme-default/01.png"
        alt="default"
      />
      <div class="p-2">
        <span>Default</span>
        <br />
        <div class="bottom">
          <el-button text class="button">选择</el-button>
        </div>
      </div>
    </ElCard>
    <ElCard shadow="never">
      <img
        style="padding: 0; zoom: 10%; border-radius: 15px"
        src="@/assets/slidev-themes/screenshots/theme-seriph/01.png"
        alt="default"
      />
      <div class="p-2">
        <span>Seriph</span>
        <br />
        <div class="bottom">
          <el-button text class="button">选择</el-button>
        </div>
      </div>
    </ElCard>
    <ElCard shadow="never">
      <img
        style="padding: 0; zoom: 10%; border-radius: 15px"
        src="@/assets/slidev-themes/screenshots/theme-apple-basic/01.png"
        alt="default"
      />
      <div class="p-2">
        <span>Apple Basic</span>
        <br />
        <div class="bottom">
          <el-button text class="button">选择</el-button>
        </div>
      </div>
    </ElCard>
    <ElCard shadow="never">
      <img
        style="padding: 0; zoom: 10%; border-radius: 15px"
        src="@/assets/slidev-themes/screenshots/theme-bricks/01.png"
        alt="default"
      />
      <div class="p-2">
        <span>Bricks</span>
        <br />
        <div class="bottom">
          <el-button text class="button">选择</el-button>
        </div>
      </div>
    </ElCard>
    <ElCard shadow="never">
      <img
        style="padding: 0; zoom: 10%; border-radius: 15px"
        src="@/assets/slidev-themes/screenshots/theme-shibainu/01.png"
        alt="default"
      />
      <div class="p-2">
        <span>Shibainu</span>
        <br />
        <div class="bottom">
          <el-button text class="button">选择</el-button>
        </div>
      </div>
    </ElCard>
    <ElCard shadow="never">
      <img
        style="padding: 0; zoom: 10%; border-radius: 15px"
        src="@/assets/slidev-themes/screenshots/theme-placeholder.png"
        alt="default"
      />
      <div class="p-2">
        <span>更多</span>
        <br />
        <div class="bottom">
          <el-button text class="button" @click="useCustom">选择</el-button>
        </div>
      </div>
    </ElCard>
  </ElSpace>
</template>
