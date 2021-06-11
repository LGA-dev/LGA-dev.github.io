import { createContext, useState } from "react";

export const HandlerContext = createContext();

export const HandlerProvider = (props) => {
  // Navbar Status Handler
  let [isOpen, setIsOpen] = useState(false)
  const handleOpen = (boolean) => {
    setIsOpen(boolean)
  }

  // Active Stack Handler
  let [activeStack, setActiveStack] = useState("");
  const handleActiveStack = (stack) => {
    setActiveStack(stack)
  }
  
  return (
    <HandlerContext.Provider value={{isOpen, handleOpen, activeStack, handleActiveStack}}>
      {props.children}
    </HandlerContext.Provider>
  )
}

export default HandlerContext;