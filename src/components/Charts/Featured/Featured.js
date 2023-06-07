import React from "react";
import "./feature.scss";
import { MoreVertOutlined } from "@mui/icons-material";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertOutlined fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart"></div>
      </div>
    </div>
  );
};

export default Featured;
