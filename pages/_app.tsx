import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import '../styles/globals.css'


// Con este type definimo nuestro layout que como vemos puede ser opcional que tenga el layout
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
  //getLayout?: (page: JSX.Element) => JSX.Element  asi tambien se puede
  //getLayout?: (page: ReactNode) => ReactNode  asi tambien se puede
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
