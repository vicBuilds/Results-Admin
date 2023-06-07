import React from "react";
import "./widget.scss";
import {
  KeyboardArrowUp,
  PersonOutlineOutlined,
  AccountBalanceWalletOutlined,
  ShoppingCartOutlined,
  MonetizationOnOutlined,
} from "@mui/icons-material";

// Example
const amount = 200;
const diff = 20;

const Widget = ({ type }) => {
  let data;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all Users",
        icon: (
          <PersonOutlineOutlined
            className="icon"
            style={{ color: "crimesome", backgroundColor: "orange" }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "See all Orders",
        icon: (
          <ShoppingCartOutlined
            className="icon"
            style={{ color: "black", backgroundColor: "#e80909" }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "See all Earnings",
        icon: (
          <AccountBalanceWalletOutlined
            className="icon"
            style={{ color: "black", backgroundColor: "#ff9211" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See all balance",
        icon: (
          <MonetizationOnOutlined
            className="icon"
            style={{ color: "black", backgroundColor: "aquamarine" }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <div className="title">{data.title}</div>
        <div className="counter">
          {data.isMoney && "$"} {amount}
        </div>
        <div className="link">{data.link}</div>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUp />
          {diff}
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
