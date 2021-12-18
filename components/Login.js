import Image from "next/image";

import { useMoralis } from "react-moralis";
//import {signIn, signOut, useSessions } from "next-auth/client";
//import { useSession, signIn, signOut } from "next-auth/react"
import { signIn, signOut, useSession } from 'next-auth/client'


function Login() {

    const {authenticate} = useMoralis();
  return (
    <div className="bg-black relative text-whitee"> 
      <h1>i am the login screen </h1>
 
      <div className="flex flex-col absolute z-50 h-4/6 items-center justify-center w-full space-y-4">
          {/* logo */}
          <Image
          className="object-cover rounded-full" 
          src="https://res.cloudinary.com/fullupe/image/upload/v1619900542/YOUTUB-J-E-G/logo_1_vv5bgl.png" 
          objectFit="fill"
          height={200} 
          width={200}/>

          {/* login button */}
          <button onClick={authenticate} className="text-white bg-[#EE4444] rounded-lg p-5 font-bold animate-pulse">Login To The MetaVerse</button>
          {/* <button onClick={signIn} className="text-white bg-[#EE4444] rounded-lg p-5 font-bold animate-pulse">Login To Google</button> */}

      </div>

      <div className="w-full h-screen"> 
          {/* login forms */}
          <Image src="https://res.cloudinary.com/fullupe/image/upload/v1639770296/jegmetavers_ocvrts.jpg"
          layout="fill"
          objectFit="cover"
          />
      </div>

    </div>
  )
}

export default Login
