import { Filter } from "@mui/icons-material";
import "./table.scss";
import { useState } from "react";

const rows = [
  {
    id: 112145,
    product: "Playstation 5",
    img: "https://gmedia.playstation.com/is/image/SIEPDC/console-right_@1x?fmt=png-alpha&scl=1",
    customer: "Michael Brown",
    date: "June 7, 2023",
    amount: 736,
    paymentMethod: "upi",
    status: "approved",
  },
  {
    id: 454542,
    product: "OnePlus LEDTV",
    img: "https://m.media-amazon.com/images/I/81I5oICiIzL._SX679_.jpg",
    customer: "David Johnson",
    date: "June 2, 2023",
    amount: 853,
    paymentMethod: "cash",
    status: "rejected",
  },
  {
    id: 345454,
    product: "Bose DesignMax",
    img: "https://www.vplak.com/images/bose/DM8S/black/image-1.jpg",
    customer: "Jane Smith",
    date: "June 1, 2023",
    amount: 92,
    paymentMethod: "upi",
    status: "approved",
  },
  {
    id: 472454,
    product: "Nikon Z5 Kit 24-200",
    img: "https://m.media-amazon.com/images/I/51+7Guk8aGL._SY300_SX300_.jpg",
    customer: "Emma Davis",
    date: "June 6, 2023",
    amount: 512,
    paymentMethod: "card",
    status: "approved",
  },
  {
    id: 978215,
    product: "Apple iPhone 13 (128GB)",
    img: "https://m.media-amazon.com/images/I/71xb2xkN5qL._SX679_.jpg",
    customer: "John Doe",
    date: "June 7, 2023",
    amount: 317,
    paymentMethod: "cash",
    status: "rejected",
  },
];

const Table1 = () => {
  const [filter, setFilter] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const filteredRows = rows.filter(
    (row) =>
      row.product.toLowerCase().includes(filter.toLowerCase()) &&
      (selectedDate === "" || row.date === selectedDate)
  );

  const uniqueDates = [];
  const dateMap = {};

  rows.map((row) => {
    const date = row.date;

    if (!dateMap[date]) {
      uniqueDates.push(date);
      dateMap[date] = true;
    }
  });

  return (
    <div className="tableContainer">
      <div className="filter">
        <Filter />
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filter by product"
        />
        <select
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          placeholder="Select a date"
        >
          <option value="">All Dates</option>
          {uniqueDates.map((date) => (
            <option key={date} value={date}>
              {date}
            </option>
          ))}
        </select>
      </div>

      <div className="table">
        <div className="table-row table-header">
          <div className="table-cell">Tracking ID</div>
          <div className="table-cell">Product</div>
          <div className="table-cell">Image</div>
          <div className="table-cell">Customer</div>
          <div className="table-cell">Date</div>
          <div className="table-cell">Amount</div>
          <div className="table-cell">Payment Method</div>
          <div className="table-cell">Status</div>
        </div>

        {filteredRows.map((row) => (
          <div key={row.id} className="table-row">
            <div className="table-cell">{row.id}</div>
            <div className="table-cell">{row.product}</div>
            <div className="table-cell">
              <img src={row.img} alt={row.product} width="50" height="50" />
            </div>
            <div className="table-cell">{row.customer}</div>
            <div className="table-cell">{row.date}</div>
            <div className="table-cell">{row.amount}</div>
            <div className="table-cell">{row.paymentMethod.toUpperCase(0)}</div>
            <div className="table-cell">{row.status.toUpperCase()}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table1;
