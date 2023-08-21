import React,{useRef} from 'react';
import StudentTable from "@/components/table/studentTable";
import {useState} from "react";
import InputStudent from "@/components/card/inputStudent";
import  Navbar  from '@/components/Navbar';
import SocialLogin from "@biconomy/web3-auth"
import { useAuth } from '@/context/AuthContext';
import SmartAccount from '@biconomy/smart-account';


const Index = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const sdkRef = useRef<SocialLogin | null>(null)
    const {setSmartAccount,smartAccount,studentData}=   useAuth();
    const logout = async () => {
        
        setSmartAccount(null)
        // enableInterval(false)
      }
    //   console.log("smart account from dashboaed",smartAccount)
    return (
        <>
        <Navbar/>
        <div className="flex w-full  bg-gray-100 flex-col  gap-4 items-center">
            
            <h1 className="text-2xl mt-5 underline font-bold">Student Details</h1>
            <div className='flex w-full p-[3rem] pt-1 '>
                <StudentTable studentData={studentData}/>

            </div>

            {/* {
                showModal && (
                    <div
                        className="w-screen bg-black/50 h-screen absolute top-0 left-0 flex justify-center items-center overflow-hidden">
                        <InputStudent setStudentData={studentData} onClose={(value) => setShowModal(value)}/>
                    </div>
                )
            } */}
        </div>
        </>
        

    );
};

export default Index;