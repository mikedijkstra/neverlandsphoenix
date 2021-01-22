import 'tailwindcss/tailwind.css'
import Main from '../components/Main.js'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Main>
      <Component {...pageProps} />
    </Main>
  )
}

export default MyApp
