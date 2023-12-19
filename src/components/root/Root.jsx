import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import "./root.css";
// import SwitchApp from "./SwitchApp";
import SpinnerApp from "./Spinner";
import Navigation from './../navigation/Navigation';
import Switches from "./Switches";
const Root = () => {
  const mode = useSelector((state) => state.mode.mode);
  return (
    <>
      <Navigation />
      <div className={`main ${mode === false ? "" : "dark"}`}>
        {/* <SwitchApp /> */}
        <Switches />
        <Suspense fallback={<SpinnerApp />}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </>
  );
};

export default Root;
