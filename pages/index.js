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

      <section id="bg" className='w-5/6 transition ease-in-out duration-500 rounded-3xl fixed top-3 left-1/2 -translate-x-2/4 z-10 py-2'>
          <div id="bg2" className='flex transition ease-in-out duration-500 justify-between mx-2'> {/*Flex para organizar cabeçalho*/}
            <Link href="#"><img src="/logo-ia-80.png" width={80} heigth={60}/></Link>

            <nav id="nav" className='flex py-2 items-center transition duration-500 ease-in-out'>
              <ul id='menu' className='flex justify-center items-center gap-10 transition duration-500 ease-in-out'>
                <li className='text-white text-lg font-medium transition duration-500 ease-in-out'><Link href="#">Inicio</Link></li>
                <li className='text-white text-lg font-medium transition duration-500 ease-in-out'><Link href="#">Sobre</Link></li>
                <li className='text-white text-lg font-medium transition duration-500 ease-in-out'><Link href="#">Projetos</Link></li>
                <li className='text-white text-lg font-medium transition duration-500 ease-in-out'><Link href="#">Habilidades</Link></li>
                <li className='text-white text-lg font-medium transition duration-500 ease-in-out'><Link href="#">Contato</Link></li>
              </ul> 
              <AiOutlineMenu id="burger" onClick={toggleMenu} className="lg:hidden text-4xl text-white cursor-pointer transition duration-500 ease-in-out" />
              <AiOutlineClose id="close" onClick={toggleMenu} className="text-4xl text-white cursor-pointer hidden transition duration-500 ease-in-out"/>
            </nav>
          </div>
      </section>

      <section className='w-full'>
        <video className="w-full absolute -z-10 hidden sm:block" src="/bg-ia-horizontal.mp4" autoPlay loop muted />
        <video className="w-full absolute -z-10 block sm:hidden" src="/bg-ia-vertical.mp4" autoPlay loop muted />
        <div className='w-full relative top-32 sm:top-20 md:top-24 lg:top-32'>
            <img className='m-auto hidden lg:hidden xl:block' src='/logo-ia-full-1190.png' width={850} height={660}/>
            <img className='m-auto hidden lg:block xl:hidden' src='/logo-ia-full-1190.png' width={600} height={466}/>
            <img className='m-auto hidden md:block lg:hidden' src='/logo-ia-full-1190.png' width={450} height={310}/>
            <img className='m-auto block md:hidden lg:hidden' src='/logo-ia-full-1190.png' width={350} height={272}/>
            <div className='w-1/3 m-auto flex justify-between relative top-8 sm:top-7 md:top-7 lg:top-8'>
              <AiOutlineWhatsApp className='text-white text-3xl'/>
              <AiFillGithub className="text-white text-3xl" />
              <AiOutlineInstagram className='text-white text-3xl'/>
            </div>
            <BsChevronDoubleDown className="w-1/4 m-auto animate-bounce relative top-28 sm:top-14 md:top-16 lg:top-20 text-white text-xl mt-2" />
        </div>
      </section>
    </>
  )
}
