# DemoQA Test Automation Suite

[![Serenity/JS](https://img.shields.io/npm/v/%40serenity-js%2Fcore?style=flat&label=Serenity%2FJS&color=%23FBD30B)](https://serenity-js.org/releases/)

End-to-end test automation for [DemoQA](https://demoqa.com/) built with **Serenity/JS**, **Cucumber**, and **Playwright**, following the **Screenplay Pattern** and BDD best practices.

---

## Tech Stack

| Tool                                    | Purpose                                      |
| --------------------------------------- | -------------------------------------------- |
| [Serenity/JS](https://serenity-js.org/) | Screenplay Pattern framework + BDD reporting |
| [Cucumber](https://cucumber.io/)        | Gherkin-based BDD test runner                |
| [Playwright](https://playwright.dev/)   | Browser automation                           |
| TypeScript                              | Strongly-typed test implementation           |

---

## Prerequisites

- **Node.js** LTS (v18+)
- **Java JRE 17+** (required by Serenity BDD reporting)
- **Git**

```shell
# Verify prerequisites
node -v
java -version
```

---

## Quick Start

```shell
# 1. Clone
git clone <your-repo-url> && cd <your-project>

# 2. Install dependencies and Playwright browsers
npm ci
npx playwright install

# 3. Run all tests
npm test

# 4. View Serenity BDD report
npm start   # opens http://localhost:8080
```

---

## Project Structure

```
.
├── features/                          # Gherkin feature files
│   ├── home-navigation.feature
│   ├── section-alerts.feature
│   ├── section-bookstore.feature
│   ├── section-elements.feature
│   ├── section-forms.feature
│   ├── section-interactions.feature
│   └── section-widgets.feature
│
├── features/step-definitions/         # Cucumber step definitions
│   ├── home.steps.ts                  # Given: navigation entry point (shared)
│   ├── section-alerts.steps.ts
│   ├── section-bookstore.steps.ts
│   ├── section-elements.steps.ts
│   ├── section-forms.steps.ts
│   ├── section-interactions.steps.ts
│   ├── section-widgets.steps.ts
│   └── parameter.steps.ts             # Custom Cucumber parameter types
│
├── features/support/
│   └── serenity.config.ts             # Serenity/JS + Playwright configuration
│
└── test/
    ├── Actors.ts                      # Actor setup with Playwright ability
    ├── models/
    │   └── User.ts                    # Shared data model
    ├── ui/
    │   ├── tasks/                     # WHEN — interaction tasks (no assertions)
    │      ├── home-tasks/
    │      ├── section-alerts-tasks/
    │      ├── section-bookstore-tasks/
    │      ├── section-forms-tasks/
    │      ├── section-interactions-tasks/
    │      ├── section-items-tasks/
    │      └── section-widgets-tasks/
    │
│
└── target/site/serenity/              # Generated Serenity BDD reports
```

---

## Architecture: Screenplay Pattern

This project strictly follows the [Screenplay Pattern](https://serenity-js.org/handbook/design/screenplay-pattern/), enforcing a clean separation of concerns:

```
Feature files (Gherkin)
        │
        ▼
Step Definitions          ← thin glue layer only; no UI logic
        │
   ┌────┴─────┐
   ▼          ▼
Tasks      Questions
(WHEN)     (THEN)
   │          │
   └────┬─────┘
        ▼
  Interactions            ← Click, Fill, Drag, etc. (Serenity/JS built-ins)
        │
        ▼
   Playwright API
```

### Key Rules

| Layer                | Responsibility                      | Never Does                       |
| -------------------- | ----------------------------------- | -------------------------------- |
| **Tasks**            | Perform UI interactions             | Assert or verify                 |
| **Step Definitions** | Connect Gherkin to Tasks/Questions  | Contain UI logic                 |
| **Feature Files**    | Describe behaviour in plain English | Reference implementation details |

---

## Test Scenarios

### Home Navigation

Verifies the DemoQA home page loads and all six main menu sections are displayed.

### Elements — Text Box

Submits the Text Box form with name and email, then verifies the output panel reflects the submitted values.

### Forms — Practice Form

Fills the multi-field Practice Form (name, email, gender, mobile, address) and verifies the confirmation modal.

### Alerts, Frame & Windows

- **Alert:** Triggers and accepts a browser alert, asserts the dialog was accepted via `ModalDialog.lastDialogState()`.
- **Browser Windows:** Opens a new tab and verifies the heading on the sample page.

### Book Store Application

Searches for a book by keyword ("Git") and verifies at least one result title contains the search term.

### Interactions — Drag and Drop

Drags an element into a drop zone and asserts the drop zone text changes to "Dropped!".

### Widgets — Accordion

Expands each of the three accordion panels in sequence and asserts each content area becomes visible.

---

## Running Tests

```shell
# All tests
npm test

# Specific feature file
npm test -- features/section-elements.feature

# Tagged scenarios only
npm test -- --tags "@smoke"

# Headed mode (see the browser)
HEADLESS=false npm test
```

---

## Viewing Reports

Serenity BDD produces living documentation at `target/site/serenity/index.html`.

```shell
# Serve locally
npm start   # http://localhost:8080

# Or open directly
open target/site/serenity/index.html
```

---

## NPM Scripts

| Script             | Description                                            |
| ------------------ | ------------------------------------------------------ |
| `npm test`         | Run full test suite and generate Serenity BDD report   |
| `npm start`        | Serve the Serenity BDD report at http://localhost:8080 |
| `npm run lint`     | Run ESLint                                             |
| `npm run lint:fix` | Auto-fix linting issues                                |
| `npm run clean`    | Remove previous test reports                           |

---

## Configuration

The base URL and browser settings are managed centrally in `features/support/serenity.config.ts`. Update this file to change the target environment rather than editing individual feature files or step definitions.

---

## Troubleshooting

**Playwright browsers not installed**

```shell
npx playwright install
```

**Java not found (Serenity BDD reports require Java 17+)**

```shell
# macOS
brew install openjdk@17

# Linux
sudo apt-get install openjdk-17-jre

# Verify
java -version
```

**Port 8080 already in use**

```shell
npx http-server -p 3000 target/site/serenity -s -o
```

---

## License

Apache-2.0
