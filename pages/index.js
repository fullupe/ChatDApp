import Head from 'next/head';
import Login from '../components/Login';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useMoralis } from "react-moralis";
import Loader from "react-loader-spinner";
import Header from '../components/Header';
import Messages from '../components/Messages';

import {signIn, signOut, useSession } from "next-auth/client"

export default function Home() {


  const [session, loading] = useSession();

  const {isAuthenticated, logout, isInitializing} = useMoralis(); 


  // if(!isAuthenticated && !session  ) return <Login/>

  if(!isAuthenticated) return <Login/>

  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-200 overflow-hidden">
      <Head>
        <title>MetaVerse App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      {isInitializing || loading ? ( 
      <div className="flex justify-center items-center lg:justify-center lg:items-center">
       <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}/> 
      </div>):(
      // <div className="h-screen overflow-y-scroll">
        <div className="max-w-screen-2xl mx-auto">
          {/* Header */}
          <Header/>

          {/* Messages */}

          <Messages/>

          {/* </div> */}
        {/* <h1>welcome to metaverse</h1> */}

        {/* <button className="bg-red-500 rounded-lg p-5" onClick={logout}>LogOut</button> */}
        </div>
      )
}
    </div>

    
  )
}
