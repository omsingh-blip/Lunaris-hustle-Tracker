import { BrowserRouter, Routes, Route } from "react-router-dom";

import AnimatedStars from "./components/AnimatedStars";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Analytics from "./pages/Analytics";
import Moon from "./pages/Moon";
import History from "./pages/History";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen relative bg-black text-white overflow-x-hidden">

        {/* Animated Stars */}
        <AnimatedStars />

        {/* Background Glow */}
        <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-indigo-900 rounded-full blur-3xl opacity-20" />

        <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-zinc-700 rounded-full blur-3xl opacity-10" />

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6">

          {/* Navbar */}
          <Navbar />

          {/* Pages */}
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/tasks" element={<Tasks />} />

            <Route path="/analytics" element={<Analytics />} />

            <Route path="/moon" element={<Moon />} />

            <Route path="/history" element={<History />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;