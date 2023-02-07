import React from "react";
import { Search } from "../components/search/Search";

export const ChannelHome = () => {
  const URL = "/channel";
  const placeholder = "チャンネルのURLを入力";
  return (
    <div className="home">
      <Search URL={URL} placeholder={placeholder} />
    </div>
  );
};
