import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Hero,
  About,
  Contact,
  Experience,
  Feedbacks,
  Tech,
  Works,
  StarsCanvas,
  Navbar,
} from "./components";

function App() {
  return (
    <div className='relative z-0'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>

      <Routes>
        <Route path='/' index />

        <Route path='/about' element={<About />} />
        <Route
          path='/experience'
          element={<Experience />}
        />
        <Route path='/contact' element={<Contact />} />
        <Route path='/feedbacks' element={<Feedbacks />} />
        <Route path='/hero' element={<Hero />} />
        <Route path='/tech' element={<Tech />} />
        <Route path='/works' element={<Works />} />
        <Route
          path='/starscanvas'
          element={<StarsCanvas />}
        />
      </Routes>
    </div>
  );
}

export default App;
