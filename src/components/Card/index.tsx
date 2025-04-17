// import { coffees } from "../../utils/products"
// import coffeExample from '../../assets/Type=Americano.png'
import { useContext, useState } from "react"
import { formatCurrency } from "../../utils/formatCurrency"
import { Categories } from "./components/Categories"
import {ShoppingCartSimple } from "phosphor-react"
import { ShopCartContext } from "../../contexts/shopCart"
import { Item } from "../../contexts/shopCart"
import {  QuantityInput } from "../QuantityInput"

type CardProps = {
    image: string
    categories: string[]
    name: string
    description: string
    price: number
}


export function Card(props: CardProps){

    const {addItem, handleRemoveLoading} = useContext(ShopCartContext)
    const [quantity, setQuantity] = useState(1)

    

    function handleAddItem(){

        handleRemoveLoading(false)
        setTimeout(() => {
            
            handleRemoveLoading(true)
            const newItem: Item = {
                image: props.image,
                name: props.name,
                price: props.price,
                quantity: quantity
    
            }
    
            addItem(newItem)
        }, 800);

    }

    return (<div className="bg-white-200 w-[256px] h-[310px] rounded-tl-[10px] rounded-tr-[50px]
    rounded-bl-[50px] rounded-br-[10px] flex flex-col items-center gap-1.5">

            <div className="flex flex-col items-center justify-around">
    
            <img className="w-[120px] h-[120px] relative top-[-22px]" src={props.image} alt="" />
    
            <div className="flex gap-1">
                {
                    props.categories.map((categorie) => {
                        return <Categories key={Math.random()} category={categorie.toUpperCase()}/>
                    })
                }
            </div>
            
            </div>

        <h3 className="font-display font-bold text-[20px] leading-[130%] text-black-100">{props.name}</h3>

        <p className="px-[10px] font-mono text-[14px] leading-[130%] text-gray-200  text-center">{props.description}</p>

        <div className="flex gap-4.5 mt-[35px] ">
            <span className="font-mono text-[14px] leading-[130%]" >R$<strong className="font-display font-extrabold text-[24px] leading-[130%] text-gray-100 text-center">{formatCurrency(props.price).replace('R$', '')}</strong></span>

            <div className="flex gap-2">

            <QuantityInput quantity={quantity} setQuantity={setQuantity}/>

            <button onClick={handleAddItem}>
            <ShoppingCartSimple className="bg-purple-300 hover:bg-purple-200 transition ease-in-out p-[8px] rounded-[8px] text-white-200" size={38} weight="fill" />
            </button>

            </div>

        </div>

    </div>
    )
}