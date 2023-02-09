import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Topbar.css";

export const Topbar = (props) => {
  const [data, setData] = useState({});
  props.setData(data);

  const [query, setQuery] = useState("");
  const handleSearch = async () => {
    const data = await (await axios(`${props.URL}?q=${query}`)).data;
    setData(data);
  };
  return (
    <div className="topbarWrapper">
      <div className="topbarLeft">
        <Link to={"/"}>
          <span className="topbarTitle">YouTube サムネイル</span>
        </Link>
      </div>
      <div className="topbarBar">
        <input
          type="text"
          className="topbarInput"
          onChange={(e) => setQuery(e.target.value)}
          placeholder={props.placeholder}
        />
        <button className="topbarButton" onClick={handleSearch}>
          検索
        </button>
      </div>
      <div className="topbarBarRight">
        <div className="topbarIcons">
          <img src="../../../public/assets/person/noAvatar.png" alt="" />
        </div>
      </div>
    </div>
  );
};
