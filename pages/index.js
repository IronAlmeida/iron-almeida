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
    bg.classList.toggle('active');
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
          <div className='flex justify-between mx-2'> {/*Flex para organizar cabeçalho*/}
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
      </header>

      <section className='w-full relative h-[27rem] min-[300px]:h-[29rem] min-[320px]:h-[31rem] min-[361px]:h-[35rem] min-[421px]:h-[41rem] min-[481px]:h-[48rem] min-[541px]:h-[53rem] min-[601px]:h-[60rem] min-[701px]:h-[70rem] min-[768px]:h-[23rem] min-[860px]:h-[26rem] min-[940px]:h-[29rem] min-[1080px]:h-[33rem] min-[1200px]:h-[35rem] min-[1280px]:h-[40rem] min-[1380px]:h-[43rem] min-[1500px]:h-[46rem] min-[1620px]:h-[49rem] min-[1730px]:h-[52rem] min-[1880px]:h-[56rem] min-[2050px]:h-[60rem] min-[2200px]:h-[64rem] min-[2340px]:h-[68rem] min-[2500px]:h-[74rem]'>
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

      <section className='w-full pt-2 px-3 bg-[#4B4F5F] md:bg-gradient-to-l md:from-[#5b606b] md:via-[#373c47] md:to-[#5b606b]'>
        <div className='w-full flex flex-wrap md:flex-nowrap md:items-center min-[900px]:items-end lg:w-5/6 min-[2200px]:w-4/6 m-auto'>
          <div className='w-full z-10 px-10'>
            <img className='m-auto' src='sobre-img.png' />
          </div>
          <div className='w-full py-6 text-center md:mt-8 xl:px-8 xl:text-left min-[1680px]:px-16'>
            <h2 className='text-5xl text-white italic font-bold'>Sobre mim</h2>
            <br />
            <p className='text-xl text-white min-[1500px]:text-2xl'>Olá! Me chamo Iron Almeida (acho que isso está meio óbvio &#x1F604;), sou desenvolvedor iniciante na criação de sites e aplicativos. Amante da tecnologia, entrei no mundo da programação ao fim do ensino médio e desde então venho buscando evoluir meus conhecimentos. Possuo ampla experiência em HTML e CSS, atualmente meu foco principal é no universo da linguagem JavaScript a qual tenho 1 ano de experiência com noções em Next.js, Node e React Native e iniciando estudos em Flutter para densenvolvimento de aplicativos multiplataforma.</p>
          </div>
        </div>
      </section>

      <section className='w-full bg-[#f0f0f0] py-16'>
        <div className='w-full m-auto text-center'>
          <h2 className='text-[#373c47] text-5xl italic font-bold'>Projetos</h2>
        </div>
        <div className='w-full px-6 justify-around m-auto mt-12 flex flex-wrap md:flex-nowrap md:mt-8 min-[1200px]:w-5/6'>
          <div className='w-[460px] md:w-[340px] lg:lg:w-[460px] bg-[#FEFDFF] hover:bg-[#373c47] text-[#373c47] hover:text-white transition-colors duration-100 p-2 rounded-[2rem] shadow-2xl flex flex-col text-center'>
            <img className='mt-3 px-10 min-[510px]:px-12 min-[710px]:px-24' src='projeto-LA.png' alt='Logo da LA e imagem de computador e celular com site da LA consultoria'/>
            <h4 className='text-3xl mt-4'>Lourdes Almeida <br /> Consultoria e Treinamento</h4>
            <p className='text-lg px-1 text-center mt-4 min-[710px]:px-10 min-[1500px]:text-xl'>Site portfólio feito para LA Consultoria e Treinamento apresentando serviços, cursos e página de cadastro e login para download de arquivos voltados ao Departamento Pessoal.</p>
          </div>
          <div className='w-[460px] md:w-[340px] lg:w-[460px] bg-[#FEFDFF] hover:bg-[#373c47] text-[#373c47] hover:text-white transition-colors duration-100 rounded-[2rem] shadow-2xl flex flex-col text-center mt-6 md:mt-0'>
            <img className='pl-5 pr-3 min-[510px]:pl-12 min-[510px]:pr-10 min-[710px]:pl-24 min-[710px]:pr-20' src='breve-1.png' alt='Em breve'/>
            <h4 className='text-3xl md:mt-4'>Bolão da Copa do Mundo</h4>
            <p className='text-lg px-1 text-center mt-2 min-[710px]:px-10 md:mt-8 min-[1500px]:text-xl'>Aplicativo onde você pode criar seu próprio bolão da copa para disputar com amigos quem é o melhor nos palpites. Projeto de estudo sendo desenvolvido na NLW da equipe RocketSeat.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#D1D7DD] py-4">
        <div className='w-full m-auto text-[#373c47] text-center mt-6'>
          <h2 className='text-5xl italic font-bold'>Habilidades</h2>
          <p className='text-lg mt-4'>Toque em uma habilidade para saber mais!</p>
        </div>

        <div className='w-full relative items-center flex flex-col mt-4 px-4 md:flex-row md:flex-wrap md:justify-around'> {/* Inicio FLEX CARDS */}
          <div className='w-[250px] h-[250px] relative my-4 md:m-4'>
            <div onClick={flipCardjs} id="js" className='absolute w-[250px] h-[250px] style-3d transition-all duration-500 ease-linear'>{/* Cartão JS */}
              {/* FRENTE */}
              <div className='absolute w-[250px] h-[250px] bg-[#141f35] flex flex-col p-6 rounded-full text-center my-4 backface'>
                <img className='m-auto' src='js.png' alt='logo JavaScript' width={150} height={150}/>
                <h4 className='text-white text-xl font-bold'>JavaScript</h4>
              </div>
              {/* VERSO */}
              <div className='absolute w-[250px] h-[250px] bg-[#141f35] flex flex-col p-6 rounded-full text-center my-4 hover backface rotate'>
                <p className='text-white text-xl'>TESTTANDO FUNDO DO CARTÃO</p>
              </div> 
            </div> {/*Fim - Cartão JS*/}
          </div>
          
          <div className='w-[250px] h-[250px] relative my-4 md:m-4'>
            <div onClick={flipCardnext} id="next" className='absolute w-[250px] h-[250px] style-3d transition-all duration-500 ease-linear'>{/* Cartão NEXT.JS */}
              {/* FRENTE */}
              <div className='absolute w-[250px] h-[250px] bg-[#141f35] flex flex-col p-6 rounded-full text-center my-4 backface'>
                <img className='m-auto' src='next.png' alt='logo Next.js' width={150} height={150}/>
                <h4 className='text-white text-xl font-bold'>Next.js</h4>
              </div> 
              {/* VERSO */}
              <div className='absolute w-[250px] h-[250px] bg-[#141f35] flex flex-col p-6 rounded-full text-center my-4 hover backface rotate'>
                <p className='text-white text-xl'>TESTTANDO FUNDO DO CARTÃO</p>
              </div> 
            </div> {/*Fim - Cartão Next.js*/}
          </div>

          <div className='w-[250px] h-[250px] relative my-4 md:m-4'>
            <div onClick={flipCardreact} id="react" className='absolute w-[250px] h-[250px] style-3d transition-all duration-500 ease-linear'>{/* Cartão REACT */}
              {/* FRENTE */}
              <div className='absolute w-[250px] h-[250px] bg-[#141f35] flex flex-col p-6 rounded-full text-center my-4 backface'>
                <img className='m-auto' src='react.png' alt='logo React' width={150} height={150}/>
                <h4 className='text-white text-xl font-bold'>React e <br /> React Native</h4>
              </div>
              {/* VERSO */}
              <div className='absolute w-[250px] h-[250px] bg-[#141f35] flex flex-col p-6 rounded-full text-center my-4 hover backface rotate'>
                <p className='text-white text-xl'>TESTTANDO FUNDO DO CARTÃO</p>
              </div> 
            </div> {/*Fim - Cartão REACT*/}
          </div>
          

         <div className='w-[250px] h-[250px] relative my-4 md:m-4'>
            <div onClick={flipCardnode} id="node" className='absolute w-[250px] h-[250px] style-3d transition-all duration-500 ease-linear'>{/* Cartão NODE */}
            {/* FRENTE */}
            <div className='absolute w-[250px] h-[250px] bg-[#141f35] flex flex-col p-6 rounded-full text-center my-4 backface'>
              <img className='m-auto' src='node.png' alt='logo Node.js' width={150} height={150}/>
              <h4 className='text-white text-xl font-bold'>Node.js</h4>
            </div>
            {/* VERSO */}
            <div className='absolute w-[250px] h-[250px] bg-[#141f35] flex flex-col p-6 rounded-full text-center my-4 hover backface rotate'>
              <p className='text-white text-xl'>TESTTANDO FUNDO DO CARTÃO</p>
            </div> 
          </div> {/*Fim - Cartão NODE*/}
         </div>

        <div className='w-[250px] h-[250px] relative my-4 md:m-4'>
          <div onClick={flipCardtailwind} id="tailwind" className='absolute w-[250px] h-[250px] style-3d transition-all duration-500 ease-linear'>{/* Cartão TAILWIND CSS */}
              {/* FRENTE */}
              <div className='absolute w-[250px] h-[250px] bg-[#141f35] flex flex-col p-6 rounded-full text-center my-4 backface'>
                <img className='m-auto' src='tailwind.png' alt='Logo Tailwind CSS' width={150} height={150}/>
                <h4 className='text-white text-xl font-bold'>Tailwind CSS</h4>
              </div>
              {/* VERSO */}
              <div className='absolute w-[250px] h-[250px] bg-[#141f35] flex flex-col p-6 rounded-full text-center my-4 hover backface rotate'>
                <p className='text-white text-xl'>TESTTANDO FUNDO DO CARTÃO</p>
              </div> 
            </div> {/*Fim - Cartão TAILWIND*/}
        </div>

          
        <div className='w-[250px] h-[250px] relative my-4 md:m-4'>
          <div onClick={flipCardfirebase} id="firebase" className='absolute w-[250px] h-[250px] style-3d transition-all duration-500 ease-linear'>{/* Cartão TAILWIND CSS */}
              {/* FRENTE */}
              <div className='absolute w-[250px] h-[250px] bg-[#141f35] flex flex-col p-6 rounded-full text-center my-4 backface'>
                <img className='m-auto' src='firebase.png' alt='Logo Firebase' width={150} height={150}/>
                <h4 className='text-white text-xl font-bold'>Firebase</h4>
              </div>
              {/* VERSO */}
              <div className='absolute w-[250px] h-[250px] bg-[#141f35] flex flex-col p-6 rounded-full text-center my-4 hover backface rotate'>
                <p className='text-white text-xl'>TESTTANDO FUNDO DO CARTÃO</p>
              </div> 
            </div> {/*Fim - Cartão FIREBASE*/}
        </div>
          

          
        </div> {/* Fim - Flex Cards */}
      </section>
    </>
  )
}
