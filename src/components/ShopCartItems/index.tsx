import { useContext } from "react"
import { ShopCartContext } from "../../contexts/shopCart"
import { Order } from "./components/Order"
import { formatCurrency } from "../../utils/formatCurrency"


type ShopCartProps = {
    IsDeliveryDisabled: boolean
}

export function ShopCartItems({IsDeliveryDisabled}: ShopCartProps){


    const {itemsTotalValue, items} = useContext(ShopCartContext)

    const totalValueOfShopCart = itemsTotalValue + 3.50


    return (
        <div className="w-full  flex flex-col justify-around gap-8 ">

                {
                    items.map((item) => <Order key={item.name} image={item.image} name={item.name} price={item.price} quantity={item.quantity}/>)
                }

                <div className="w-full flex flex-col gap-3">

                    <div className="flex justify-between">
                        <span className="font-mono font-normal text-sm leading-[130%] text-gray-100">Total de itens</span>
                        <span className="font-mono font-normal text-[16px] leading-[130%] text-gray-100" >{formatCurrency(itemsTotalValue)}</span>

                    </div>

                    <div className="flex justify-between" >
                        <span className="font-mono font-normal text-sm leading-[130%] text-gray-100" >Entrega</span>
                        <span className="font-mono font-normal text-[16px] leading-[130%] text-gray-100" >{IsDeliveryDisabled? 'R$ 3,50' :  'R$ 0,00'}</span>
                    </div>

                    <div className="flex justify-between" >
                        <span className="font-mono font-bold leading-[130%] text-xl text-black-100" >Total</span>
                        <span className="font-mono font-bold leading-[130%] text-xl text-black-100" >{IsDeliveryDisabled? formatCurrency(totalValueOfShopCart): 'R$ 0,00'}</span>
                    </div>

                </div>

            <button className="bg-yellow-200 text-white w-full h-[46px] px-2 py-3 rounded-[6px] font-mono font-bold leading-[160%]  text-sm cursor-pointer hover:bg-yellow-300 transition ease-in" type="submit">
                CONFIRMAR PEDIDO
            </button>
        </div>
    )

}