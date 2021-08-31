
# Gatsby

[Gatsby JS & Shopify: Gatsby ecommerce sites](https://www.udemy.com/course/gatsby-ecommerce-shopify/learn/lecture/18082225#overview)

[Course Github](https://github.com/tomphill/gatsby-shopify-course)

[Starter Project](https://github.com/tomphill/gatsby-shopify-starter.git)

[Shopify](https://www.shopify.com/)

## Shopify

Only need Shopify backend, delete online store.

Settings, Sales Channel, Remove Online Store, Confirm

Settings, Plan, Shopify Lite Plan

## Locations

Settings, Locations

Add location `Warehouse`, and change to the default location.

## Import Data

Note that have a default location when I created the Shopify account.

Get data `products_export_1.csv`

* Apps, `Oberlo ‑ Dropshipping App`, 
* Add app
* Install app

Register with Oberlo

* `https://app.oberlo.com/connect/register`
* create free account.

Back to Shopify

* Products
* Import
* DnD `products_export_1.csv`
* Upload and continue
* Verify data is good
* Import products

May take some time.

## Inventory

[Exporting or importing inventory with a CSV file](https://help.shopify.com/en/manual/products/inventory/inventory-csv)

* Products, Inventory
* Import
* `inventory_export_1.csv`

## Enable Bogus Payments

* Settings, Payments
* Choose third-party provider (must scroll down to find)
* In search box: `bogus`
* Select: `(for testing) Bogus Gateway`
* Deactivate Shopify Payments section
	* Reason: Other
	* `Testing`
		* `Activate (for testing) Bogus Gateway`

Note

```
Bogus gateway is meant for testing. Shopify will not charge you transaction fees on orders paid with this gateway.

You can use the following codes in place of the credit card number when checking out:

1 - To Simulate an Approved Transaction
2 - To Simulate a Declined Transaction
3 - To Simulate a Gateway Failure
Any three numbers can be used as the "Card Security Code" and any expiry date in the future will work.
```

## Collections

* Products, Collections
* Button `Create Collection`
* Title: `Summer hats`
* Description: `Keep cool, carry on`
* Automated
* All conditions
* Product tag, is equal to, `Summer`
* Save

## API Keys

* Apps, Manage Private Apps
* Enable private app development
* Check all
	* Enable private app development

* Create private app

* Private app name: Gatsby Shopify App
* Emergency developer email: other@johnvincent.io
* Webhook API version: 2021-07 (Latest)
* Check: Allow this app to access your storefront data using the Storefront API

Check:

* Read products, variants, and collections
* Read product tags
* Read and modify customer details
* Read customer tags
* Read and modify checkouts
* Read content like articles, blogs, and comments

and Save

Note the Storefront access token.

## New Project

```
cd /Users/jv/Desktop/MyDevelopment/github/repo-gatsby/udemy-gatsby-shopify

npx gatsby new project-1 https://github.com/tomphill/gatsby-shopify-starter.git

cd project-1
```

edit `gatsby-config.js` and comment out section `resolve: 'gatsby-source-shopify'`

## Run Project

```
cd /Users/jv/Desktop/MyDevelopment/github/repo-gatsby/udemy-gatsby-shopify/project-1

npm run develop
```

Run Project

```
http://localhost:8000/
```

View GraphQL

```
http://localhost:8000/___graphql
```

## Connect to Storefront

edit `gatsby-config.js` and uncomment section `resolve: 'gatsby-source-shopify'`

```
npm run develop
```

yielded

```
 ERROR #11321  PLUGIN

"gatsby-source-shopify" threw an error while running the sourceNodes lifecycle:

failed to process https://cdn.shopify.com/s/files/1/0595/1832/0822/products/product-image-1390194141.jpg
Error: ENOENT: no such file or directory, open '/Users/jv/Desktop/MyDevelopment/github/repo-gatsby/udemy-gatsby-shopify/project-1/.cache/caches/gatsby-source-filesystem/tmp-b1acfc11b45fed194c19f55dd169fcba.jpg'
```

Let's update

```
npm update
npm run clean
npm run develop
```

Query the data

```
http://localhost:8000/___graphql
```

View queries

```
query MyQuery {
  allShopifyProduct {
    edges {
      node {
        title
        description
      }
    }
  }
}
```

```
query MyQuery {
  allShopifyCollection {
    edges {
      node {
        title
        description
      }
    }
  }
}
```


# END

