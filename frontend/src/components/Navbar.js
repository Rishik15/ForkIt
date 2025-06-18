"use client"
import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
//check if logged in
import { UserAuth } from "@/context/AuthContext";
import Image from "next/image";

export default function Navbar()
{
    const { user, googleSignIn, logOut } = UserAuth();
    const [loading, setLoading] = useState(true);
  
    const handleSignIn = async () => {
      try {
        await googleSignIn();
      } catch (error) {
        console.log(error);
      }
    };
  
    const handleSignOut = async () => {
      try {
        await logOut();
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      const checkAuthentication = async () => {
        await new Promise((resolve) => setTimeout(resolve, 50));
        setLoading(false);
      };
      checkAuthentication();
    }, [user]);
  

    return (
        <>
        <div className="navbar bg-base-100 shadow-sm">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                <li><Link href="/about">About</Link></li>
                <li><Link href="/">Homepage</Link></li>
              </ul>
            </div>
          </div>
          <div className="navbar-center">
          </div>
          <div className="navbar-end">
            {loading ? null : user ? (
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    {user.photoURL && (
                      <img
                        src={user.photoURL}
                        alt="User Profile"
                        className="profile-picture"
                      />
                    )}
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                {/* <li><Link href="/main">Homepage</Link></li>
                 
                  <li><a>Settings</a></li> */}


                  <li onClick={handleSignOut}><a>Logout</a></li>
                </ul>
              </div>
            ) : (<div></div>)}
          </div>
        </div>
        </>
    )
}
