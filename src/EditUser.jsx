import { useFormik } from "formik";
import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
  let params = useParams();

  let navigate = useNavigate();

  let usersPage = () => {
    navigate("/portal/users");
  };

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
      try {
        await axios.put(
          `https://630237d8c6dda4f287b56f17.mockapi.io/users/${params.userid}`,
          values
        );
        alert("User updated");
        usersPage();
      } catch (error) {
        console.error(error);
      }
    },
  });

  useEffect(() => {
    loadUser();
  }, []);

  let loadUser = async () => {
    try {
      let user = await axios.get(
        `https://630237d8c6dda4f287b56f17.mockapi.io/users/${params.userid}`
      );
      formik.setValues({
        username: user.data.username,
        position: user.data.position,
        office: user.data.office,
        age: user.data.age,
        startdate: user.data.startdate,
        salary: user.data.salary,
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

export default EditUser;
