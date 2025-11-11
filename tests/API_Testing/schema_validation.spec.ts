//import { test } from '@playwright/test';
//import { readJsonSchemaFromExcel } from '../../src/utils/schemaReader';

//test('Print Excel content to console', async () => {
//    // Load the Excel content (your existing schema reader)
//    const schema = readJsonSchemaFromExcel('Validata_schema.xlsx', 'Sheet1');

//    // Print the full schema content to the console
//    console.log('📄 Schema content from Excel:\n', JSON.stringify(schema, null, 2));
//});


import { test, expect } from '@playwright/test';
import Ajv from 'ajv';
import { readJsonSchemaFromExcel } from '../../src/utils/schemaReader';

test('>> GET response should match schema from Excel', async ({ request }) => {
    // Step 1️⃣: Read schema from Excel
    const schema = readJsonSchemaFromExcel('validata_schema.xlsx', 'Sheet1');
    console.log('✅ Loaded Schema:\n', JSON.stringify(schema, null, 2));//it convert text file into JSON obj

    // Step 2️⃣: Fetch API response
    const response = await request.get('https://restful-booker.herokuapp.com/booking/1');
    expect(response.ok()).toBeTruthy();

    const responseBody = await response.json();
    console.log('✅ API Response:\n', JSON.stringify(responseBody, null, 2));

    // Step 3️⃣: Validate using AJV (Draft-07)
    const ajv = new Ajv({ allErrors: true, strict: false }); // Draft-07 is default it will check everything not terminate with single error..
    const validate = ajv.compile(schema);
//ajv.compile(schema) is a function call that:
//Reads your JSON schema(the set of rules for valid data).
//Builds a new function that knows how to check data against those rules
    const valid = validate(responseBody);
/*
 You now give that “validator” the actual API response (responseBody).
AJV runs through your schema rules:
Checks if all required fields exist.
Verifies data types (string, number, boolean, etc.).
Validates nested objects and their structure.
Reports any missing or invalid fields.
The result (valid) will be:
true ✅ → if the JSON matches your schema perfectly
false ❌ → if something is missing or incorrect
    */

    if (!valid) {
        console.error('❌ Schema validation failed:', validate.errors);
    }

    expect(valid, 'Schema validation failed').toBe(true);
});
