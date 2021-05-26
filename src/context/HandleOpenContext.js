import { createContext, useState } from "react";

export const HandleOpenContext = createContext();

export const HandleOpenProvider = (props) => {
  let [isOpen, setIsOpen] = useState(false)
  const handleOpen = (boolean) => {
    setIsOpen(boolean)
  }
  // console.log(isOpen)
  
  return (
    <HandleOpenContext.Provider value={{isOpen, handleOpen}}>
      {props.children}
    </HandleOpenContext.Provider>
  )
}

export default HandleOpenContext;