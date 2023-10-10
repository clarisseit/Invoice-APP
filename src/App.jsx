import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./InvoiceList";
import "./InvoiceForm";

localStorage;

function App() {
  // const [count, setCount] = useState(0);

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <center>
      <h1 className="h1">Invoices</h1>
      <div className="check">
        <select id="check" name="check">
          <option value="paid">Paid</option>
          <option value="pending">Pending</option>
        </select>
      </div>
      <button className="svg1">
        <div className="div-dot draft1" onClick={openModal}></div> + New
        Invoices
      </button>

      {isOpen && <p>hahaahh</p>}

      <h2>They are 7 total Invoice</h2>

      <div className="details">
        <ul className="list">
          <li className="lis">
            <p>#RT3080</p>
            <p>Due 01/09/2023</p>
            <p>John Doe</p>
            <button className="pay">
              <div className="div-dot paid"></div>Paid
            </button>
          </li>
          <li className="lis">
            <p>#RT3080</p>
            <p>Due 02/09/2023</p>
            <p>Jane Marie Smith</p>
            <button className="pending">
              <div className="div-dot pend"></div>Pending
            </button>
          </li>
          <li className="lis">
            <p>#RT3080</p>
            <p>Due 03/09/2023</p>
            <p>Jane Marie Smith</p>
            <button className="drafted">
              <div className="div-dot draft"></div>Draft
            </button>
          </li>
          <li className="lis">
            <p>#RT3080</p>
            <p>Due 05/09/2023</p>
            <p>Jane Marie Smith</p>
            <button className="pay">
              <div className="div-dot paid"></div>Paid
            </button>
          </li>
          <li className="lis">
            <p>#RT3080</p>
            <p>Due 06/09/2023</p>
            <p>Jane Marie Smith</p>
            <button className="pending">
              <div className="div-dot pend">GoDotFill</div>Pending
            </button>
          </li>
          <li className="lis">
            <p>#RT3080</p>
            <p>Due 07/09/2023</p>
            <p> Jane Marie Smith</p>
            <button className="pay">
              <div className="div-dot paid"></div>Paid
            </button>
          </li>
          <li className="lis">
            <p>#RT3080</p>
            <p>Due 03/09/2023</p>
            <p>Jane Marie Smith</p>
            <button className="drafted">
              <div className="div-dot draft"></div>Draft
            </button>
          </li>
        </ul>
        <a
          className="App-link"
          href="https://clarisseit.github.io/Invoic-App/"
          target="blank"
          rel="noopener norefrrer"
        >
          {" "}
          My First Invoice I worked{" "}
        </a>
        <div className="all-form">
          <form>
            <h2>Bill From</h2>
            <div className="bill-from1">
              <form action="form" method="post"></form>
              <label for="from_street" />
              Street Address:
              <label />
              <input
                type="text1"
                id="from_street"
                name="from_street"
                required
              />
              <br />
              <br />
              <br />
            </div>
            <br /> <br />
            <div className="bill-from">
              <form action="form" method="post"></form>

              <label for="from_city">City:</label>
              <input type="text" id="from_city" name="from_city" required />
              <br />
              <br />
              <label for="from_postcode">Post Code:</label>
              <input
                type="text"
                id="from_postcode"
                name="from_postcode"
                required
              />
              <br />
              <br />
              <label for="from_country">Country:</label>
              <input
                type="text"
                id="from_country"
                name="from_country"
                required
              />
              <br />
              <br />
              <br />
            </div>
            <br />
            <br />
            <h2>Bill To</h2>
            <div className="bill-to">
              <form action="form" method="post"></form>
              <label for="client_name">Client's Name:</label>
              <input type="text" id="client_name" name="client_name" required />
              <br />
              <br />
              <br />
            </div>
            <br />
            <br />
            <div className="bill-to">
              <form action="form" method="post"></form>
              <label for="client_email">Client's Email:</label>
              <input
                type="email"
                id="client_email"
                name="client_email"
                required
              />
              <br />
              <br />
            </div>
            <br />
            <br />
            <div className="bill-to">
              <form action="form" method="post"></form>
              <label for="client_street">Street Address:</label>
              <input
                type="text"
                id="client_street"
                name="client_street"
                required
              />
              <br />
              <br />
              <br />
            </div>
            <br />
            <br />
            <div className="bill-to">
              <form action="form" method="post"></form>
              <label for="from_street" />

              <label for="client_city">City:</label>
              <input type="text" id="client_city" name="client_city" required />
              <br />
              <br />

              <label for="client_postcode">Post Code:</label>
              <input
                type="text"
                id="client_postcode"
                name="client_postcode"
                required
              />
              <br />
              <br />

              <label for="client_country">Country:</label>
              <input
                type="text"
                id="client_country"
                name="client_country"
                required
              />
              <br />
              <br />
              <br />
            </div>
            <br />
            <br />
            <h2>Invoice Detail</h2>
            <div className="invoice-details">
              <form action="form" method="post"></form>
              <label for="invoice_date">Invoice Date:</label>
              <input
                type="date"
                id="invoice_date"
                name="invoice_date"
                required
              />
              <br />
              <br />

              <label for="payment_terms">Payment Terms (days):</label>
              <input
                type="number"
                id="payment_terms"
                name="payment_terms"
                min="1"
                required
              />
              <br />
              <br />

              <label for="project_description">Project Description:</label>
              <input
                type="text"
                id="project_description"
                name="project_description"
                placeholder="e.g. Front-end"
                required
              />
              <br />
              <br />
              <br />
            </div>
            <br />
            <br />
            <h2>Item List</h2>
            <div className="item-list">
              <table>
                <tr>
                  <th>Item Name</th>
                  <th>Qty.</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
                <tr>
                  <td>
                    <input type="text" name="item_name[]" required />
                  </td>
                  <td>
                    <input type="number" name="item_qty[]" min="1" required />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="item_price[]"
                      min="0.01"
                      step="0.01"
                      required
                    />
                  </td>
                  <td>
                    <input type="number" name="item_total[]" readonly />
                  </td>
                </tr>
              </table>{" "}
              <br />
              <br />
              <div className="click">
                <form action="form" method="post"></form>
                <button type="button" onclick="addNewItem()" />+ Add New Item
                <button />
                <br />
                <br />
                <div className="click">
                  <form action="form" method="post"></form>
                  <input type="submit" value="Save & Send" />
                  <input type="button" value="Save as Draft" />
                  <input type="reset" value="Discard"></input>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </center>
  );
}

export default App;
