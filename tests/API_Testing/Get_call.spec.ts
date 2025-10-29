import { test, request, APIRequestContext,expect } from '@playwright/test';
import logger from '../../src/utils/logger';
// ? consistent logging
let reqcont2: APIRequestContext; // ✅ Explicitly typed
test.beforeAll("Before ALL test", async () => {
	reqcont2 = await request.newContext({
		baseURL: "https://restful-booker.herokuapp.com",
		extraHTTPHeaders: { //Adds headers that are automatically included in all requests made through that context
			Accept: "application/json"
		}
	})
})
// Logging an info message before starting the tests
logger.info("Passing Get Url");

// ✅ Test 1 — Using the built-in Playwright `request` fixture
test("Get_call_API", async ({ request }) => {  //You use it inside a test block

	// Sending a GET request to the endpoint directly
	const Response = await request.get("https://restful-booker.herokuapp.com/booking/697", { // 697 is url parameter

		headers: { //Adds headers only for that specific request
			Accept: "application/json"
		}
		
	});

	// Printing the full JSON response body to console
	console.log(await Response.json());
});


// Logging another info message before the next test
logger.info("Passing Through import Request");

// ✅ Test 2 — Creating your own Request Context manually
test("Get_call_API1", async () => {
	// Creating a new isolated request context (like a fresh API client)
	const reqcontext = await request.newContext({   //This is the helper function to create a new APIRequestContext manually — outside of a test.
		baseURL: "https://restful-booker.herokuapp.com",
		extraHTTPHeaders: { //Adds headers that are automatically included in all requests made through that context
			Accept: "application/json"
		}
		
	});
	// Sending a GET request relative to the baseURL
	const req1 = await reqcontext.get('/booking', {
		params: {
			firstname: "Jim",
			lastname: "Brown"
  		}
	});
	// Printing the response body in JSON format
	console.log(await req1.json());
});



//test3 using the hook
test("Get_Call_API2", async () => {
	const test3 = await reqcont2.get('/booking?firstname=sally&lastname=brown'); //url paramter by uusing key value pair
	console.log(await test3.json())
})

//test4  gloal in playwright.config
test("Get_Call_API3", async ({ request }) => {
try {
	const test4 = await request.get('/booking/4'); // get url from playwright.config.ts base url.... and url parameter booking id
	console.log(await test4.json())

	expect(test4.status()).toBe(200)//NO need to await because its not no effect  verfication
	expect(test4.ok()).toBeTruthy();
	//expect(await test4.json()).toMatchObject({
	// we need paste json output what we expect
	//})
		if (test4.status() === 200) {
			logger.info('Expected 200');

		} else {
			logger.error(` Unexpected status: ${test4.status()}`);
		}

}
catch (error) {
		logger.error(` API call failed: ${error}`);
		throw error; // rethrow to fail the test
	}
})

//test API with UI Response

test("API with UI", async ({ request, page }) => {
	const test5 = await request.get("https://api.demoblaze.com/entries")
	const specific = await test5.json()
	logger.info(`API status: ${test5.status()}`);
	logger.info(`API title: ${specific.Items[0].title}`);
	console.log(await test5.json())
	console.log(specific.Items[0].tittle)
	await page.goto("https://demoblaze.com/")
	try {
		await expect(page.getByRole("link", { name: 'Samsung galaxy s6' })).toHaveText(specific.Items[0].title);
		logger.info("✅ UI matches expected title from API");
	} catch (error) {
		logger.error(`❌ UI mismatch or element not found: ${error}`);
		throw error; // rethrow to fail the test
	}
})