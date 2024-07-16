import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "shopifyFile" model, go to https://pango.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "DataModel-Shopify-File",
  fields: {},
  shopify: {
    fields: [
      "alt",
      "duration",
      "fileErrors",
      "fileStatus",
      "image",
      "originalFileSize",
      "originalSource",
      "preview",
      "shop",
      "shopifyCreatedAt",
      "sources",
      "type",
      "url",
    ],
  },
};
