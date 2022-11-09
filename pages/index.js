import { Raleway } from '@next/font/google'
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

      <section id="bg" className='w-5/6 rounded-3xl fixed z-20 top-3 left-1/2 -translate-x-2/4 py-2'>
          <div id="bg2" className='flex justify-between mx-2'> {/*Flex para organizar cabeçalho*/}
            <div className='min-[2200px]:w-[10%]'>
              <Link href="#"><img className='w-full' src="/logo-ia-80.png"/></Link>
            </div>

            <nav id="nav" className='flex py-2 items-center'>
              <ul id='menu' className='flex justify-center items-center gap-10'>
                <li className='text-white text-base 2xl:text-xl min-[2200px]:text-[32px]'><Link href="#">Home</Link></li>
                <li className='text-white text-base 2xl:text-xl min-[2200px]:text-[32px]'><Link href="#">Sobre</Link></li>
                <li className='text-white text-base 2xl:text-xl min-[2200px]:text-[32px]'><Link href="#">Projetos</Link></li>
                <li className='text-white text-base 2xl:text-xl min-[2200px]:text-[32px]'><Link href="#">Habilidades</Link></li>
                <li className='text-white text-base 2xl:text-xl min-[2200px]:text-[32px]'><Link href="#">Contato</Link></li>
              </ul> 
              <AiOutlineMenu id="burger" onClick={toggleMenu} className="lg:hidden text-4xl text-white cursor-pointer" />
              <AiOutlineClose id="close" onClick={toggleMenu} className="text-4xl text-white cursor-pointer hidden"/>
            </nav>
          </div>
      </section>

      <section className='w-full h-[27rem] min-[300px]:h-[29rem] min-[320px]:h-[31rem] min-[361px]:h-[35rem] min-[421px]:h-[41rem] min-[481px]:h-[48rem] min-[541px]:h-[53rem] min-[601px]:h-[60rem] min-[701px]:h-[70rem] min-[768px]:h-[23rem] min-[860px]:h-[26rem] min-[940px]:h-[29rem] min-[1080px]:h-[33rem] min-[1200px]:h-[35rem] min-[1280px]:h-[40rem] min-[1380px]:h-[43rem] min-[1500px]:h-[46rem] min-[1620px]:h-[49rem] min-[1730px]:h-[52rem] min-[1880px]:h-[56rem] min-[2050px]:h-[60rem] min-[2200px]:h-[64rem] min-[2340px]:h-[68rem] min-[2500px]:h-[74rem]'>
        <video className="w-full absolute hidden md:block" src="/bg-ia-horizontal.mp4" autoPlay loop muted />
        <video className="w-full absolute block md:hidden" src="/bg-ia-vertical.mp4" autoPlay loop muted />
        <div className='w-full relative top-40 min-[421px]:top-48 min-[541px]:top-64 min-[701px]:top-80 min-[768px]:top-24 min-[1024px]:top-32 min-[1280px]:top-40 min-[1500px]:top-52'>
            <div className='w-full'>
              <img className='m-auto w-full px-2 md:w-[58%] md:px-0 lg:w-[65%] xl:w-[58%]' src='/logo-ia-full-1190.png'/>
            </div>      
        </div>
        <div className='max-[767px]:w-2/3 min-[768px]:w-1/3 m-auto flex justify-between relative max-[360px]:top-52 max-[420px]:top-60 max-[480px]:top-72 max-[540px]:top-80 max-[700px]:top-96 max-[767px]:top-[28rem] md:top-32 lg:top-32 xl:top-48 min-[1500px]:top-56 min-[2200px]:top-64'>
          <AiOutlineWhatsApp className='text-white text-4xl min-[421px]:text-5xl min-[640px]:text-6xl min-[768px]:text-3xl min-[1024px]:text-4xl min-[1700px]:text-5xl min-[2200px]:text-6xl'/>
          <AiFillGithub className="text-white text-4xl min-[421px]:text-5xl min-[640px]:text-6xl min-[768px]:text-3xl min-[1024px]:text-4xl min-[1700px]:text-5xl min-[2200px]:text-6xl" />
          <AiOutlineInstagram className='text-white text-4xl min-[421px]:text-5xl min-[640px]:text-6xl min-[768px]:text-3xl min-[1024px]:text-4xl min-[1700px]:text-5xl min-[2200px]:text-6xl'/>
        </div>
        <BsChevronDoubleDown className="w-1/4 m-auto animate-bounce relative max-[320px]:top-64 max-[360px]:top-72 max-[420px]:top-80 max-[480px]:top-96 max-[540px]:top-[27rem] max-[600px]:top-[30rem] max-[700px]:top-[33rem] max-[767px]:top-[38rem] md:top-40 min-[890px]:top-48 min-[1110px]:top-52 min-[1220px]:top-60 min-[1280px]:top-72 min-[1500px]:top-[22rem] min-[1800px]:top-[26rem] min-[2200px]:top-[30rem] text-white text-xl min-[421px]:text-3xl min-[541px]:text-4xl min-[640px]:text-5xl min-[768px]:text-xl min-[1024px]:text-2xl min-[1800px]:text-3xl min-[2200px]:text-5xl mt-2" />   
      </section>

      <section className='w-full pt-2 px-2 bg-gradient-to-b from-[#4B4F5F] via-[#4B4F5F] to-[#66676a]'>
        <div className='w-full flex flex-wrap md:flex-nowrap md:items-center min-[900px]:items-end lg:w-5/6 xl:w-3/4 min-[2200px]:w-4/6 m-auto'>
          <div className='w-full z-10 px-10'>
            <img className='m-auto' src='sobre-img.png' />
          </div>
          <div className='w-full py-6 px-2 text-center md:mt-8 xl:px-8 xl:text-left min-[1680px]:px-16'>
            <h2 className='text-4xl text-white italic'>Sobre mim</h2>
            <br />
            <p className='text-lg text-white min-[1500px]:text-xl'>Olá! Me chamo Iron Almeida (Acho que isso está bem óbvio &#x1F604;), sou desenvolvedor iniciante na criação de sites e aplicativos. Amante da tecnologia, entrei no mundo da programação ao fim do ensino médio e desde então venho buscando evoluir meus conhecimentos. Possuo ampla experiência em HTML e CSS, atualmente meu foco principal é no universo da linguagem JavaScript a qual tenho 1 ano de experiência com noções em Next.js, Node e React Native e iniciando estudos em Flutter para densenvolvimento de aplicativos multiplataforma.</p>
          </div>
        </div>
      </section>
      <section className='w-full bg-[#66676afa] py-4'>
        <div className='w-full m-auto text-center mt-6'>
          <h2 className='text-white text-4xl italic'>Projetos</h2>
        </div>
        <div className='w-full m-auto p-4 mt-4 flex flex-wrap md:flex-nowrap md:mt-8 min-[1200px]:w-5/6'>
          <div className='w-full flex flex-col text-center'>
            <img className='min-[510px]:px-12 min-[710px]:px-24' src='projeto-LA.png' alt='Logo da LA e imagem de computador e celular com site da LA consultoria'/>
            <h4 className='text-white text-2xl mt-4'>Lourdes Almeida <br /> Consultoria e Treinamento</h4>
            <p className='text-lg text-center text-white mt-4 min-[710px]:px-16 min-[1500px]:text-xl'>Site portfólio feito para LA Consultoria e Treinamento apresentando serviços, cursos e página de cadastro e login para download de arquivos voltados ao Departamento Pessoal.</p>
          </div>
          <div className='w-full flex flex-col text-center mt-6 md:mt-0'>
            <img className='pl-1 min-[510px]:pl-12 min-[510px]:pr-10 min-[710px]:pl-24 min-[710px]:pr-20' src='breve-1.png' alt='Em breve'/>
            <h4 className='text-white text-2xl md:mt-4'>Bolão da copa</h4>
            <p className='text-lg text-center text-white mt-2 min-[710px]:px-10 md:mt-8 min-[1500px]:text-xl'>Aplicativo onde você pode criar seu próprio bolão da copa para disputar com amigos quem é o melhor nos palpites. Projeto de estudo sendo desenvolvido na NLW da equipe RocketSeat.</p>
          </div>
        </div>
      </section>
    </>
  )
}
