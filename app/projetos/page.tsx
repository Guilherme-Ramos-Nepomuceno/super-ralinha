'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { db } from '@/lib/data'
import { cn } from '@/lib/utils'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import React from 'react'

export default function Projetos() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  )

  const [open, setOpen] = React.useState(false)

  const [modalidade, setModalidade] = React.useState('')

  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-zinc-50">
      <div className="w-full h-screen flex flex-col items-center justify-end bg-parallax bg-fixed bg-no-repeat bg-cover bg-center">
        <div className="h-1/6 bg-zinc-50 w-full items-center flex">
          <div className="w-full flex flex-wrap items-center justify-around gap-5">
            <img className="w-32" src="imagens/patrocinio1.webp" alt="" />
            <img className="w-32" src="imagens/patrocinio2.webp" alt="" />
            <img className="w-32" src="imagens/patrocinio3.webp" alt="" />
            <img className="w-32" src="imagens/patrocinio4.webp" alt="" />
            <img className="w-32" src="imagens/patrocinio5.webp" alt="" />
            <img className="w-32" src="imagens/patrocinio6.webp" alt="" />
          </div>
        </div>
        <div className="h-1/6 bg-zinc-50 w-full items-center flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-arrow-big-down-dash animate-bounce w-2/4 h-2/4 mx-auto"
          >
            <path d="M15 5H9" />
            <path d="M15 9v3h4l-7 7-7-7h4V9z" />
          </svg>
        </div>
      </div>
      <div className="size-full  bg-zinc-50 flex flex-col items-center gap-y-3 pt-16 pb-20">
        <h1 className="text-5xl font-bold text-amber-900">sobre o evento</h1>
        <h5 className="w-3/4 font-sans">
          O Festival <span className="font-bold">Ser + Esporte e Lazer</span>,
          conduzido pelo Instituto Manduvi, promove a inclusão social e o
          desenvolvimento humano em Cuiabá e Várzea Grande, Mato Grosso, por
          meio de diversas atividades esportivas e de lazer. Entre as
          modalidades oferecidas estão:
        </h5>
        <div className=" bg-zinc-50 size-full text-center pt-3 pb-12">
          <Carousel
            className="w-11/12 mx-auto"
            opts={{
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              <CarouselItem
                className="pl-2 md:pl-4 hover:cursor-pointer"
                onClick={() => setModalidade('basquete')}
              >
                <img src="imagensesporte/basquete.png" alt="" />
              </CarouselItem>
              <CarouselItem
                className="pl-2 md:pl-4 hover:cursor-pointer"
                onClick={() => setModalidade('beach-wrestling')}
              >
                <img src="imagensesporte/beachwrestling.png" alt="" />
              </CarouselItem>
              <CarouselItem
                className="pl-2 md:pl-4 hover:cursor-pointer"
                onClick={() => setModalidade('futevolei')}
              >
                <img src="imagensesporte/futevolei.png" alt="" />
              </CarouselItem>
              <CarouselItem
                className="pl-2 md:pl-4 hover:cursor-pointer"
                onClick={() => setModalidade('jiu-jitsu')}
              >
                <img src="imagensesporte/jiujitsu.png" alt="" />
              </CarouselItem>
              <CarouselItem
                className="pl-2 md:pl-4 hover:cursor-pointer"
                onClick={() => setModalidade('voleidepraia')}
              >
                <img src="imagensesporte/voleidepraia.png" alt="" />
              </CarouselItem>
              <CarouselItem
                className="pl-2 md:pl-4 hover:cursor-pointer"
                onClick={() => setModalidade('wrestling')}
              >
                <img src="imagensesporte/wrestling.png" alt="" />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div className="w-full h-2/4 bg-zinc-50 ">
        <div className="w-3/4 h-2/4  bg-zinc-50 lg:size-1/4 m-auto pb-10 mb-16 md:-mb-16 flex flex-col items-center p-4 shadow-lg">
          <h1 className="text-2xl font-bold text-green-800 flex">
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
              className="lucide lucide-calendar-days"
            >
              <path d="M8 2v4" />
              <path d="M16 2v4" />
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <path d="M3 10h18" />
              <path d="M8 14h.01" />
              <path d="M12 14h.01" />
              <path d="M16 14h.01" />
              <path d="M8 18h.01" />
              <path d="M12 18h.01" />
              <path d="M16 18h.01" />
            </svg>
            data
          </h1>
          <h5 className="font-sans mb-8">
            {modalidade === '' ? 'Clique na modalidade' : db[modalidade].data}
          </h5>
          <a href={modalidade === '' ? '' : db[modalidade].linklocal}>
            <h1 className="text-2xl font-bold text-green-800 flex justify-center">
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
                className="lucide lucide-map-pinned"
              >
                <path d="M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0" />
                <circle cx="12" cy="8" r="2" />
                <path d="M8.835 14H5a1 1 0 0 0-.9.7l-2 6c-.1.1-.1.2-.1.3 0 .6.4 1 1 1h18c.6 0 1-.4 1-1 0-.1 0-.2-.1-.3l-2-6a1 1 0 0 0-.9-.7h-3.835" />
              </svg>
              local
            </h1>
            <h5 className="font-sans">
              {modalidade === ''
                ? 'Clique na modalidade'
                : db[modalidade].local}
            </h5>
          </a>
          <div className="flex items-center mt-10 justify-center h-14 w-44 hover:bg-yellow-400 rounded transition-colors duration-200 hover:text-green-900 bg-green-900 text-gray-100">
            <a
              className="h-full flex items-center justify-center"
              href={modalidade === '' ? '' : db[modalidade].linkp}
            >
              <h1 className="text-sm">vá para o cadastro do esporte</h1>
            </a>
          </div>
        </div>
      </div>
      <div className="z-20">
        <a
          className="size-18 p-3 hover:bg-yellow-400 opacity-70 fixed rounded end-2 bottom-4 z-20 transition-colors duration-200 hover:text-green-900 bg-green-600 text-yellow-400"
          href="https://app.sermaissaudavel.com"
        >
          <h1>vá para a inscrição</h1>
        </a>
      </div>
      <div
        className=" bg-zinc-50 w-full flex flex-col items-center justify-center text-center pt-20 md:mt-40 pb-12"
        id="ultimocamp"
      >
        <h1 className="text-5xl font-bold text-amber-900">último evento</h1>
        <h5 className="font-sans -mt-2 mb-8">
          Fotos do último campeonato Jogos das Estrelas
        </h5>
        <Carousel
          className="w-11/12 mx-auto"
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
        <div className="w-full mt-5 bg-zinc-50 flex items-center justify-center">
          <iframe
            className="w-2/4 h-96"
            src="https://www.youtube.com/embed/KDFBsEwBgmk"
            title=""
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div
        id="jornada"
        className="w-full justify-center items-center flex-col pt-20 bg-zinc-50 text-center"
      >
        <h1 className="text-5xl font-bold text-amber-900">jornada</h1>
        <h5 className="font-sans text-gray-900">
          Aperte o botão e vá para o cadastro no{' '}
          <span className="font-sans font-bold text-gray-900">
            Aplicativo Ser Mais Saudável
          </span>{' '}
        </h5>
        <div
          className={cn('w-3/4 mx-auto md:w-2/5', {
            'h-96': !open,
            'h-20': open,
          })}
        >
          <div
            className="size-full hover:cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <img
              className={cn('w-2/4 h-80 md:h-full m-auto', {
                hidden: open,
                flex: !open,
              })}
              src="imagens/passos-1.png"
              alt=""
            />
            <div className="w-full h-20 rounded  bg-zinc-800/90 ">
              <h1 className="w-full pt-5 h-6 text-center text-2xl md:text-3xl text-white">
                {open ? 'Fechar' : 'veja a jornada completa'}
              </h1>
            </div>
          </div>
        </div>
        <div
          className={cn(
            'w-full justify-center items-center flex flex-col md:flex-row mt-5',
            {
              hidden: !open,
              flex: open,
            },
          )}
        >
          <img
            className="md:w-1/5 lg:w-2/12"
            src="imagens/Passos-1.png"
            alt=""
          />
          <img
            className="w-8 md:hidden lg:flex justify-center"
            src="imagens/Passos-seta.png"
            alt=""
          />
          <img
            className="md:w-1/5 lg:w-2/12"
            src="imagens/Passos-2.png"
            alt=""
          />
          <img
            className="w-8 md:hidden lg:flex justify-center"
            src="imagens/Passos-seta.png"
            alt=""
          />
          <img
            className="md:w-1/5 lg:w-2/12"
            src="imagens/Passos-3.png"
            alt=""
          />
          <img
            className="w-8 md:hidden lg:flex justify-center"
            src="imagens/Passos-seta.png"
            alt=""
          />
          <img
            className="md:w-1/5 lg:w-2/12"
            src="imagens/Passos-4.png"
            alt=""
          />
        </div>
      </div>
      <div className="flex items-center mt-10 md:mt-32 justify-center h-20 w-44 hover:bg-yellow-400 rounded transition-colors duration-200 hover:text-green-900 bg-green-600 text-yellow-400">
        <a
          className="h-full flex items-center justify-center"
          href="https://app.sermaissaudavel.com"
        >
          <h1 className="text-2xl">vá para o cadastro</h1>
        </a>
      </div>
      <div id="sobremandu" className="w-full bg-zinc-50 pt-10">
        <h1 className="text-5xl font-bold text-amber-900 p-10 bg-zinc-50 text-center">
          sobre o manduvi
        </h1>
        <img className="lg:m-auto" src="imagens/manduvi.png" alt="" />
      </div>
      <div className="w-full">
        <h1 className="text-5xl font-bold text-amber-900 mt-14 mb-10 bg-zinc-50 text-center">
          patrocinadores
        </h1>
        <div className="w-full flex flex-wrap items-center justify-around gap-5 mb-14 shadow-2xl">
          <img className="w-32" src="imagens/patrocinio1.webp" alt="" />
          <img className="w-32" src="imagens/patrocinio2.webp" alt="" />
          <img className="w-32" src="imagens/patrocinio3.webp" alt="" />
          <img className="w-32" src="imagens/patrocinio4.webp" alt="" />
          <img className="w-32" src="imagens/patrocinio5.webp" alt="" />
          <img className="w-32" src="imagens/patrocinio6.webp" alt="" />
        </div>
        <div className="w-3/6 mx-auto md:w-1/5 ">
          <img src="imagens/Logolaranja.png" alt="" />
        </div>
        <div className="mx-auto mt-2 text-center  content-between">
          <h1 className="text-2xl mt-2 font-bold text-amber-900">
            Redes sociais
          </h1>
          <div className="flex justify-around">
            <a
              className="p-2 flex font-display"
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
              className="p-2 flex font-display"
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
            <a className="p-2 flex font-display" href="https://x.com/imanduvi">
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
              className="p-2 flex font-display"
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
            className="p-1 font-bold border-solid border-2 border-amber-950 rounded font-display"
            href="https://maps.app.goo.gl/kR9h8pZyhJSiaJgE7"
          >
            ir ao Instituto
          </a>
          <h1 className="text-sm mt-2 mb-3 font-bold text-gray-500">
            © Todos os direitos reservados
          </h1>
        </div>
      </div>
    </main>
  )
}
