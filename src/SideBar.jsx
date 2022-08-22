import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faLaughWink } from "@fortawesome/free-solid-svg-icons";

function SideBar() {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href=""
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink">
            <FontAwesomeIcon icon={faLaughWink} />
          </i>
        </div>
        <div className="sidebar-brand-text mx-3">
          SB Admin <sup>2</sup>
        </div>
      </a>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item active">
        <Link className="nav-link" to="/portal/dashboard">
          <i className="fas fa-fw fa-tachometer-alt">
            {" "}
            <FontAwesomeIcon icon={faTachometerAlt} />
          </i>

          <span>Dashboard</span>
        </Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/portal/users">
          <i className="fas fa-fw fa-tachometer-alt">
            <FontAwesomeIcon icon={faUser} />
          </i>
          <span>Users</span>
        </Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/portal/products">
          <i className="fas fa-fw fa-tachometer-alt">
            <FontAwesomeIcon icon={faBagShopping} />
          </i>
          <span>Products</span>
        </Link>
      </li>
    </ul>
  );
}

export default SideBar;
