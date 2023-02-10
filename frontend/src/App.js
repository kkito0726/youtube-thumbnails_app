import { Home } from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChannelHome } from "./pages/channelHome/ChannelHome";
import { VideoInfoHome } from "./pages/videoInfoHome/VideoInfoHome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/channel" element={<ChannelHome />} />
        <Route path="/videoInfo/:video_id" element={<VideoInfoHome />} />
      </Routes>
    </Router>
  );
}

export default App;
