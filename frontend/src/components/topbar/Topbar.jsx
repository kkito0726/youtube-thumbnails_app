import { Search } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Topbar.css";

export const Topbar = (props) => {
  const [data, setData] = useState({});
  useEffect(() => props.setData(data), [data]);

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
        <Search className="topbarIcon" />
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
          <img src="/assets/person/noAvatar.png" alt="" className="topbarImg" />
          <span className="userName">LaRCode</span>
        </div>
      </div>
    </div>
  );
};
