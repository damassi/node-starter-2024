import { FastifyInstance } from "fastify"
import { writeFileSync, mkdirSync } from "node:fs"

const OUTPUT_DIR = "./src/__generated__"
const OUTPUT_FILE = `${OUTPUT_DIR}/api-schema.json`

export const generateSchema = async (app: FastifyInstance) => {
  const swaggerSpec = app.swagger()

  mkdirSync(OUTPUT_DIR, { recursive: true })
  writeFileSync(OUTPUT_FILE, JSON.stringify(swaggerSpec, null, 2))

  app.log.info(`OpenAPI Schema generated at ${OUTPUT_FILE}`)
}
