### Store API

Simple Store API

## Implementing sort

```js
let result = Products.find(queryObject);
if (sort) {
  const sortList = sort.split(",").join(" ");
  result = result.sort(sortList);
}
const products = await result;
res.status(200).json({ products, numberOfHits: products.length });
```

### URLS

- # Sort base by featured
  - [domain]/api/products?featured=true
- # Sort base by company name
  - [domain]/api/products?company=ikea
- # Sort base search name
- [domain]/api/products?name=somename
- # Sort from low price
  - [domain]/api/products?sort=price
- # Sort from high price
  - [domain]/api/products?sort=-price
- # Sort from name a - z
  - [domain]/api/products?sort=name
- # Sort from name z - a
  - [domain]/api/products?sort=-name
- # Only fields
  - [domain]/api/products?fields=name,price,company
- # Numeric Fillters
  - [domain]/api/products?numericFillters=price>=100,rating=5
