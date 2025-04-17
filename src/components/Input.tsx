

import { useFormContext } from "react-hook-form"
import { classMerge } from "../utils/classMerge"
import { useState } from "react"




export type InputProps = React.ComponentProps<'input'>  & {
    label: string
    divVariant?: 'rua' | 'complemento' |'cidade' |'CepNumeroBairro' | 'UF'
    inputVariant?: 'cep' | 'rua' | 'numero' | 'complemento' | 'bairro' | 'cidade' | 'uf'

}



const variants = {

    div: {
        rua:'w-full',
        complemento:'w-[348px]',
        cidade:'w-[276px]',
        CepNumeroBairro: 'w-[200px]',
        UF:'w-[60px]'
    },

    inputs: {
        cep: 'w-[72%] right-[-5%]',
        rua: 'w-[90%] right-[-3%]',
        numero: 'w-[65%] right-[-3%] ',
        complemento: 'w-[68%] right-[-3%]',
        bairro: 'w-[72%] right-[-3%]',
        cidade: 'w-[75%] right-[-3%] ',
        uf: 'w-[48%] right-[-5%]'
    }
}

export function Input({ label, divVariant = 'CepNumeroBairro', inputVariant = 'cep' , ...rest}: InputProps){
  
    const {register, setValue} = useFormContext()
    const [isInputOnFocus, setIsInputOnFocus] = useState(false)
    const [cepHistory, setCepHistory] = useState(false)

    function OnFocus(){
    
        setIsInputOnFocus(true)
    
      
    }
    
    function OnFocusOut(){
        setIsInputOnFocus(false)
    }    

    function formatInput(value: string, name: string ){


        if (name.includes('cep') || name.includes('numero')) {
            
                   const inputValue = value.split('')

                   
            
                //    inputValue.map((letter) => {
                //     if (isNaN(Number(letter))) {
                        
                //         console.log(letter)
                //     }
                //    })
            
                   const inputValueFiltered = inputValue.filter((letter) => letter === '-' || !isNaN(Number(letter) ))


                   if (name.includes('cep')) {
                    
                    if (inputValueFiltered.length === 5) {

                        if (cepHistory) {
                        
                            return

                        }else{

                            inputValueFiltered.push('-')
                        }

                             
                    }

                    

                   }

                   value =  inputValueFiltered.join('')
                  
                   if (inputValueFiltered.length >= 5) {

                    setCepHistory(true)

                   }else {

                    setCepHistory(false)
                   }
                   

                
                   return setValue(name, value)

               }else{

                const inputValue = value.split('')
            
                //    inputValue.map((letter) => {
                //     if (isNaN(Number(letter))) {
                        
                //         console.log(letter)
                //     }
                //    })
            
                   const inputValueFiltered = inputValue.filter((letter) => isNaN(Number(letter)))
            
                   value =  inputValueFiltered.join('')
                   return setValue(name, value)


               }
            
         }

    return <div className={classMerge(["bg-gray-50 h-[42px]  rounded-[4px] "], variants.div[divVariant], isInputOnFocus? 'outline-2 outline-yellow-300': '' )}>
        <label className=" relative top-[20%] pl-2 font-mono text-[14px] leading-[130%] text-gray-100" htmlFor={label}>{label}</label>  

        <input  autoComplete="off" 
    
            {...register(inputVariant)}

            onChange={(e) => formatInput(e.target
                .value, inputVariant
            )}

            onBlur={OnFocusOut}
            onFocus={OnFocus}
            {...rest} id={label}
             className={classMerge(["relative top-[20%]  placeholder:font-mono placeholder:text-[14px] placeholder:leading-[130%] placeholder:italic placeholder:relative placeholder:right-[-74%] placeholder:text-gray-100 focus:outline-none pl-2 font-mono text-[14px] leading-[130%] text-gray-100"], variants.inputs[inputVariant], inputVariant === 'uf' && 'uppercase')}
              type="text" />

    </div>

    // return <input {...rest} className={classMerge([
    //     "bg-gray-50 h-[42px] placeholder:font-mono placeholder:text-[14px] placeholder:leading-[130%] placeholder:text-gray-200 placeholder:p-[12px] rounded-[4px] focus:outline-2 focus:outline-yellow-300", variants.input[variant]
    // ])}  type="text" placeholder={placeholder} />
}