//passsing data through JSON

import { test,expect } from "@playwright/test"

import { APIPost } from '../../TestData/qa/PersonalLoan.json'

test("Pssing Data through JSON", async ({ request }) => {
    const resp1 = await request.post("https://restful-booker.herokuapp.com/booking", {
        data: APIPost
    })

    const report = await resp1.json();
    console.log(report)
    expect(report.booking).toMatchObject(APIPost)
    expect(report.booking.additionalneeds).toEqual(APIPost.additionalneeds)
    console.log(APIPost)
})