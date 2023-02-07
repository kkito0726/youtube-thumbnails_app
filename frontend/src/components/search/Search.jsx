import React, { useState } from "react";
import { format } from "timeago.js";
import axios from "axios";
import "./Search.css";
import { Sidebar } from "../sidebar/Sidebar";
import { Link } from "react-router-dom";

export const Search = (props) => {
  const URL = props.URL;
  const [query, setQuery] = useState("");
  const [channelTitle, setChannelTitle] = useState([]);
  const [videoTitles, setVideoTitles] = useState([]);
  const [videoIds, setVideoIds] = useState([]);
  const [thumbnails, setThumbnails] = useState([]);
  const [publishTimes, setPublishTimes] = useState([]);

  const handleSearch = async () => {
    const data = await (await axios(`${URL}?q=${query}`)).data;
    setChannelTitle(data.channelTitles);
    setThumbnails(data.thumbnails);
    setVideoTitles(data.videoTitle);
    setVideoIds(data.videoIds);
    setPublishTimes(data.publishTimes);
  };
  return (
    <div className="searchContainer">
      <div className="searchWrapper">
        <div className="searchLeft">
          <Link to={"/"}>
            <span className="title">YouTube サムネイル</span>
          </Link>
        </div>
        <div className="searchBar">
          <input
            type="text"
            className="searchInput"
            onChange={(e) => setQuery(e.target.value)}
            placeholder={props.placeholder}
          />
          <button className="searchButton" onClick={handleSearch}>
            検索
          </button>
        </div>
        <div className="searchBarRight">
          <div className="topbarIcons">
            <img src="../../../public/assets/person/noAvatar.png" alt="" />
          </div>
        </div>
      </div>
      <div className="mainContainer">
        <Sidebar />

        <div className="main">
          <div className="mainWrapper">
            {thumbnails.map((thumbnail, idx) => {
              return (
                <a
                  href={`https://www.youtube.com/watch?v=${videoIds[idx]}`}
                  className="videoLink"
                  key={idx}
                >
                  <div className="videoContainer">
                    <div className="videoContainerWrapper">
                      <div className="videoImg">
                        <img src={thumbnail} alt="" className="img" />
                      </div>
                      <div className="desc">
                        <span className="videoTitle">{videoTitles[idx]}</span>
                        <span className="channelTitle">
                          {channelTitle[idx]}
                        </span>
                        <span className="publishTime">
                          {format(publishTimes[idx])}
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
