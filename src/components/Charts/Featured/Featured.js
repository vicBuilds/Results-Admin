import React from "react";
import "./feature.scss";
import {
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
  MoreVertOutlined,
} from "@mui/icons-material";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertOutlined fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar text="80%" value={80} strokeWidth={4} />
        </div>
        <p className="title">Total Sales</p>
        <p className="amount">$576</p>
        <p className="desc">Payments may take some time to get updated.</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownOutlined fontSize="small" />
              <div className="resultAmount">$15.45</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlined fontSize="small" />
              <div className="resultAmount">$35.45</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlined fontSize="small" />
              <div className="resultAmount">$42.14</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
