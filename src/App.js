import "./App.css";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useHistory,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Team from "./Pages/Team/Team";
import Contact from "./Pages/Contact/Contact";
import Events from "./Pages/Events/Events";
import Resources from "./Pages/Resources/Resources";
import Testimonial from "./Pages/Testimonial/Testimonial";
import Login from "./Pages/Auth/Login";
import Dashboard from "./Pages/Dashboard/Mentee/Dashboard";
import Event from "./Pages/Events/Event";
import Register from "./Pages/Auth/Register";
import "bootstrap/dist/js/bootstrap.min.js";

import NavbarFun from "./Components/Navbar";
function App() {
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 200, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <NavbarFun />
        <div className="app_main">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/team" element={<Team />}></Route>
            <Route path="/events" element={<Events />}></Route>
            <Route path="/events/:id" element={<Event />}></Route>
            <Route path="/resources" element={<Resources />}></Route>
            <Route path="/testimonial" element={<Testimonial />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
