import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export const Search = () => {
  const URL = "/channel";
  const [query, setQuery] = useState("");
  const [thumbnails, setThumbnails] = useState([]);
  const [videoTitles, setVideoTitles] = useState([]);

  const handleSearch = async () => {
    const data = await (await axios(`${URL}?channel_url=${query}`)).data;
    setThumbnails(data.thumbnails);
    setVideoTitles(data.videoTitle);
    console.log(thumbnails);
    console.log(videoTitles);
  };
  return (
    <div className="searchContainer">
      <div className="searchWrapper">
        <div className="searchLeft">
          <span className="title">YouTube サムネイル</span>
        </div>
        <div className="searchBar">
          <input
            type="text"
            className="searchInput"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="チャンネルのURLを入力"
          />
          <button className="searchButton" onClick={handleSearch}>
            検索
          </button>
        </div>
        <div className="searchBarRight">vsdd</div>
      </div>
      <div className="mainContainer">
        <div className="sidebar">
          <div className="sidebarWrapper">
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <span className="sidebarListItemText">チャンネルURLで検索</span>
              </li>

              <li className="sidebarListItem">
                <span className="sidebarListItemText">キーワードで検索</span>
              </li>

              <li className="sidebarListItem">
                <span className="sidebarListItemText">動画URLで検索</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="main">
          <div className="mainWrapper">
            {thumbnails.map((thumbnail, idx) => {
              return (
                <div className="videoContainer">
                  <div className="videoContainerWrapper">
                    <div className="videoImg">
                      <img src={thumbnail} alt="" key={idx} className="img" />
                    </div>
                    <div className="desc">
                      <span className="videoTitle" key={idx}>
                        {videoTitles[idx]}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
