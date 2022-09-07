import '../styles/globals.css'
import Header from './header'

function MyApp({ Component, pageProps }) {

  return<>
  
       <Header/>
      <Component {...pageProps} />
   </>
}

export default MyApp
