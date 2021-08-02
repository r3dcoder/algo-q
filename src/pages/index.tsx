import Head from 'next/head'
import Image from 'next/image'
import Header from '@components/layout/header'
import BannerSection from '@components/section/banner-section'
import Technology from '@components/section/technology'
import ProductValue from '@components/section/product-value'
import Services from '@components/section/services'
import Sliders from '@components/swiper/slider'
export default function Home() {
  return (
    <div  >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="node_modules/@glidejs/glide/dist/css/glide.core.min.css"></link>
      </Head>

      
        <Header/>
     

      <BannerSection/>
      <Technology/>
      <ProductValue/>
      <Sliders/>
      <Services/>
      <div className='w-full h-screen bg-white'> </div>
   
     
 
    </div>
  )
}