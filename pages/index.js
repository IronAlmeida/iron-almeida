import Head from 'next/head'
import Link from 'next/link'
import {AiFillGithub, AiOutlineWhatsApp, AiOutlineInstagram} from "react-icons/ai"
import {BsChevronDoubleDown} from "react-icons/bs"

export default function Home() {
  return (
    <>
      <Head>
        <title>Iron Almeida - Portfólio</title>
        <meta name="description" content="Portfólio pessoal " />
        <link rel="icon" href="/I.a-icon.ico" />
      </Head>

      <section className='w-5/6 rounded-3xl fixed top-3 left-1/2 -translate-x-2/4 z-10 py-3'>
          <div className='flex justify-between mx-2'> {/*Flex para organizar cabeçalho*/}
            <Link href="#"><img src="/logo-ia-80.png" width={80} heigth={60}/></Link>

            <nav className='flex py-2 items-center'>
              <li className='text-white text-lg font-medium ml-16'><Link href="#">Inicio</Link></li>
              <li className='text-white text-lg font-medium ml-16'><Link href="#">Sobre</Link></li>
              <li className='text-white text-lg font-medium ml-16'><Link href="#">Projetos</Link></li>
              <li className='text-white text-lg font-medium ml-16'><Link href="#">Habilidades</Link></li>
              <li className='text-white text-lg font-medium ml-16'><Link href="#">Contato</Link></li>
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
