import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import { useContext } from "react";
import { ShopCartContext } from "../contexts/shopCart";


export function AppLayout(){

    const {removeLoading} = useContext(ShopCartContext)

    return (
      <>
        {!removeLoading && <Loading/>}
      <div className="max-w-[1440px] mx-auto">
       <div className=" fixed z-10 bg-white-100 w-[1440px] ">
       
             <Header/>
           </div>

           <div className=" mx-auto max-w-[1440px] ">
            <Outlet/>
            </div>
            
           </div>
           </>
          
    )
}