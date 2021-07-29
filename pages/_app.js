import 'tailwindcss/tailwind.css'
import '../assets/styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <footer className='mt-8 text-center text-white'>
        <p>Powered by @manolo</p>
      </footer>
    </>
  )
}

export default MyApp
