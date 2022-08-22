import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function UserView() {
  const params = useParams();
  let [userData, setUserData] = useState({});

  useEffect(() => {
    loadUser();
  }, []);

  let loadUser = async () => {
    try {
      let user = await axios.get(
        `https://630237d8c6dda4f287b56f17.mockapi.io/users/${params.userid}`
      );
      setUserData(user.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div>
        <b>UserName:</b>
        {userData.username}
      </div>
      <div>
        <b>Position:</b>
        {userData.position}
      </div>
      <div>
        <b>office:</b>
        {userData.office}
      </div>
      <div>
        <b>Age:</b>
        {userData.age}
      </div>
      <div>
        <b>StartDate:</b>
        {userData.startdate}
      </div>
      <div>
        <b>Salary:</b>
        {userData.salary}
      </div>
    </div>
  );
}

export default UserView;
