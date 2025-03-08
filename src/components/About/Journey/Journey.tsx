import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../../../utils/animations";

const Journey = () => {
  useGSAP(() => {
    animateWithGsap(".gsapTextJourney");
    animateWithGsap(".gsapText2Journey");
    animateWithGsap(".gsapText3Journey");
  }, []);
  return (
    <section className="flex justify-between common-padding lg:flex-row flex-col gap-9">
      <h2 className="gsapTextJourney titleAbout">Jornada</h2>
      <div className="common-py max-w-[970px] flex flex-col gap-9">
        <p className="gsapTextJourney textAbout">
          Minha jornada no mundo da tecnologia começou cedo, com apenas 15
          entrei por hobby no mundo da programação, fazendo sites com HTML e CSS
          e brincando um pouco com python. Terminando o ensino médio, decidi
          entrar na faculdade de engenharia de software pela FIAP onde iria
          começar minha jornada
        </p>
        <p className="gsapTextJourney textAbout">
          Foi nesse decisão que encontrei a paixão em transformar ideias de
          clientes em interfaces que realmente conectam com as pessoas. E
          transformar ideias em projetos virou minha maior paixão
        </p>
        <div className="gsapText2Journey division"></div>
        <p className="gsapText2Journey textAbout">
          Atualmente, estou estudando ainda engenharia de software pela
          faculdade da anhanguera, além de trabalhar em diversos projetos que me
          ajudam a aprimorar minhas habilidades e conhecimentos sobre o mundo da
          tecnologia
        </p>
        <p className="gsapText2Journey textAbout">
          Acredito que ao estudar e continuar me dedicando seja o caminho
          perfeito para me tornar um desenvolvedor de sucesso e continuar
          pensando em soluções inovadoras e impactantes
        </p>
        <div className="gsapText3Journey division"></div>
        <p className="gsapText3Journey textAbout">
          Busco sempre melhorar meus conhecimentos sobre o mundo da tecnologia
          para que minha soluções não sejam apenas bonitas, mas sim inovadoras e
          impactantes
        </p>
        <p className="gsapText3Journey textAbout">
          A tecnologia e a programação podem transformar o mundo, e quero
          contribuir para isso e contribuir para que minhas ideias e projetos
          façam a diferença
        </p>
      </div>
    </section>
  );
};

export default Journey;
