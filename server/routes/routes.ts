import { Router, Request, Response } from "express";
import {
  updateProduct,
  createProduct,
  updatePrice,
  deleteProduct,
} from "../controllers/product-controller.js";
const router = Router();

router.get("/", (req: Request, res: Response) => {
  return res.status(200).send("Hello World!");
});

router.post("/", (req: Request, res: Response) => {
  console.log(req.body.data);
  switch (true) {
    case req.body.type === "product.created":
      createProduct(req, res);
      break;
    case req.body.type === "product.updated":
      updateProduct(req, res);
      break;
    case req.body.type === "price.deleted":
      deleteProduct(req, res);
      break;
    case req.body.type === "price.updated":
      updatePrice(req, res);
      break;
    default:
      break;
  }
  return res.status(200).send("Ok");
});

export default router;
