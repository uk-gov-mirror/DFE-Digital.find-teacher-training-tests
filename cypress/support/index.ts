// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
require("./commands.ts");

switch (Cypress.env("ENVIRONMENT")) {
  case "qa":
    global.TEST_ENV = "dev";
    global.URL = "https://www.qa.find-postgraduate-teacher-training.service.gov.uk";
    break;
  case "staging":
    global.TEST_ENV = "staging";
    global.URL = "https://www.staging.find-postgraduate-teacher-training.service.gov.uk";
    break;
  case "production":
    global.TEST_ENV = "production";
    global.URL = "https://www.find-postgraduate-teacher-training.service.gov.uk";
    break;
  case "qa2":
    global.TEST_ENV = "dev";
    global.URL = "https://www.qa.find-postgraduate-teacher-training.service.gov.uk";
    break;
  case "staging2":
    global.TEST_ENV = "staging";
    global.URL = "https://www.staging.find-postgraduate-teacher-training.service.gov.uk";
    break;
  case "production2":
    global.TEST_ENV = "production";
    global.URL = "https://www2.find-postgraduate-teacher-training.service.gov.uk";
    break;
  default:
    global.TEST_ENV = "production";
    global.URL = "https://www.find-postgraduate-teacher-training.service.gov.uk";
    break;
}
