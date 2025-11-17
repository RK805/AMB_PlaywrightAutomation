




import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,

    reporter: [
        ['./src/reporters/CustomLoggerReporter.ts'],
        ['html'],
        ['line'],
        ['list'],
        ['junit', { outputFile: 'results/results.xml' }],
    ],

    // GLOBAL USE (common settings)
    use: {
        baseURL: 'https://restful-booker.herokuapp.com',
        extraHTTPHeaders: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        trace: 'on-first-retry',
        video: 'on',
        headless: true,
    },

    projects: [
        // -------------------------
        // NORMAL LOCAL TEST (Chrome)
        // -------------------------
        {
            name: 'local-chrome',
            use: { ...devices['Desktop Chrome'] }
        },

        // -------------------------
        // REMOTE PLAYWRIGHT SERVER
        // -------------------------
        {
            name: 'remote-chromium',
            use: {
                browserName: 'chromium',
                connectOptions: {
                    wsEndpoint: process.env.REMOTE_WS ?? "",
                    //timeout: 60000,
                }
            }
        }  
    ],
});//"ws://192.168.2.149:8080"











//import { defineConfig, devices } from '@playwright/test';

//export default defineConfig({
//    testDir: './tests',
//    fullyParallel: true,
//    forbidOnly: !!process.env.CI,
//    retries: process.env.CI ? 2 : 0,
//    workers: process.env.CI ? 1 : undefined,

//    reporter: [
//        ['./src/reporters/CustomLoggerReporter.ts'],
//        ['html'],
//        ['line'],
//        ['list'],
//        ['junit', { outputFile: 'results/results.xml' }],
//    ],

//    use: {
//        baseURL: 'https://restful-booker.herokuapp.com',
//        extraHTTPHeaders: {
//            Accept: 'application/json',
//            'Content-Type': 'application/json'
//        },

//        /** ⭐ REMOTE SERVER INTEGRATION STARTS HERE ⭐ **/
//        connectOptions: {
//            wsEndpoint: "ws://<SERVER-IP>:9000/ws",   // ⬅ CHANGE THIS
//            timeout: 60000,
//        },
//        /** ⭐ REMOTE SERVER INTEGRATION ENDS HERE ⭐ **/

//        trace: 'on-first-retry',
//        video: 'on',
//        headless: true
//    },

//    projects: [
//        // LOCAL EXECUTION (Chrome Desktop)
//        {
//            name: 'Chrome',
//            use: { ...devices['Desktop Chrome'] }
//        },

//        // REMOTE EXECUTION (Chromium from Remote Grid)
//        {
//            name: 'remote-chromium',
//            use: {
//                browserName: 'chromium'
//            }
//        }
//    ],
//});






















//import { defineConfig, devices } from '@playwright/test';
//import { report } from 'process';


///**
// * Read environment variables from file.
// * https://github.com/motdotla/dotenv
// */
//// import dotenv from 'dotenv';
//// import path from 'path';
//// dotenv.config({ path: path.resolve(__dirname, '.env') });

///**
// * See https://playwright.dev/docs/test-configuration.
// */
//export default defineConfig({
//    testDir: './tests',
//    /* Run tests in files in parallel */
//    fullyParallel: true,
//    /* Fail the build on CI if you accidentally left test.only in the source code. */
//    forbidOnly: !!process.env.CI,
//    /* Retry on CI only */
//    retries: process.env.CI ? 2 : 0,
//    /* Opt out of parallel tests ,on CI. */
//    workers: process.env.CI ? 1 : undefined,
//    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
//    reporter: [
//        ['./src/reporters/CustomLoggerReporter.ts'], // your custom HTML/logger reporter
//        ['html'],// Playwright’s built-in HTML report (playwright-report folder)
//        ['line'],// shows console.log + logger output live in terminal
//        ['list'],
//        ['junit', { outputFile: 'results/results.xml' }],


//    ],


//    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
//    use: {
//        /* Base URL to use in actions like `await page.goto('/')`. */
//        // baseURL: 'http://localhost:3000',
//        baseURL: 'https://restful-booker.herokuapp.com',//APITesting uRL
//        extraHTTPHeaders: {
//            Accept: 'application/json',
//            'Content-Type': 'application/json'
//        }, //APITesting uRL

//        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
//        trace: 'on-first-retry',
//        video: 'on',
//        headless: false

