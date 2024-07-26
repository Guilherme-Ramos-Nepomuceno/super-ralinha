'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import React from 'react'
export default function Projetos() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  )

  return (
    <main className="flex min-h-screen flex-col items-center justify-start ">
      <div className="w-full h-screen flex justify-center animate-colortransition timeup50">
        <div className="w-2/4 h-2 bg-zinc-50 mr-auto flex animate-linhat timeup50"></div>
        {/* center logo */}
        <div className="relative flex overflow-y-hidden w-auto h-2/4  my-auto ">
          <div className="w-40  fixed flex items-center timeup50 animate-fadeout">
            <img className="" src="imagens/1x/emblema.png" alt="" />
          </div>
          <div className="w-24 fixed flex transition progress animate-rotate z-10">
            <img className="mb-4" src="imagens/1x/bola.png" alt="bola" />
          </div>
          <div className="w-44 mt-5 fixed z-30 flex timeup50 animate-fadeout">
            <img className="" src="imagens/1x/super.png" alt="" />
          </div>
        </div>
        <div className="w-2/4 h-2 bg-zinc-50 ml-auto flex animate-linhat timeup50"></div>
        <div className="w-40 fixed flexend bottom-4 mx-auto">
          <img className="" src="imagens/campinho.png" alt="" />
          <div className="w-2 fixed h-2 bg-green-800 bottom-10 flex rounded-3xl progress animate-bola"></div>
        </div>
      </div>
      <div className="fixed bottom-4 right-2 w-32 animate-pulse">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#103602"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-chevrons-up w-10 h-10 mx-auto"
        >
          <path d="m17 11-5-5-5 5" />
          <path d="m17 18-5-5-5 5" />
        </svg>
        <h1 className="text-xs text-green-500 text-center">
          arraste para cima e acompanhe a bola em campo
        </h1>
      </div>
      {/* container1 */}
      <div className="w-full h-screen bg-green-100 flex flex-col items-center justify-start gap-y-3 timeout30 animate-colortransition">
        <h1 className="text-5xl h-auto font-bold text-green-800 timeup50 sm:timeup0 animate-fadein mt-40 ">
          sobre o evento
        </h1>
        <h1 className="w-4/5 h-full font-display text-gray-700/80 text-center timeupmandu animate-fadein">
          Promovido pelo Instituto Manduvi,
          <span className="text-green-950"> o Super Ralinha 2024</span>, é a
          maior competição de futebol amador de Mato Grosso, reunindo mais de
          150 equipes.
        </h1>
      </div>
      {/* container2 */}
      <div
        className=" bg-green-100 w-full h-screen flex flex-col text-center"
        id="ultimocamp"
      >
        <h1 className="text-5xl font-bold text-green-800 timeup50 animate-fadein">
          último evento
        </h1>
        <h5 className="font-display timeup20 animate-fadein mb-5">
          conteúdos do último campeonato
        </h5>
        <Carousel
          className="w-11/12 z-20 mx-auto timeup30 animate-fadein"
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            <CarouselItem className="pl-2 md:pl-4">
              <Image
                src="/imagensralinha/img1.jpg"
                alt=""
                width={500}
                height={500}
              />
            </CarouselItem>
            <CarouselItem className="pl-2 md:pl-4">
              <img src="imagensralinha/img2.jpg" alt="" />
            </CarouselItem>
            <CarouselItem className="pl-2 md:pl-4">
              <img src="imagensralinha/img3.jpg" alt="" />
            </CarouselItem>
            <CarouselItem className="pl-2 md:pl-4">
              <img src="imagensralinha/img4.jpg" alt="" />
            </CarouselItem>
            <CarouselItem className="pl-2 md:pl-4">
              <img src="imagensralinha/img5.jpg" alt="" />
            </CarouselItem>
            <CarouselItem className="pl-2 md:pl-4">
              <img src="imagensralinha/img6.jpg" alt="" />
            </CarouselItem>
            <CarouselItem className="pl-2 md:pl-4">
              <img src="imagensralinha/img7.jpg" alt="" />
            </CarouselItem>
            <CarouselItem className="pl-2 md:pl-4">
              <img src="imagensralinha/img8.jpg" alt="" />
            </CarouselItem>
            <CarouselItem className="pl-2 md:pl-4">
              <img src="imagensralinha/img9.jpg" alt="" />
            </CarouselItem>
            <CarouselItem className="pl-2 md:pl-4">
              <img src="imagensralinha/img10.jpg" alt="" />
            </CarouselItem>
            <CarouselItem className="pl-2 md:pl-4">
              <img src="imagensralinha/img11.jpg" alt="" />
            </CarouselItem>
            <CarouselItem className="pl-2 md:pl-4">
              <img src="imagensralinha/img12.jpg" alt="" />
            </CarouselItem>
            <CarouselItem className="pl-2 md:pl-4">
              <img src="imagensralinha/img13.jpg" alt="" />
            </CarouselItem>
            <CarouselItem className="pl-2 md:pl-4">
              <img src="imagensralinha/img14.jpg" alt="" />
            </CarouselItem>
            <CarouselItem className="pl-2 md:pl-4">
              <img src="imagensralinha/img15.jpg" alt="" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="w-full h-52 bg-green-100 flex items-center justify-center">
          <iframe
            className="w-2/3 sm:mt-0 sm:w-1/4 h-48 sm:h-auto timeup0 animate-fadein"
            src="https://www.youtube.com/embed/FDivBqurVp4?si=8OUePXlVNk48liTJ"
            title=""
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div id="sobremandu" className="w-full h-screen bg-green-100 ">
        <h1 className="text-5xl font-bold text-green-800 sm:mt-5 bg-green-100 text-center timeup50 animate-fadein">
          sobre o manduvi
        </h1>
        <img
          className="sm:h-4/5 mx-auto relative z-20 timeupmandu animate-fadein"
          src="imagens/manduvi.png"
          alt=""
        />
      </div>
      <div className="w-full h-screen bg-green-100">
        <div className="w-2/4 h-[28%] relative z-30  sm:w-1/4 flex items-center mx-auto timeup80 animate-fadein">
          <img src="imagens/premios.webp" alt="" />
        </div>
        <div className="w-3/4 relative z-20 h1/4 sm:w-1/4 flex mx-auto timeup60 animate-fadein -mt-20 sm:-mt-0">
          <img src="imagens/gol.png" alt="" />
        </div>
        <div>
          <h1 className="text-center mt-72 text-green-800 sm:mt-10 text-4xl timeup0 animate-fadein">
            premiações
          </h1>
          <h1 className="text-center w-3/4  text-zinc-600 text-lg mx-auto timeup0 animate-fadein">
            Com a maior premiação do estado, totalizando R$ 700 mil, os duelos
            serão intensos, com prêmios incríveis, incluindo um automóvel e
            motocicletas. <br></br> Não perca a oportunidade de participar desse
            evento espetacular e mostrar o seu talento!
          </h1>
        </div>
        <div className="w-2/4 sm:w-1/4 h-16  mx-auto my-10 flex timeout15 animate-fadein">
          <a
            className="size-full bg-green-800 rounded-xl hover:bg-green-200"
            href=""
          >
            <span className="text-green-100 text-xl w-full flex h-16 my-auto text-center items-center hover:text-green-900">
              vá para a inscrição
            </span>
          </a>
        </div>
      </div>
      <div className="w-full h-60 flex flex-col mx-auto items-center bg-green-100 ">
        <h1 className="text-center text-green-800 mt-10 sm:mt-10 mb-10 text-4xl timeup0 animate-fadein">
          patrocinadores
        </h1>
        <div className="w-4/5 h-40 mx-auto flex flex-wrap p-2 rounded-md  bg-zinc-50 timeupbg animate-colorbg">
          <img
            className="w-2/5 sm:w-1/5 m-auto timeup1 animate-patrocinio "
            src="imagens/patrocinio1.webp"
            alt=""
          />
          <img
            className="w-2/5 sm:w-1/5 m-auto timeup2 animate-patrocinio "
            src="imagens/patrocinio4.webp"
            alt=""
          />
          <img
            className="w-2/5 sm:w-1/5 m-auto timeup3 animate-patrocinio "
            src="imagens/patrocinio2.webp"
            alt=""
          />
          <img
            className="w-2/5 sm:w-1/5 m-auto timeup4 animate-patrocinio "
            src="imagens/patrocinio3.webp"
            alt=""
          />
        </div>

        {/* <img className="w-1/6" src="imagens/patrocinio5.webp" alt="" /> */}
        {/* <img className="w-1/6" src="imagens/patrocinio6.webp" alt="" /> */}
      </div>
      <div className="w-full h-screen flexb flex-col justify-center bg-green-100">
        <div className="flex-col w-full h-8">
          <h1 className="text-center text-green-800 mb-8 sm:mb-0 mt-36 sm:mt-20 sm:my-10 text-4xl timeup80 animate-fadein">
            camisa 12 e seleção digital
          </h1>
          <img
            className="w-2/4 h-80 sm:h-auto mx-auto sm:w-1/6 timeupmandu animate-fadein"
            src="imagens/camisa12.png"
            alt=""
          />
        </div>
        <h1 className="w-3/4 flex mb-52 sm:mt-[26rem] text-center text-4xl mx-auto timeup0 animate-fadein">
          ajude o Super Ralinha a chegar ainda mais longe!
        </h1>
      </div>
      <div className="w-full h-screen bg-green-100 flex justify-around flex-col">
        <img
          className="w-2/4 sm:w-1/5 sm:mt-1 mx-auto -mt-10 timeupmandu animate-fadein"
          src="imagens/times.png"
          alt=""
        />
        <div className="w-full h-2/4">
          <h5 className="w-3/4 text-center text-xl flex my-10 sm:my-0 sm:mt-16 mx-auto timeup0 animate-fadein text-zinc-700">
            Acesse, escolha seu time e cadastre suas redes sociais para ajudar a
            multiplicar os conteúdos e a torcida pelo Super Ralinha 2023.
          </h5>
          <div className="w-2/4 h-16 sm:w-1/4 mx-auto flex flex-col timeout15 animate-fadein">
            <a
              className="size-full bg-green-800 rounded-xl hover:bg-green-200"
              href=""
            >
              <h1 className="text-green-100 text-xl w-full flex h-16 my-auto text-center items-center hover:text-green-900">
                Participe com seu time
              </h1>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full bg-green-900 h-auto relative z-20">
        <div className="w-3/5 mx-auto my-4 md:w-1/5 ">
          <img
            className="w-10/12 mx-auto"
            src="imagens/Logofooter.png"
            alt=""
          />
        </div>
        <div className="mx-auto mt-2 text-center  content-between">
          <h1 className="text-2xl mt-2 font-bold text-green-100">
            Redes sociais
          </h1>
          <div className="flex justify-around">
            <a
              className="p-2 flex font-display text-green-100"
              href="https://www.youtube.com/@institutomanduvi"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-youtube"
              >
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                <path d="m10 15 5-3-5-3z" />
              </svg>
              youtube
            </a>
            <a
              className="p-2 flex font-display text-green-100"
              href="https://www.instagram.com/institutomanduvi/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              instagram
            </a>
            <a
              className="p-2 flex font-display text-green-100"
              href="https://x.com/imanduvi"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              X/twitter
            </a>
            <a
              className="p-2 flex font-display text-green-100"
              href="https://www.facebook.com/institutomanduvi/ "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              facebook
            </a>
          </div>
          <a
            className="p-1 font-bold border-solid border-2 border-green-100 text-green-100 rounded font-display"
            href="https://maps.app.goo.gl/kR9h8pZyhJSiaJgE7"
          >
            ir ao Instituto
          </a>
          <h1 className="text-sm mt-1 font-bold text-gray-200/80">
            © Todos os direitos reservados
          </h1>
        </div>
      </div>
    </main>
  )
}
