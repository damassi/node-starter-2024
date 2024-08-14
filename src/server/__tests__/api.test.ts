/*
 * @jest-environment node
 */

import fastify from "fastify"
import { api } from "server/api"

describe("server", () => {
  it("GET /beep", async () => {
    const app = fastify()
    app.register(api)

    const response = await app.inject({
      method: "GET",
      url: "/beep",
    })

    expect(response.statusCode).toBe(200)
    expect(response.json()).toEqual({ boop: true })
  })
})
