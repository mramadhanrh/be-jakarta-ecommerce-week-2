export const getProductsList = (request, response) => {
  response.status(200).json({
    data: [
      {
        product_image: "https://source.unsplash.com/random/?Products",
        title: "Sepatu Olahraga",
        description: "Lorem Ipsum",
        price: 2000000,
      },
    ],
    message: "Sukses mengambil data",
  });
};
