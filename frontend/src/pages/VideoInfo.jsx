import React from "react";
import { Search } from "../components/search/Search";
import { Sidebar } from "../components/sidebar/Sidebar";
import { Topbar } from "../components/topbar/Topbar";

export const VideoInfo = () => {
  const URL = "/keyword";
  const placeholder = "キーワードを入力";
  return (
    <div className="home">
      <Topbar setData={setData} URL={URL} placeholder={placeholder} />

      <div className="mainContainer">
        <Sidebar />
      </div>
    </div>
  );
};
