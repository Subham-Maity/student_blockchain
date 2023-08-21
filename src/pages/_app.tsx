import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {AuthContextProvider} from '@/context/AuthContext'
import { useRouter } from 'next/router'
import Navbar from "@/components/Navbar";
import ProtectedRoute from "@/components/ProtectedRoute";
const noAuthRequired = ['/', '/login', '/signup']
import "@biconomy/web3-auth/dist/src/style.css"

export default function App({Component, pageProps}: AppProps) {
    const router = useRouter()
    return (<AuthContextProvider>
        {/* <Navbar/> */}
        {noAuthRequired.includes(router.pathname) ? (
            <Component {...pageProps} />
        ) : (
            <ProtectedRoute>
                <Component {...pageProps} />
            </ProtectedRoute>
        )}
    </AuthContextProvider>)
}
