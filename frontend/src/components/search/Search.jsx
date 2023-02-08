import React, { useState } from "react";
import { format } from "timeago.js";
import axios from "axios";
import "./Search.css";
import { Sidebar } from "../sidebar/Sidebar";
import { Link } from "react-router-dom";
import { Result } from "../result/Result";

export const Search = (props) => {
  const URL = props.URL;
  const [data, setData] = useState({});

  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    const data = await (await axios(`${URL}?q=${query}`)).data;
    setData(data);
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
        <Result data={data} />
      </div>
    </div>
  );
};
