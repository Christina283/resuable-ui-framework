import { defineConfig } from 'cypress';

export default defineConfig({
  allowCypressEnv: false,
  e2e: {
    // root URL for the demo site; page objects will visit paths like `/login`
    baseUrl: 'https://the-internet.herokuapp.com',
    specPattern: 'tests/e2e/**/*.cy.ts',
    fixturesFolder: 'framework/fixtures',
    supportFile: 'framework/support/e2e.ts',
    setupNodeEvents(on, config) {
      on('task', {
        log(message: string) {
          console.log(message);
          return null;
        },
      });
      return config;
    },
    video: false,
    screenshotOnRunFailure: true,
      screenshotsFolder: 'reports/screenshots',
      videosFolder: 'reports/videos',
    },
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      reporterEnabled: 'mochawesome, mocha-junit-reporter',
      mochawesomeReporterOptions: {
        reportDir: 'reports/mochawesome',
        overwrite: false,
        html: true,
        json: true
      },
      mochaJunitReporterReporterOptions: {
        mochaFile: 'reports/junit/results-[hash].xml',
        toConsole: false
      }
    }
  });
