import Airtable from "airtable";

const base = new Airtable({ apiKey: process.env.AIRTABLE_ACCESS_TOKEN }).base(
	process.env.AIRTABLE_BASE_ID
);

// Specifying the table to add to in Airtable
export const product_table = base(process.env.AIRTABLE_TABLE_ID_PRODUCT);
export const cart_table = base(process.env.AIRTABLE_TABLE_ID_CART);
