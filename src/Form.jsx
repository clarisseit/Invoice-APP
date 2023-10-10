// import React, { useState } from "react";
// import "./App.css";

// export default function Form() {
//   const [Form, setForm] = useState(false);

//   const toggleForm = () => {
//     setForm(!Form);
//   };

//   return (
//     <>
//       <button className="svg">
//         <div className="div-dot draft"></div> + New Invoices
//       </button>
//       {Form && (
//         <div>
//           <p>jsdjshdh</p>
//           <p>uqhsquwudh</p>
//           <button className="close" onClick={toggleForm}>
//             close
//           </button>
//         </div>
//       )}
//     </>
//   );
// }

// Form.js
import React, { useState } from "react";
import InvoiceList from "./List";

const Form = ({ addInvoice }) => {
  const [formData, setFormData] = useState({
    name: "",
    amount: 0,
    date: "",
    status: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addInvoice(formData);
    setFormData({ name: "", amount: 0, date: "", status: "" });
    setIsOpenF(true);

    const closeModalF = () => {
      setIsOpenF(false);
    };

    isOpenF && <InvoiceList />;
  };

  const [isOpenF, setIsOpenF] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const openModalF = () => {
    setIsOpenF(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Amount"
              value={formData.amount}
              onChange={(e) =>
                setFormData({ ...formData, amount: e.target.value })
              }
            />
            <input
              type="date"
              placeholder="Date"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Status"
              value={formData.status}
              onChange={(e) =>
                setFormData({ ...formData, status: e.target.value })
              }
            />
            <button type="submit" class="submit" onclick={openModalF}>
              <b>Submit</b>
            </button>

            {/* <button class="submit" onClick={closeModal}>
              <b>Submit</b>
            </button> */}
            <h1
              onClick={function () {
                setOpen(!open);
              }}
            ></h1>
          </form>
        </div>
      )}
    </>
  );
};

export default Form;
