"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { signout } from "@/lib/auth-actions";

const LoginButton = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  const supabase = createClient();
  
  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    fetchUser();
  }, []);

  if (user) {
    return (
      <Button
        onClick={() => {
          signout();
          setUser(null);
        }}
        className={`flex justify-center items-center bg-white bg-opacity-10 shadow-lg shadow-black/10 backdrop-blur-sm rounded-3xl border border-mypink h-20 w-72 text-2xl font-bold text-white text-center`}
      >
        Log out
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      onClick={() => {
        router.push("/login");
      }}
      className={`flex justify-center items-center bg-white bg-opacity-10 shadow-lg shadow-black/10 backdrop-blur-sm rounded-3xl border border-mypink h-20 w-72 text-2xl font-bold text-white text-center`}
    >
      Login
    </Button>
  );
};

export default LoginButton;