# Practice Test Login Application Test Plan

## Application Overview

## Document Control
- Application: Practice Test Automation login practice page
- URL: https://practicetestautomation.com/practice-test-login/
- Page title: Test Login | Practice Test Automation
- Plan date: 2026-10-15
- Test type: Functional, negative, boundary, and basic usability regression
- Baseline browser: Chromium; repeat on other supported browsers when cross-browser coverage is required.

## Objective
Verify that only the published credentials authenticate, invalid or missing credentials are rejected, keyboard and logout flows work, and boundary input does not destabilize the application.

## Scope
Included: login form, valid and invalid credentials, missing fields, error feedback, Enter submission, logout, retry, whitespace/case/long-input boundaries, and initial page state. Excluded: registration, password recovery, user administration, penetration testing, and navigation outside the login/logout flow.

## Test Data
- Valid username: `student`
- Valid password: `Password123`
- Invalid username: `incorrectUser`
- Invalid password: `incorrectPassword`
- Boundary inputs: surrounding spaces, case-modified username, and 1,024-character strings.

## Preconditions and Assumptions
- Application is reachable and the browser has network access.
- Each independent scenario starts in a fresh browser context on the login page, unauthenticated, with empty fields unless steps create state.
- The page publishes `student` / `Password123` and the expected invalid username/password messages.
- Clear browser state between independent scenarios.

## Entry Criteria
The login page loads, Username and Password fields and Submit are available, and published credentials are known.

## Exit Criteria
Record pass/fail for all scenarios. Log mismatches in authentication, URL, error copy, or baseline rendering with browser, timestamp, inputs, and evidence. No unresolved critical or high-severity login defects for release.

## Known Baseline Observation
During browser exploration, `Your username is invalid!` appeared before any submission and remained after logout and an empty-form submission. PTL-E01 should reproduce this; confirm whether it is intentional before assessing release severity.

## Test Scenarios

### 1. Positive Login and Session Flows

**Seed:** `tests/seed.spec.ts`

#### 1.1. PTL-P01 - Login succeeds with published credentials

**File:** `tests/practice-test-login/positive-login.spec.ts`

**Steps:**
  1. Open the login URL in a fresh browser context.
    - expect: Page title is Test Login | Practice Test Automation.
    - expect: Username and Password fields and Submit are visible.
  2. Enter student and Password123, then click Submit.
    - expect: URL contains /logged-in-successfully/.
    - expect: Logged In Successfully heading and Congratulations student. You successfully logged in! confirmation appear.
    - expect: Log out link is visible.

#### 1.2. PTL-P02 - Submit valid credentials with Enter

**File:** `tests/practice-test-login/keyboard-login.spec.ts`

**Steps:**
  1. Open the login page in a fresh context and enter student and Password123 in their respective fields.
    - expect: Both values appear in their respective fields.
  2. Focus Password and press Enter.
    - expect: Form submits and navigates to /logged-in-successfully/.
    - expect: Success confirmation and Log out link appear.

#### 1.3. PTL-P03 - Logout ends the authenticated flow

**File:** `tests/practice-test-login/logout.spec.ts`

**Steps:**
  1. Log in with student / Password123.
    - expect: Successful-login page and Log out link appear.
  2. Click Log out.
    - expect: Browser returns to /practice-test-login/.
    - expect: Login form appears and authenticated success page is no longer shown.

#### 1.4. PTL-P04 - Correct credentials recover after failure

**File:** `tests/practice-test-login/retry-login.spec.ts`

**Steps:**
  1. Submit incorrectUser with Password123.
    - expect: User remains on login page and sees Your username is invalid!.
  2. Replace values with student and Password123, then submit.
    - expect: Login succeeds and success page appears.
    - expect: Prior invalid-username state does not block authentication.

### 2. Negative and Required-Field Scenarios

**Seed:** `tests/seed.spec.ts`

#### 2.1. PTL-N01 - Invalid username is rejected

**File:** `tests/practice-test-login/invalid-username.spec.ts`

**Steps:**
  1. Enter incorrectUser and Password123, then submit from a fresh login page.
    - expect: Authentication is denied; URL remains on login page.
    - expect: Exact message Your username is invalid! appears.

#### 2.2. PTL-N02 - Invalid password is rejected

**File:** `tests/practice-test-login/invalid-password.spec.ts`

**Steps:**
  1. Enter student and incorrectPassword, then submit from a fresh login page.
    - expect: Authentication is denied; URL remains on login page.
    - expect: Exact message Your password is invalid! appears.

#### 2.3. PTL-N03 - Both fields empty cannot authenticate

**File:** `tests/practice-test-login/empty-credentials.spec.ts`

**Steps:**
  1. Submit the fresh login form with both fields empty.
    - expect: User remains unauthenticated on the login page.
    - expect: Clear validation identifies missing or invalid username; log a defect if absent or misleading.

#### 2.4. PTL-N04 - Missing username is rejected

**File:** `tests/practice-test-login/missing-username.spec.ts`

**Steps:**
  1. Leave Username empty, enter Password123, and submit.
    - expect: Authentication is denied and login page remains displayed.
    - expect: Validation indicates username is missing or invalid.

#### 2.5. PTL-N05 - Missing password is rejected

**File:** `tests/practice-test-login/missing-password.spec.ts`

**Steps:**
  1. Enter student, leave Password empty, and submit.
    - expect: Authentication is denied and login page remains displayed.
    - expect: Validation indicates password is missing or invalid.

#### 2.6. PTL-N06 - Password is masked

**File:** `tests/practice-test-login/password-masking.spec.ts`

**Steps:**
  1. Enter a sample value in Password.
    - expect: Password is not displayed as readable plain text.

### 3. Edge Cases and Initial-State Regression

**Seed:** `tests/seed.spec.ts`

#### 3.1. PTL-E01 - Fresh page has no stale authentication error

**File:** `tests/practice-test-login/initial-state.spec.ts`

**Steps:**
  1. Open the login URL in a new browser context without interacting with the form.
    - expect: Username and Password are empty; no authentication error appears before submission.
    - expect: Observed baseline: Your username is invalid! appeared on initial load. Record as a reproducible defect if still present.

#### 3.2. PTL-E02 - Surrounding username whitespace is rejected

**File:** `tests/practice-test-login/username-whitespace.spec.ts`

**Steps:**
  1. Enter ` student ` with one leading and trailing space and Password123, then submit.
    - expect: Authentication is denied and login page remains displayed.
    - expect: Username-invalid message appears; observed during browser exploration.

#### 3.3. PTL-E03 - Username matching is case-sensitive

**File:** `tests/practice-test-login/username-case.spec.ts`

**Steps:**
  1. Enter STUDENT and Password123, then submit.
    - expect: Case-modified username is not authenticated.
    - expect: Login page remains displayed with username-invalid message.

#### 3.4. PTL-E04 - Surrounding password whitespace is rejected

**File:** `tests/practice-test-login/password-whitespace.spec.ts`

**Steps:**
  1. Enter student and ` Password123 ` with one leading and trailing space, then submit.
    - expect: Authentication is denied and login page remains displayed.
    - expect: Password-invalid message appears.

#### 3.5. PTL-E05 - Very long credentials are handled safely

**File:** `tests/practice-test-login/long-input.spec.ts`

**Steps:**
  1. Enter 1,024 `A` characters in each field and submit.
    - expect: Application remains responsive without a server error or crash.
    - expect: No successful-login page appears; validation feedback is shown.
