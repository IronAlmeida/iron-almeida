import Head from 'next/head'
// import Links from 'next/link'
import Script from 'next/script'
import {AiFillGithub, AiOutlineWhatsApp, AiOutlineInstagram, AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
import {BsChevronDoubleDown} from "react-icons/bs"
import {TbBrandNextjs} from "react-icons/tb"
import {SiTailwindcss, SiFirebase} from "react-icons/si"
import { Link } from 'react-scroll/modules'
import { useEffect } from 'react'
import Aos from "aos"
import 'aos/dist/aos.css'

export default function Home() {

  useEffect(() => {
    Aos.init({duration: 1500})
  }, [])

  const toggleMenu = () => {
    const nav = document.getElementById('nav');
    const bg = document.getElementById('bg');
    nav.classList.toggle('active');
    bg.classList.toggle('active');
  }

  const flipCardhtml = () => {
    const html = document.getElementById('html');
    html.classList.toggle('rotate');
  }

  const flipCardcss = () => {
    const css = document.getElementById('css');
    css.classList.toggle('rotate');
  }

  const flipCardjs = () => {
    const js = document.getElementById('js');
    js.classList.toggle('rotate');
  }

  const flipCardnext = () => {
    const next = document.getElementById('next');
    next.classList.toggle('rotate');
  }

  const flipCardreact = () => {
    const react = document.getElementById('react');
    react.classList.toggle('rotate');
  }

  const flipCardnode = () => {
    const node = document.getElementById('node');
    node.classList.toggle('rotate');
  }

  const flipCardtailwind = () => {
    const tailwind = document.getElementById('tailwind');
    tailwind.classList.toggle('rotate');
  }

  const flipCardfirebase = () => {
    const firebase = document.getElementById('firebase');
    firebase.classList.toggle('rotate');
  }

  return (
    <>
      <Head>
        <title>Iron Almeida - Portfólio</title>
        <meta name="description" content="Portfólio pessoal " />
        <link rel="icon" href="/I.a-icon.ico" />
      </Head>

      <Script src="/bg-header.js" strategy={'lazyOnload'}></Script>

      <header id="bg" className='w-5/6 rounded-3xl fixed z-20 top-3 left-1/2 -translate-x-2/4 py-2'>
          <div className='flex justify-between mx-2 lg:mx-14'> {/*Flex para organizar cabeçalho*/}
            <div className='min-[2200px]:w-[10%] hover:scale-125 transition duration-300'>
              <Link onClick={toggleMenu} href='#home' activeClass={true} to="home" spy={true} smooth={true} offset={0} duration={600}><img className='w-full' src="/logo-ia-80.png"/></Link>
            </div>

            <nav id="nav" className='flex py-2 items-center'>
              <ul id='menu' className='flex justify-center items-center gap-10'>
                <li className='text-white text-lg font-semibold 2xl:text-xl min-[2200px]:text-[32px] hover:scale-125 transition-all duration-300'><Link onClick={toggleMenu} href='#home' activeClass={true} to="home" spy={true} smooth={true} offset={0} duration={600}>Home</Link></li>
                <li className='text-white text-lg font-semibold 2xl:text-xl min-[2200px]:text-[32px] hover:scale-125 transition-all duration-300'><Link onClick={toggleMenu} href='#sobre' activeClass={true} to="sobre" spy={true} smooth={true} offset={250} duration={600}>Sobre</Link></li>
                <li className='text-white text-lg font-semibold 2xl:text-xl min-[2200px]:text-[32px] hover:scale-125 transition-all duration-300'><Link onClick={toggleMenu} href='#projetos' activeClass={true} to="projetos" spy={true} smooth={true} offset={0} duration={600}>Projetos</Link></li>
                <li className='text-white text-lg font-semibold 2xl:text-xl min-[2200px]:text-[32px] hover:scale-125 transition-all duration-300'><Link onClick={toggleMenu} href='#habilidades' activeClass={true} to="habilidades" spy={true} smooth={true} offset={0} duration={600}>Habilidades</Link></li>
              </ul> 
              <AiOutlineMenu id="burger" onClick={toggleMenu} className="lg:hidden text-4xl text-white cursor-pointer" />
              <AiOutlineClose id="close" onClick={toggleMenu} className="text-4xl text-white cursor-pointer hidden"/>
            </nav>
          </div>
      </header>

      <section id="home" className='w-full bg-[#4B4F5F] relative h-[27rem] min-[300px]:h-[29rem] min-[320px]:h-[31rem] min-[361px]:h-[40rem] min-[421px]:h-[41rem] min-[481px]:h-[48rem] min-[541px]:h-[53rem] min-[601px]:h-[60rem] min-[701px]:h-[70rem] min-[768px]:h-[23rem] min-[860px]:h-[26rem] min-[940px]:h-[29rem] min-[1080px]:h-[33rem] min-[1200px]:h-[35rem] min-[1280px]:h-[40rem] min-[1380px]:h-[43rem] min-[1500px]:h-[46rem] min-[1620px]:h-[49rem] min-[1730px]:h-[52rem] min-[1880px]:h-[56rem] min-[2050px]:h-[60rem] min-[2200px]:h-[64rem] min-[2340px]:h-[68rem] min-[2500px]:h-[74rem]'>
        <video className="w-full absolute hidden md:block" src="/bg-ia-horizontal.mp4" autoPlay loop muted />
        <video className="w-full absolute block md:hidden" src="/bg-ia-vertical.mp4" autoPlay loop muted />
        <div className='w-full relative top-40 min-[421px]:top-48 min-[541px]:top-64 min-[701px]:top-80 min-[768px]:top-24 min-[1024px]:top-32 min-[1280px]:top-40 min-[1500px]:top-52'>
            <div className='w-full' data-aos="zoom-in" data-aos-offset="300" data-aos-duration="2000">
              <img className='m-auto w-full px-2 md:w-[58%] md:px-0 lg:w-[65%] xl:w-[58%]' src='/logo-ia-full-1190.png'/>
            </div>      
        </div>
        <div className='max-[767px]:w-2/3 min-[768px]:w-1/3 m-auto flex justify-between relative max-[360px]:top-52 max-[420px]:top-60 max-[480px]:top-72 max-[540px]:top-80 max-[700px]:top-96 max-[767px]:top-[28rem] md:top-32 lg:top-32 xl:top-48 min-[1500px]:top-56 min-[2200px]:top-64'>
          <Link target='_blank' href='https://linkwhats.app/612cc6' className='hover:scale-125 transition duration-300'><AiOutlineWhatsApp data-aos="fade-right" data-aos-duration="2000" className='text-white text-4xl min-[421px]:text-5xl min-[640px]:text-6xl min-[768px]:text-3xl min-[1024px]:text-4xl min-[1700px]:text-5xl min-[2200px]:text-6xl  hover:text-green-500 '/></Link>
          <Link target='_blank' href='https://github.com/IronAlmeida' className='hover:scale-125 transition duration-300'><AiFillGithub data-aos="fade-right" data-aos-duration="2500" className="text-white text-4xl min-[421px]:text-5xl min-[640px]:text-6xl min-[768px]:text-3xl min-[1024px]:text-4xl min-[1700px]:text-5xl min-[2200px]:text-6xl hover:text-[#8B949E]" /></Link>
          <Link target='_blank' href='https://www.instagram.com/iron.almeida' className='hover:scale-125 transition duration-300'><AiOutlineInstagram data-aos="fade-right" data-aos-duration="3000" className='text-white text-4xl min-[421px]:text-5xl min-[640px]:text-6xl min-[768px]:text-3xl min-[1024px]:text-4xl min-[1700px]:text-5xl min-[2200px]:text-6xl hover:text-[#ED4956]'/></Link>
        </div>
        <BsChevronDoubleDown className="w-1/4 m-auto animate-bounce relative max-[320px]:top-64 max-[360px]:top-72 max-[420px]:top-96 max-[480px]:top-96 max-[540px]:top-[27rem] max-[600px]:top-[30rem] max-[700px]:top-[33rem] max-[767px]:top-[38rem] md:top-40 min-[890px]:top-48 min-[1110px]:top-52 min-[1220px]:top-60 min-[1280px]:top-72 min-[1500px]:top-[22rem] min-[1800px]:top-[26rem] min-[2200px]:top-[30rem] text-white text-4xl min-[421px]:text-5xl min-[541px]:text-5xl min-[640px]:text-5xl min-[768px]:text-xl min-[1024px]:text-2xl min-[1800px]:text-3xl min-[2200px]:text-5xl mt-2" />   
      </section>

      <section className='w-full py-2 px-3 bg-[#4B4F5F]'>
        <div className='w-full flex flex-wrap md:items-center min-[900px]:items-end lg:w-5/6 xl:w-3/4 min-[2200px]:w-4/6 m-auto'>
          <div id='sobre' data-aos="fade-down" className='w-full z-10'>
            <img className='m-auto' src='sobre-img.png' />
          </div>
          <div className='w-full bg-[#6B7280] rounded-lg pt-6 pb-2 px-1 text-center md:mb-4 xl:px-8 xl:text-left min-[1680px]:px-16'>
            <h2 data-aos="fade-up" className='text-5xl text-white italic font-bold text-center'>Sobre mim</h2>
            <br />
            <p data-aos="fade-up" className='text-xl text-white min-[1500px]:text-2xl'>Olá! Me chamo Iron Almeida (acho que isso está meio óbvio &#x1F604;), sou desenvolvedor iniciante na criação de sites e aplicativos. Amante da tecnologia, entrei no mundo da programação ao fim do ensino médio e desde então venho buscando evoluir meus conhecimentos. Possuo ampla experiência em HTML e CSS e atualmente meu foco principal é no universo da linguagem JavaScript a qual tenho 1 ano de experiência com noções em Next.js, Node e React.</p>
          </div>
        </div>
      </section>

      <section id='projetos' className='w-full bg-[#f0f0f0] pt-1 pb-12'>
        <div data-aos="fade-down" className='w-full m-auto text-center my-24 mb-8'>
          <h2 className='text-[#373c47] text-5xl italic font-bold'>Projetos</h2>
        </div>
        <div className='w-full px-2 justify-around m-auto mt-12 flex flex-wrap items-center md:flex-nowrap md:mt-8 min-[1200px]:w-5/6'>
          
          <div data-aos="zoom-in-down" className='w-[460px] md:w-[340px] lg:lg:w-[460px] bg-[#FEFDFF] text-[#373c47] md:hover:bg-[#373c47] md:hover:text-white transition-colors duration-100 p-2 rounded-[2rem] shadow-2xl flex flex-col text-center'>
            <img className='mt-3 px-10 min-[510px]:px-12 min-[710px]:px-24' src='projeto-LA.png' alt='Logo da LA e imagem de computador e celular com site da LA consultoria'/>
            <h4 className='text-2xl mt-4 font-bold'>Lourdes Almeida <br /> Consultoria e Treinamento</h4>
            <p className='text-lg px-1 text-center mt-4 min-[710px]:px-10 min-[1500px]:text-xl'>Site portfólio desenvolvido para <strong>LA Consultoria e Treinamento</strong> apresentando seus serviços e cursos com formulário para solicitação de orçamento e página de cadastro e login para download de arquivos voltados ao Departamento Pessoal.</p>
            <br/>
            <h2 className='text-2xl'>Tecnologias Utilizadas:</h2>
            <div className='flex mt-6 ml-4'>
              <TbBrandNextjs className='text-2xl'/>
              <p className='text-xl ml-1'>Next.js</p>
            </div>
            <div className='flex mt-6 ml-4'>
              <SiTailwindcss className='text-2xl'/>
              <p className='text-xl ml-1'>Tailwind CSS</p>
            </div>
            <div className='flex mt-6 ml-4'>
              <SiFirebase className='text-2xl'/>
              <p className='text-xl ml-1'>Firebase</p>
            </div>
          </div>

          <div data-aos="zoom-in-down" className='w-[460px] md:w-[340px] lg:lg:w-[460px] text-[#373c47] mt-16 rounded-2xl flex flex-col text-center'>
            <img className='px-8' alt='Em breve' src='config2.gif' />
            <h2 className='text-3xl '>Em breve novos projetos...</h2>
          </div>
        </div>
      </section>

      <section id="habilidades" className="bg-[url('../public/bg-skills.png')] bg-cover bg-right md:bg-center w-full bg-[#D1D7DD] py-14">
        <div className='w-full m-auto text-[#373c47] text-center mt-12'>
          <h2 className='text-5xl italic font-bold'>Habilidades</h2>
          <p className='text-xl mt-4'>Toque em uma habilidade para saber mais!</p>
        </div>

        <div className='w-full relative items-center flex flex-col mt-4 px-4 md:flex-row md:flex-wrap md:justify-around lg:w-5/6 m-auto'> {/* Inicio FLEX CARDS */} 
          <div data-aos="zoom-in-right" className='w-[270px] h-[270px] relative my-4 md:m-4'>
            <div onClick={flipCardhtml} id="html" className='absolute w-[270px] h-[270px] style-3d transition-all duration-500 ease-linear'>{/* Cartão HTML5 */}
                {/* FRENTE */}
                <div className='absolute w-[270px] h-[270px] bg-[#141f35] flex flex-col p-6 rounded-full text-center my-4 backface'>
                  <img className='m-auto' alt='Logo HTML5' width={150} height={150} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" />
                  <h4 className='text-white text-xl font-bold'>HTML 5</h4>
                </div>
                {/* VERSO */}
                <div className='absolute w-[270px] h-[270px] bg-[#141f35] flex flex-col px-6 py-[4.5rem] rounded-full text-center my-4 hover backface rotate'>
                  <p className='text-white text-lg'>HTML 5 é a linguagem de marcação utilizada para estruturar, interpretar e exibir o conteúdo de uma página web.</p>
                </div> 
              </div> {/*Fim - Cartão HTML5*/}
          </div>

          <div data-aos="zoom-in-left" className='w-[270px] h-[270px] relative my-4 md:m-4'>
            <div onClick={flipCardcss} id="css" className='absolute w-[270px] h-[270px] style-3d transition-all duration-500 ease-linear'>{/* Cartão CSS3 */}
                {/* FRENTE */}
                <div className='absolute w-[270px] h-[270px] bg-[#141f35] flex flex-col p-6 rounded-full text-center my-4 backface'>
                  <img className='m-auto' alt='Logo HTML5' width={150} height={150} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" />
                  <h4 className='text-white text-xl font-bold'>CSS 3</h4>
                </div>
                {/* VERSO */}
                <div className='absolute w-[270px] h-[270px] bg-[#141f35] flex flex-col px-6 py-14 rounded-full text-center my-4 hover backface rotate'>
                  <p className='text-white text-[17px]'>CSS 3 é uma linguagem de folha de estilo para estilizar elementos escritos em linguagem de marcação como o HTML, ou seja, todo o visual das páginas Web passa pelo CSS.</p>
                </div> 
              </div> {/*Fim - Cartão CSS3*/}
          </div>

          <div data-aos="zoom-in-right" className='w-[270px] h-[270px] relative my-4 md:m-4'>
            <div onClick={flipCardjs} id="js" className='absolute w-[270px] h-[270px] style-3d transition-all duration-500 ease-linear'>{/* Cartão JS */}
              {/* FRENTE */}
              <div className='absolute w-[270px] h-[270px] bg-[#141f35] flex flex-col p-6 rounded-full text-center my-4 backface'>
                <img className='m-auto' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg' alt='logo JavaScript' width={150} height={150}/>
                <h4 className='text-white text-xl font-bold'>JavaScript</h4>
              </div>
              {/* VERSO */}
              <div className='absolute w-[270px] h-[270px] bg-[#141f35] flex flex-col px-6 py-14 rounded-full text-center my-4 hover backface rotate'>
                <p className='text-white text-lg'>JavaScript é uma linguagem de programação com foco na interatividade dos usuários com as páginas Web.</p>
              </div> 
            </div> {/*Fim - Cartão JS*/}
          </div>
          
          <div data-aos="zoom-in-left" className='w-[270px] h-[270px] relative my-4 md:m-4'>
            <div onClick={flipCardnext} id="next" className='absolute w-[270px] h-[270px] style-3d transition-all duration-500 ease-linear'>{/* Cartão NEXT.JS */}
              {/* FRENTE */}
              <div className='absolute w-[270px] h-[270px] bg-[#141f35] flex flex-col p-6 rounded-full text-center my-4 backface'>
                <img className='m-auto' src='next.png' alt='logo Next.js' width={150} height={150}/>
                <h4 className='text-white text-xl font-bold'>Next.js</h4>
              </div> 
              {/* VERSO */}
              <div className='absolute w-[270px] h-[270px] bg-[#141f35] flex flex-col px-9 py-12 rounded-full text-center my-4 hover backface rotate'>
                <p className='text-white text-lg'>Next.js é um framework React que utiliza da linguagem JavaScript para criação de sites e sistemas com alta performance.</p>
              </div> 
            </div> {/*Fim - Cartão Next.js*/}
          </div>

          <div data-aos="zoom-in-right" className='w-[270px] h-[270px] relative my-4 md:m-4'>
            <div onClick={flipCardreact} id="react" className='absolute w-[270px] h-[270px] style-3d transition-all duration-500 ease-linear'>{/* Cartão REACT */}
              {/* FRENTE */}
              <div className='absolute w-[270px] h-[270px] bg-[#141f35] flex flex-col p-6 rounded-full text-center my-4 backface'>
                <img className='m-auto' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' alt='logo React' width={150} height={150}/>
                <h4 className='text-white text-xl font-bold'>React e <br /> React Native</h4>
              </div>
              {/* VERSO */}
              <div className='absolute w-[270px] h-[270px] bg-[#141f35] flex flex-col px-9 py-8 rounded-full text-center my-4 hover backface rotate'>
                <p className='text-white text-base'>React é uma biblioteca JavaScript que permite a criação de sites de forma eficiente com diversos frameworks disponiveis. React Native é um dos frameworks React para desenvolvimento de aplicações mobile.</p>
              </div> 
            </div> {/*Fim - Cartão REACT*/}
          </div>
          

         <div data-aos="zoom-in-left" className='w-[270px] h-[270px] relative my-4 md:m-4'>
            <div onClick={flipCardnode} id="node" className='absolute w-[270px] h-[270px] style-3d transition-all duration-500 ease-linear'>{/* Cartão NODE */}
            {/* FRENTE */}
            <div className='absolute w-[270px] h-[270px] bg-[#141f35] flex flex-col p-6 rounded-full text-center my-4 backface'>
              <img className='m-auto' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' alt='logo Node.js' width={150} height={150}/>
              <h4 className='text-white text-xl font-bold'>Node.js</h4>
            </div>
            {/* VERSO */}
            <div className='absolute w-[270px] h-[270px] bg-[#141f35] flex flex-col px-6 py-12 rounded-full text-center my-4 hover backface rotate'>
              <p className='text-white text-base'>Node.js é um ambiente de execução JavaScript no lado do servidor. Nele é realizado operações como por exemplo, a comunicação com o banco de dados e acesso de usários a uma página.</p>
            </div> 
          </div> {/*Fim - Cartão NODE*/}
         </div>

        <div data-aos="zoom-in-right" className='w-[270px] h-[270px] relative my-4 md:m-4'>
          <div onClick={flipCardtailwind} id="tailwind" className='absolute w-[270px] h-[270px] style-3d transition-all duration-500 ease-linear'>{/* Cartão TAILWIND CSS */}
              {/* FRENTE */}
              <div className='absolute w-[270px] h-[270px] bg-[#141f35] flex flex-col p-6 rounded-full text-center my-4 backface'>
                <img className='m-auto' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' alt='Logo Tailwind CSS' width={150} height={150}/>
                <h4 className='text-white text-xl font-bold'>Tailwind CSS</h4>
              </div>
              {/* VERSO */}
              <div className='absolute w-[270px] h-[270px] bg-[#141f35] flex flex-col px-6 py-[4.5rem] rounded-full text-center my-4 hover backface rotate'>
                <p className='text-white text-lg'>Tailwind CSS é um framework CSS com foco na agilidade para criação de estilos e layouts da aplicação.</p>
              </div> 
            </div> {/*Fim - Cartão TAILWIND*/}
        </div>

          
        <div data-aos="zoom-in-left" className='w-[270px] h-[270px] relative my-4 md:m-4'>
          <div onClick={flipCardfirebase} id="firebase" className='absolute w-[270px] h-[270px] style-3d transition-all duration-500 ease-linear'>{/* Cartão FIREBASE */}
              {/* FRENTE */}
              <div className='absolute w-[270px] h-[270px] bg-[#141f35] flex flex-col p-6 rounded-full text-center my-4 backface'>
                <img className='m-auto' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' alt='Logo Firebase' width={150} height={150}/>
                <h4 className='text-white text-xl font-bold'>Firebase</h4>
              </div>
              {/* VERSO */}
              <div className='absolute w-[270px] h-[270px] bg-[#141f35] flex flex-col px-8 py-12 rounded-full text-center my-4 hover backface rotate'>
                <p className='text-white text-base'>Firebase é uma plataforma para gerenciar processos de servidor como banco de dados, autorização e autenticação de usuários em um único lugar. Aumentando o rendimento das aplicações.</p>
              </div> 
            </div> {/*Fim - Cartão FIREBASE*/}
        </div>
        </div> {/* Fim - Flex Cards */}
      </section>

      <section className='w-full bg-[#0F172a]'>
        <div className='w-5/6 m-auto py-2 flex flex-col'>
          <div className="w-full py-2">
            <Link href='#home' activeClass={true} to="home" spy={true} smooth={true} offset={0} duration={600}><img className='m-auto' src="/logo-ia-80.png" width={80} height={80} /></Link>
          </div>
          <div className='w-2/4 m-auto flex justify-around items-center py-4'>
              <Link target='_blank' href='https://linkwhats.app/612cc6' className='hover:scale-125 transition duration-300'><AiOutlineWhatsApp className='text-white text-4xl hover:text-green-500'/></Link>
              <Link target='_blank' href='https://github.com/IronAlmeida' className='hover:scale-125 transition duration-300'><AiFillGithub className="text-white text-4xl hover:text-[#8B949E]" /></Link>
              <Link target='_blank' href='https://www.instagram.com/iron.almeida' className='hover:scale-125 transition duration-300 '><AiOutlineInstagram className='text-white text-4xl hover:text-[#ED4956]'/></Link>
            </div>
          <div className='text-center text-white text-lg py-2'>
            <h4>Copyright © Iron Almeida - Desenvolvedor Web e Mobile | 2022</h4>
          </div>    
        </div>
      </section>
    </>
  )
}
