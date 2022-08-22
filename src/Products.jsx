import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  let [count, setCount] = useState(0);
  let [products, setproducts] = useState([]);
  let [isLoading, setLoading] = useState(false);
  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    setproducts(products);
  }, [count]);

  let loadData = async () => {
    try {
      setLoading(true);
      let products = await axios.get(
        "https://630237d8c6dda4f287b56f17.mockapi.io/products"
      );
      setproducts(products.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  let productDelete = async (id) => {
    try {
      await axios.delete(
        `https://630237d8c6dda4f287b56f17.mockapi.io/products/${id}`
      );
      let deleteIndex = products.findIndex((product) => {
        return product.id === id;
      });
      products.splice(deleteIndex, 1);
      setCount((c) => c + 1);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Products</h1>
        <Link
          to="/portal/create-user"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Create Product
        </Link>
      </div>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">All Products</h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>S.no</th>
                    <th>ProductName</th>
                    <th>Material</th>
                    <th>Origin</th>
                    <th>Life</th>
                    <th>Mfgdate</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>S.no</th>
                    <th>ProductName</th>
                    <th>Material</th>
                    <th>Origin</th>
                    <th>Life</th>
                    <th>Mfgdate</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody>
                  {products.map((product, index) => {
                    return (
                      <tr key={product.id}>
                        <td>{index + 1}</td>
                        <td>{product.productname}</td>
                        <td>{product.material}</td>
                        <td>{product.origin}</td>
                        <td>{product.life}</td>
                        <td>{product.mfgdate}</td>
                        <td>{product.price}</td>
                        <td>
                          <Link
                            to={`/portal/products/view/${product.id}`}
                            className="btn btn-primary mr-2"
                          >
                            View
                          </Link>
                          <Link
                            to={`/portal/products/edit/${product.id}`}
                            className="btn btn-warning mr-2"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => productDelete(product.id)}
                            className="btn btn-danger mr-2"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
