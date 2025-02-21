import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "shopifyCartLineItem" model, go to https://pango.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "DataModel-Shopify-CartLineItem",
  fields: {
    airtableId: { type: "string", storageKey: "UNFLlkSy2kPQ" },
  },
  shopify: {
    fields: [
      "cart",
      "discountedPrice",
      "discountedPriceSet",
      "discounts",
      "giftCard",
      "grams",
      "key",
      "linePrice",
      "linePriceSet",
      "originalLinePrice",
      "originalLinePriceSet",
      "originalPrice",
      "price",
      "priceSet",
      "product",
      "properties",
      "quantity",
      "shop",
      "sku",
      "taxable",
      "title",
      "totalDiscount",
      "totalDiscountSet",
      "variant",
      "vendor",
    ],
  },
};
