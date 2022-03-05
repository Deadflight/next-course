import Link from "next/link"
import MainLayout from "../../components/layout/MainLayout"

const Pricing = () => {
  return (
    <MainLayout>
        <h1 className='title'>
          Pricing Page
        </h1>
        <h1 className='title'>
          Ir a <Link href="/">Home!</Link>
        </h1>
    </MainLayout>  
  )
}

export default Pricing