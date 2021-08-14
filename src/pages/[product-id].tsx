import Head from 'next/head'
import Image from 'next/image'
import Header from '@components/layout/header'
import BannerSection from '@components/section/banner-section'
import Technology from '@components/section/technology'
import ProductValue from '@components/section/product-value'
import Services from '@components/section/services'
import Sliders from '@components/swiper/slider'
import FreeTemplates from '@components/section/free-templates'
import Tabs from '@components/tab/tab'
import Testimonials from '@components/section/testimonials'
import { Superprops } from '@components/section/superprops'
import { ContactUs } from '@components/section/contact-us'
import { Footer } from '@components/section/footer'
import HeaderMenu from '@components/layout/header-menu'
import data from '@components/data/products.json';
import { ProductTopSection } from '@components/product/product-top-section'

export default function Home() {
  return (
    <div  >
      <Head>
        <title>Codemaster product page</title>
        <meta name="description" content="codemaster product page" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="node_modules/@glidejs/glide/dist/css/glide.core.min.css"></link>
      </Head>


      <Header logoLink={data.logo}>
        <HeaderMenu data={data.menu}
          className="hidden md:gap-6  md:flex justify-end md:mx-2 xl:mx-10" />
      </Header>

        <ProductTopSection data={data}/>
      {/* <BannerSection />
      <Technology />
      <ProductValue />
      <Sliders />
      <Services componentKey={'1'} />
 
      <FreeTemplates />
      <Tabs />
      <Testimonials />
      <Superprops /> */}
      <ContactUs />
      <Footer />




    </div>
  )
}
