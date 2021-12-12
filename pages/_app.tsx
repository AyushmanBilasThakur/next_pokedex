import BaseTemplate from '../components/baseTemplate'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <BaseTemplate>
      <Component {...pageProps} />
    </BaseTemplate>
  )
}

export default MyApp
