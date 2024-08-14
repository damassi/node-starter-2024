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
}

export default config
