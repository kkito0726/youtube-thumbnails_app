import React, { useState } from "react";
import { Result } from "../../components/result/Result";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Topbar } from "../../components/topbar/Topbar";
import "./ChannelHome.css";

export const ChannelHome = () => {
  const URL = "/channel";
  const placeholder = "チャンネルのURLを入力";
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
