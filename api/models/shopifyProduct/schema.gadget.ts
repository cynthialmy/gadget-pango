import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "shopifyProduct" model, go to https://pango.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "DataModel-Shopify-Product",
  fields: {
    airtableId: { type: "string", storageKey: "OnS6A_UYO1dL" },
  },
  shopify: {
    fields: [
      "body",
      "cartLineItems",
      "category",
      "checkoutLineItems",
      "compareAtPriceRange",
      "customCollections",
      "handle",
      "images",
      "options",
      "productCategory",
      "productType",
      "publishedAt",
      "sellingPlanGroups",
      "shop",
      "shopifyCreatedAt",
      "shopifyUpdatedAt",
      "status",
      "tags",
      "templateSuffix",
      "title",
      "variants",
      "vendor",
    ],
  },
};
