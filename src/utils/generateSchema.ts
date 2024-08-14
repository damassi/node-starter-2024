import { resolve, join } from "node:path"
import { FastifyInstance } from "fastify"
import { writeFileSync, mkdirSync } from "node:fs"

const OUTPUT_DIR = resolve("./src/__generated__")
const OUTPUT_FILE = join(OUTPUT_DIR, "api-schema.json")

export const generateSchema = async (app: FastifyInstance) => {
  const swaggerSpec = app.swagger()

  mkdirSync(OUTPUT_DIR, { recursive: true })
  writeFileSync(OUTPUT_FILE, JSON.stringify(swaggerSpec, null, 2))

  app.log.info(`[app] OpenAPI Schema generated at ${OUTPUT_FILE}`)
}
