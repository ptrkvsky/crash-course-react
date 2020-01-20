import React from "react";
import SearchBar from "../components/SearchBar";
import VideoList from "./VideoList";

export default function App() {
  console.log(VideoList);
  return (
    <div>
      <SearchBar />
      <VideoList />
    </div>
  );
}
