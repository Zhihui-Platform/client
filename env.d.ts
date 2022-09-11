/// <reference types="vite/client" />

declare module "*.yaml" {
  export default Record<string, unknown>;
}

declare module "*.md" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

export interface ZhihuiClient {
  close(): void;
  minimize(): void;
  maximize(): void;
  fullscreen(): void;
}

declare global {
  const zhihui: ZhihuiClient;
}
