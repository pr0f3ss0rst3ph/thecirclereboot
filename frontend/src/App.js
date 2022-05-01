import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        {/* Import page at the top and duplicate this for routes */}
      </Routes>
    </Router>
  );
};

export default App;
