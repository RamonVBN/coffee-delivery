import { Trash } from "phosphor-react";
import { useContext } from "react";
import { ShopCartContext } from "../../../contexts/shopCart";


type RemoveButtonProps = {
    itemName: string
}

export function RemoveButton({itemName}: RemoveButtonProps){

    const {removeItem} = useContext(ShopCartContext)

    function handleRemoveItem(){

        removeItem(itemName)

    }

    return (
        <button onClick={handleRemoveItem} className="w-[91px] h-[32px] flex justify-center items-center gap-1 px-2 rounded-[6px] bg-gray-300 text-gray-100 font-mono font-normal leading-[160%] text-xs hover:bg-gray-400 hover:text-black-100 transition ease-in cursor-pointer">

        <Trash className="text-purple-200 " size={16}/>

        <span>REMOVER</span>

        </button>
    )

}