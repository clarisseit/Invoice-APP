// InvoiceList.js
import React from "react";
// import InvoiceList from "./InvoiceList";

<style>
  {/* .content-table {
  border-collapse: collapse;
  } */}
</style>;

const InvoiceList = ({ invoices }) => {
  return (
    // <div>
    //   {invoices.map((invoice, index) => (
    //     <div key={index}>
    //       <p>Name: {invoice.name}</p>
    //       <p>Amount: ${invoice.amount}</p>
    //       <p>Date: {invoice.date}</p>
    //       <p>Status: {invoice.status}</p>

    //     </div>
    <table class="content-table">
      <thead>
        <tr class="active-row">
          <th>Name</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {invoices.map((invoice, index) => (
          <tr key={index}>
            <td>{invoice.name}</td>
            <td>{invoice.amount}</td>
            <td>{invoice.date}</td>
            <td>{invoice.status}</td>
          </tr>
        ))}
      </tbody>
    </table>

    //       ))}
    //     </div>
  );
};

export default InvoiceList;
