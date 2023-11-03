import { Container, Image, Title } from "../../../components"
import Blog1 from "../../../assets/diversos/Blog1.jpg"
import Blog2 from "../../../assets/diversos/Blog2.jpg"
import Blog3 from "../../../assets/diversos/Blog3.jpg"


export default function Blog(){
    return (
        <>
          <Title title="Blog" className="bg-gray-700" />
          <Container>
            <div className="lg:flex gap-2">
            <Image src={Blog1} className="lg:w-[48%] mb-4" />
            <Image src={Blog2} className="lg:w-[48%] mb-4"/>
            </div>
            
            <Image src={Blog3} className="lg:w-[48%]"/>
          </Container>
        </>
      );
      
}