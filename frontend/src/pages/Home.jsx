import React from "react";
import { Search } from "../components/search/Search";

export const Home = () => {
  const URL = "/keyword";
  const placeholder = "キーワードを入力";
  return (
    <div className="home">
      <Search URL={URL} placeholder={placeholder} />
    </div>
  );
};
