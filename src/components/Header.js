import { useContext } from "react";
import { HandlerContext } from "../context/HandlerContext";
import ClosedNavbar from "./Navbar/ClosedNavbar";
import OpenNavbar from "./Navbar/OpenNavbar";

const Header = () => {
  const { isOpen } = useContext(HandlerContext)
  
  return (
      <div>
        {
          isOpen
          ?
          <OpenNavbar />
          : 
          <ClosedNavbar />
        }
      </div>
  );
}

export default Header;