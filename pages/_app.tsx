import Router from 'next/router'
import { useState } from 'react'
import BaseTemplate from '../components/baseTemplate'
import '../styles/globals.css'
import Loading from '../components/loading';
function MyApp({ Component, pageProps }) {
  
  const [loading, setloading] = useState(false)

  Router.events.on("routeChangeStart", () => {
    setloading(true)
  })

  Router.events.on("routeChangeComplete", () => {
    setloading(false)
  })

  return (
    <BaseTemplate>
      {
        loading? 
        <Loading />
        :
        <Component {...pageProps} />
      }
      
    </BaseTemplate>
  )
}

export default MyApp
