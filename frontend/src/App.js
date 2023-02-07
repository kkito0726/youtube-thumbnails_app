import { Home } from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChannelHome } from "./pages/ChannelHome";

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
