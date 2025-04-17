import { Minus, Plus } from "phosphor-react";
import { useContext } from "react";
import { ShopCartContext } from "../contexts/shopCart";


type InputNumberProps  = {
    
    quantity: number
    itemName?: string
    setQuantity?: (prevState: any) => void
  
}

export function QuantityInput({itemName, quantity, setQuantity}: InputNumberProps){

    const {decrementItemQuantity, incrementItemQuantity } = useContext(ShopCartContext)

    function handleIncrementQuantity(){

        if (itemName) {
            
            incrementItemQuantity(itemName) 
        }
    }

    function handleDecrementQuantity(){

        if (itemName) {
            
            decrementItemQuantity(itemName)
        }
    }

    return (
        <span className="w-[72px] h-[38px] flex justify-evenly items-center bg-gray-300  rounded-[8px] font-mono text-[16px] leading-[130%] text-black-200" >
            
            <button type="button" className="h-full" onClick={() => setQuantity? setQuantity((quantity: number) => quantity === 1? quantity: quantity -1 ): handleDecrementQuantity()}>
                <Minus className="text-purple-200 transition ease-in-out hover:text-purple-300" size={14} weight="fill" />
            </button>

                {quantity}

            <button type="button" className="h-full" onClick={() => setQuantity? setQuantity((quantity: number) => quantity + 1): handleIncrementQuantity()}>
                <Plus  className="text-purple-200 transition ease-in-out hover:text-purple-300" size={14} weight="fill" />
            </button>

            </span>
    )
}