### Store API

- Fillter data using featured, company, name

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
