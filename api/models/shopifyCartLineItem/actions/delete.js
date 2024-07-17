import {
	preventCrossShopDataAccess,
	deleteRecord,
	ActionOptions,
	DeleteShopifyCartLineItemActionContext,
} from "gadget-server";
import { cart_table } from "../../../../airtable.js";

/**
 * @param { DeleteShopifyCartLineItemActionContext } context
 */
export async function run({ params, record, logger, api, connections }) {
	await preventCrossShopDataAccess(params, record);
	await deleteRecord(record);
}

/**
 * @param { DeleteShopifyCartLineItemActionContext } context
 */
export async function onSuccess({ params, record, logger, api, connections }) {
	// Your logic goes here
	if (record.airtableId) {
		// use the client to delete the record stored at "airtableId"
		const deletedRecord = await cart_table.destroy(record.airtableId);
		logger.info({ airtableId: deletedRecord?.getId() }, "AIRTABLE ID");
	} else {
		logger.info({ id: record.id }, "NO AIRTABLE ID");
	}
}

/** @type { ActionOptions } */
export const options = { actionType: "delete" };
