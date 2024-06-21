import { Schema, model, Document, Model } from "mongoose";
import { Request, Response } from "express";

interface IProduct extends Document {
  name: string;
  description: string;
  productId: string;
  // updateProduct(): Promise<any>;
}

interface IProductModel extends Model<IProduct> {
  createProduct(data: Partial<IProduct>): Promise<IProduct>;
  updateProduct(data: Partial<IProduct>): Promise<IProduct>;
  deleteProduct(data: Partial<IProduct>): Promise<IProduct>;
  updatePrice(data: Partial<IProduct>): Promise<IProduct>;
  // Define other custom methods if needed
}

//schema fields: name: string, description: string, productId: integer, stock: integer, active: boolean
const productSchema = new Schema({
  name: String,
  description: String,
  productId: String,
});

//Create product
productSchema.statics.createProduct = async function (
  this: IProductModel,
  data: Partial<IProduct>
): Promise<IProduct | null> {
  try {
    const { name, description, productId } = data;
    const newProduct = await this.create({
      name,
      description,
      productId,
    });
    if (newProduct) {
      return newProduct;
    }
    throw Error("Something went wrong!");
  } catch (error) {
    console.error("Error creating product:", error);
    return null;
  }
};

//Update existing product
productSchema.statics.updateProduct = async function (
  this: IProductModel,
  data: Partial<IProduct>
): Promise<IProduct | null> {
  try {
    const { name, description, productId } = data;
    const updatedRecord = this.findOneAndUpdate(
      { productId },
      {
        description,
        name,
      }
    );
    if (updatedRecord) {
      return updatedRecord;
    }
    throw Error("Item doesn't exist!");
  } catch (err) {
    console.error("Error Updating the product:", err);
  }
  return;
};

//delete product
productSchema.statics.deleteProduct = async function (
  this: IProductModel,
  data: Partial<IProduct>
): Promise<IProduct | null> {
  try {
    const { productId } = data;
    const deletedItem = this.findOneAndDelete({ productId });
    if (deletedItem) {
      return deletedItem;
    }
    throw Error("Item doesn't exist!");
  } catch (err) {
    console.error("Error deleting the product:", err);
  }
  return;
};

//Update Price
// productSchema.statics.updatePrice = async function (
//   this: IProductModel,
//   data: Partial<IProduct>
// ): Promise<IProduct | null> {
//   console.log("update data: ", data);
//   return;
// };

const Product: IProductModel = model<IProduct, IProductModel>(
  "Product",
  productSchema
);

export default Product;
