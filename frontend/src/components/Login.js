"use client";
import { googleSignIn } from "@/firebase/firebase";
import { useState } from "react";
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

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div className="flex flex-col items-center justify-center p-4">
      {user ? (
        <div className="text-center">
          <h2 className="text-xl font-bold">Welcome, {user.displayName}!</h2>
          <p>Email: {user.email}</p>
          <button onClick={handleSignOut} className="mt-4 btn w-full max-w-xs">
            Sign Out
          </button>
        </div>
      ) : (
        <div className="text-center">
          <button onClick={handleSignIn} className="btn w-full max-w-xs" disabled={loading}>
            {loading ? "Signing in..." : "Sign in with Google"}
          </button>
          
        </div>
      )}
    </div>
  );
}
