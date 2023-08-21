import { createContext, useContext,useReducer, useEffect, useState } from 'react'
import axios from 'axios'
import Student from '@/types/students'
import SmartAccount from '@biconomy/smart-account'
import { BiconomySmartAccount } from "@biconomy/account";
export const initialState ={
    student:{},
    SmartAccount:BiconomySmartAccount
}

const reducer =(state:any,action:any)=>{
    if(action.type==='getStudent'){
        // console.log("called");
        // console.log(state,action);

        return {
            ...state,
            student:action.payload
        }
    }
}



const AuthContext = createContext<any>({})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({
                                        children,
                                    }: {
    children: React.ReactNode
}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const instance = axios.create({
       
        baseURL:"http://localhost:5000/api",
      });


    const [user, setUser] = useState<any>(null)
    const [smartAccount, setSmartAccount] = useState<BiconomySmartAccount | null>(null)
    const [loading, setLoading] = useState(false)
    const [showPdf, setShowPdf] = useState(false)
    const [studentData,setStudentData]=useState<any>();
    // const [student,setStudent]=useState<any>();
     
    const getStudents = async () => {
        
        try {
          const { data } = await instance(`/getStudents`);
          setStudentData(data.data);
          // console.log(data.data);
        } catch (error) {
         
          
        }
      };
      const getStudent = async (id:string) => {
        
        try {
          const { data } = await instance(`/getStudent/${id}`);
          const s=await data.data;
          // console.log(s);
        
          dispatch({type:"getStudent",payload:s});
          
        } catch (error) {
         
            const errorMessage = (error as Error).message || "Something went wrong. Please try again.";
            console.log( errorMessage);
        }
      };  
      const addUuid = async (id:string,uuid:string) => {
        
        try {
          const { data } = await instance.patch(`/adduuid/${id}`,{uuid:uuid});
           const s=await data.data;
          dispatch({type:"getStudent",payload:s});
        } catch (error) {
         
            const errorMessage = (error as Error).message || "Something went wrong. Please try again.";
            console.log( errorMessage);
        }
      };
      const UploadData = async (pdfBlob:any,filename:string) => {
        try {
          const formData = new FormData();
          formData.append('pdf', pdfBlob, filename);

          
          const { data } = await instance.post(`/upload`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
    
          dispatch({ type: 'uploadPdf', payload: data.message });
          
        } catch (error) {
          const errorMessage = (error as Error).message || "Something went wrong. Please try again.";
          console.log( errorMessage);
         
        }
      };  
      const downloadData = async (uuid:string) => {
        try {
          const response = await instance(`/downloadPdf/${uuid}`, {
            responseType: 'stream',
          });
          
          console.log(response);
        } catch (error) {
          const errorMessage = (error as Error).message || "Something went wrong. Please try again.";
          console.log( errorMessage);
         
        }
      };  

      useEffect(()=>{
        getStudents();
      },[])

    return (
        <AuthContext.Provider value={{loading,UploadData,downloadData,setLoading,state,addUuid, smartAccount,setSmartAccount, user,showPdf,setShowPdf,studentData,setStudentData,getStudent }}>
            { children}
        </AuthContext.Provider>
    )
}

// useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             setUser({
    //                 uid: user.uid,
    //                 email: user.email,
    //                 displayName: user.displayName,
    //             })
    //         } else {
    //             setUser(null)
    //         }
    //         setLoading(false)
    //     })

    //     return () => unsubscribe()
    // }, [])

    // const signup = (email: string, password: string) => {
    //     return createUserWithEmailAndPassword(auth, email, password)
    // }

    // const login = (email: string, password: string) => {
    //     return signInWithEmailAndPassword(auth, email, password)
    // }


    // const logout = async () => {
    //     setUser(null)
    //     await signOut(auth)
    // }