// @ts-check

import { cwd } from "node:process"
import viteReact from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"

const root = cwd()

export default {
  root: `${root}/src`,
  plugins: [tsconfigPaths(), viteReact()],
  build: {
    outDir: `${root}/dist`,
    emptyOutDir: true,
  },
}
