import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full mb-[100px] md:mb-10 pb-10 pt-20" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals!
        </p>
        <a href="mailto:botirjonov777@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col gap-2 justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © {year} Ibrohim
        </p>
        <div className="flex items-center md:gap-3 lg:gap-6 gap-3">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer rounded-lg border border-black-300 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200"
            >
              <a href={profile.link} target="_blank">
                <img
                  src={profile.img}
                  alt={profile.img}
                  width={20}
                  height={20}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
