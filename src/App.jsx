import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  const [activeTab, setActiveTab] = useState("home");

  const renderSection = () => {
    switch (activeTab) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen grid-bg text-white flex flex-col items-center p-6 relative">
      {/* Top Navigation Row - Added relative and z-50 to stay on top */}
      <div className="w-full max-w-5xl flex justify-between items-center py-4 border-b border-white/10 mb-12 relative z-50">
        <span className="font-mono text-lg font-bold tracking-wider text-gray-400"></span>
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Main Content Area */}
      <main className="w-full max-w-5xl flex-grow flex items-center justify-center">
        {renderSection()}
      </main>
    </div>
  );
}

export default App;
