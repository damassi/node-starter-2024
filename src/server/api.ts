import { FastifyInstance } from "fastify"

export const api = async (app: FastifyInstance) => {
  app.get("/beep", () => {
    return {
      boop: true,
    }
  })

  app.get(
    "/boop",
    {
      schema: {
        querystring: {
          type: "object",
          properties: {
            id: { type: "string" },
          },
          required: ["id"],
        },
        response: {
          200: {
            type: "object",
            properties: {
              beep: { type: "boolean" },
            },
          },
        },
      },
    },
    () => {
      return {
        beep: true,
      }
    },
  )
}
