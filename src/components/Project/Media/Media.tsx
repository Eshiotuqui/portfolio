import { useParams } from "react-router-dom";
import { projects } from "../../../constants/Projects";
import { useRef } from "react";

interface Params {
  [key: string]: string | undefined;
  id: string;
}

const Media = () => {
  const { id } = useParams<Params>();
  const project = projects.find((p) => p.id === id);

  const imagesContainerRef = useRef<HTMLDivElement>(null);

  if (!project) return null;

  return (
    <section id="Media" className="w-full flex flex-col lg:gap-9 gap-6">
      <div ref={imagesContainerRef}>
        <picture className="w-[20%] h-fit lg:rounded-3xl rounded-2xl object-fit border-2 border-gray-50 ">
          <source src={`/media/${project.id}/mobile.png`} type="image/png" />
          <img
            src={`/media/${project.id}/mobile.png`}
            loading="lazy"
            alt="Landing page"
          />
        </picture>
        <picture className="lg:w-[calc(80%-36px)] w-[calc(80%-24px)] h-fit lg:rounded-3xl rounded-2xl object-fit border-2 border-gray-50 ">
          <source src={`/media/${project.id}/desk.png`} type="image/png" />
          <img
            src={`/media/${project.id}/desk.png`}
            className="w-full h-fit object-fit"
            alt="Landing page"
            loading="lazy"
          />
        </picture>
      </div>
      <div className="flex flex-col lg:gap-9 gap-6">
        <div className="flex lg:flex-row flex-col lg:gap-9 gap-6">
          <div
            className={`"lg:max-h-[300svh] h-fit"
            } overflow-hidden flex lg:gap-9 gap-6 `}
          >
            <source src={`/media/${project.id}/desk.png`} type="image/png" />
            <img
              src={`/media/${project.id}/test.png`}
              className="w-full h-fit object-fit"
              alt="Landing page"
              loading="lazy"
            />
          </div>
          <div
            className={`"lg:max-h-[300svh] h-fit"
            } overflow-hidden flex lg:gap-9 gap-6 `}
          >
            <source src={`/media/${project.id}/desk.png`} type="image/png" />
            <img
              src={`/media/${project.id}/test2.png`}
              className="w-full h-fit object-fit"
              alt="Landing page"
              loading="lazy"
            />
          </div>
          <div
            className={`"lg:max-h-[300svh] h-fit"
            } overflow-hidden flex lg:gap-9 gap-6 `}
          >
            <source src={`/media/${project.id}/desk.png`} type="image/png" />
            <img
              src={`/media/${project.id}/test3.png`}
              className="w-full h-fit object-fit"
              alt="Landing page"
              loading="lazy"
            />
          </div>
          <div
            className={`"lg:max-h-[300svh] h-fit"
            } overflow-hidden flex lg:gap-9 gap-6 `}
          >
            <source src={`/media/${project.id}/desk.png`} type="image/png" />
            <img
              src={`/media/${project.id}/test4.png`}
              className="w-full h-fit object-fit"
              alt="Landing page"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Media;
