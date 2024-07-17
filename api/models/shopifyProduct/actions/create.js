import {
	applyParams,
	preventCrossShopDataAccess,
	save,
	ActionOptions,
	CreateShopifyProductActionContext,
} from "gadget-server";
import { product_table } from "../../../../airtable.js";

/**
 * @param { CreateShopifyProductActionContext } context
 */
export async function run({ params, record, logger, api }) {
	applyParams(params, record);
	await preventCrossShopDataAccess(params, record);
	await save(record);
}

/**
 * @param { CreateShopifyProductActionContext } context
 */
export async function onSuccess({ params, record, logger, api }) {
	try {
		// use the Airtable client to create Product data in the table
		const createdRecord = await product_table.create({
			shopifyId: record.id,
			title: record.title,
			body: record.body,
			status: record.status,
			createdAt: record.createdAt.toDateString(),
			updatedAt: record.updatedAt ? record.updatedAt.toDateString() : "",
			shop: record.shopId,
			vendor: record.vendor,
			templateSuffix: record.templateSuffix,
			shopifyCreatedAt: record.shopifyCreatedAt
				? record.shopifyCreatedAt.toDateString()
				: "",
			shopifyUpdatedAt: record.shopifyUpdatedAt
				? record.shopifyUpdatedAt.toDateString()
				: "",
			publishedAt: record.publishedAt
				? record.publishedAt.toDateString()
				: "",
		});
		logger.info({ productId: record.id }, "Record sent to Airtable");

		// Add the airtableRecordId to the product record so that you can later update the record if Shopify sends an update webhook
		const response = await api.internal.shopifyProduct.update(record.id, {
			airtableId: createdRecord.getId(),
		});

		logger.info({ id: response.id }, "Successfully updated record");
	} catch (error) {
		logger.error({ error }, "Error forwarding create data to Airtable");
	}
}

/** @type { ActionOptions } */
export const options = {
	actionType: "create",
};
