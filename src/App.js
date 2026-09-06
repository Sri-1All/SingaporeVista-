import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import TamilHeritage from "./pages/TamilHeritage";
import FestivalsFood from "./pages/FestivalsFood";
import TamilVoices from "./pages/TamilVoices";
import TripPlanner from "./pages/TripPlanner";
import SingaporeGuide from "./pages/SingaporeGuide";
import BookNow from "./pages/BookNow";

function App() {
  return (
    <BrowserRouter>

      <Navbar />
      
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/explore" element={<Explore />} />

        <Route
          path="/tamil-heritage"
          element={<TamilHeritage />}
        />

        <Route
          path="/festivals-food"
          element={<FestivalsFood />}
        />

        <Route
          path="/tamil-voices"
          element={<TamilVoices />}
        />

        <Route
          path="/trip-planner"
          element={<TripPlanner />}
        />

        <Route
          path="/singapore-guide"
          element={<SingaporeGuide />}
        />

        <Route 
          path="/book-now"
          element={<BookNow />}
        />

      </Routes>
         <Footer />
         
    </BrowserRouter>
  );
}

export default App;
