import { NavegadorMobile } from "@/components/mobile-nav";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Projetos(){
    return (
        <div>
        <div className=" sticky top-0 left-0 bg-zinc-100 columns-2 w-full h-20 text-zinc-50 flex items-center justify-between z-50">
            <div><a href="https://manduvi.org.br"><img src="/imagens/Manduvi-Marrom.png" alt="" className="w-28" /></a></div>
            <NavegadorMobile />
            <div className=" hidden h-full md:flex items-center justify-center gap-3">
                <a className=" bold text-amber-950  " href="#ultimocamp">ultimo campeonato</a>
                <a className=" bold text-amber-950  " href="#jornada">jornada</a>
                <a className=" bold text-amber-950 mr-1 " href="#sobremandu">sobre o Manduvi</a>
            </div>
        </div>
        <div className="w-full h-64 bg-top bg-no-repeat bg-fixed bg-parallax bg-contain md:bg-repeat md:h-[38rem]">
        </div>
        <div className="size-full flex flex-col items-center pt-4 gap-y-2">
            <h1 className="text-2xl font-bold text-amber-900">sobre o evento</h1>
            <h5 className="w-3/4 font-sans">O Festival <span className="font-bold">Ser + Esporte e Lazer</span>, conduzido pelo Instituto Manduvi, promove a inclusão social e o desenvolvimento humano em Cuiabá e Várzea Grande, Mato Grosso, por meio de diversas atividades esportivas e de lazer. Entre as modalidades oferecidas estão:</h5>
            <h5 className="w-3/4 font-sans">Futevôlei; Vôlei de Praia; Basquete;Beach Wrestling; Wrestling; Jiu-Jitsu;</h5>
            <h5 className="w-3/4 font-sans">Com o apoio de entidades parceiras e financiamento público, essa iniciativa proporcionará infraestrutura adequada, engajamento comunitário e suporte técnico. O festival impactará diretamente cerca de 2.000 participantes, ampliando seu alcance e visibilidade através das redes sociais.</h5>
        </div>
        <div className="size-3/4 m-auto flex flex-col items-center p-5 shadow-md">
        <h1  className="text-2xl font-bold text-green-800 flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
            data</h1>
        <h5 id="ultimocamp" className="font-sans">29, 30 e 31 de agosto</h5>
        <a href="https://maps.app.goo.gl/94qoVUVWcpd7cRDS6"><h1 className="text-2xl font-bold text-green-800 flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pinned"><path d="M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0"/><circle cx="12" cy="8" r="2"/><path d="M8.835 14H5a1 1 0 0 0-.9.7l-2 6c-.1.1-.1.2-.1.3 0 .6.4 1 1 1h18c.6 0 1-.4 1-1 0-.1 0-.2-.1-.3l-2-6a1 1 0 0 0-.9-.7h-3.835"/></svg>
            local</h1></a>
        <h5 className="font-sans">Mini Estádio do Planalto Britão</h5>
        </div>
        <div>
            <a className="size-18 p-3 bg-green-400 opacity-70 fixed rounded end-2 bottom-4 z-10 text-amber-950" href="https://app.sermaissaudavel.com"><h1>vá para a inscrição</h1></a>
        </div>
        <div  className="size-full text-center mt-3">
            <h1  className="text-2xl font-bold text-amber-900">Álbum de fotos</h1>
            <h5 className="font-sans -mt-2 mb-8">Fotos do último campeonato Super ralinha</h5>
            <Carousel className="w-11/12 mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
                    <CarouselItem className="pl-2 md:pl-4"><img src="imagensralinha/img1.jpg" alt="" /></CarouselItem>
                    <CarouselItem className="pl-2 md:pl-4"><img src="imagensralinha/img2.jpg" alt="" /></CarouselItem>
                    <CarouselItem className="pl-2 md:pl-4"><img src="imagensralinha/img3.jpg" alt="" /></CarouselItem>
                    <CarouselItem className="pl-2 md:pl-4"><img src="imagensralinha/img4.jpg" alt="" /></CarouselItem>
                    <CarouselItem className="pl-2 md:pl-4"><img src="imagensralinha/img5.jpg" alt="" /></CarouselItem>
                    <CarouselItem className="pl-2 md:pl-4"><img src="imagensralinha/img6.jpg" alt="" /></CarouselItem>
                    <CarouselItem className="pl-2 md:pl-4"><img src="imagensralinha/img7.jpg" alt="" /></CarouselItem>
                    <CarouselItem className="pl-2 md:pl-4"><img src="imagensralinha/img8.jpg" alt="" /></CarouselItem>
                    <CarouselItem className="pl-2 md:pl-4"><img src="imagensralinha/img9.jpg" alt="" /></CarouselItem>
                    <CarouselItem className="pl-2 md:pl-4"><img src="imagensralinha/img10.jpg" alt="" /></CarouselItem>
                    <CarouselItem className="pl-2 md:pl-4"><img src="imagensralinha/img11.jpg" alt="" /></CarouselItem>
                    <CarouselItem className="pl-2 md:pl-4"><img src="imagensralinha/img12.jpg" alt="" /></CarouselItem>
                    <CarouselItem className="pl-2 md:pl-4"><img src="imagensralinha/img13.jpg" alt="" /></CarouselItem>
                    <CarouselItem className="pl-2 md:pl-4"><img src="imagensralinha/img14.jpg" alt="" /></CarouselItem>
                    <CarouselItem className="pl-2 md:pl-4"><img src="imagensralinha/img15.jpg" alt="" /></CarouselItem>
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
            </Carousel>

        </div>
        <div className="size-full text-center">
            <h1 className="text-2xl mt-14 font-bold text-amber-900">video do ultimo campeonato</h1>
            <h5 className="font-sans text-gray-900">Assista já no youtube</h5>
            <iframe id="jornada" className="w-11/12 h-80 mx-auto my-3 lg:w-5/12" src="https://www.youtube.com/embed/KDFBsEwBgmk" title="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <div className="size-full text-center">
            <h1 className="text-2xl mt-14 font-bold text-amber-900">jornada</h1>
            <h5 className="font-sans text-gray-900">Aperte o botão e vá para o cadastro no ser mais saudável</h5>
            <div className=" w-full items-center size-full flex flex-col md:flex-row justify-between" >
                <img className="md:w-1/5 " src="imagens/Passos-1.png" alt="" />
                <img className="w-10 md:hidden lg:flex justify-center" src="imagens/Passos-seta.png" alt="" />
                <img className="md:w-1/5" src="imagens/Passos-2.png" alt="" />
                <img className="w-10 md:hidden lg:flex justify-center" src="imagens/Passos-seta.png" alt="" />
                <img className="md:w-1/5 lg:2/12" src="imagens/Passos-3.png" alt="" />
                <img className="w-10 md:hidden lg:flex justify-center" src="imagens/Passos-seta.png" alt="" />
                <img className="md:w-1/5" src="imagens/Passos-4.png" alt="" />
            </div>
        </div>
        <div id="sobremandu" className="w-full ">
            <img className="lg:m-auto" src="imagens/manduvi.png" alt="" />
        </div>
        <div className="size-full">
            <div className="w-4/5 flex flex-wrap mx-auto p-3 shadow-2xl lg:w-3/5">
            <img className="m-auto w-2/12" src="imagens/patrocinio1.webp" alt="" />
            <img className="m-auto w-2/12" src="imagens/patrocinio2.webp" alt="" />
            <img className="m-auto w-2/12" src="imagens/patrocinio3.webp" alt="" />
            <img className="m-auto w-2/12" src="imagens/patrocinio4.webp" alt="" />
            <img className="m-auto w-2/12" src="imagens/patrocinio5.webp" alt="" />
            <img className="m-auto w-2/12" src="imagens/patrocinio6.webp" alt="" />
            </div>
            <div className="w-3/6 mx-auto md:w-1/5">
                <img src="imagens/Logolaranja.png" alt="" />
            </div>
            <div className="mx-auto mt-2 text-center content-between">
                <h1 className="text-sm mt-2 mb-3 font-bold text-black">Todos os direitos reservados</h1>
                <a className="p-1 font-bold border-solid border-2 border-amber-950 rounded" href="https://www.bing.com/maps?osid=96c8df6c-9136-4b23-9adc-f6afb8e15992&cp=-15.593174~-56.102586&lvl=17&pi=0&v=2&sV=2&form=S00027">ir ao Instituto</a>
                <h1 className="text-2xl mt-2 font-bold text-amber-900">Redes sociais</h1>
                <div className="flex justify-around">
                    <a className="p-2 flex" href="https://www.youtube.com/@institutomanduvi">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                        youtube</a>
                    <a className="p-2 flex" href="https://www.instagram.com/institutomanduvi/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                        instagram</a>
                    <a className="p-2 flex" href="https://x.com/imanduvi">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                        X/twitter</a>
                    <a className="p-2 flex" href="https://www.facebook.com/institutomanduvi/ ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    facebook</a>
                </div>
            </div>
        </div>
        </div>
    );
}