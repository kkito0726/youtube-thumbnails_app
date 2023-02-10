import React from "react";
import { useParams } from "react-router-dom";
import "./VideoInfo.css";

export const VideoInfo = () => {
  const videoId = useParams();
  console.log(videoId.video_id);
  return <div className="main">{videoId.video_id}</div>;
};
