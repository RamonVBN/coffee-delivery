import { ShopCartContextProvider } from "./contexts/shopCart";
import { Router } from "./routes/Router";


export function App() {
  
  
  return (
    <ShopCartContextProvider>
    <Router/>
    </ShopCartContextProvider>
  )

}


