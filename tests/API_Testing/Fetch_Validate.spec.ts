// fetch and validate API REsponse Header
import { test ,expect} from "@playwright/test"


test("APIResponse ", async ({ request }) => {


    const resp1 = await request.get("/booking/1")
    const headers_value = resp1.headers();
    console.log(headers_value)

    //validate
    expect(headers_value.server).toEqual("Heroku")



})