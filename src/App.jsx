import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="flex flex-col w-full flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
