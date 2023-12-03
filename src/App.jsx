import React, { useState } from "react";
import "./App.css";
import Form from "./Componets/Form";
import Table from "./Componets/Table";
import Data from "./Componets/Data";
import { useLocalStorage } from "../Hook/useLocalStorage";

function App() {
  const [data, setData] = useLocalStorage("data", Data);
  const [allData, setAllData] = useLocalStorage("allData", {
    title: "",
    category: "",
    amount: "",
  });
  const [editId, setEditId] = useLocalStorage("editId", "");
  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <Form
          setData={setData}
          allData={allData}
          setAllData={setAllData}
          editId={editId}
          setEditId={setEditId}
        />
        <Table
          data={data}
          setData={setData}
          setAllData={setAllData}
          setEditId={setEditId}
        />
      </div>
    </main>
  );
}

export default App;
