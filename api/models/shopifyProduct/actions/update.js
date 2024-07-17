import {
	applyParams,
	preventCrossShopDataAccess,
	save,
	ActionOptions,
	UpdateShopifyProductActionContext,
} from "gadget-server";
import { product_table } from "../../../../airtable.js";

/**
 * @param { UpdateShopifyProductActionContext } context
 */
export async function run({ params, record, logger, api }) {
	applyParams(params, record);
	await preventCrossShopDataAccess(params, record);
	await save(record);
}

/**
 * @param { UpdateShopifyProductActionContext } context
 */
export async function onSuccess({ params, record, logger, api }) {
	if (record.airtableId) {
		try {
			// use the Airtable client to update the record stored at "airtableId"
			const updatedRecord = await product_table.update(
				record.airtableId,
				{
					title: record.title,
					body: record.body,
					templateSuffix: record.templateSuffix,
					status: record.status,
					vendor: record.vendor,
					updatedAt: record.updatedAt
						? record.updatedAt.toDateString()
						: "",
					shopifyUpdatedAt: record.shopifyUpdatedAt
						? record.shopifyUpdatedAt.toDateString()
						: "",
					publishedAt: record.publishedAt
						? record.publishedAt.toDateString()
						: "",
				}
			);
			logger.info({ airtableId: updatedRecord?.getId() }, "AIRTABLE ID");
		} catch (error) {
			logger.error({ error }, "Error updating record in Airtable");
		}
	} else {
		logger.info({ id: record.id }, "NO AIRTABLE ID");
	}
}

/** @type { ActionOptions } */
export const options = {
	actionType: "update",
};
