import { Router } from "express"

export const apiRouter = Router()

apiRouter.get("/api/beep", (_, res) => res.send("boop"))
