import {Slider} from '../../components'
import Local1 from '../../assets/nuestrocolegio/local/Local1.jpg'
import Local2 from '../../assets/nuestrocolegio/local/Local2.jpg'
import Local3 from '../../assets/nuestrocolegio/local/Local3.jpeg'
import Local4 from '../../assets/nuestrocolegio/local/Local4.jpg'
import Local5 from '../../assets/nuestrocolegio/local/Local5.jpg'
import Local6 from '../../assets/nuestrocolegio/local/Local6.jpg'

export default function Home(){
    const slides = [
        {
            url : Local1,
        },
        {
            url : Local2,
        },
        {
            url : Local3,
        },
        {
            url : Local4,
        },
        {
            url : Local5,
        },
        {
            url : Local6,
        },
    ]

    return(
        <>
            <Slider slides={slides} />
        </>
    )
}