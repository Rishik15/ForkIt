"use client";
import { googleSignIn } from "@/firebase/firebase";
import { useState, useEffect } from "react";
import { UserAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Login() {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(false);
//   const [code, setCode] = useState("");
//   const [isCodeEntered, setIsCodeEntered] = useState(false);
  const router = useRouter(); // Initialize the router

  const handleSignIn = async () => {
    try {
      setLoading(true);
      await googleSignIn();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect( () => 
  {
    if (user)
    {
      router.push("/dashboard");
    }
  }

  ), [user];

  // const handleSignOut = async () => {
  //   try {
  //     await logOut();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };




  // If not logged in, show sign in button, otherwise show nothing
  return (
    <div className="flex flex-col items-center justify-center p-4">
      {user ? (

        // <div className="text-center">
        //   <h2 className="text-xl font-bold">Welcome, {user.displayName}!</h2>
        //   <p>Email: {user.email}</p>
        //   <button onClick={handleSignOut} className="mt-4 btn w-full max-w-xs">
        //     Sign Out
        //   </button>
        // </div>

          <div></div>

      ) : (
        <div className="text-center">
          <button onClick={handleSignIn} className="rounded-md  px-3.5 py-2.5 text-sm font-semibold  shadow-xs  focus-visible:outline-2 focus-visible:outline-offset-2" disabled={loading}>
            {loading ? "Signing in..." : "Sign in with Google"}
          </button>
          
        </div>
      )}
    </div>
  );
}
