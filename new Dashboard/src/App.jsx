/* eslint-disable react-refresh/only-export-components */
import { createContext, useState , useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

// Dashboard
import { DashBoard } from "./Admin/DashBoard";
import { Books } from "./Admin/Books Page/Books";
import { Writers } from "./Admin/Writers Page/Writers";
import { Quotes } from "./Admin/Quotes Page/Quotes";
import { History } from "./Admin/History Page/History";
import { About } from "./Admin/About Page/About";
import { Nav } from "./Admin/Nav";
import { Aside } from "./Admin/Aside";
import { PageNotFound } from "./Admin/PageNotFound";
import { Users } from "./Admin/Users Page/Users";
import "./App.css";

export const RefreshContext = createContext();

function App() {
  const [orders, setOrders] = useState([]);
  const [refresh, setRefresh] = useState(true);

  //  get all orders
  useEffect(() => {
    axios
      .get("http://localhost:8800/allorders")
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  let sum = 0;
   const total = orders?.map((order) => order.total)
   for(let i = 0 ; i < total.length ;i++){
  sum += total[i]
   }



  return (
    <RefreshContext.Provider value={{ refresh, setRefresh , orders , sum }}>
      <BrowserRouter>
        <Nav />
        <Aside />
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/books" element={<Books />} />
          <Route path="/orders" element={<History />} />
          <Route path="/writers" element={<Writers />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </RefreshContext.Provider>
  );
}

export default App;
