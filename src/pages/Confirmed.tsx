
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import imageOrderConfirmed from '../assets/Illustration.png'
import { useContext } from 'react'
import { ShopCartContext } from '../contexts/shopCart'
import { Navigate, useLocation } from 'react-router'



export function Confirmed(){

    const {address} = useContext(ShopCartContext)
    const location = useLocation()

    if (!location.state?.fromSubmit) {

        return <Navigate to='/'/>
    }

   
    return (
        <main className='w-full h-[80vh] flex justify-between bg-white-100 px-[160px] pt-50 '>
            <aside className='flex flex-col gap-10'>

            <div>
                <h2 className="font-display font-extrabold leading-[130%] text-[32px] text-yellow-300">Uhu! Pedido confirmado</h2>
                <p className="font-mono font-normal text-xl leading-[130%] text-black-100">Agora é só aguardar que logo o café chegará até você</p>
            </div>

            <div className=" border-gradient flex flex-col gap-8 p-10 rounded-tl-[6px] rounded-tr-[36px] rounded-bl-[36px] rounded-br-[6px]">

                <div className='flex gap-3 items-center'>
                <span className='w-[32px] h-[32px] flex items-center justify-center rounded-[100%] bg-purple-200'>
                    <MapPin className='text-white-100' size={16} weight="fill" />
                </span>
                <span className='w-[350px] h-[42px] font-mono font-normal text-[16px] leading-[130%] text-gray-100'>Entrega em Rua {address.rua.replace(address.rua[0], address.rua[0].toUpperCase())}, {address.numero}, {address.bairro.replace(address.bairro[0], address.bairro[0].toUpperCase())} - {address.cidade.replace(address.cidade[0], address.cidade[0].toUpperCase())}-{address.uf}</span>
                </div>

                <div className='flex gap-3 items-center'>
                <span className='w-[32px] h-[32px] flex items-center justify-center rounded-[100%] bg-yellow-200 '>
                <Timer className='text-white-100' size={16} weight="fill" />
                </span>
                <span className=' flex flex-col font-mono font-normal text-[16px] leading-[130%] text-gray-100'>
                    Previsão de entrega
                    <strong className='font-mono font-bold text-[16px] leading-[130%] text-gray-100'>20 min - 30 min</strong>
                </span>
                </div>

                <div className='flex gap-3 items-center'>
                <span className='w-[32px] h-[32px] flex items-center justify-center rounded-[100%] bg-yellow-300 '>
                <CurrencyDollar className='text-white-100' size={16} weight="fill" />
                </span>
                <span className=' flex flex-col font-mono font-normal text-[16px] leading-[130%] text-gray-100'>
                    Pagamento na entrega
                    <strong className='font-mono font-bold text-[16px] leading-[130%] text-gray-100'>{address.metodo}</strong>
                </span>
                </div>


            </div>

            </aside>

            <aside className='mt-24'>
                <img src={imageOrderConfirmed} alt="" />
            </aside>
        </main>
    )
}