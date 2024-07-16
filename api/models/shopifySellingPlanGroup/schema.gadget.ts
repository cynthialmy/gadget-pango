import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "shopifySellingPlanGroup" model, go to https://pango.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "DataModel-Shopify-SellingPlanGroup",
  fields: {},
  shopify: {
    fields: [
      "appId",
      "description",
      "merchantCode",
      "name",
      "options",
      "position",
      "productVariants",
      "products",
      "sellingPlanGroupProductVariants",
      "sellingPlanGroupProducts",
      "sellingPlans",
      "shop",
      "shopifyCreatedAt",
      "summary",
    ],
  },
};
