import Image from 'next/image'
import React from 'react'
import { useMoralis } from 'react-moralis'
import Avatar from './Avatar'
import ChangeUsername from './ChangeUsername';
import Modal from './Modal';
import {signIn, signOut, useSession } from "next-auth/client"

function Header() {
    const {user} = useMoralis()
    const [session] = useSession();
  return (
    <div className="sticky top-0 z-50 p-5 bg-black shadow-sm text-[#ee4444] border-[#ee4444]">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
          <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
              <Image
              layout="fill"
              objectFit="fill"
              className="rounded-full " 
              src="https://res.cloudinary.com/fullupe/image/upload/v1619900542/YOUTUB-J-E-G/logo_2_ljfait.png"/>
          </div>



        <div className="col-span-4 text-left lg:text-center">
        <div className="relative h-48 w-48 lg:mx-auto border-[#ee4444] border-8 rounded-full ">
        <Avatar logoutOnpress logoutOnpressG/>
        </div>
        {/* welcome */}

        <h1 className="text-3xl">Welcome to J-E-G MetaVerse</h1>
        <h2 className="text-5xl font-bold uppercase truncate">{user?.getUsername() || session?.user?.name}</h2>

        
        {/* <ChangeUsername/> */}
        {/* {
          !session && <Modal/>
        } */}

        <Modal/>
        

        </div>

      </div>
    </div>
  )
}

export default Header
