import {
	preventCrossShopDataAccess,
	deleteRecord,
	ActionOptions,
	DeleteShopifyProductActionContext,
} from "gadget-server";
import { product_table } from "../../../../airtable.js";

/**
 * @param { DeleteShopifyProductActionContext } context
 */
export async function run({ params, record, logger, api }) {
	await preventCrossShopDataAccess(params, record);
	await deleteRecord(record);
}

/**
 * @param { DeleteShopifyProductActionContext } context
 */
export async function onSuccess({ params, record, logger, api }) {
	if (record.airtableId) {
		// use the client to delete the record stored at "airtableId"
		const deletedRecord = await product_table.destroy(record.airtableId);
		logger.info({ airtableId: deletedRecord?.getId() }, "AIRTABLE ID");
	} else {
		logger.info({ id: record.id }, "NO AIRTABLE ID");
	}
}

/** @type { ActionOptions } */
export const options = {
	actionType: "delete",
};
