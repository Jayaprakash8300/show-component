import { useFormik } from "formik";
import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct() {
  let params = useParams();

  let navigate = useNavigate();

  let productsPage = () => {
    navigate("/portal/products");
  };

  const formik = useFormik({
    initialValues: {
      productname: "",
      material: "",
      origin: "",
      life: "",
      mfgdate: "",
      price: "",
    },
    validate: (values) => {
      let errors = {};
      for (let keys in values) {
        if (values[keys] === "") {
          errors[keys] = `Please Enter ${keys}`;
        }
      }

      // if (values.username === "") {
      //   errors.username = "please enter";
      // }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        await axios.put(
          `https://630237d8c6dda4f287b56f17.mockapi.io/products/${params.userid}`,
          values
        );
        alert("product updated");
        productsPage();
      } catch (error) {
        console.error(error);
      }
    },
  });

  useEffect(() => {
    loadproduct();
  }, []);

  let loadproduct = async () => {
    try {
      let product = await axios.get(
        `https://630237d8c6dda4f287b56f17.mockapi.io/products/${params.userid}`
      );
      formik.setValues({
        productname: product.data.productname,
        material: product.data.material,
        origin: product.data.origin,
        life: product.data.life,
        mfgdate: product.data.mfgdate,
        price: product.data.price,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6 mt-2">
            <label>UserName</label>
            <input
              className="form-control"
              type={"text"}
              value={formik.values.productname}
              onChange={formik.handleChange}
              name="productname"
            />
            <span style={{ color: "red" }}>{formik.errors.productname}</span>
          </div>
          <div className="col-lg-6 mt-2">
            <label>Position</label>
            <input
              className="form-control"
              type={"text"}
              value={formik.values.material}
              onChange={formik.handleChange}
              name="material"
            />
            <span style={{ color: "red" }}>{formik.errors.material}</span>
          </div>
          <div className="col-lg-6 mt-2">
            <label>office</label>
            <input
              className="form-control"
              type={"text"}
              value={formik.values.origin}
              onChange={formik.handleChange}
              name="origin"
            />
            <span style={{ color: "red" }}>{formik.errors.origin}</span>
          </div>
          <div className="col-lg-6  mt-2">
            <label>Age</label>
            <input
              className="form-control"
              type={"text"}
              value={formik.values.life}
              onChange={formik.handleChange}
              name="life"
            />
            <span style={{ color: "red" }}>{formik.errors.life}</span>
          </div>
          <div className="col-lg-6 mt-2">
            <label>Start date</label>
            <input
              className="form-control"
              type={"text"}
              value={formik.values.mfgdate}
              onChange={formik.handleChange}
              name="mfgdate"
            />
            <span style={{ color: "red" }}>{formik.errors.mfgdate}</span>
          </div>
          <div className="col-lg-6 mt-2 ">
            <label>Salary</label>
            <input
              className="form-control"
              type={"text"}
              value={formik.values.price}
              onChange={formik.handleChange}
              name="price"
            />
            <span style={{ color: "red" }}>{formik.errors.price}</span>
          </div>
          <div className="col-lg-6 mt-2">
            <input
              className=" btn btn-primary"
              type={"submit"}
              value="Submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditProduct;
