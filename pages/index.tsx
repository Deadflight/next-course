import MainLayout from '../components/layout/MainLayout'
import Link from "next/link"

export default function Home() {
  return (
    <MainLayout >
              <h1 className='title'>
          Home Page
        </h1>
        <h1 className='title'>
          Ir a <Link href="/about">About!</Link>
        </h1>
        <h1 className='title'>
          Ir a <Link href="/contact">Contact!</Link>
        </h1>
    </MainLayout>
  )
}
