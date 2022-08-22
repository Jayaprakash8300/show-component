import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductView() {
  const params = useParams();
  let [productData, setproductData] = useState({});

  useEffect(() => {
    loadproduct();
  }, []);

  let loadproduct = async () => {
    try {
      let product = await axios.get(
        `https://630237d8c6dda4f287b56f17.mockapi.io/products/${params.userid}`
      );
      setproductData(product.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div>
        <b>ProductName:</b>
        {productData.productname}
      </div>
      <div>
        <b>Material:</b>
        {productData.material}
      </div>
      <div>
        <b>Origin:</b>
        {productData.origin}
      </div>
      <div>
        <b>Life:</b>
        {productData.life}
      </div>
      <div>
        <b>Mfgdate:</b>
        {productData.mfgdate}
      </div>
      <div>
        <b>Price:</b>
        {productData.price}
      </div>
    </div>
  );
}

export default ProductView;
