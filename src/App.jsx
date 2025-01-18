import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full h-full p-10 lg:pl-40">
        <Outlet />
      </main>
    </>
  );
}

export default App;
