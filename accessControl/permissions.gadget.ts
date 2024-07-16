import type { GadgetPermissions } from "gadget-server";

/**
 * This metadata describes the access control configuration available in your application.
 * Grants that are not defined here are set to false by default.
 *
 * View and edit your roles and permissions in the Gadget editor at https://pango.gadget.app/edit/settings/permissions
 */
export const permissions: GadgetPermissions = {
  type: "gadget/permissions/v1",
  roles: {
    "shopify-app-users": {
      storageKey: "Role-Shopify-App",
      default: {
        read: true,
        action: true,
      },
      models: {
        session: {
          read: true,
        },
        shopifyAppCredit: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyAppCredit.gelly",
          },
          actions: {
            create: true,
            delete: true,
            update: true,
          },
        },
        shopifyAppInstallation: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyAppInstallation.gelly",
          },
          actions: {
            create: true,
            delete: true,
            update: true,
          },
        },
        shopifyAppPurchaseOneTime: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyAppPurchaseOneTime.gelly",
          },
          actions: {
            create: true,
            delete: true,
            update: true,
          },
        },
        shopifyAppSubscription: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyAppSubscription.gelly",
          },
          actions: {
            create: true,
            delete: true,
            update: true,
          },
        },
        shopifyAsset: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyAsset.gelly",
          },
          actions: {
            create: true,
            delete: true,
            update: true,
          },
        },
        shopifyBillingAddress: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyBillingAddress.gelly",
          },
        },
        shopifyBulkOperation: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyBulkOperation.gelly",
          },
          actions: {
            cancel: true,
            complete: true,
            create: true,
            expire: true,
            fail: true,
            update: true,
          },
        },
        shopifyCart: {
          read: {
            filter: "accessControl/filters/shopify/shopifyCart.gelly",
          },
        },
        shopifyCartLineItem: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyCartLineItem.gelly",
          },
          actions: {
            create: true,
            update: true,
          },
        },
        shopifyCheckout: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyCheckout.gelly",
          },
        },
        shopifyCheckoutAppliedGiftCard: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyCheckoutAppliedGiftCard.gelly",
          },
        },
        shopifyCheckoutLineItem: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyCheckoutLineItem.gelly",
          },
        },
        shopifyCheckoutShippingRate: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyCheckoutShippingRate.gelly",
          },
        },
        shopifyCollect: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyCollect.gelly",
          },
          actions: {
            create: true,
            delete: true,
            update: true,
          },
        },
        shopifyCollection: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyCollection.gelly",
          },
          actions: {
            create: true,
            delete: true,
            update: true,
          },
        },
        shopifyDomain: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyDomain.gelly",
          },
          actions: {
            create: true,
            delete: true,
            update: true,
          },
        },
        shopifyFile: {
          read: {
            filter: "accessControl/filters/shopify/shopifyFile.gelly",
          },
          actions: {
            create: true,
            delete: true,
            update: true,
          },
        },
        shopifyFulfillment: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyFulfillment.gelly",
          },
        },
        shopifyGdprRequest: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyGdprRequest.gelly",
          },
          actions: {
            create: true,
            update: true,
          },
        },
        shopifyOrder: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyOrder.gelly",
          },
        },
        shopifyProduct: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyProduct.gelly",
          },
          actions: {
            create: true,
            delete: true,
            update: true,
          },
        },
        shopifyProductImage: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyProductImage.gelly",
          },
          actions: {
            create: true,
            delete: true,
            update: true,
          },
        },
        shopifyProductOption: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyProductOption.gelly",
          },
          actions: {
            create: true,
            delete: true,
            update: true,
          },
        },
        shopifyProductVariant: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyProductVariant.gelly",
          },
          actions: {
            create: true,
            delete: true,
            update: true,
          },
        },
        shopifySellingPlan: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifySellingPlan.gelly",
          },
          actions: {
            create: true,
            delete: true,
            update: true,
          },
        },
        shopifySellingPlanGroup: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifySellingPlanGroup.gelly",
          },
          actions: {
            create: true,
            delete: true,
            update: true,
          },
        },
        shopifySellingPlanGroupProduct: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifySellingPlanGroupProduct.gelly",
          },
          actions: {
            create: true,
            delete: true,
            update: true,
          },
        },
        shopifySellingPlanGroupProductVariant: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifySellingPlanGroupProductVariant.gelly",
          },
          actions: {
            create: true,
            delete: true,
            update: true,
          },
        },
        shopifyShippingAddress: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyShippingAddress.gelly",
          },
        },
        shopifyShop: {
          read: {
            filter: "accessControl/filters/shopify/shopifyShop.gelly",
          },
          actions: {
            install: true,
            reinstall: true,
            uninstall: true,
            update: true,
          },
        },
        shopifySync: {
          read: {
            filter: "accessControl/filters/shopify/shopifySync.gelly",
          },
          actions: {
            abort: true,
            complete: true,
            error: true,
            run: true,
          },
        },
        shopifyTheme: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyTheme.gelly",
          },
          actions: {
            create: true,
            delete: true,
            update: true,
          },
        },
      },
      actions: {
        scheduledShopifySync: true,
      },
    },
    unauthenticated: {
      storageKey: "unauthenticated",
      models: {
        shopifyProduct: {
          actions: {
            update: true,
          },
        },
      },
    },
    "Role A": {
      storageKey: "-BlSq6Rs7zl4",
      models: {
        shopifyProduct: {
          actions: {
            update: true,
          },
        },
      },
    },
    "Role B": {
      storageKey: "QD6FQns25caZ",
      models: {
        shopifyProduct: {
          actions: {
            update: true,
          },
        },
      },
    },
  },
};
