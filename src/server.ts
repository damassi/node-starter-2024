import "dotenv/config"
import fastify from "fastify"
import fastifyVite from "@fastify/vite"
import { resolve } from "node:path"
import { cwd } from "node:process"
import { api } from "server/api"

const PORT = process.env.PORT ?? 3000

const app = fastify({
  logger: {
    level: "info",
    transport: {
      target: "@fastify/one-line-logger",
    },
  },
})

await app.register(fastifyVite, {
  root: resolve(cwd()),
  clientModule: "client.tsx",
  dev: process.argv.includes("--dev"),
  spa: true,
})

// Mount API
app.register(api, { prefix: "/api" })

// Mount client router
app.get("/", (_req, reply) => {
  return reply.html()
})

try {
  await app.vite.ready()

  // Start the server
  await app.listen({ port: Number(PORT) })
} catch (error) {
  app.log.error(error)
  process.exit(1)
}
