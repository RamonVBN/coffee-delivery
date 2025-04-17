import { Item} from "../../../contexts/shopCart"
import { QuantityInput } from "../../QuantityInput"
import { RemoveButton } from "./RemoveButton"
import { formatCurrency } from "../../../utils/formatCurrency"



type OrderProps = Item

export function Order({image, name, price, quantity}: OrderProps ){

    return (
        <div className="border-b-2 border-gray-300 pb-6" >
            <div className="flex gap-5 justify-between">
                <img className="w-[64px] h-[64px]" src={image} alt="" />

                <div className="flex flex-col justify-between">
                    <span className="font-mono text-[16px] leading-[130%] text-black-100">{name}</span>

                    <div className="flex items-center justify-center gap-2">
                        
                        <QuantityInput quantity={quantity} itemName={name}/>
                       
                        <RemoveButton itemName={name}/>
                    </div>
                
                </div>

                <span className="font-mono font-bold leading-[130%] text-[16px] text-gray-100">
                    {formatCurrency(price)}
                </span>
            </div>
        </div>
    )

}