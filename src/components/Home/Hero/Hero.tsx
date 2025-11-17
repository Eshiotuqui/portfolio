import { useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);
import gsap from "gsap";
import { heroAnimateWithGsap } from "../../../utils/animations";
import { ChevronDown } from "lucide-react";

import parcele from "/media/gif/parcele.gif";
import clima from "/media/gif/clima.gif";
import thanos from "/media/gif/thanos.gif";
import comida from "/media/gif/food.gif";

const Hero = () => {
  const [gif, setGif] = useState<string>("");

  useEffect(() => {
    const gifs = [parcele, clima, thanos, comida];

    const changeGif = () => {
      const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
      setGif(randomGif);
    };

    changeGif();

    const intervalId = setInterval(changeGif, 25000);

    return () => clearInterval(intervalId);
  }, []);

  useGSAP(() => {
    heroAnimateWithGsap(".hero");
  }, []);

  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    gsap.to(window, {
      duration: 2,
      scrollTo: "#About",
      ease: "power4.inOut",
    });
  };

  return (
    <section
      id="Hero"
      className="w-full h-[140svh] common-padding flex flex-col justify-between"
    >
      <div className="min-h-[120px]"></div>

      <div
        id="heroVideo"
        className="hero relative w-full min-h-[100px]  common-my z-0 rounded-2xl overflow-hidden border-2 border-gray-50"
      >
        <h1 className="text-2xl  flex flex-center ">
          Preview de alguns projetos
        </h1>
        <img src={gif} className="w-full " alt="Hero GIF" />
      </div>
      <div className="w-full flex justify-between items-end">
        <div className="flex flex-col gap-2">
          <p className="hero text-3xl text-gray">Desenvolvedor</p>
          <h1 className="hero text-8xl">Front-end</h1>
        </div>
        <button
          onClick={scrollToAbout}
          className="hero flex gap-1 text-gray text-xl cursor-pointer"
        >
          Scroll
          <ChevronDown strokeWidth={2.5} className="pointer-events-none" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
