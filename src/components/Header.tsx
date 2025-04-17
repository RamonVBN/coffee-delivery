import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../assets/Logo.png'
import { useContext, useEffect, useState } from 'react'
import { ShopCartContext } from '../contexts/shopCart'
import { classMerge } from '../utils/classMerge'
import { NavLink, useNavigate } from 'react-router'
// import iconLocation from '../assets/icons/Type=map-pin-line-regular.png'
// import iconShop  from '../assets/icons/Type=shopping-cart-fill.png'


export function Header(){

    const navigate = useNavigate()

    const {items} = useContext(ShopCartContext)
    const [isShopCartFull, setShopCartFull] = useState(false)
    const [totalQuantity, setTotalQuantity] = useState(0)

    

    useEffect(() => {

        if (items.length === 0) {
            
            setShopCartFull(false)

        }

        if (items.length > 0) {

        let quantitySoma: number = 0
        items.forEach((item) => {
            quantitySoma += item.quantity
        })

        setTotalQuantity(quantitySoma)
        setShopCartFull(true)
    
        }

    }, [items])
    return (
        <nav className=' w-full flex items-center p-[160px] py-8 justify-between '>
            <NavLink to={'/'}>
                <img className='w-[85px] h-[40px]' src={logo} alt="Logo" />
                
            </NavLink>

            <div >
                <span className='flex items-center gap-2.5'>
                    <div className='flex gap-1.5 bg-purple-100 p-2 rounded-[6px] text-purple-200'>
                    <MapPin className='text-purple-200' size={22} weight="fill" />
                        Arapiraca, AL
                    </div>

                    <a onClick={() => navigate('/orderconfirm')} className='w-[38px] h-[38px] flex items-center justify-center bg-yellow-100 rounded-[6px] cursor-pointer ' >

                        <div>

                        <span className={classMerge(['w-[20px] h-[20px] bg-yellow-300 text-white rounded-[50%] relative flex items-center justify-center font-mono font-bold leading-[130%] text-xs top-[-8px] right-[-20px]', isShopCartFull? 'visible': 'hidden' ])}>{totalQuantity}</span>
                        
                        <ShoppingCart className={classMerge(['text-yellow-300', isShopCartFull? 'relative top-[-11.5px]': ''])} weight='fill'  size={22} />
                        </div>
                    </a>
                </span>


            </div>
        </nav>
    )

}





