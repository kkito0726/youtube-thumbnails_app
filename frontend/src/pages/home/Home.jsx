import React, { useState } from "react";
import { Result } from "../../components/result/Result";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Topbar } from "../../components/topbar/Topbar";
import "./Home.css";

export const Home = () => {
  const URL = "/keyword";
  const placeholder = "キーワードを入力";
  const [data, setData] = useState({});
  return (
    <div className="home">
      <Topbar setData={setData} URL={URL} placeholder={placeholder} />

      <div className="mainContainer">
        <Sidebar />
        <Result data={data} />
      </div>
    </div>
  );
};
