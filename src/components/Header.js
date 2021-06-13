import { useContext } from "react";
import { HandlerContext } from "../context/HandlerContext";
import ClosedNavbar from "./Navbar/ClosedNavbar";
import OpenNavbar from "./Navbar/OpenNavbar";
import { Box } from "@chakra-ui/react";

const Header = () => {
  const { isOpen } = useContext(HandlerContext)
  
  return (
      <Box>
        {
          isOpen
          ?
          <OpenNavbar />
          : 
          <ClosedNavbar />
        }
      </Box>
  );
}

export default Header;