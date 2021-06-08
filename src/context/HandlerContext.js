import { createContext, useState } from "react";

export const HandlerContext = createContext();

export const HandlerProvider = (props) => {
  let [isOpen, setIsOpen] = useState(false)
  const handleOpen = (boolean) => {
    setIsOpen(boolean)
  }
  // console.log(isOpen)
  
  return (
    <HandlerContext.Provider value={{isOpen, handleOpen}}>
      {props.children}
    </HandlerContext.Provider>
  )
}

export default HandlerContext;