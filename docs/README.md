# Cypress UI Automation Framework

This project is a reusable Cypress boilerplate designed to run end-to-end UI tests against public demo applications.

Project folder structure

- `tests/e2e/` — test cases organized by feature (spec files follow `*.cy.ts` naming)
- `framework/` — page objects and reusable helpers
	- `framework/pages/` — page object classes
	- `framework/fixtures/` — test data fixtures (e.g., `loginUsers.json`)
	- `framework/support/` — support files and custom commands
- `cypress/` — Cypress config and optional examples
- `reports/` — generated test outputs
	- `reports/screenshots/` — screenshots for failures
	- `reports/videos/` — videos (if enabled)
	- `reports/mochawesome/` — mochawesome JSON/HTML
	- `reports/junit/` — junit XML results

How test results are written

- Screenshots are written to `reports/screenshots` on failure (configured via `screenshotsFolder`).
- Mochawesome JSON and HTML files are written to `reports/mochawesome`.
- JUnit XML files are written to `reports/junit`.
- Logging from tests (via `cy.task('log', ...)`) goes to the Node process console. You can configure the Node task to persist logs to `reports/logs/commands.log`.

CI/CD (GitHub Actions)

The CI workflow runs the Cypress suite on push and pull request to `main`. A typical CI job should:

1. Checkout repository
2. Setup Node (`actions/setup-node`)
3. Install dependencies (`npm ci`)
4. Run Cypress headless tests (`npm run test:e2e`)
5. Upload `reports/` folder as job artifacts so screenshots, mochawesome, and junit results are available for review

Example job (high-level):

```yaml
name: Cypress E2E

on: [push, pull_request]

jobs:
	cypress:
		runs-on: ubuntu-latest
		steps:
			- uses: actions/checkout@v4
			- uses: actions/setup-node@v4
				with:
					node-version: 20
			- run: npm ci
			- run: npm run test:e2e
			- uses: actions/upload-artifact@v4
				with:
					name: cypress-reports
					path: reports/**
```

Notes

- Ensure `typescript@6.0.2` is installed (see root README). Some type definitions in the project expect that version.
- If you need consolidated mochawesome reports, add `mochawesome-merge` and `mochawesome-report-generator` in a post-run step to merge JSONs and produce a single HTML.
