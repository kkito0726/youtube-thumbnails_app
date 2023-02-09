import React, { useState } from "react";
import "./Search.css";
import { Sidebar } from "../sidebar/Sidebar";
import { Result } from "../result/Result";
import { Topbar } from "../topbar/Topbar";

export const Search = (props) => {
  const URL = props.URL;
  const placeholder = props.placeholder;
  const [data, setData] = useState({});

  return (
    <div className="searchContainer">
      <Topbar setData={setData} URL={URL} placeholder={placeholder} />
      <div className="mainContainer">
        <Sidebar />
        <Result data={data} />
      </div>
    </div>
  );
};
