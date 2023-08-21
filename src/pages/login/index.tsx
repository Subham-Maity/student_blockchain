import React from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const LoginPage = () => {
  const SocialLoginDynamic = dynamic(
    () => import("@/components/Auth").then((res) => res.default),
    {
      ssr: false,
    }
  );

  return (
    <div>
       <Suspense fallback={<div>Loading...</div>}>
        <SocialLoginDynamic />
      </Suspense>
    </div>
  );
};
export default LoginPage;
