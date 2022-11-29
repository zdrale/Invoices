import React, { useState } from "react";
import InvoicesService from "../service/InvoicesService";
import "./module.modal.css";

const invoice = {
  sellerName: "",
  customerName: "",
  date: "",
  amount: "",
};

const Modal = ({ isOpen, open }) => {
  const closeModal = () => {
    isOpen(false);
  };

  const [data, setData] = useState(invoice);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const saveData = () => {
    InvoicesService.createInvoice(data)
      .then(() => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (!open) return null;
  return (
    <div className="overlay">
      <h2>Create invoice</h2>

      <form onSubmit={saveData}>
        <label>Seller</label>
        <br />
        <input
          type="text"
          id="Seller"
          value={data.sellerName}
          onChange={handleInputChange}
          name="sellerName"
        />
        <span></span>
        <br />
        <label>Customer</label>
        <br />
        <input
          type="text"
          id="Customer"
          name="customerName"
          value={data.customerName}
          onChange={handleInputChange}
        />
        <br />
        <label>Date</label>
        <br />
        <input
          type="text"
          id="Date"
          name="date"
          value={data.date}
          onChange={handleInputChange}
        />
        <br />
        <label>Amount</label>
        <br />
        <input
          type="text"
          id="Amount"
          name="amount"
          value={data.amount}
          onChange={handleInputChange}
        />
        <br />
        <button type="submit" className="btn btnSave">
          Save
        </button>

        <button onClick={closeModal} className="btn btnDiscard">
          Discard
        </button>
      </form>
    </div>
  );
};

export default Modal;
