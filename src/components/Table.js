import React, { useState, useEffect } from "react";
import InvoicesService from "../service/InvoicesService";
import "./module.table.css";
const Table = () => {
  const [invoices, setInvoices] = useState([]);
  useEffect(() => {
    InvoicesService.getAllInvoices()
      .then((response) => {
        setInvoices(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <table className="table">
      <thead>
        <th>Seller</th>
        <th>Customer</th>
        <th>Date</th>
        <th>Amount</th>
      </thead>
      <tbody>
        {invoices.map((invoice) => (
          <tr key={invoice.id}>
            <td>{invoice.sellerName}</td>
            <td>{invoice.customerName}</td>
            <td>{invoice.date}</td>
            <td>{invoice.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
