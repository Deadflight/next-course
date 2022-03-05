// Nuestro Active link para nuestro Navbar

import Link from "next/link"
import { useRouter } from "next/router"
import { CSSProperties, FC } from "react"

  // Dejamos el style fuera para que nunca este siendo preprocesado ya que siempre es el mismo objeto
  // CSSProperties es una interface que nos permite definir propiedades de un objeto 
  const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline',
  }


interface Props {
  text: string,
  href: string
}

const ActiveLink: FC<Props> = ({ text, href }) => {

  // usamos asPath para saber en que ruta nos encontramos
  const { asPath } = useRouter()

  return (
    <Link href={ href }>
      <a style={ asPath === href ? style : undefined } >{text}</a>
    </Link>
  )
}

export default ActiveLink