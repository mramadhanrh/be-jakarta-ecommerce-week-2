export const getProductsList = (request, response) => {
  const productList = [];
  const totalProducts = 10;

  for (let i = 0; i < totalProducts; i += 1) {
    productList.push({
      product_image: `https://source.unsplash.com/random/?Shoes&timestamp=${i}`,
      title: "Sepatu Olahraga",
      description: "Lorem Ipsum",
      price: 2000000,
    });
  }

  console.log({ productList });

  response.status(200).json({
    data: productList,
    message: "Sukses mengambil data",
  });
};
