import Link from "next/link"
import MainLayout from "../components/layout/MainLayout"

const Contact = () => {
  return (
    <MainLayout>
        <h1 className='title'>
          Contact Page
        </h1>
        <h1 className='title'>
          Ir a <Link href="/">Home!</Link>
        </h1>
    </MainLayout>  
  )
}

export default Contact