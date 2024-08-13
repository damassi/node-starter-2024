import { apiRouter } from "api/beep"
import express from "express"
import ViteExpress from "vite-express"

const app = express()

app.use(apiRouter)

ViteExpress.listen(app, 3000, () =>
  console.log("\n[app] Server started at http://localhost:3000 \n"),
)
