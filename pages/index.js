import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import {AiFillGithub, AiOutlineWhatsApp, AiOutlineInstagram, AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
import {BsChevronDoubleDown} from "react-icons/bs"

export default function Home() {

  const toggleMenu = () => {
    const nav = document.getElementById('nav');
    const bg = document.getElementById('bg');
    nav.classList.toggle('active');
    bg.classList.toggle('active')
  }

  return (
    <>
      <Head>
        <title>Iron Almeida - Portfólio</title>
        <meta name="description" content="Portfólio pessoal " />
        <link rel="icon" href="/I.a-icon.ico" />
      </Head>

      <Script src="/bg-header.js" strategy={'lazyOnload'}></Script>

      <section id="bg" className='w-5/6 rounded-3xl fixed top-3 left-1/2 -translate-x-2/4 z-10 py-2'>
          <div id="bg2" className='flex justify-between mx-2'> {/*Flex para organizar cabeçalho*/}
            <div>
              <Link href="#"><img className='w-full' src="/logo-ia-80.png"/></Link>
            </div>

            <nav id="nav" className='flex py-2 items-center'>
              <ul id='menu' className='flex justify-center items-center gap-10'>
                <li className='text-white text-base 2xl:text-xl'><Link href="#">Home</Link></li>
                <li className='text-white text-base 2xl:text-xl'><Link href="#">Sobre</Link></li>
                <li className='text-white text-base 2xl:text-xl'><Link href="#">Projetos</Link></li>
                <li className='text-white text-base 2xl:text-xl'><Link href="#">Habilidades</Link></li>
                <li className='text-white text-base 2xl:text-xl'><Link href="#">Contato</Link></li>
              </ul> 
              <AiOutlineMenu id="burger" onClick={toggleMenu} className="lg:hidden text-4xl text-white cursor-pointer" />
              <AiOutlineClose id="close" onClick={toggleMenu} className="text-4xl text-white cursor-pointer hidden"/>
            </nav>
          </div>
      </section>

      <section className='w-full'>
        <video className="w-full absolute -z-10 hidden md:block" src="/bg-ia-horizontal.mp4" autoPlay loop muted />
        <video className="w-full absolute -z-10 block md:hidden" src="/bg-ia-vertical.mp4" autoPlay loop muted />
        <div className='w-full relative top-40 min-[421px]:top-48 min-[541px]:top-64 min-[701px]:top-80 min-[768px]:top-24 min-[1024px]:top-32'>
            <div className='w-full'>
              <img className='m-auto w-full px-2 md:w-[58%] md:px-0 lg:w-[70%] xl:w-[60%]' src='/logo-ia-full-1190.png'/>
            </div>      
        </div>
        <div className='max-[767px]:w-2/3 min-[768px]:w-1/3 m-auto flex justify-between relative max-[360px]:top-52 max-[420px]:top-60 max-[480px]:top-72 max-[540px]:top-80 max-[700px]:top-96 max-[767px]:top-[28rem] md:top-32 lg:top-32'>
          <AiOutlineWhatsApp className='text-white text-4xl min-[421px]:text-5xl min-[640px]:text-6xl min-[768px]:text-3xl min-[1024px]:text-4xl min-[1500px]:text-6xl'/>
          <AiFillGithub className="text-white text-4xl min-[421px]:text-5xl min-[640px]:text-6xl min-[768px]:text-3xl min-[1024px]:text-4xl min-[1500px]:text-6xl" />
          <AiOutlineInstagram className='text-white text-4xl min-[421px]:text-5xl min-[640px]:text-6xl min-[768px]:text-3xl min-[1024px]:text-4xl min-[1500px]:text-6xl'/>
        </div>
        <BsChevronDoubleDown className="w-1/4 m-auto animate-bounce relative max-[320px]:top-72 max-[360px]:top-80 max-[420px]:top-96 max-[480px]:top-[27rem] max-[540px]:top-[31rem] max-[600px]:top-[35rem] max-[700px]:top-[40rem] max-[767px]:top-[46rem] md:top-40 min-[890px]:top-48 min-[1024px]:top-44 min-[1220px]:top-52 min-[1280px]:top-72 min-[1500px]:top-68 text-white text-xl min-[421px]:text-3xl min-[541px]:text-4xl min-[640px]:text-5xl min-[768px]:text-xl min-[1024px]:text-2xl min-[1500px]:text-6xl mt-2" />
      </section>
    </>
  )
}
