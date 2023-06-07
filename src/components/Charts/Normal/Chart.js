import React from "react";
import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "January", "Total Sales": 5000 },
  { month: "February", "Total Sales": 6000 },
  { month: "March", "Total Sales": 5500 },
  { month: "April", "Total Sales": 7000 },
  { month: "May", "Total Sales": 8000 },
  { month: "June", "Total Sales": 7500 },
  { month: "July", "Total Sales": 9000 },
  { month: "August", "Total Sales": 8500 },
  { month: "September", "Total Sales": 9500 },
  { month: "October", "Total Sales": 8200 },
  { month: "November", "Total Sales": 7200 },
  { month: "December", "Total Sales": 8800 },
];

const Chart = () => {
  return (
    <div className="chart">
      <h1 className="title">Last 1 Year (Revenue)</h1>
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="month"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="Total Sales"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
