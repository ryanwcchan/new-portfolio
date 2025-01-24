import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full h-full">
        <Outlet />
      </main>
    </>
  );
}

export default App;
