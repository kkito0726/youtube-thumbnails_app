import React from "react";
import { Link } from "react-router-dom";
import { AppShortcut, Home, Search } from "@mui/icons-material";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import VideocamIcon from "@mui/icons-material/Videocam";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <Link to={"/"}>
            <li className="sidebarListItem">
              <Search className="sidebarIcon" />
              <span className="sidebarListItemText">キーワードで検索</span>
            </li>
          </Link>

          <Link to={"/channel"}>
            <li className="sidebarListItem">
              <LiveTvIcon className="sidebarIcon" />
              <span className="sidebarListItemText">チャンネルURLで検索</span>
            </li>
          </Link>

          <li className="sidebarListItem">
            <VideocamIcon className="sidebarIcon" />
            <span className="sidebarListItemText">動画URLで検索</span>
          </li>
        </ul>
        <hr className="sidebarHr" />

        <ul className="sidebarList">
          <a href="https://www.youtube.com/">
            <li className="sidebarListItem">
              <Home className="sidebarIcon" />
              <span className="sidebarListItemText">ホーム</span>
            </li>
          </a>

          <a href="https://www.youtube.com/shorts/6hwHXUM_MFE">
            <li className="sidebarListItem">
              <AppShortcut className="sidebarIcon" />
              <span className="sidebarListItemText">ショート</span>
            </li>
          </a>
          <a href="https://www.youtube.com/feed/subscriptions">
            <li className="sidebarListItem">
              <SmartDisplayIcon className="sidebarIcon" />
              <span className="sidebarListItemText">登録チャンネル</span>
            </li>
          </a>
        </ul>
        <hr className="sidebarHr" />
      </div>
    </div>
  );
};
