import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Coin from '../components/Coin'
import { useState } from 'react'
import Login from './login'

const Home: NextPage = () => {
  const [showcoin, setShowCoin] = useState(false);


  //
  const showCoin= () =>{
    setShowCoin(true);
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <input type="button" onClick={showCoin} value="テストボタン"/>
      <Coin showcoin={showcoin}  setShowCoin={setShowCoin}/>     
      

    </div>
  )
}

export default Home;