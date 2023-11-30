import { Products } from "../models/index.js";

export const readProducts = async () => {
  return await Products.findAll();
};

export const createProduct = async (title, description, image, price) => {
  return await Products.create({
    title,
    description,
    image,
    price,
  });
};
