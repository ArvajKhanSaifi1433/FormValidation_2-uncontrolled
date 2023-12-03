import React, { useState } from "react";
import Input from "./Input";
import Selected from "./Selected";

function Form({ setData, allData, setAllData, editId, setEditId }) {
  const [errors, setErrors] = useState({});

  const validationConfig = {
    title: [
      { required: true, message: "Please Enter Title" },
      { minLength: 5, message: "Title should be at least 5 character long" },
    ],

    category: [{ required: true, message: "Please Select a Category" }],

    amount: [
      { required: true, message: "Please Enter amount" },
      {
        Num_pat: /^[0-9]+$/,
        message: "Please Enter is Valid Number",
      },
    ],
  };

  const arr = ["Grocery", "Clothes", "Bills", "Education", "Medicine"];

  const FormValidate = (f_data) => {
    let errorData = {};

    Object.entries(f_data).forEach(([key, value]) => {
      validationConfig[key].some((role) => {
        if (role.required && !value) {
          errorData[key] = role.message;
          return true;
        }
        if (role.minLength && value.length < 5) {
          errorData[key] = role.message;
          return true;
        }

        if (role.Num_pat && !role.Num_pat.test(value)) {
          errorData[key] = role.message;
          return true;
        }
      });
    });

    /* if (!f_data.title) {
      errorData.title = "Please Enter Title";
    }
    if (!f_data.category) {
      errorData.category = "Please Select a Category";
    }
    if (!f_data.amount) {
      errorData.amount = "Please Enter Amount";
    } */
    setErrors(errorData);
    return errorData;
  };

  const FormSumbit = (e) => {
    e.preventDefault();
    const collectD = FormValidate(allData);
    if (Object.keys(collectD).length) return;

    /* const dd = {
      title: allData.title,
      category: allData.category,
      amount: allData.amount,
      id: crypto.randomUUID(),
    }; */

    const yy = { ...allData };

    if (editId) {
      setData((preData) =>
        preData.map((element) => {
          if (element.id === editId) {
            return { ...yy, id: editId };
          }
          return element;
        })
      );

      allData.title = "";
      allData.category = "";
      allData.amount = "";
      setEditId("");
      return;
    }

    setData((preS) => [...preS, { ...yy, id: crypto.randomUUID() }]);

    allData.title = "";
    allData.category = "";
    allData.amount = "";

    /* let cass = { title, category, amount, id: crypto.randomUUID() };

    setData((pres) => [...pres, { ...cass }]);
    setTitle("");
    setAmount("");
    setCategory(""); */
    /*  setData((pres) => [
      ...pres,
      { ...getData(e.target), id: crypto.randomUUID() },
    ]);
    e.target.reset(); */
  };

  /*  const getData = (dt) => {
    let collect = {};
    const collectData = new FormData(dt);
    for (let [key, value] of collectData.entries()) {
      collect[key] = value;
    }
    return collect;
  }; */
  function tta(e) {
    const { name, value } = e.target;
    setAllData((prvS) => ({ ...prvS, [name]: value }));
  }
  return (
    <form className="expense-form" autoComplete="off" onSubmit={FormSumbit}>
      <Input
        label="Title"
        id="title"
        name="title"
        value={allData.title}
        onchange={tta}
        error={errors.title}
      />

      <Selected
        label="Category"
        id="category"
        name="category"
        value={allData.category}
        onchange={tta}
        Arr={arr}
        defaultVal={"Select Category"}
        error={errors.category}
      />
      <Input
        label="Amount"
        id="amount"
        name="amount"
        value={allData.amount}
        onchange={tta}
        error={errors.amount}
      />
      {/* <Input
        label="Email"
        id="email"
        name="email"
        value={allData.email}
        onchange={tta}
        error={errors.email}
      /> */}
      <button className="add-btn">{editId ? "Save " : "Add"}</button>
    </form>
  );
}

export default Form;
