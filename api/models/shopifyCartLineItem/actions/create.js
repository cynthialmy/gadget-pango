import { applyParams, preventCrossShopDataAccess, save, ActionOptions, CreateShopifyCartLineItemActionContext } from "gadget-server";
import { table } from "api/models/shopifyCartLineItem/actions/airtable.js"

/**
 * @param { CreateShopifyCartLineItemActionContext } context
 */
export async function run({ params, record, logger, api, connections }) {
  applyParams(params, record);
  await preventCrossShopDataAccess(params, record);
  await save(record);
};

/**
 * @param { CreateShopifyCartLineItemActionContext } context
 */
export async function onSuccess({ params, record, logger, api, connections }) {
 try {
  // use the Airtable client to create Product data in the table
    const createdRecord = await table.create({
      id: record.id,
      title: record.title,
      discountedPrice: record.discountedPrice,
      giftCard: record.giftCard,
      grams: record.grams,
      key: record.key,
      linePrice: record.linePrice,
      originalLinePrice: record.originalLinePrice,
      originalPrice: record.originalPrice, 
      price: record.price,
      quantity: record.quantity,
      vendor: record.vendor,
      shop: record.shop,
      createdAt: record.createdAt.toDateString(),
      updatedAt: record.updatedAt ? record.updatedAt.toDateString() : "",
      });
    logger.info({id: record.id}, "Record sent to Airtable")

    // Add the airtableRecordId to the product record so that you can later update the record if Shopify sends an update webhook
    const response = await api.internal.shopifyCartLineItem.update(record.id, {
      airtableId: createdRecord.getId()
    });

    logger.info({id: response.id}, "Successfully updated record")
  } catch (error) {
    logger.error({error}, "Error forwarding create data to Airtable")
  }
};

/** @type { ActionOptions } */
export const options = {
  actionType: "create",
  triggers: { api: true },
};
