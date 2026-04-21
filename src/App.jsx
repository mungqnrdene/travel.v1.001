import "./App.css";
import "./index.css";
import VideoComponents from "./components/VideoComponents";
import Navbar from "./components/Navbar";
import TourCards from "./components/Tours";

function App() {
  return (
    <div className="min-h-screen bg-stone-950 text-white">
      <Navbar />
      <main>
        <VideoComponents />
        <TourCards />
      </main>
    </div>
  );
}

export default App;
