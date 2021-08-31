
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

Check inventory, ensure Quantity >= 1

```
Line 2: This variant couldn't be stocked at Warehouse because its inventory is managed by Oberlo.
```






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

## General






# END

```
awk -F, '{
  for (i=1; i<=NF; i++) {
    if (s) {
      if ($i ~ "\"$") {print s","$i; s=""}
      else s = s","$i
    }
    else {
      if ($i ~ "^\".*\"$") print $i
      else if ($i ~ "^\"") s = $i
      else print $i
    }
  }
}' a.csv
```

```
Handle,Title,Option1 Name,Option1 Value,Option2 Name,Option2 Value,Option3 Name,Option3 Value,SKU,Oberlo
wool-tweed-newsboy-cap-for-men,Wool Tweed Newsboy Cap for Men,Hat Size,62-63 cm,,,,,36538009-blue-62-63-cm,25
```

