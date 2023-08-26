import { useContext } from "react";

import { TableOfUsers } from "./TableOfUsers";

import { RefreshContext } from "../../App";
export const Users = () => {
  const { refresh, setRefresh } = useContext(RefreshContext);
  return (
    <div>
      <main className="p-4 px-8  md:ml-64 h-auto pt-20 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4 mb-4">
          <TableOfUsers setRefresh={setRefresh} refresh={refresh} />
        </div>
      </main>
    </div>
  );
};
