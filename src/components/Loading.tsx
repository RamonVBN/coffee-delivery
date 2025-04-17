import cafeGif from '../assets/Coffee Waiting Sticker.gif'
import cafeGif2 from '../assets/Coffee Time Sticker by KUDU Coffee Roasters.gif'



export function Loading(){

    return (
        <div className='z-30 fixed top-0 left-0 bg-transparent h-scrren w-full h-full flex items-center justify-center backdrop-blur-[90px] backdrop-opacity-80 ] '>
            <div className=''>
                <div className='flex flex-col gap-3.5 items-center justify-center rounded-[20px] w-[500px] h-[250px]  '>
                    <img className='w-[250px] rounded-[15px] ' src={cafeGif} alt="" />
                    {/* <span className='font-display font-bold text-xl relative top-[-50%]'>Loading...</span> */}
                </div>
            </div>
        </div>
    )
}