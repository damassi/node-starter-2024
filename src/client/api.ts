import createClient from "openapi-fetch"
import { paths } from "__generated__/api-schema"

export const api = createClient<paths>({ baseUrl: `${window.location}` })
