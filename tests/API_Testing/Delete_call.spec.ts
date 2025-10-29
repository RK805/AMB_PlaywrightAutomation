import { test, expect } from "@playwright/test";
import logger from "../../src/utils/logger";

test("Delete call for API Testing", async ({ request }) => {
    const bookingId = 2; // 
    //  DELETE the booking
    const respDelete = await request.delete(`/booking/${bookingId}`, {
        headers: {
            Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM=", // admin:password123
            Accept: "application/json"
        }
    });

    const respDelText = await respDelete.text();
    logger.info(` DELETE status: ${respDelete.status()} - ${respDelText}`);

    expect(respDelete.status()).toBe(201);
    expect(respDelText).toEqual("Created");

    //  GET the deleted booking to confirm it's gone
    const respGet = await request.get(`/booking/${bookingId}`);
    logger.info(` GET after delete: ${respGet.status()} - ${await respGet.text()}`);

    expect(respGet.status()).toBe(404);
});
