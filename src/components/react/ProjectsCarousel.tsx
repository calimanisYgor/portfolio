import { Swiper, SwiperSlide } from "swiper/react";
import { Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";

export default function ProjectsCarousel() {
  return (
    <Swiper
      modules={[Autoplay, Navigation]}
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      }}
      spaceBetween={10}
      slidesPerView={1}
      slidesPerGroup={1}
      // autoplay={{
      //   delay: 10000,
      // }}
      className="rounded-lg"
    >
      <SwiperSlide>
        <img src="/portfolio/projects/tarnished-ai.jpg" />
        <div className="text-center bg-secondary p-5">
          <h3 className="text-xl">The Tarnished AI</h3>
          <p className="opacity-70 mt-3 text-sm ">
            The Tarnished AI é uma aplicação web que utiliza inteligência
            artificial para auxiliar jogadores na criação de builds
            personalizadas em jogos do gênero Soulslike. O sistema permite ao
            usuário selecionar um título da série e receber sugestões detalhadas
            de progressão, distribuição de atributos, armas recomendadas e
            estratégias adequadas ao seu estilo de jogo ou objetivo específico.
          </p>
          <div className="mt-6 flex gap-3 justify-center items-center">
            {["html", "css", "javascript", "gemini"].map((t) => (
              <img
                className="w-8"
                key={t}
                src={
                  t === "gemini"
                    ? "/portfolio/icons/gemini.svg"
                    : `https://skillicons.dev/icons?i=${t}`
                }
                alt={t}
              />
            ))}
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <img src="/portfolio/projects/virtual-keyboard.png" />
        <div className="text-center bg-secondary p-5">
          <h3 className="text-xl">Virtual Keyboard (Python)</h3>
          <p className="opacity-70 mt-3 text-sm ">
            Teclado virtual controlado por rastreamento de mãos via webcam,
            usando visão computacional. Detecta e mapeia os gestos das mãos
            para digitação e controle de aplicativos, pensado como uma
            alternativa acessível ao teclado físico.
          </p>
          <a
            href="https://github.com/calimanisYgor/virtualKeyboardPy"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1 text-xs text-accent hover:underline"
          >
            <Github size={14} />
            Ver repositório
          </a>
          <div className="mt-6 flex gap-3 justify-center items-center">
            {["python", "opencv", "tensorflow", "anaconda"].map((t) => (
              <img
                className="w-8"
                key={t}
                src={`https://skillicons.dev/icons?i=${t}`}
                alt={t}
              />
            ))}
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="bg-white flex items-center justify-center p-10">
          <img
            src="/portfolio/projects/lab-ia-logo.png"
            className="max-h-20 w-auto"
            alt="Lab.IA"
          />
        </div>
        <div className="text-center bg-secondary p-5">
          <h3 className="text-xl">Lab.IA</h3>
          <Badge variant="outline" className="text-xs mt-1">
            Em desenvolvimento
          </Badge>
          <p className="opacity-70 mt-3 text-sm ">
            Aplicação desktop de leitura labial: captura o rosto pela webcam,
            extrai em tempo real os landmarks faciais da boca e permite
            gravar amostras de palavras articuladas para montar um dataset
            local. A partir desse dataset, um classificador (GRU) é treinado
            para reconhecer, ao vivo, qual palavra foi articulada — todo o
            processamento roda localmente, sem chamadas externas.
          </p>
          <div className="mt-6 flex gap-3 justify-center items-center">
            {["python", "pytorch", "opencv", "qt", "sqlite"].map((t) => (
              <img
                className="w-8"
                key={t}
                src={`https://skillicons.dev/icons?i=${t}`}
                alt={t}
              />
            ))}
          </div>
        </div>
      </SwiperSlide>

      {/* <SwiperSlide>
        <img src="/portfolio/projects/tarnished-ai.jpg" />
        <div className="text-center bg-secondary p-5">
          <h3 className="text-xl">Website / Landing Page</h3>
          <p className="opacity-70 mt-3 text-sm">
            The above is one of many landing pages I have developed throughout
            my career, often including blogs, deployed on web hosting services.
          </p>
          <div className="mt-6 flex gap-3 justify-center items-center">
            {[
              "html",
              "css",
              "javascript",
              "tailwind",
              "astro",
              "react",
              "php",
              "mysql",
            ].map((t) => (
              <img
                className="w-8"
                key={t}
                src={`https://skillicons.dev/icons?i=${t}`}
              />
            ))}
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <img src="/portfolio/projects/tarnished-ai.jpg" />
        <div className="text-center bg-secondary p-5">
          <h3 className="text-xl">Immersive Fashion Brand Website</h3>
          <p className="opacity-70 mt-3 text-sm">
            A very fun project I developed to a fashion brand, utilyzing a bunch
            of 3D elements to immerse the viewer on the brand 'virus' aesthetic.
          </p>
          <div className="mt-6 flex gap-3 justify-center items-center">
            {["vite", "react"].map((t) => (
              <img
                className="w-8"
                key={t}
                src={`https://skillicons.dev/icons?i=${t}`}
              />
            ))}
          </div>
        </div>
      </SwiperSlide> */}
    </Swiper>
  );
}
