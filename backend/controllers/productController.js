import { sql } from "../config/db.js";

export const getProducts = async (req, res) => {
  try {
    const products = await sql`SELECT * FROM products
    ORDER BY id DESC
    `;
    console.log(products);

    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "OOPS...Internal Server Error" });
  }
};

export const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await sql`SELECT * FROM products WHERE id = ${id}`;
    console.log(product);

    res.status(200).json({ success: true, data: product[0] });
  } catch (error) {
    console.log("error to get product", error);
    res
      .status(500)
      .json({ success: false, message: "OOPS...Internal Server Error" });
  }
};

export const createProduct = async (req, res) => {
  const { name, price, image } = req.body; 

  if (!name || !price || !image) {
    return res
      .status(400)
      .json({ success: false, message: "All Fields Are Required" });
  }

  try {
    const newProduct = await sql`
      INSERT INTO products (name, price, image)
      VALUES (${name}, ${price}, ${image})
      RETURNING *;
    `;

    console.log("New product added:", newProduct);
    res.status(201).json({ success: true, data: newProduct[0] });
  } catch (error) {
    console.log("Error in creating a new product:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const updateProduct = async (req, res) => {
  const { name, price, image } = req.body;
  const { id } = req.params;

  if (!name || !price || !image) {
    return res
      .status(400)
      .json({ success: false, message: "All Fields Are Required" });
  }
  try {
    const updatedProduct =
      await sql`UPDATE products SET name = ${name}, price = ${price}, image = ${image}
            WHERE id = ${id}
            RETURNING *`;
    if (updatedProduct.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Product Not Found" });
    }
    console.log("updated product", updatedProduct);

    res.status(200).json({ success: true, data: updatedProduct[0] });
  } catch (error) {
    console.log("error in updating product", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await sql`DELETE FROM products WHERE id = ${id}
            RETURNING *`;
    if (deletedProduct.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Product Not Found" });
    }
    console.log("deleted product", deletedProduct);

    res.status(200).json({ success: true, data: deletedProduct[0] });
  } catch (error) {
    console.log("error in deleting product", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
