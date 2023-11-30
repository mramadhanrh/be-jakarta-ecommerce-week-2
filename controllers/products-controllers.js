import express from "express";
import { createProduct, readProducts } from "../services/Products.js";

export const getProductsList = async (request, response) => {
  // const productList = [];
  // const totalProducts = 10;

  // for (let i = 0; i < totalProducts; i += 1) {
  //   productList.push({
  //     product_image: `https://source.unsplash.com/random/?Shoes&timestamp=${i}`,
  //     title: "Sepatu Olahraga",
  //     description: "Lorem Ipsum",
  //     price: 2000000,
  //   });
  // }

  const productList = await readProducts();

  console.log({ productList });

  response.status(200).json({
    data: productList.map((data) => ({
      ...data.dataValues,
      image: `http://localhost:3000${data.dataValues.image}`,
    })),
    message: "Sukses mengambil data",
  });
};

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
export const postProductItem = async (request, response) => {
  const { title, description, image, price } = request.body;

  const product = await createProduct(title, description, image, price);

  response.json(product);
};
