import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { Input } from "../components/Input";
import { useContext, useEffect, useState } from "react";
import { classMerge } from "../utils/classMerge";
import { ShopCartItems } from "../components/ShopCartItems";
import { z} from 'zod'
import { useForm, FormProvider} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";
import { Address, ShopCartContext } from "../contexts/shopCart";


type Methods = {
    isCreditSelected: boolean
    isDebitSelected: boolean
    isMoneySelected: boolean
}

export enum PaymentMethods  {
    credit = "Cartão de Crédito",
    debit= 'Cartão de Débito',
    money = 'Dinheiro'
}

// type FormData = {
//     cep: number
//     street: string
//     residenceNumber: number
//     complement?: string
//     neighborhood: string
//     city: string
//     uf: string
// }

const formSchema = z.object({
    cep: z.string(),
    rua: z.string(),
    numero: z.string(),
    complemento: z.string().optional(),
    bairro: z.string().min(3),
    cidade: z.string().min(3),
    uf: z.string().min(2).max(2),
    
})

export type FormData = z.infer<typeof formSchema>

export function OrderConfirm(){
    const navigate = useNavigate()

    const {addNewAddress, items, handleRemoveLoading} = useContext(ShopCartContext)

    const newFormData = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        cep: undefined ,
        rua: '',
        numero: undefined,
        complemento: '',
        bairro: '',
        cidade: '',
        uf: ''
        }
    })

    const {handleSubmit, watch} = newFormData
    

    const [wichMethodIsSelected, setWichMethodIsSelected] = useState<Methods>({
        isCreditSelected: false,
        isDebitSelected: false,
        isMoneySelected: false
    })
    const [activeMethod, setActiveMethod] = useState<PaymentMethods | null>(null)
    const [isDeliveryValueDisabled, setIsDeliveryValueDisabled] = useState(false)
    

    function handleSelected(event: React.MouseEvent<HTMLButtonElement, MouseEvent>){

        if (event.currentTarget.name === 'credit') {

            if (wichMethodIsSelected.isCreditSelected) {
                
                setWichMethodIsSelected({
                    isCreditSelected: false,
                    isDebitSelected: false,
                    isMoneySelected: false
                })
                
                setActiveMethod(null)
                return
            }
            
            setWichMethodIsSelected({
                isCreditSelected: true,
                isDebitSelected: false,
                isMoneySelected: false
            })

            setActiveMethod(PaymentMethods.credit)
        }

        if (event.currentTarget.name === 'debit') {

            if (wichMethodIsSelected.isDebitSelected) {
                
                setWichMethodIsSelected({
                    isCreditSelected: false,
                    isDebitSelected: false,
                    isMoneySelected: false
                })

                setActiveMethod(null)
                return
            }

            setWichMethodIsSelected({
                isCreditSelected: false,
                isDebitSelected: true,
                isMoneySelected: false
            })

            setActiveMethod(PaymentMethods.debit)
        }

        if (event.currentTarget.name === 'money') {

            if (wichMethodIsSelected.isMoneySelected) {
                
                setWichMethodIsSelected({
                    isCreditSelected: false,
                    isDebitSelected: false,
                    isMoneySelected: false
                })

                setActiveMethod(null)
                return
            }
            
            setWichMethodIsSelected({
                isCreditSelected: false,
                isDebitSelected: false,
                isMoneySelected: true
            })

            setActiveMethod(PaymentMethods.money)
        }
    }

   function submit(data: FormData){
    
    if (!activeMethod) {
        
        return alert('Escolha um método de pagamento')

        
    }
    

    if (items.length <= 0) {
        return alert('Não há nenhum pedido no carrinho')
    }
    
    const newAddress: Address = {
        
        bairro: data.bairro.toLowerCase(),
        cidade: data.cidade.toLowerCase(),
        numero: data.numero,
        rua: data.rua.toLowerCase(),
        uf: data.uf.toUpperCase(),
        metodo: activeMethod
    }

    setTimeout(() => {
        
        handleRemoveLoading(true)
        navigate('/coffee-delivery/orderconfirm', {state: {fromSubmit: true}})
        addNewAddress(newAddress)
    }, 1000);

    handleRemoveLoading(false)


    

   }

   

   const cep = watch('cep')

   useEffect(() => {
    
    watch((data) => {
        if (data.cep?.length === 9) {

            setIsDeliveryValueDisabled(true)
            
        }else {

            setIsDeliveryValueDisabled(false)
        }
    })
    
   }, [watch, cep])

    return <FormProvider {...newFormData}>
     <form className="pt-20" onSubmit={handleSubmit(submit)}  >

       <main className="w-full bg-white-100 px-[160px] pt-14 ">

        <div className="pb-16 flex items-start gap-12 ">



        <section className="max-w-[640px] max-h-[591px] flex flex-col gap-4 ">

        <h4 className="font-display font-bold text-[18px] leading-[130%] text-black-100 pb-3.5">Complete seu pedido</h4>

            <div className="w-full bg-white-200 p-10 rounded-[6px]">

                <div className="flex flex-col gap-2.5">

                    <div className="flex gap-2.5">
                        <MapPinLine className="text-yellow-300" size={22}/>
                        <span className="flex flex-col font-mono text-[16px] leading-[130%] text-black-100">
                            Endereço de Entrega
                            <p className="font-mono text-[14px] leading-[130%] text-gray-100">Informe o endereço onde deseja receber o pedido</p>
                        </span>
                    </div>

                
                    <div  className="flex flex-col gap-4">

                    <div>
                        <Input   required  maxLength={9}  label="CEP"/>
                        
                        
                      
                    </div>
                    
                    
                    <div >
                        <Input  required inputVariant="rua" divVariant="rua" label="Rua"/>
                        </div>

                    <div className="flex gap-3">
                        <Input   required  maxLength={3} inputVariant="numero" label="Número"/>

                        <Input   inputVariant="complemento" divVariant="complemento" placeholder="Opcional" label="Complemento"/>
                        </div>

                        <div className="flex gap-3">
                        <Input  required inputVariant="bairro"  label="Bairro"/>
                        <Input   required inputVariant="cidade" divVariant="cidade" label="Cidade"/>
                        <Input  required  maxLength={2} inputVariant="uf" divVariant="UF" label="UF"/>
                        </div>

                    </div>
                    

                </div>

            </div>

            <div className="w-full bg-white-200 p-10 rounded-[6px]">

            <div className="flex flex-col gap-2.5">

                        <div  className="flex gap-2.5 pb-[32px]">
                            <CurrencyDollar className="text-purple-200" size={22}/>
                            <span className="flex flex-col font-mono text-[16px] leading-[130%] text-black-100">
                                Pagamento
                                <p className="font-mono text-[14px] leading-[130%] text-gray-100">O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                            </span>
                        </div>

                        
                        <div className="flex gap-3">
                            
                        <div className="bg-gray-300 w-[178.67px] rounded-[6px] ">
                        <button type="button" name="credit" onClick={(event) => handleSelected(event)} className={classMerge([" w-full cursor-pointer font-mono text-xs leading-[160%] flex items-center justify-center p-[16px] h-[51px] rounded-[6px] gap-2.5", wichMethodIsSelected.isCreditSelected? 'bg-purple-100 outline-2 outline-purple-200': ''])}>
                            <CreditCard className="text-purple-300" size={22}/>
                            CARTÃO DE CRÉDITO
                        </button>

                        </div>

                        <div className="bg-gray-300 w-[178.67px] rounded-[6px] ">
                        <button type="button" name="debit" onClick={handleSelected} className={classMerge([" w-full cursor-pointer font-mono text-xs leading-[160%] flex items-center justify-center p-[16px] h-[51px] rounded-[6px] gap-2.5", wichMethodIsSelected.isDebitSelected? 'bg-purple-100 outline-2 outline-purple-200': ''])}>
                            <Bank className="text-purple-300" size={22}/>
                            CARTÃO DE DÉBITO
                        </button>
                        </div>

                        <div className="bg-gray-300 w-[178.67px] rounded-[6px] ">
                        <button type="button" name="money" onClick={handleSelected} className={classMerge(["w-full cursor-pointer font-mono text-xs leading-[160%] flex items-center justify-center p-[16px] h-[51px] rounded-[6px] gap-2.5", wichMethodIsSelected.isMoneySelected? 'bg-purple-100 outline-2 outline-purple-200': ''])}>
                            <Money className="text-purple-300" size={22}/>
                            DINHEIRO
                        </button>
                        </div>


                        </div>

                    </div>

            </div>

        </section>


        <section className="w-[448px] flex flex-col gap-4 ">

            <h4 className="font-display font-bold text-[18px] leading-[130%] text-black-100 pb-3.5">Cafés selecionados</h4>

            <div className="w-full p-10 flex gap-6 bg-white-200 rounded-tl-[6px] rounded-tr-[44px] rounded-bl-[44px] rounded-br-[6px]">
                <ShopCartItems IsDeliveryDisabled={isDeliveryValueDisabled}/>
            </div>

        </section>


        </div>

       </main>

    </form>
    </FormProvider>
}