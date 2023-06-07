import React from "react";
import "./navbar.scss";
import {
  DarkMode,
  LanguageOutlined,
  NotificationAddOutlined,
  Search,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <Search />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined className="icon" />
            English
          </div>
          <div className="item">
            <DarkMode />
          </div>
          <div className="item">
            <NotificationAddOutlined className="icon" />
          </div>
          <div className="item">
            <Avatar className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
