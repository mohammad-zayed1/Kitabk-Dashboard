/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { BiSolidMessageSquareEdit } from "react-icons/bi";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const TableOfWriters = ({ refresh, setRefresh }) => {
  const [writers, setWriters] = useState([]);
  const [writerUpdate, setWriterUpdate] = useState({
    _id: "",
    name: "",
    job: "",
    image: "",
    description: "",
    link: "",
  });
  const notifySuccess = (msg) => toast.success(msg);
  const notifyError = (msg) => toast.error(msg);

  // get all writers
  useEffect(() => {
    axios
      .get("http://localhost:8800/showwriters")
      .then((response) => {
        setWriters(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [refresh]);

  const handleDelete = (id) => {
    Swal.fire({
      title: `Are yoy sure to delete this Writer ?`,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      icon: "warning",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire(` Book was Deleted Successfully`, "", "success");

        axios
          .patch("http://localhost:8800/deleteWriters/" + id)
          .then((response) => {
            console.log(response.data);
            setRefresh(!refresh);
          })

          .catch((error) => console.log(error.message));
      } else Swal.fire("Cancel", "", "error");
    });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setWriterUpdate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmitUpdate = async (event) => {
    try {
      event.preventDefault();

      const data = await axios.patch(
        `http://localhost:8800/updatewriter/${writerUpdate._id}`,
        writerUpdate
      );
      notifySuccess("Author updated success");
      setRefresh(!refresh);

      console.log("added success", data.data);
    } catch (err) {
      console.log(err);
      notifyError(err.message);
    }
  };
  const tableRows = writers.map((writer) => {
    return (
      <tr key={writer._id} className="border-b ">
        <th
          scope="row"
          className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap "
        >
          {writer.name}
        </th>
        <td className="px-4 py-3">{writer.job}</td>
        <td className="px-4 py-3">{writer.description}</td>
        <td className="px-4 py-3">{writer.image}</td>
        <td className="px-4 py-3">{writer.link}</td>

        <td className="px-4 py-3 flex items-center justify-start gap-2 flex-row-reverse">
          <div
            id=""
            className="bg-white  rounded divide-y divide-gray-100 shadow "
          >
            <div className="tooltip tooltip-info text-white" data-tip="Edit">
              <button
                // onClick={() => handleUpdate(book._id)
                // }
                onClick={() => {
                  window.my_modal_2.showModal();
                  setWriterUpdate((prev) => ({
                    ...prev,
                    _id: writer._id,
                    name: writer.name,
                    job: writer.job,
                    image: writer.image,
                    description: writer.description,
                    link: writer.link,
                  }));
                }}
                className="btn bg-white hover:bg-info shadow-lg hover:shadow-xl border-none "
              >
                <BiSolidMessageSquareEdit className="text-neutral text-[18px]" />
              </button>
            </div>
          </div>
          <div
            id=""
            className="bg-white  rounded divide-y divide-gray-100 shadow "
          >
            <div className="tooltip tooltip-error text-white" data-tip="Delete">
              <button
                onClick={() => handleDelete(writer._id)}
                className="btn bg-white hover:bg-red-200 shadow-lg hover:shadow-xl border-none "
              >
                <AiOutlineDelete className="text-red-500 text-[18px]" />
              </button>
            </div>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <section className="w-full  mt-5 ">
      <div className="">
        <h1 className="text-[30px] font-bold py-3">Authors</h1>
        {/* Start coding here */}
        <div className="bg-white  relative shadow-md sm:rounded-2xl overflow-scroll max-h-[300px]">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500  table-zebra">
              <thead className="text-xs text-white uppercase bg-[#529b03] ">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Author Name
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Occupations
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Description
                  </th>

                  <th scope="col" className="px-4 py-3">
                    Image
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Link
                  </th>
                  <th scope="col" className="px-4 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableRows.length === 0 ? (
                  <div className="p-3 text-lg">There are no authors</div>
                ) : (
                  tableRows
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <dialog id="my_modal_2" className="modal">
        <form
          onSubmit={handleSubmitUpdate}
          method="dialog"
          className="modal-box"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/*  */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Writer Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Type here"
                className="input input-sm  border-[#529b03] w-full max-w-xs"
                value={writerUpdate.name}
                onChange={handleChange}
              />
            </div>
            {/*  */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Occupations</span>
              </label>
              <input
                type="text"
                name="job"
                placeholder="Type here"
                className="input input-sm  border-[#529b03] w-full max-w-xs"
                value={writerUpdate.job}
                onChange={handleChange}
              />
            </div>
            {/*  */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                name="description"
                placeholder="Type here"
                className="input input-sm  border-[#529b03] w-full max-w-xs"
                value={writerUpdate.description}
                onChange={handleChange}
              />
            </div>
            {/*  */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="Type here"
                className="input input-sm  border-[#529b03] w-full max-w-xs"
                value={writerUpdate.image}
                onChange={handleChange}
              />
            </div>
            {/*  */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Link In Wikipedia</span>
              </label>
              <input
                type="text"
                name="link"
                placeholder="Type Here"
                className="input input-sm  border-[#529b03] w-full max-w-xs"
                value={writerUpdate.link}
                onChange={handleChange}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label invisible">
                <span className="label-text">button</span>
              </label>
              <button type="submit" className="btn btn-sm btn-primary">
                update
              </button>
            </div>
            {/*  */}
          </div>
        </form>
      </dialog>
    </section>
  );
};
