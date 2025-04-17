


type CategoriesProps = {

    category: string

}

export function Categories(props : CategoriesProps){

    return <span className=" w-[70px] h-[21px] rounded-[30px] bg-yellow-100 text-yellow-300 font-mono font-bold leading-[130%] text-[10px] text-center flex items-center justify-center relative top-[-12px]" >
        {props.category}
    </span>
}