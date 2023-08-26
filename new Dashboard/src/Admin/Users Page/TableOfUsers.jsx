import { useEffect, useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

export const TableOfUsers = () => {
  const [users, setUsers] = useState([]);

  // get all users
  useEffect(() => {
    axios
      .get("http://localhost:8800/getusers")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const tableRows = users.map((user) => {
    return (
      <tr key={user._id} className="border-b ">
        <th
          scope="row"
          className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap "
        >
          {user._id}
        </th>
        <td className="px-4 py-3">{user.username}</td>
        <td className="px-4 py-3">{user.email}</td>
        <td className="px-4 py-3">{user.createdAt}</td>
      </tr>
    );
  });

  return (
    <section className="w-full  mt-5 ">
      <div className="">
        {/* Start coding here */}
        <h1 className="text-[30px] font-bold py-3">Users</h1>
        <div className="bg-white  relative shadow-md sm:rounded-2xl overflow-scroll max-h-[300px]">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 table-zebra ">
              <thead className="text-xs text-white uppercase bg-[#529b03]">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    User ID
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Email
                  </th>

                  <th scope="col" className="px-4 py-3">
                    CreatedAt
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableRows.length === 0 ? (
                  <div className="p-3 text-lg">There are no Users</div>
                ) : (
                  tableRows
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
    </section>
  );
};
