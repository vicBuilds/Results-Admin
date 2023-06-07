import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Admin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleIcon className="icon" />
            <span>Users</span>
          </li>
          <li>
            <ProductionQuantityLimitsIcon className="icon" />
            <span>Products</span>
          </li>
          <li>
            <ChildFriendlyIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <DeliveryDiningIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <ShowChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationAddIcon className="icon" />
            <span>Notifications</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
