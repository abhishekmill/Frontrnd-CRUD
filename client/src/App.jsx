import React, { useEffect, useState } from "react";
import Register from "./components/Register.jsx";
import Tabels from "./components/Tabels.jsx";
import Edit from "./components/Edit.jsx";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [data, setData] = useState([]);
  const [newIndex, setNewIndex] = useState(null); // Changed to null for clarity

  // Form state for editing
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [task, setTask] = useState("");

  // Load data from local storage
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("storedData"));
    setData(storedData || []); // Default to an empty array if null
    console.log("get data", storedData);
  }, []);

  // Save data to local storage
  useEffect(() => {
    localStorage.setItem("storedData", JSON.stringify(data));
    console.log("set data success");
  }, [data]);

  // Handle edit logic
  const handleEdit = (index) => {
    const item = data[index]; // Directly access the item
    setName(item.name);
    setAddress(item.address);
    setContactNo(item.contactNo);
    setTask(item.task);
    setNewIndex(index); // Store the index directly
  };

  // Handle delete logic
  const handleDelete = (index) => {
    const newData = data.filter((_, i) => i !== index); // More concise deletion
    setData(newData);
  };

  return (
    <div>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <Tabels
              data={data}
              setData={setData}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          }
        />
        <Route path="/" element={<Register data={data} setdata={setData} />} />
        <Route
          path="/edit"
          element={
            <Edit
              newIndex={newIndex}
              data={data}
              setData={setData}
              contactNo={contactNo}
              task={task}
              name={name}
              address={address}
              setName={setName}
              setContactNo={setContactNo}
              setAddress={setAddress}
              setTask={setTask}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
