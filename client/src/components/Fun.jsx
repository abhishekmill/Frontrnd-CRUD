import React, { useState } from "react";

const App = () => {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [updatedValue, setUpdatedValue] = useState("update text");

  const handelinput = () => {
    setInputValue("");
    if (inputValue) {
      setList([...list, inputValue]);
    }
  };

  // on enter
  const handleKeyPress = (event) => {
    if (event.key == "Enter") handelinput();
  };
  // delete
  const handleDelete = (index) => {
    const newItems = [...list];
    newItems.splice(index.index, 1);
    setList(newItems);
  };
  //update
  const handleEdit = (index) => {
    if (updatedValue) {
      const newItems = [...list];
      newItems[index.index] = updatedValue;
      setList(newItems);
      setUpdatedValue("");
    }
  };
  // -----------------------------
  return (
    <div className=" flex h-screen bg-green-100">
      <div className="items-center content-center ">
        <div className="  ">
          {list.map((item, index) => (
            <div key={index} className="flex gap-5 ">
              <li>{item}</li>

              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 me-2 mb-2 dark:bg-red-500 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={({ item }) => {
                  handleDelete({ index });
                }}
              >
                delete
              </button>

              <button
                type="button"
                className="text-white bg-green hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => {
                  handleEdit({ index });
                }}
              >
                edit
              </button>
            </div>
          ))}
        </div>
        {/* input field  */}

        <div className="flex h-9 fixed bottom-5  ">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            className="border-spacing-1 border-2"
          />
          <button
            className="px-5 bg-green-400 rounded ml-5 "
            onClick={handelinput}
          >
            set input
          </button>

          {/* update box */}

          <input
            value={updatedValue}
            onClick={() => {
              setUpdatedValue("");
            }}
            onChange={(e) => {
              setUpdatedValue(e.target.value);
            }}
            className="border-spacing-1 border-2  "
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
