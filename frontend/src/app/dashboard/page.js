'use client';
import { useEffect } from "react";
import { UserAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Landing()
{
    const { user } = UserAuth();
    const router = useRouter(); // Initialize the router


      useEffect( () => 
      {
        if (!user)
        {
          router.push("/");
        }
      }
    
      ), [user];

    return (
    <div>
        

    </div>);
}