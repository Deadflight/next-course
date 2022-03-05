import Link from 'next/link'
import React from 'react'
import DarkLayout from '../components/layout/DarkLayout'
import MainLayout from '../components/layout/MainLayout'


const About = () => {
  return (
    <>
      <h1 className='title'>
        About Page
      </h1>
      <h1 className='title'>
        Ir a <Link href="/">Home!</Link>
      </h1>
    </>
  )
}


// Con esta funcion podemos usar el layout que queramos, nos sirve por si queremos 
// utilizar diferentes layouts o layouts anidados en nuestra app
About.getLayout = function getLayout( page: JSX.Element ) {
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}

export default About