import dynamic from "next/dynamic";
import { Suspense } from "react";

const Index = () => {
  const SocialLoginDynamic = dynamic(
    () => import("@/components/Auth").then((res) => res.default),
    {
      ssr: false,
    }
  );

  return (
    <main>
    
      <Suspense fallback={<div>Loading...</div>}>
        <SocialLoginDynamic />
      </Suspense>
    </main>
  );
};

export default Index;
// import Image from 'next/image'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

// export default function Home() {
//   return (
//     <main className={`${inter.className}`}>

//     </main>
//   )
// }