//import { test, expect } from "@playwright/test";
//import logger from '../../src/utils/logger';

///*test("test1", async ({ request }) => {
//    try {
//        const resp1 = await request.post("https://restful-booker.herokuapp.com/booking", {
//            headers: {
//                Accept: "application/json",
//                "Content-Type": "application/json"
//            },
//            data: {
//                firstname: "Jim",
//                lastname: "Brown",
//                totalprice: 111,
//                depositpaid: true,
//                bookingdates: {
//                    checkin: "2018-01-01",
//                    checkout: "2019-01-01"
//                },
//                additionalneeds: "Breakfast"
//            }
//        });

//        const report = await resp1.json();
//        expect(resp1.status()).toBe(200);
//        expect(resp1.statusText()).toBe("OK");

//        logger.info(` Status: ${resp1.status()} ${resp1.statusText()}`);
//        logger.info(` Booking ID: ${report.bookingid}`);
//        logger.info(` Booking created for: ${report.booking.firstname} ${report.booking.lastname}`);

//        expect(report.booking).toMatchObject({
//            firstname: "Jim",
//            lastname: "Brown",
//            totalprice: 111,
//            depositpaid: true,
//            bookingdates: {
//                checkin: "2018-01-01",
//                checkout: "2019-01-01"
//            },
//            additionalneeds: "Breakfast"
//        });

//        expect(report.booking.additionalneeds).toBe("Breakfast");

//    } catch (error) {
//        logger.error(` Test failed: ${error}`);
//        throw error;
//    }
//});*/

////manually creation of newContext

//import { request } from '@playwright/test';
//test('manual context with same booking payload', async () => {
//    const apiContext = await request.newContext({
//        baseURL: 'https://restful-booker.herokuapp.com',
//        extraHTTPHeaders: {
//            Accept: 'application/json',
//            'Content-Type': 'application/json'
//        }
//    });

//    const bookingPayload = {
//        firstname: "Jim",
//        lastname: "Brown",
//        totalprice: 111,
//        depositpaid: true,
//        bookingdates: {
//            checkin: "2018-01-01",
//            checkout: "2019-01-01"
//        },
//        additionalneeds: "Breakfast"
//    };

//    try {
//        const response = await apiContext.post('/booking', {
//            data: bookingPayload
//        });

//        const body = await response.json();
//        expect(response.status()).toBe(200);
//        expect(response.statusText()).toBe("OK");

//        logger.info(`✅ Booking created. ID: ${body.bookingid}`);
//        logger.info(`📦 Response: ${JSON.stringify(body.booking)}`);

//        expect(body.booking).toMatchObject(bookingPayload);
//        expect(body.booking.additionalneeds).toBe("Breakfast");

//    } catch (error) {
//        logger.error(`❌ API call failed: ${error}`);
//        throw error;
//    } finally {
//        await apiContext.dispose();
//    }
//});

//// TEst WIth UI

//test("Test_01", async ({ request }) => {
//    logger.info("Just GOing ro the API URL not to home URL")
//    const Resp2 = await request.post("https://api.demoblaze.com/viewcart", {
//        data: {
//            cookie: "user=353a2a6f-df5e-2460-b681-efa78d48f450", flag: false
//        }

//    })

//    expect(await Resp2.status()).toBe(200)
//    logger.info(`Staus Code: ${await Resp2.status() }`)
//    console.log(await Resp2.json())
//})

 
import { test } from "@playwright/test"

test(" num", async ({ request }) => {

})
