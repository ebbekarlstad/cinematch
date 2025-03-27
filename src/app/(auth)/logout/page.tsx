'use client';
import React from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LogoutPage =  () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(()=> router.push("/"), 2000);
    }, []);
  return <div>You have logged out... redirecting in a second.</div>;
};

export default LogoutPage;