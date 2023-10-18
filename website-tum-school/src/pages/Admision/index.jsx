import { useParams } from "react-router-dom";

export default function Admision(){
    const {subpage} = useParams()

    return(
        <h1>{subpage} </h1>
    )
}