# Node.js Starter App (2024)

Provides a quick-start Node.js app with some common default tooling:

- [Vite](https://vitejs.dev/): Frontend Tooling
- [Vitest](https://vitest.dev): Testing
- [TSX](https://tsx.is/): Run TypeScript everywhere, and reload code when things change
- [Fastify](https://fastify.dev/): Node HTTP server, with excellent support for typed APIs
- [Fastify-Swagger](https://github.com/fastify/fastify-swagger): Generate OpenAPI-compliant API definitions
- [OpenAPI-Fetch](https://openapi-ts.dev/openapi-fetch/): Connects your type-safe server API to the client for end-to-end support
- [Husky](https://github.com/typicode/husky)/[Lint-Staged](https://github.com/lint-staged/lint-staged): Git precommit hooks
- [@testing-library/react](https://testing-library.com/docs/react-testing-library)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

### Getting Started

Install all dependencies:

```bash
npm install
```

Start the server:

```bash
npm start

open http://localhost:3000
```

View API docs:

```bash
open http://localhost:3000/docs
```

Regenerate OpenAPI Schema:

```bash
npm run generate-schema
```

### All Commands

- `npm start`
- `npm test`
- `npm run generate-schema`
- `npm run type-check`
- `npm run lint`
- `npm run prettier`

```

```
