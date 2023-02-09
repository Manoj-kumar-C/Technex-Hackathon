import Head from 'next/head'
import Ads from '../components/Ads'
import '../styles/globals.css'
import '../styles/styles.css'
import '../styles/profile.css'  
import '../styles/badge.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    {/* <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        /> */}
    </Head>
  <Component {...pageProps} />
  <Ads/>
  </>
  )
}

export default MyApp
