import { useContext } from "react";
import { RefreshContext } from "../../App";

export const TableOfHistory = () => {
  const {orders} = useContext(RefreshContext);
  const tableRows = orders.map((order) => {
    return (
      <tr key={order._id} className="border-b ">
        <th
          scope="row"
          className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap "
        >
          {order.customerName}
        </th>
        <td className="px-4 py-3">{order.quantity}</td>
        <td className="px-4 py-3">{order.address}</td>
        <td className="px-4 py-3">{order.phone}</td>
        <td className="px-4 py-3">${order.total}</td>
        <td className="px-4 py-3">{order.orderDate}</td>
       
      </tr>
    );
  });

  return (
    <section className="w-full  mt-5 ">
      <div className="">
        <h1 className="text-[30px] font-bold py-3"> All Orders</h1>
        {/* Start coding here */}
        <div className="bg-white  relative shadow-md sm:rounded-2xl overflow-scroll max-h-[300px]">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500  table-zebra">
              <thead className="text-xs text-white uppercase bg-[#529b03] ">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Customer Name
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Quantitiy
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Address
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Phone Number
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Total Price
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Order Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableRows.length === 0 ? (
                  <div className="p-3 text-lg"> There Are No Orders Yet</div>
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
