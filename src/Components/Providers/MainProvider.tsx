import { NextUIProvider } from "@nextui-org/react";
import { ToastContainer } from "react-toastify";

export function MainProvider({children}:{children: React.ReactNode}){
    return(
       <NextUIProvider>
        <ToastContainer />
        {children}
       </NextUIProvider> 
    )
}