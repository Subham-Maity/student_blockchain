import React from 'react'
import { useState, useEffect, useRef } from 'react'
import SocialLogin from "@biconomy/web3-auth"
import { ChainId } from "@biconomy/core-types";
import { ethers } from 'ethers'
import SmartAccount from "@biconomy/smart-account";
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/router';
import { IBundler, Bundler } from "@biconomy/bundler";
import { IPaymaster, BiconomyPaymaster } from "@biconomy/paymaster";
import {
  BiconomySmartAccount,
  BiconomySmartAccountConfig,
  DEFAULT_ENTRYPOINT_ADDRESS,
} from "@biconomy/account";
const Auth = () => {

const {loading,setLoading,smartAccount,setSmartAccount}=useAuth();

    const router = useRouter()

    useEffect(() => {
        if (smartAccount) {
            router.push('/dashboard')
        }
    }, [smartAccount])

    

const [interval, enableInterval] = useState(false)
const sdkRef = useRef<SocialLogin | null>(null)
const [provider, setProvider] = useState<any>(null)


useEffect(() => {
  let configureLogin:any
  if (interval) {
    configureLogin = setInterval(() => {
      if (!!sdkRef.current?.provider) {
        setupSmartAccount()
        clearInterval(configureLogin)
      }
    }, 1000)
  }
}, [interval])
async function login() {
  setLoading(true)
  if (!sdkRef.current) {
    const socialLoginSDK = new SocialLogin()
    const signature1 = await socialLoginSDK.whitelistUrl('http://127.0.0.1:5173/')
    await socialLoginSDK.init({
      chainId: ethers.utils.hexValue(ChainId.POLYGON_MUMBAI).toString(),
      network: "testnet",
      whitelistUrls: {
        'http://127.0.0.1:5173/': signature1,
      }
    })
    sdkRef.current = socialLoginSDK
  }
  if (!sdkRef.current.provider) {
    sdkRef.current.showWallet()
    enableInterval(true)
  } else {
    setupSmartAccount()
  }
}

async function setupSmartAccount() {
  if (!sdkRef?.current?.provider) return
  sdkRef?.current?.hideWallet()
  setLoading(true)
  const web3Provider = new ethers.providers.Web3Provider(
    sdkRef.current.provider
  )
  setProvider(web3Provider)


  // try {
  //   console.log("in the Auth 1")
  //   const biconomySmartAccountConfig: BiconomySmartAccountConfig = {
  //     signer: web3Provider.getSigner(),
  //     chainId: ChainId.POLYGON_MUMBAI,
  //     bundler: bundler,
  //     paymaster: paymaster,
  //   };
  //   console.log("in the Auth 2",biconomySmartAccountConfig)
  //   let biconomySmartAccount = new BiconomySmartAccount(
  //     biconomySmartAccountConfig
  //   );
  //   console.log("in the Auth 3")
  //   biconomySmartAccount = await biconomySmartAccount.init();
  //   console.log("owner: ", biconomySmartAccount.owner);
  //   console.log(
  //     "address: ",
  //     await biconomySmartAccount.getSmartAccountAddress()
  //   );
  //   console.log(
  //     "deployed: ",
  //     await biconomySmartAccount.isAccountDeployed(
  //       await biconomySmartAccount.getSmartAccountAddress()
  //     )
  //   );

  //   setSmartAccount(biconomySmartAccount);
  //   setLoading(false);
  // } catch (err) {
  //   setLoading(false);
  //   console.log("error setting up smart account... ", err);
  // }

  try {
    const smartAccount = new SmartAccount(web3Provider, {
      activeNetworkId: ChainId.POLYGON_MUMBAI,
      supportedNetworksIds: [ChainId.POLYGON_MUMBAI],
      networkConfig: [
        {
          chainId: ChainId.POLYGON_MUMBAI,
          dappAPIKey: "your dapp api key from biconomy dashboard",
        },
      ],
    })
    await smartAccount.init()
    setSmartAccount(smartAccount)
    setLoading(false)
  } catch (err) {
    console.log('error setting up smart account... ', err)
  }
}
const logout = async () => {
  try{
    if (!sdkRef.current) {
      console.error('Web3Modal not initialized.')
      return
    }
    await sdkRef.current.logout()
    sdkRef.current.hideWallet()
    setSmartAccount(null)
    enableInterval(false)
    alert("logged out")
    console.log("from loagout")
  }catch(err){
    console.log(err);

  }
}
const bundler: IBundler = new Bundler({
  bundlerUrl:
    "https://bundler.biconomy.io/api/v2/80001/nJPK7B3ru.dd7f7861-190d-41bd-af80-6877f74b8f44c", // you can get this value from biconomy dashboard.
  chainId: ChainId.POLYGON_MUMBAI,
  entryPointAddress: DEFAULT_ENTRYPOINT_ADDRESS,
});

const paymaster: IPaymaster = new BiconomyPaymaster({
  paymasterUrl:
    "https://paymaster.biconomy.io/api/v1/80001/z6ShGyCEg.1d843195-443e-406e-a3da-480d71f1cfbe",
});
// if(!smartAccount) logout();
  return (
    <div className="w-full h-screen">
    <div className="flex h-full w-full flex-col justify-center items-center">
      <div className=" ">
        <img className="object-cover" src="/Logo.png" alt="" />
      </div>
      <button
        onClick={login}
        disabled={loading}
        className="bg-blue-800 text-lg mt-[4rem] hover:bg-blue-600  text-white font-semibold py-4 px-10 rounded focus:outline-none focus:shadow-outline"
      >
        {loading ?"Logging...":"Login"}
      </button>
      
    </div>
    {/* style */}
    <div
      className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-50rem)]"
      aria-hidden="true"
    >
      <div
        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#70a1ff] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        style={{
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
        }}
      />
    </div>
    <div
      className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      aria-hidden="true"
    >
      <div
        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style={{
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
        }}
      />
    </div>
  </div>
  )
}


export default Auth
