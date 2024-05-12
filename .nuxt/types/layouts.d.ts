import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "home" | "user-define"
declare module "../../node_modules/.pnpm/nuxt@3.11.2_@parcel+watcher@2.4.1_@types+node@20.12.7_@unocss+reset@0.59.4_encoding@0.1.13_fl_hdvs5nye7qyjs3cvpjd6vs7r2y/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}