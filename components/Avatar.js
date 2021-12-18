import Image from "next/image"
import { useMoralis } from "react-moralis"

import {signIn, signOut, useSession } from "next-auth/client"


function Avatar({username,logoutOnpress, logoutOnpressG}) {

    const {user, logout} = useMoralis()
  return <Image
  className="rounded-full bg-black cursor-pointer hover:opacity-75"
       src={`https://avatars.dicebear.com/api/pixel-art/${username || user?.get("username")}.svg`}

       layout="fill"
       onClick={()=>logoutOnpress && logout()}
  />
}

export default Avatar
