import React, { useState } from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Topbar } from "../../components/topbar/Topbar";
import { VideoInfo } from "../../components/videoInfo/VideoInfo";

export const VideoInfoHome = () => {
  const URL = "/videoInfo";
  const placeholder = "動画IDを入力";
  const [data, setData] = useState({});
  return (
    <div className="home">
      <Topbar setData={setData} URL={URL} placeholder={placeholder} />

      <div className="mainContainer">
        <Sidebar />
        <VideoInfo URL={URL} />
      </div>
    </div>
  );
};
