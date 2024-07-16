import { globalShopifySync, ActionOptions, ScheduledShopifySyncGlobalActionContext } from "gadget-server";

const HourInMs = 60 * 60 * 1000;

/**
 * @param { ScheduledShopifySyncGlobalActionContext } context
 */
export async function run({ params, logger, api, connections }) {
  const syncOnlyModels = connections.shopify.enabledModels
    .filter(model => model.syncOnly)
    .map(model => model.apiIdentifier);

  const syncSince = new Date(Date.now() - 25 * HourInMs)

  await globalShopifySync({
    apiKeys: connections.shopify.apiKeys,
    syncSince,
    models: syncOnlyModels
  });
};

/** @type { ActionOptions } */
export const options = {
  triggers: {
    scheduler: [
      { every: "day", at: "01:45 UTC" },
    ],
    shopify: {
      webhooks: [
        "carts/create",
        "checkouts/create",
        "carts/update",
        "checkouts/delete",
        "checkouts/update",
        "collections/create",
        "collections/delete",
        "collections/update",
        "fulfillment_events/create",
        "fulfillment_events/delete",
        "fulfillments/create",
        "fulfillments/update",
        "order_transactions/create",
        "orders/create",
        "orders/delete",
        "orders/risk_assessment_changed",
        "orders/updated",
        "products/create",
        "products/delete",
        "products/update",
        "refunds/create",
        "selling_plan_groups/create",
        "selling_plan_groups/delete",
        "selling_plan_groups/update",
        "tender_transactions/create",
      ],
    },
  },
};
