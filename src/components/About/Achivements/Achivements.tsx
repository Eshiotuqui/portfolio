import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../../../utils/animations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Achivements = () => {
  useGSAP(() => {
    animateWithGsap(".gsapTextAchivements");
    animateWithGsap(".gsapText2Achivements");
    gsap.to(".gsapPin", {
      scrollTrigger: {
        trigger: ".gsapPin",
        start: "50% 50%",
        end: "130% 50%",
        pin: true,
        pinType: "transform",
      },
    });
    gsap.to(".gsapImg", {
      height: "0%",
      duration: 1.5,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: ".gsapImgRef",
        start: "50% 50%",
        end: "50% 50%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.to(".gsapImg2", {
      height: "100%",
      duration: 1.5,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: ".gsapImgRef",
        start: "50% 50%",
        end: "50% 50%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.to(".gsapTextImg", {
      top: "-24px",
      duration: 1,
      stagger: 0.4,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: ".gsapImgRef",
        start: "50% 50%",
        end: "50% 50%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.to(".gsapText2Img", {
      top: "0px",
      duration: 1,
      stagger: 0.4,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: ".gsapImgRef",
        start: "50% 50%",
        end: "50% 50%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);
  return (
    <section className="flex justify-between common-padding lg:flex-row flex-col lg:gap-16 gap-9">
      <div className="gsapImgRef relative w-full h-full">
        <h2 className="gsapTextAchivements titleAbout">Jornada</h2>
        <div className="w-full common-my gsapPin flex flex-col gap-2">
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden flex items-end">
            <img
              src="img/POTENCIAL.jpg"
              className="gsapTextAchivements gsapImg opacity-0 translate-y-20 rounded-2xl absolute w-full h-full object-cover object-center"
              alt="Potencial tecnologia LTDA"
            />
            <img
              src="img/nexus.jpg"
              className="gsapTextAchivements gsapImg2 opacity-0 translate-y-20 rounded-2xl absolute w-full h-[0%] object-cover object-center"
              alt="Nexus software development"
            />
          </div>
          <div className="w-full h-[24px] relative flex overflow-hidden">
            <p className="gsapTextAchivements titleImgAbout gsapTextImg top-[0px]">
              Potencial Tecnologia
            </p>
            <p className="gsapTextAchivements textImgAbout gsapTextImg top-[0px]">
              2023 - 2024
            </p>
            <p className="gsapTextAchivements titleImgAbout gsapText2Img top-[24px]">
              Nexus
            </p>
            <p className="gsapTextAchivements textImgAbout gsapText2Img top-[24px]">
              2024 - 2025
            </p>
          </div>
        </div>
      </div>
      <div className="common-py max-w-[970px] flex flex-col gap-9">
        <div className="common-py flex flex-col gap-9">
          <p className="gsapText2Achivements titleTextAbout">
            Potencial tecnologia
          </p>
          <p className="gsapText2Achivements textAbout">
            Foi a primeira empresa que trabalhei como dev, iniciei em 2023 como
            estagiário, e em 2024 fui promovido para júnior. Foi uma
            oportunidade incrível para eu poder aprender e crescer como
            desenvolvedor.
          </p>
          <p className="gsapText2Achivements textAbout">
            Durante a jornada aprendi muito sobre o front-end, sobre tecnologias
            como Vue.js e python e aprendi principalmente responsabilidades
            sobre a vida de um developer, como trabalho em equipe, comunicação,
            trabalho em projetos, etc.
          </p>
        </div>
        <div className="gsapText2Achivements division"></div>
        <div className="common-py flex flex-col gap-9">
          <p className="gsapText2Achivements titleTextAbout">
            Nexus software development
          </p>
          <p className="gsapText2Achivements textAbout">
            Logo após entrei na nexus como Dev. Foi uma oportunidade incrível
            para provar minhas habilidades e conhecimentos em um ambiente
            profissional. Atuei como um prestador de serviço em vários projetos,
            cada um com suas características e desafios.
          </p>
          <p className="gsapText2Achivements textAbout">
            Foi incrível para treinar meus conhecimentos em React e typescript,
            além de aprender muito sobre clean code e padrões no front-end
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achivements;
