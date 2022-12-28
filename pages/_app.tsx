import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextIntlProvider } from "next-intl"
export default function App({ Component, pageProps }: AppProps) {
  const customErrorFunction = () => {
    return false
  }
  return (
    <NextIntlProvider
        onError={customErrorFunction}
        messages={pageProps?.messages}
      >
      <Component {...pageProps} />
    </NextIntlProvider>
  )
}
