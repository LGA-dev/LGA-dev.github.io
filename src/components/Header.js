import { useContext } from "react";
import { HandleOpenContext } from "../context/HandleOpenContext";
import ClosedNavbar from "./Navbar/ClosedNavbar";
import OpenNavbar from "./Navbar/OpenNavbar";

const Header = () => {
  const { isOpen } = useContext(HandleOpenContext)
  
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