import Product from "../models/products.js";
import { Request, Response } from "express";
// import { Document } from "mongoose";

// interface IProduct extends Document {
//   name: string;
//   description: string;
//   productId: string;
// }

export const createProduct = async (req: Request, res: Response) => {
  const { id, description, name } = req.body.data.object;
  try {
    const product = await Product.createProduct({
      productId: id,
      description,
      name,
    });
    console.log(product);
  } catch (err) {
    console.log(err);
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  const { id, description, name } = req.body.data.object;
  try {
    const product = await Product.updateProduct({
      productId: id,
      description,
      name,
    });
    console.log(product);
  } catch (err) {
    console.log(err);
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { product } = req.body.data.object;
  try {
    const product_item = await Product.deleteProduct({
      productId: product,
    });
    console.log(product_item);
  } catch (err) {
    console.log(err);
  }
};

export const updatePrice = async (req: Request, res: Response) => {
  const { id, description, name } = req.body.object;
  try {
    const product = await Product.updatePrice({ id, description, name });
    console.log(product);
  } catch (err) {
    console.log(err);
  }
};
