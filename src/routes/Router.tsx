
import { Routes, Route } from "react-router"
import { AppLayout } from "../layouts/AppLayout"
import { Home } from "../pages/Home"
import { OrderConfirm } from "../pages/OrderConfirm"
import { Confirmed } from "../pages/Confirmed"

export function Router(){

    return <Routes>
        <Route path="/coffee-delivery/" element={<AppLayout/>}>

            <Route path="/coffee-delivery/" element={<Home/>}/>
            <Route path="/coffee-delivery/orderconfirm" element={<OrderConfirm/>}/>
            <Route path="/coffee-delivery/confirmed" element={<Confirmed/>}/>
        </Route>
    </Routes>
}