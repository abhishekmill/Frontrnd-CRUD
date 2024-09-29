import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Tabels = ({ data, setData, handleEdit, handleDelete }) => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Data:", data);
  }, [data]); // Log only when data changes

  return (
    <div className="p-5">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Contact
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Task
              </th>
              <th scope="col" className="px-6 py-3">
                Edit
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.name}
                </th>
                <td className="px-6 py-4">{item.contactNo}</td>
                <td className="px-6 py-4">{item.address}</td>
                <td className="px-6 py-4">{item.task}</td>
                <td
                  onClick={() => {
                    handleEdit(index);
                    navigate("/edit");
                  }}
                  className="px-6 bg-slate-900 py-4 hover:bg-slate-500 cursor-pointer"
                >
                  Edit
                </td>
                <td
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you want to delete this item?"
                      )
                    ) {
                      handleDelete(index);
                    }
                  }}
                  className="px-6 bg-slate-900 py-4 hover:bg-slate-500 cursor-pointer"
                >
                  Delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tabels;
