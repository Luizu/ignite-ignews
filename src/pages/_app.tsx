import { AppProps } from 'next/app'
import Router from 'next/router';
import { Header } from '../components/Header'
import { Provider as NextAuthProvider} from 'next-auth/client'
import NProgress from 'nprogress'; // nprogress module
import 'nprogress/nprogress.css'; // styles of nprogr

import '../styles/global.scss'

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
    <Header />
    <Component {...pageProps} />
    </NextAuthProvider>
  )
}

export default MyApp