//    },
//    connectOptions: {
//        wsEndpoint: "ws://<SERVER-IP>:9000/ws",   // ⬅ CHANGE THIS
//        timeout: 60000,
//    },
//    /** ⭐ REMOTE SERVER INTEGRATION ENDS HERE ⭐ **/

//    trace: 'on-first-retry',
//    video: 'on',
//    headless: true
//},



//    /* Configure projects for major browsers */
//    projects: [
//        {
//            name: 'Chrome',
//            use: { ...devices['Desktop Chrome'] },
//        },

//        //{
//        //    name: 'firefox',
//        //    use: { ...devices['Desktop Firefox'] },
//        //},

//        //{
//        //    name: 'webkit',
//        //    use: { ...devices['Desktop Safari'] },
//        //},

//        /* Test against mobile viewports. */
//         //{
//         //  name: 'Mobile Chrome',
//         // use: { ...devices['Pixel 5'] },
//         //},
//        // {
//        //   name: 'Mobile Safari',
//        //   use: { ...devices['iPhone 12'] },
//        // },

//        /* Test against branded browsers. */
//        // {
//        //   name: 'Microsoft Edge',
//        //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
//        // },
//        // {
//        //   name: 'Google Chrome',
//        //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
//        // },
//    ],

//    /* Run your local dev server before starting the tests */
//    // webServer: {
//    //   command: 'npm run start',
//    //   url: 'http://localhost:3000',
//    //   reuseExistingServer: !process.env.CI,
//    // },




//});

//import { defineConfig, devices } from '@playwright/test';
//import { report } from 'process';

///**
// * Read environment variables from file.
// * https://github.com/motdotla/dotenv
// */
//// import dotenv from 'dotenv';
//// import path from 'path';
//// dotenv.config({ path: path.resolve(__dirname, '.env') });

///**
// * See https://playwright.dev/docs/test-configuration.
// */
//export default defineConfig({
//    testDir: './tests',
//    /* Run tests in files in parallel */
//    fullyParallel: true,
//    /* Fail the build on CI if you accidentally left test.only in the source code. */
//    forbidOnly: !!process.env.CI,
//    /* Retry on CI only */
//    retries: process.env.CI ? 2 : 0,
//    /* Opt out of parallel tests ,on CI. */
//    workers: process.env.CI ? 1 : undefined,
//    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
//    reporter: [
//        ['./src/reporters/CustomLoggerReporter.ts'], // your custom HTML/logger reporter
//        ['html'],// Playwright’s built-in HTML report (playwright-report folder)
//        ['line'],// shows console.log + logger output live in terminal
//        ['list'],
//        ['junit', { outputFile: 'results/results.xml' }],

//    ],


//    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
//    use: {
//        /* Base URL to use in actions like `await page.goto('/')`. */
//        // baseURL: 'http://localhost:3000',
//        baseURL: 'https://restful-booker.herokuapp.com',//APITesting uRL 
//        extraHTTPHeaders: {
//            Accept: 'application/json',
//            'Content-Type': 'application/json'
//        }, //APITesting uRL

//        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
//        trace: 'on-first-retry',
//        video: 'on',
//        headless: false

//    },



//    /* Configure projects for major browsers */
//    projects: [
//        {
//            name: 'Chrome',
//            use: { ...devices['Desktop Chrome'] },
//        },

//        //{
//        //    name: 'firefox',
//        //    use: { ...devices['Desktop Firefox'] },
//        //},

//        //{
//        //    name: 'webkit',
//        //    use: { ...devices['Desktop Safari'] },
//        //},

//        /* Test against mobile viewports. */
//        //{
//        //  name: 'Mobile Chrome',
//        // use: { ...devices['Pixel 5'] },
//        //},
//        // {
//        //   name: 'Mobile Safari',
//        //   use: { ...devices['iPhone 12'] },
//        // },

//        /* Test against branded browsers. */
//        // {
//        //   name: 'Microsoft Edge',
//        //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
//        // },
//        // {
//        //   name: 'Google Chrome',
//        //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
//        // },
//    ],

//    /* Run your local dev server before starting the tests */
//    // webServer: {
//    //   command: 'npm run start',
//    //   url: 'http://localhost:3000',
//    //   reuseExistingServer: !process.env.CI,
//    // },




//});