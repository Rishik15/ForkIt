"use client";
import Image from "next/image";
import Form from "@/components/Form";
import Login from "@/components/Login";
import Navbar from "@/components/Navbar";
import { UserAuth } from "@/context/AuthContext";

export default function Home() {
  const { user } = UserAuth();
  



  return (
    <div>
      <div className="mx-auto min-w-full ">
        <div className="h-screen relative isolate overflow-hidden  px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">

          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-semibold tracking-tight text-balance  sm:text-4xl">
              Fork It
            </h2>
            <p className="mt-6 text-lg/8 text-pretty ">
              A convenient way to decide on a restaurant with your friends.
            </p>
            <p className="mt-6 text-md/6 text-pretty ">
              Log in to generate a code for a session where you and your friends can decide where to eat!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="rounded-md  px-3.5 py-2.5 text-sm font-semibold  shadow-xs  focus-visible:outline-2 focus-visible:outline-offset-2 "
              >
              {/* Login Component Handles router push to dashboard once logged in */}
                <Login></Login>
              </a>
              <a href="#" className="text-sm/6 font-semibold  hover:text-gray-100">
                Have a code ?
                <span aria-hidden="true"> →</span>
              </a>
            </div>
          </div>



          <div className="relative mt-16 h-80 lg:mt-8">
            <Image
              alt="Banner"
              src="/images/temporaryBanner.png"
              width={1824}
              height={1080}
              className="absolute top-0 left-0 w-228 max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
