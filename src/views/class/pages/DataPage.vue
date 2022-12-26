<script lang="ts" setup>
import { ref } from "vue";
import { useHeaderStore } from "@/stores/header";
import { useRouter, useRoute } from "vue-router";

const header = useHeaderStore();
const router = useRouter();
const route = useRoute();

const active = ref("");

header.useFunctions(["fullscreen"], "hide");
</script>
