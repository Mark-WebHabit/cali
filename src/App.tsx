import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Body from "./layouts/Body";

import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/" index element={<Home />} />

          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
