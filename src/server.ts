import "dotenv/config"
import fastify from "fastify"
import swagger from "@fastify/swagger"
import swaggerUI from "@fastify/swagger-ui"
import vite from "@fastify/vite"
import { resolve } from "node:path"
import { cwd } from "node:process"
import { api } from "server/api"
import { generateSchema } from "utils/generateSchema"

const PORT = process.env.PORT ?? 3000

const app = fastify({
  logger: {
    level: "info",
    transport: {
      target: "@fastify/one-line-logger",
    },
  },
})

// Setup Vite
await app.register(vite, {
  root: resolve(cwd()),
  clientModule: "client.tsx",
  dev: process.argv.includes("--dev"),
  spa: true,
})

// OpenAPI docs
await app.register(swagger, {
  openapi: {
    openapi: "3.0.0",
  },
})

await app.register(swaggerUI, {
  routePrefix: "/docs",
})

// Mount API
app.register(api, { prefix: "/api" })

// Client HTML
app.get("/", (_req, reply) => {
  return reply.html()
})

try {
  await app.vite.ready()
  await app.ready()

  // Generate OpenAPI schema
  if (process.argv.includes("--generate-schema")) {
    generateSchema(app)
    process.exit(0)
  }

  // Start the server
  await app.listen({ port: Number(PORT) }, (_, address) => {
    app.log.info(`OpenAPI Docs: ${address}/docs`)
  })
} catch (error) {
  app.log.error(error)
  process.exit(1)
}
