import React from "react";
import "./widget.scss";
import { KeyboardArrowUp, PersonOutlineOutlined } from "@mui/icons-material";

const Widget = () => {
  return (
    <div className="widget">
      <div className="left">
        <div className="title">USERS</div>
        <div className="counter">15354</div>
        <div className="link">See all user</div>
      </div>
      <div className="right">
        <div className="percentage">
          <KeyboardArrowUp />
          20%
        </div>
        <PersonOutlineOutlined className="icon" />
      </div>
    </div>
  );
};

export default Widget;
