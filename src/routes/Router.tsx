
import { Routes, Route } from "react-router"
import { AppLayout } from "../layouts/AppLayout"
import { Home } from "../pages/Home"
import { OrderConfirm } from "../pages/OrderConfirm"
import { Confirmed } from "../pages/Confirmed"

export function Router(){

    return <Routes>
        <Route path="/" element={<AppLayout/>}>

            <Route path="/" element={<Home/>}/>
            <Route path="/orderconfirm" element={<OrderConfirm/>}/>
            <Route path="/confirmed" element={<Confirmed/>}/>
        </Route>
    </Routes>
}