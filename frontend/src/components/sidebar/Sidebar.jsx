import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <Link to={"/"}>
            <li className="sidebarListItem">
              <span className="sidebarListItemText">キーワードで検索</span>
            </li>
          </Link>

          <Link to={"/channel"}>
            <li className="sidebarListItem">
              <span className="sidebarListItemText">チャンネルURLで検索</span>
            </li>
          </Link>

          <li className="sidebarListItem">
            <span className="sidebarListItemText">動画URLで検索</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
