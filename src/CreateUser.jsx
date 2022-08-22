import { useFormik } from "formik";
import React from "react";
import axios from "axios";

function CreateUser() {
  const formik = useFormik({
    initialValues: {
      username: "",
      position: "",
      office: "",
      age: "",
      startdate: "",
      salary: "",
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
      await axios.post(
        "https://630237d8c6dda4f287b56f17.mockapi.io/users",
        values
      );
      alert("User created");
    },
  });
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6 mt-2">
            <label>UserName</label>
            <input
              className="form-control"
              type={"text"}
              value={formik.values.username}
              onChange={formik.handleChange}
              name="username"
            />
            <span style={{ color: "red" }}>{formik.errors.username}</span>
          </div>
          <div className="col-lg-6 mt-2">
            <label>Position</label>
            <input
              className="form-control"
              type={"text"}
              value={formik.values.position}
              onChange={formik.handleChange}
              name="position"
            />
            <span style={{ color: "red" }}>{formik.errors.position}</span>
          </div>
          <div className="col-lg-6 mt-2">
            <label>office</label>
            <input
              className="form-control"
              type={"text"}
              value={formik.values.office}
              onChange={formik.handleChange}
              name="office"
            />
            <span style={{ color: "red" }}>{formik.errors.office}</span>
          </div>
          <div className="col-lg-6  mt-2">
            <label>Age</label>
            <input
              className="form-control"
              type={"text"}
              value={formik.values.age}
              onChange={formik.handleChange}
              name="age"
            />
            <span style={{ color: "red" }}>{formik.errors.age}</span>
          </div>
          <div className="col-lg-6 mt-2">
            <label>Start date</label>
            <input
              className="form-control"
              type={"text"}
              value={formik.values.startdate}
              onChange={formik.handleChange}
              name="startdate"
            />
            <span style={{ color: "red" }}>{formik.errors.startdate}</span>
          </div>
          <div className="col-lg-6 mt-2 ">
            <label>Salary</label>
            <input
              className="form-control"
              type={"text"}
              value={formik.values.salary}
              onChange={formik.handleChange}
              name="salary"
            />
            <span style={{ color: "red" }}>{formik.errors.salary}</span>
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

export default CreateUser;
