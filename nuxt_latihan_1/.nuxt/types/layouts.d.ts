import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/Users/cleyra/Documents/Dametech/Macedu/nuxt_latihan_1/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}