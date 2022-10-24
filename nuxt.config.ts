import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  ssr: false,
  shim: false,
  nitro: {
    preset: 'cloudflare'
  },
  buildModules: [],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  vite: {
    logLevel: "info",
    optimizeDeps: {
      include: [
        '@headlessui/vue', '@heroicons/vue/solid', '@heroicons/vue/outline', 'vue',
      ]
    }
  }
});

