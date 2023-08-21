import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useAuth } from '@/context/AuthContext'

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { smartAccount } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!smartAccount) {
            console.log("smart Account from protected", smartAccount);
            router.push('/')
        }
    }, [smartAccount])

    return <>{children}</>
}

export default ProtectedRoute