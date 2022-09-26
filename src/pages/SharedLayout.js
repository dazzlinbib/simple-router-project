import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
export default Home;
