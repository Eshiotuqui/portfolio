import { useParams } from "react-router-dom";
import { projects } from "../../../constants/Projects";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { heroAnimateWithGsap } from "../../../utils/animations";
import { ChevronDown, ExternalLink } from "lucide-react";
import { useEffect, useRef } from "react";

import { AdvancedVideo as AdvancedVideoComponent } from "@cloudinary/react";

interface Params {
  [key: string]: string | undefined;
  id: string;
}

const Hero = () => {
  const { id } = useParams<Params>();
  const project = projects.find((p) => p.id === id);

  const videoRef = useRef<AdvancedVideoComponent | null>(null); // Ref for the AdvancedVideo component

  useGSAP(() => {
    heroAnimateWithGsap(".hero", 0.1);
    gsap.to(".gsapPin", {
      scrollTrigger: {
        trigger: ".gsapPin",
        start: "top top",
        end: "bottom top",
        pin: true,
        pinType: "transform",
      },
    });
    gsap.to(".projectTexts", {
      marginLeft: "-700px",
      height: 0,
      duration: 1.5,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: ".gsapRef",
        start: "top top",
        end: "50% top",
        scrub: 2,
      },
    });
    gsap.to(".projectText", {
      marginLeft: "-400px",
      stagger: 0.05,
      duration: 1.5,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: ".gsapRef",
        start: "top top",
        end: "50% top",
        scrub: 2,
      },
    });
    gsap.to(".projectHero", {
      height: "100%",
      duration: 1.5,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: ".gsapRef",
        start: "top top",
        end: "50% top",
        scrub: 2,
      },
    });
    gsap.to(".heroBottom", {
      marginBottom: "-200px",
      opacity: 0,
      duration: 1.5,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: ".gsapRef",
        start: "top top",
        end: "50% top",
        scrub: 2,
      },
    });
    gsap.to(".heroVideo", {
      borderRadius: "24px",
      duration: 1.5,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: ".gsapRef",
        start: "top top",
        end: "50% top",
        scrub: 2,
      },
    });
  }, []);

  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    gsap.to(window, {
      duration: 2,
      scrollTo: "#Media",
      ease: "power4.inOut",
    });
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!videoRef.current?.videoRef.current) return;
      const video = videoRef.current.videoRef.current;
      if (!document.fullscreenElement) {
        video.muted = true;
        video.controls = false;
        video.style.objectFit = "cover";
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  if (!project?.pitch) return null;

  return (
    <section className="gsapRef w-full h-[200svh]">
      <div className="gsapPin w-full h-[100svh] flex flex-center relative mt-14">
        <div className="projectHero w-full md:h-[65vh] h-auto flex lg:flex-row flex-col lg:items-center items-start justify-between lg:gap-16 md:gap-11 sm:gap-6 gap-6">
          <div className="projectTexts ml-0 max-w-[600px] w-full flex flex-col lg:gap-16 md:gap-11 sm:gap-6 gap-6 flex-shrink-0">
            <div className="flex flex-col md:gap-1 gap-0">
              <h1 className="hero projectText text-8xl flex-shrink-0">
                {project?.title}
              </h1>
              <p className="hero projectText text-2xl text-gray-400 md:pb-2 pb-0 flex-shrink-0">
                {project.subtitle}
              </p>
            </div>
            <div className="flex lg:gap-16 md:gap-11 sm:gap-6 gap-6 ">
              <div className="flex flex-col md:gap-2 gap-0 flex-shrink-0">
                <h4 className="hero projectText text-2xl">Serviços</h4>
                <ul>
                  {project?.services.map((service, index) => (
                    <li
                      key={index}
                      className="hero projectText text-xl text-gray-400 flex-shrink-0"
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col md:gap-2 gap-0 max-w-[350px]">
                <h4 className="hero projectText text-2xl">Sobre</h4>
                <p className="hero projectText text-xl text-gray-400">
                  {project?.description}
                </p>
              </div>
            </div>
            {project.link && project ? (
              <a
                href={project?.link}
                className="hero projectText flex gap-2 text-2xl link link--metis w-fit"
              >
                Visitar Projeto
                <ExternalLink strokeWidth={2.5} />
              </a>
            ) : null}
          </div>
          <div
            className={`"lg:max-h-[300svh] h-fit"
          } overflow-hidden flex lg:gap-9 gap-6 `}
          >
            <video preload="none" muted autoPlay playsInline>
              <source src={`/${project.video}.mp4`} />
            </video>
          </div>
        </div>
        <div className="absolute heroBottom bottom-0 left-0 w-full common-py flex items-center justify-between">
          <p className="hero text-xl text-gray">{project?.year}</p>
          <a
            href=""
            onClick={scrollToAbout}
            className="hero flex gap-1 text-gray text-xl cursor-pointer"
          >
            Scroll
            <ChevronDown strokeWidth={2.5} className="pointer-events-none" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
