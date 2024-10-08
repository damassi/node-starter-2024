// @ts-check

import { cwd } from "node:process"
import tsconfigPaths from "vite-tsconfig-paths"
import react from "@vitejs/plugin-react"

const root = cwd()

/** @type {import('vite').UserConfig} **/
const config = {
  root: `${root}/src`,
  plugins: [tsconfigPaths(), react()],
  build: {
    outDir: `${root}/dist`,
    emptyOutDir: true,
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "test.setup.ts",
    watch: false,
  },
}

export default config
