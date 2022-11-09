import '../styles/globals.css'
import { Roboto, Raleway } from '@next/font/google'

const roboto = Roboto({
  weight: '400'
})
const raleway = Raleway({
  weight: '400'
})

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${raleway.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
