import  { createContext, ReactNode, useEffect, useState } from "react";
import { PaymentMethods } from "../pages/OrderConfirm";


export type Item = {
    image: string
    name: string
    price: number
    quantity: number
}

export type Address = {
    rua: string
    bairro: string
    numero: string
    cidade: string,
    uf: string,
    metodo: PaymentMethods | undefined

}

type ShopCartContextType = {
    items: Item[]
    addItem: (item: Item) => void
    removeItem: (itemName: string) => void
    decrementItemQuantity: (itemName: string) => void
    incrementItemQuantity: (itemName: string) => void
    itemsTotalValue: number
    addNewAddress: (newAddress: Address) => void
    address: Address
    removeLoading: boolean
    handleRemoveLoading: (boolean: boolean) => void
    
}

export const ShopCartContext = createContext({} as ShopCartContextType)

export function ShopCartContextProvider({children} : {children: ReactNode}){

    const [removeLoading, setRemoveLoading] = useState(true)
   const [items, setItems] = useState<Item[]>([])
   const [itemsTotalValue, setItemsTotalValue] = useState(0)
   const [address, setAdrress] = useState<Address>({
    bairro: '',
    cidade: '',
    metodo: undefined,
    numero: '',
    rua: '',
    uf: ''
   })

    function handleRemoveLoading(boolean: boolean){
        setRemoveLoading(boolean)
   }

   function addNewAddress(newAddress: Address){

    setAdrress(newAddress)
    setItems([])
   }

   function calculateTotalValue(){

    const value = items.reduce((total, item) => {
        return total += item.quantity * item.price
    }, 0)

    setItemsTotalValue(value)
  
   }

   function addItem(newItem: Item){

    const isNewItemAlreadyExists = items.find((item) => item.name === newItem.name)

    if (isNewItemAlreadyExists) {
        
        items.map((item) => {
            if (item.name === newItem.name) {
                
                item.quantity += newItem.quantity
            }
        })

        setItems((state) => [...state])
        return
       
    }
    

    setItems((prevState) => [...prevState, newItem])
    return
    
    
   
   }

   function removeItem(itemName: string){

   const itemIndexToRemove = items.findIndex((item) => item.name === itemName )

   if (itemIndexToRemove >= 0) {

    
    const newState = items.toSpliced(itemIndexToRemove, 1)
   
    setItems(newState)
    return
    
   }

   }

   function decrementItemQuantity(itemName: string){

    items.map((item) => {
        if (item.name === itemName) {
            
            if (item.quantity > 1) {
                
                item.quantity -= 1

                setItems((state) => [...state])
                return
            }else{

               return removeItem(itemName)
            }
        
        }
    })


   }

   function incrementItemQuantity(itemName: string){

   items.map((item) => {
    if (item.name === itemName) {
        
        item.quantity += 1

       
       setItems((state) => [...state])
       return
    }
   })

   }

   
   useEffect(() => {

    const savedItems = localStorage.getItem('@coffee-delivery:items')

    if (savedItems) {
        
        setItems(JSON.parse(savedItems))
    }
    
   }, [])

   useEffect(() => {
    calculateTotalValue()
    setTimeout(() => {
        
        localStorage.setItem('@coffee-delivery:items', JSON.stringify(items))
    }, 200)
    
   }, [items])


 return <ShopCartContext.Provider value={{items, addItem, removeItem, decrementItemQuantity, incrementItemQuantity, itemsTotalValue, addNewAddress, address, removeLoading, handleRemoveLoading }}>
        {children}
    </ShopCartContext.Provider>

}