import imageSection from '../assets/Imagem.png'
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { Card } from "../components/Card";
import { coffees } from "../utils/products"



export function Home(){

 return (  
    <>
        <section className=" w-full h-[544px] pt-30  bg-white-100 flex items-center justify-center gap-16">
          
            <div className="flex flex-col gap-12">
    
              <div className="max-w-[588px] max-h-[192px]">
                <h1 className="font-extrabold leading-[130%] text-5xl font-display text-black-200">Encontre o café perfeito para qualquer hora do dia</h1>
                <p className="text-black-200 text-xl leading-[130%] font-normal font-mono ">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
              </div>
    
              <div className="w-[567px] h-[84px] flex gap-10 ">
    
                  <div className="flex flex-col gap-3">
    
                    <span className="flex items-center gap-3 font-normal font-mono">
                      <ShoppingCart className="text-white-100 bg-yellow-300 p-2 rounded-[20px]" size={32} weight="fill"/>
                      Compra simples e segura
                    </span>
    
                    <span className="flex items-center gap-3 font-normal font-mono" >
                    <Timer className="text-white-100 bg-yellow-200  p-2 rounded-[20px]" size={32} weight="fill" />
                      Entrega rápida e rastreada
                    </span>
    
                  </div>
    
                  <div className="flex flex-col gap-3">
    
                  <span className="flex items-center gap-3 font-normal font-mono">
                  <Package className=" text-white-100 bg-gray-100 p-2 rounded-[20px]" size={32} weight="fill" />
                  Embalagem mantém o café intacto
                  </span>
    
                  <span className="flex items-center gap-3 font-normal font-mono ">
                  <Coffee className=" text-white-100 bg-purple-200 p-2 rounded-[20px]" size={32} weight="fill" />
                  O café chega fresquinho até você
                  </span>
    
                  </div>
              </div>
    
            </div>
    
            <div>
              <img src={imageSection} alt="" />
            </div>
    
        </section>
    
        <main className=" bg-white-100 px-40 pb-30 pt-15 ">
            <h2 className="text-[32px] leading-[130%] text-black-100 font-display font-extrabold  pb-14">Nossos cafés</h2>
    
            <div className="w-full flex flex-wrap gap-x-6.5 gap-y-10 content-start">
              {
                coffees.map((coffee) => {
                  return <Card key={coffee.name} image={coffee.image} categories={coffee.categories} name={coffee.name} description={coffee.description} price={coffee.price}/>
                })
              }
            </div>
    
        </main>
        </>
        
      )
}