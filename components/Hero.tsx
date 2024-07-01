import { FaDownload, FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-20">
      <div>
        <Spotlight
          className="-top-16 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        {/* <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        /> */}
        <Spotlight
          className="md:left-80 md:top-28  top-0  md:h-[80vh] md:w-[50vw] w-[100vw]"
          fill="blue"
        />
      </div>

      <div className=" absolute top-0 left-0 h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className=" uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            This website was built using Next js and Aceternity UI
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Welcome to my Portfolio Website!"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm font-semibold md:text-lg lg:text-2xl">
            My name is Botirjonov Ibrohim <br /> I&apos;m a{" "}
            <span className="text-purple">front-end</span> developer
          </p>

          <a href="/CV front-end developer.pdf" download>
            <MagicButton
              title="Download my CV"
              icon={<FaDownload />}
              position={"right"}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
