import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductTable = () => {
  const [products, setProducts] = useState([]);

  const retrieveAllProducts = async () => {
    const response = await axios.get("http://localhost:8080/api/product/all");
    return response.data;
  };

  useEffect(() => {
    const getAllProducts = async () => {
      const allProducts = await retrieveAllProducts();
      if (allProducts) {
        setProducts(allProducts.products);
        console.log(allProducts.products);
      }
    };

    getAllProducts();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/api/product/delete/${id}`)
      .then((res) => {
        setProducts(products.filter((product) => product.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  return (
    <table className="container table table-striped table-hover table-bordered text-center">
      <thead>
        <tr>
          <th>Name</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>stock</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td className="align-middle">{product.id}</td>
            <td className="align-middle">{product.title}</td>
            <td className="align-middle">{product.price}</td>
            <td className="align-middle">{product.quantity}</td>
            <td className="align-middle">
              <Link to={`/products/${product.id}/edit`} className="btn btn-primary me-2">
                Edit
              </Link>
              <button onClick={() => handleDelete(product.id)} className="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;