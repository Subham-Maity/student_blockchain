import React from 'react'
import { useAuth } from '@/context/AuthContext';

const index = () => {
    const {setSmartAccount}=   useAuth();
    console.log("test")
  return (
    <div>
     {setSmartAccount?"account is there ":"sx is nit there"}
    </div>
  )
}

export default index
