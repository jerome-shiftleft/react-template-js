import { Outlet } from "react-router-dom";
import Header from "./sections/Header";

function MasterLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default MasterLayout;