import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { headerAnimateWithGsap } from "../../utils/animations";
import { AlignJustify, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CV from "/public/CV-EnzoShiotuqui_PT.pdf";

interface MenuProps {
  menu: boolean;
  setMenu: (value: boolean) => void;
}

const Header: React.FC<MenuProps> = ({ menu, setMenu }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useGSAP(() => {
    headerAnimateWithGsap(".header");
  }, []);

  const scrollToFooter = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === "/Projetos") {
      navigate("/");
      setTimeout(() => {
        gsap.to(window, {
          duration: 2,
          scrollTo: "#Footer",
          ease: "power4.inOut",
        });
      }, 400);
    } else {
      gsap.to(window, {
        duration: 2,
        scrollTo: "#Footer",
        ease: "power4.inOut",
      });
    }
  };

  return (
    <header className="header fixed top-0 left-0 w-full common-padding z-50 mix-blend-difference text-white">
      <nav className="navbar">
        <Link to="/" className="link link--metis">
          <h1 className="text-2xl link link--metis flex flex-center flex-shrink-0 md:gap-2 gap-0">
            Eshiotuqui
          </h1>
        </Link>
        <div className="gap-12 sm:flex hidden">
          <Link to="/Projetos" className="link link--metis">
            Projetos
          </Link>
          <Link to="/Sobre" className="link link--metis">
            Sobre
          </Link>
        </div>
        <div className="flex ">
          <button
            onClick={scrollToFooter}
            className=" w-auto justify-end cursor-pointer sm:flex hidden"
          >
            Contato
          </button>
          <a
            href={CV}
            className="lg:w-[100px] w-auto justify-end cursor-pointer sm:flex hidden"
            download
          >
            CV
          </a>
        </div>

        <button
          className="flex-center gap-1 sm:hidden flex"
          onClick={() => setMenu(!menu)}
        >
          {menu ? (
            <X size={26} strokeWidth={2.5} />
          ) : (
            <AlignJustify size={26} strokeWidth={2.5} />
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;
