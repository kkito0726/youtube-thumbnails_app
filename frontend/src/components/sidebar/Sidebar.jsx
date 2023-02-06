import React from "react";
import "./Sidebar.css";

export const Sidebar = () => {
  return (
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
  );
};
