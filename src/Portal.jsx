import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

function Portal() {
  return (
    <div id="wrapper">
      <SideBar></SideBar>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopBar></TopBar>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Portal;
