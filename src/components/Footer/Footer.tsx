import { ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import CV from "/public/CV-EnzoShiotuqui.pdf";

gsap.registerPlugin(ScrollToPlugin);
import gsap from "gsap";

const Footer = () => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    gsap.to(window, {
      duration: 2,
      scrollTo: 0,
      ease: "power4.inOut",
    });
  };

  return (
    <footer
      id="Footer"
      className="w-full h-[80svh] common-padding bg-gray-50 flex flex-col justify-between"
    >
      <div className="flex justify-between sm:flex-row flex-col gap-6">
        <div className="flex sm:gap-24 gap-12">
          <ul className="text-3xl flex flex-col lg:gap-2 gap-0">
            <li className="md:mb-2 mb-1">Sitemap</li>
            <li>
              <Link
                to="/"
                className="text-gray-400 link link--metis hover:text-[var(--color)] transition-all"
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                to="/Projetos"
                className="text-gray-400 link link--metis hover:text-[var(--color)] transition-all"
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                to="/Sobre"
                className="text-gray-400 link link--metis hover:text-[var(--color)] transition-all"
              >
                Sobre
              </Link>
            </li>
          </ul>
          <ul className="text-3xl flex flex-col lg:gap-2 gap-0">
            <li className="md:mb-2 mb-1">Redes</li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/enzo-shiotuqui-385324266/"
                className="text-gray-400 link link--metis hover:text-[var(--color)] transition-all"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://github.com/Eshiotuqui"
                className="text-gray-400 link link--metis hover:text-[var(--color)] transition-all"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <ul className="text-3xl flex flex-col sm:items-end items-start lg:gap-2 gap-0">
          <li className="md:mb-2 mb-1">Contato</li>
          <li>
            <a
              href="mailto:enzoshiotuqui.dev@gmail.com"
              className="text-gray-400 link link--metis hover:text-[var(--color)] transition-all"
            >
              enzoshiotuqui.dev@gmail.com
            </a>
          </li>
          <div></div>
          <li className="md:mb-2 mb-1">Currículo</li>
          <li>
            <a
              href={CV}
              className="text-gray-400 link link--metis hover:text-[var(--color)] transition-all"
              download
            >
              Baixar CV
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full flex justify-between items-end gap-6">
        <h1 className="text-2xl link link--metis flex flex-center flex-shrink-0 md:gap-2 gap-0">
          Eshiotuqui
        </h1>
        <a
          href="#"
          className="text-2xl link link--metis flex flex-center flex-shrink-0 md:gap-2 gap-0"
          onClick={scrollToTop}
        >
          Voltar <ChevronUp strokeWidth={2.5} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
