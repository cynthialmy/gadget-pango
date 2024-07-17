import {
	applyParams,
	preventCrossShopDataAccess,
	save,
	ActionOptions,
	UpdateShopifyCartLineItemActionContext,
} from "gadget-server";
import { cart_table } from "../../../../airtable.js";

/**
 * @param { UpdateShopifyCartLineItemActionContext } context
 */
export async function run({ params, record, logger, api, connections }) {
	applyParams(params, record);
	await preventCrossShopDataAccess(params, record);
	await save(record);
}

/**
 * @param { UpdateShopifyCartLineItemActionContext } context
 */
export async function onSuccess({ params, record, logger, api, connections }) {
	// Your logic goes here
	if (record.airtableId) {
		try {
			// use the Airtable client to update the record stored at "airtableId"
			const updatedRecord = await cart_table.update(record.airtableId, {
				title: record.title,
				discountedPrice: record.discountedPrice,
				giftCard: record.giftCard.toString(),
				grams: record.grams.toString(),
				key: record.key,
				linePrice: record.linePrice,
				originalLinePrice: record.originalLinePrice,
				originalPrice: record.originalPrice,
				price: record.price,
				quantity: record.quantity,
				vendor: record.vendor,
				shop: record.shop,
				updatedAt: record.updatedAt
					? record.updatedAt.toDateString()
					: "",
			});
			logger.info({ airtableId: updatedRecord?.getId() }, "AIRTABLE ID");
		} catch (error) {
			logger.error({ error }, "Error updating record in Airtable");
		}
	} else {
		logger.info({ id: record.id }, "NO AIRTABLE ID");
	}
}

/** @type { ActionOptions } */
export const options = { actionType: "update" };
