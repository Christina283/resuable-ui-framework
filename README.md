# Reusable UI Framework

Repository: Reusable UI automation starter using Cypress.

- Clone the repository.
- Install dependencies (explicit TypeScript version required):

```bash
npm install

```

- Run tests locally (headless):

```bash
npm run test:e2e
```

- Open Cypress runner (interactive):

```bash
npm run cypress:open
```

Dependencies to ensure are present (from `devDependencies`):

- cypress (v15+)
- cypress-multi-reporters
- mochawesome
- mocha-junit-reporter
- typescript@6.0.2 (explicitly required)

Notes

- This repo expects TypeScript `6.0.2`; installing a different TypeScript major version may cause type errors.
- Test specs live under `tests/e2e/` and will be picked up by the Cypress config.
- Fixtures are sourced from `framework/fixtures` per the project Cypress config.

For full project documentation, folder layout, and CI instructions see `docs/README.md`.
