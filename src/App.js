import HamburgerMenu from "./HamburgerMenu";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";

function App() {
  return (
    <>
      <HamburgerMenu />

      <Routes>
        <Route path="/pageone" element={<PageOne />} />
        <Route path="/pagetwo" element={<PageTwo />} />
        <Route path="/pagethree" element={<PageThree />} />
      </Routes>
      <div className="center">
        <a href="https://react-portfolio-lauren-powers.netlify.app/features">
          <button className="button-54">Back</button>
        </a>
      </div>
    </>
  );
}

export default App;
