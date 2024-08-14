import { FastifyInstance } from "fastify"

export const api = async (app: FastifyInstance) => {
  app.get("/beep", () => {
    return {
      boop: true,
    }
  })
}
