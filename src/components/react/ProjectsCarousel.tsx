import { Swiper, SwiperSlide } from "swiper/react";

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
      loop
      spaceBetween={10}
      slidesPerView={1}
      slidesPerGroup={1}
      loopAddBlankSlides
      // autoplay={{
      //   delay: 10000,
      // }}
      className="rounded-lg"
    >
      <SwiperSlide>
        <img src="/portfolio/projects/tarnished-ai.jpg" />
        <div className="text-center bg-base-100 p-5">
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
                    ? "/public/icons/gemini.svg"
                    : `https://skillicons.dev/icons?i=${t}`
                }
                alt={t}
              />
            ))}
          </div>
        </div>
      </SwiperSlide>

      {/* <SwiperSlide>
        <img src="/portfolio/projects/tarnished-ai.jpg" />
        <div className="text-center bg-base-100 p-5">
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
        <div className="text-center bg-base-100 p-5">
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
