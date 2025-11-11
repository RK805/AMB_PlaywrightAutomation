import * as XLSX from 'xlsx';
import * as fs from 'fs';
import * as path from 'path';

export function readJsonSchemaFromExcel(fileName: string, sheetName: string): any {
    // 1️⃣ Load Excel file
    const filePath = path.resolve(__dirname, '../../TestData/qa', fileName);
    const workbook = XLSX.read(fs.readFileSync(filePath));
    const sheet = workbook.Sheets[sheetName];

    if (!sheet) throw new Error(`❌ Sheet "${sheetName}" not found in Excel`);

    // 2️⃣ Convert Excel sheet → JSON rows
    const rows = XLSX.utils.sheet_to_json<Record<string, string>>(sheet);
    console.log('📘 Excel rows:', rows);

    if (!rows.length) throw new Error('❌ Excel sheet is empty');

    // 3️⃣ Handle header variations (schema, Schema, schemaa, schemaa )
    const firstRow = rows[0];
    const allKeys = Object.keys(firstRow).map(k => k.trim().toLowerCase());
    const schemaKey = Object.keys(firstRow).find(
        key => key.trim().toLowerCase().startsWith('schema')
    );

    if (!schemaKey) {
        throw new Error(`❌ Could not find 'schema' column. Found: ${allKeys.join(', ')}`);
    }

    // 4️⃣ Read and clean schema string
    const schemaString = firstRow[schemaKey]?.toString().trim();
    console.log('📄 Schema string:', schemaString);

    if (!schemaString) throw new Error('❌ No schema found in Excel cell');

    // 5️⃣ Parse schema JSON
    try {
        return JSON.parse(schemaString);
    } catch (err) {
        console.error('❌ Invalid JSON in Excel cell:', err);
        throw new Error('❌ Invalid JSON schema format in Excel cell');
    }
}
