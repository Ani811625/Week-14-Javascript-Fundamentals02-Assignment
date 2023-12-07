const productDetails = {
    name: "Dell Laptop",
    price: 65000,
    color: "Grey",
    hardDisk: "512 GB",
  };
  console.log("Below are the product details.");
  for (let keys of Object.keys(productDetails)) {
    console.log(`${keys} : ${productDetails[keys]}`);
  }