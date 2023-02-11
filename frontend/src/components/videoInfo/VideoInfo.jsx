import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./VideoInfo.css";

export const VideoInfo = (props) => {
  const params = useParams();
  const videoId = params.video_id;
  const [data, setData] = useState({});

  useEffect(() => {
    get_videoInfo();
  }, []);

  const get_videoInfo = async () => {
    const data = await (await axios(`${props.URL}?q=${videoId}`)).data;
    setData(data);
  };
  return (
    <div className="main">
      {data.thumbnails ? (
        data.thumbnails.map((thumbnail, idx) => (
          <div className="videoInfoContainer" key={idx}>
            <div className="videoInfoWrapper">
              <div className="thumbnail">
                <img src={thumbnail} alt="" />
              </div>
              <div className="videoDesc">
                <span className="videoTitle">{data.videoTitles[idx]}</span>
                <span className="channelTitle">{data.channelTitles[idx]}</span>
                <span className="description">{data.descriptions[idx]}</span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};
