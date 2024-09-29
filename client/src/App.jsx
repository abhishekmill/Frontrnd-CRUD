import React, { useEffect, useState } from "react";
import Register from "./components/Register.jsx";
import Tabels from "./components/Tabels.jsx";
import Edit from "./components/Edit.jsx";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [data, setData] = useState([]);
  const [newIndex, setNewIndex] = useState("");

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [task, setTask] = useState("");

  useEffect(() => {
    const dta = JSON.parse(localStorage.getItem("storedData"));

    setData(dta);
    console.log("get data", dta);
  }, []);
  useEffect(() => {
    localStorage.setItem("storedData", JSON.stringify(data));
    console.log("set data success");
  }, [data]);

  const handelEdit = (index) => {
    setName(data[index.index].name);
    setAddress(data[index.index].address);
    setContactNo(data[index.index].contactNo);
    setTask(data[index.index].task);

    setNewIndex(index.index);
  };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index.index, 1);
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
              handelEdit={handelEdit}
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
