import {useState} from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

export default function Slider({slides}){
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex===0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex -1
        setCurrentIndex(newIndex)
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    return<div className='max-w-[1400px] h-[400px] w-full m-auto relative group bg-google-green mb-8'>
        <div style={{backgroundImage:`url(${slides[currentIndex].url})`}} className="w-full h-full bg-center bg-contain bg-no-repeat duration-500"></div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer  ">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer  ">
            <BsChevronCompactRight onClick={nextSlide} size={30}/>
        </div>
        <div className=" flex top-4 justify-center py-2 bg-black/5">
            {slides.map((_, slideIndex)=>(
                <div key={slideIndex} onClick={()=> setCurrentIndex(slideIndex)} className= "text-2xl cursor-pointer">
                    <RxDotFilled />
                </div>
            ))}
        </div>
    
    </div>
}