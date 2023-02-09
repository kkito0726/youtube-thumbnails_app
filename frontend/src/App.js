import { Home } from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChannelHome } from "./pages/channelHome/ChannelHome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/channel" element={<ChannelHome />} />
      </Routes>
    </Router>
  );
}

export default App;
