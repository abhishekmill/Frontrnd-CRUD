import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = ({ data, setdata }) => {
  const [name, setName] = useState(""); // Changed to empty string
  const [address, setAddress] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [task, setTask] = useState("");

  const navigate = useNavigate();

  const showToast = () => {
    toast.success("Registered Successfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Use the functional form of setdata to ensure you're working with the latest state

    setdata((prevData) => [
      ...prevData,
      {
        name,
        address,
        contactNo,
        task,
      },
    ]);

    setName("");
    setAddress("");
    setContactNo("");

    // navigate("/dashboard");
    showToast();
  };

  const navToDash = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div>
      <ToastContainer />
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={handleSubmit} // Fixed typo in function name
            className="space-y-6"
            action="#"
            method="POST"
          >
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name" // Changed ID to 'name'
                  name="name" // Changed name to 'name'
                  type="text" // Changed type to 'text'
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Address
              </label>
              <div className="mt-2">
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  id="address" // Updated ID
                  name="address" // Updated name
                  type="text" // Changed type to 'text'
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Contact No.
              </label>
              <div className="mt-2">
                <input
                  value={contactNo}
                  onChange={(e) => setContactNo(e.target.value)}
                  id="contactNo" // Updated ID
                  name="contactNo" // Updated name
                  type="text" // Changed type to 'text'
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Task Assineds
              </label>
              <div className="mt-2">
                <input
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  id="contactNo" // Updated ID
                  name="contactNo" // Updated name
                  type="text" // Changed type to 'text'
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit {/* Fixed typo */}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            show users
            <a
              href="#"
              onClick={navToDash}
              className="font-semibold pl-2 leading-6 text-indigo-600 hover:text-indigo-500"
            >
              List User's
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
