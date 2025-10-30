
import { test } from "@playwright/test";

test("Put_call", async ({ request }) => {
    const resp1 = await request.put('https://restful-booker.herokuapp.com/booking/1', {
        headers: {
            Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM=",
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        data: {
            firstname: "James",
            lastname: "Brown",
            totalprice: 111777,
            depositpaid: true,
            bookingdates: {
                checkin: "2018-01-01",
                checkout: "2019-01-01"
            },
            additionalneeds: "Breakfast"
        }
    });

    if (resp1.ok()) {
        const report = await resp1.json();
        console.log(report);
    } else {
        const raw = await resp1.text();
        console.error(`❌ ${resp1.status()} ${resp1.statusText()} - ${raw}`);
    }
});
