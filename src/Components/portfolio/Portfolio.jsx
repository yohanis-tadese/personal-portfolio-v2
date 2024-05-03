import amazonImg from "../../assets/images/amazonImg.png";
import Travel from "../../assets/images/travelList.jpg";
import { motion } from "framer-motion";
import noorShop from "../../assets/images/noorShop.png";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
import "./portfolio.scss";
import SectionTitle from "../SectionTitle";
import { useState } from "react";

const Portfolio = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div
      id="project"
      className="Myportfolio max-w-container mx-auto lgl:px-20 py-24  "
    >
      <div className="portfolio-title">
        <SectionTitle title="Some Things I have Built" />
      </div>

      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        {/* *************** Project one ******************** */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://jhon21.netlify.app/"
            target="_blank"
          >
            <div>
              <img
                className="w-full h-full object-contain"
                src={amazonImg}
                alt="amazonImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Amazon Clone 2.0</h3>
            </div>
            <p className="bg-[#64FFDA] text-sm md:text-base p-2 md:p-6 rounded-md  ">
              An Amazon clone website for visualizing personalized Amazon
              website. View your products, Add your account with{" "}
              <span className="text-textGreen">O-auth</span> and then make the
              purchage using <span className="text-textGreen">stripe</span>.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Nextjs</li>
              <li>Typescript</li>
              <li>Next-auth</li>
              <li>Stripe</li>
              <li>Vercel Deployment</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/Jhontadese"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/Jhontadese"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>

        {/* *************** Project two ******************** */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://packed-travel-ready.netlify.app/"
            target="_blank"
          >
            <div>
              <img
                className="w-full h-full object-contain"
                src={Travel}
                alt="cyberImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Traveler pack easily</h3>
            </div>
            <p className="text-sm md:text-base bg-[#64FFDA] p-2 md:p-6 rounded-md xl:-mr-16  ">
              Create your travel list effortlessly! Note what you can't leave
              behind and quantity. Tick off as you pack. Easily track
              essentials. Remove what you don't need. Simplify your packing
              process!
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/Jhontadese/react-travel-list"
                target="_blank"
              >
                <TbBrandGithub />
              </a>

              <a
                className="hover:text-textGreen duration-300"
                href="https://packed-travel-ready.netlify.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* *************** Project three ******************** */}
      {showMore && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {/* *************** Project three ******************** */}
            <div className="flex flex-col xl:flex-row gap-6 mt-20">
              <a
                className="w-full xl:w-1/2 h-auto relative group"
                href="https://github.com/Jhontadese"
                target="_blank"
              >
                <div>
                  <img
                    className="w-full h-full object-contain"
                    src={noorShop}
                    alt="noorShop"
                  />
                  <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
                </div>
              </a>
              <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
                <div>
                  <p className="font-titleFont text-textGreen text-sm tracking-wide">
                    Featured Project
                  </p>
                  <h3 className="text-2xl font-bold">Amazon Clone 2.0</h3>
                </div>
                <p className="text-sm md:text-base bg-[#64FFDA] p-2 md:p-6 rounded-md  ">
                  An Amazon clone website for visualizing personalized Amazon
                  website. View your products, Add your account with{" "}
                  <span className="text-textGreen">O-auth</span> and then make
                  the purchage using{" "}
                  <span className="text-textGreen">stripe</span>.
                </p>
                <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                  <li>Nextjs</li>
                  <li>Typescript</li>
                  <li>Next-auth</li>
                  <li>Stripe</li>
                  <li>Vercel Deployment</li>
                </ul>
                <div className="text-2xl flex gap-4">
                  <a
                    className="hover:text-textGreen duration-300"
                    href="https://github.com/Jhontadese"
                    target="_blank"
                  >
                    <TbBrandGithub />
                  </a>

                  <a
                    className="hover:text-textGreen duration-300"
                    href="https://noorshop.netlify.app/"
                    target="_blank"
                  >
                    <RxOpenInNewWindow />
                  </a>
                </div>
              </div>
            </div>

            {/* *************** Project four ******************** */}
            <div className="flex flex-col xl:flex-row-reverse gap-6 mt-20">
              <a
                className="w-full xl:w-1/2 h-auto relative group"
                href="https://packed-travel-ready.netlify.app/"
                target="_blank"
              >
                <div>
                  <img
                    className="w-full h-full object-contain"
                    src={Travel}
                    alt="cyberImg"
                  />
                  <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
                </div>
              </a>
              <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
                <div>
                  <p className="font-titleFont text-textGreen text-sm tracking-wide">
                    Featured Project
                  </p>
                  <h3 className="text-2xl font-bold">Traveler pack easily</h3>
                </div>
                <p className="text-sm md:text-base bg-[#64FFDA] p-2 md:p-6 rounded-md xl:-mr-16  ">
                  Create your travel list effortlessly! Note what you can't
                  leave behind and quantity. Tick off as you pack. Easily track
                  essentials. Remove what you don't need. Simplify your packing
                  process!
                </p>
                <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                  <li>React</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                </ul>
                <div className="text-2xl flex gap-4">
                  <a
                    className="hover:text-textGreen duration-300"
                    href="https://github.com/Jhontadese/react-travel-list"
                    target="_blank"
                  >
                    <TbBrandGithub />
                  </a>

                  <a
                    className="hover:text-textGreen duration-300"
                    href="https://packed-travel-ready.netlify.app/"
                    target="_blank"
                  >
                    <RxOpenInNewWindow />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col xl:flex-row gap-6 mt-20">
              <a
                className="w-full xl:w-1/2 h-auto relative group"
                href="https://jhon21.netlify.app/"
                target="_blank"
              >
                <div>
                  <img
                    className="w-full h-full object-contain"
                    src={amazonImg}
                    alt="amazonImg"
                  />
                  <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
                </div>
              </a>
              <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
                <div>
                  <p className="font-titleFont text-textGreen text-sm tracking-wide">
                    Featured Project
                  </p>
                  <h3 className="text-2xl font-bold">Amazon Clone 2.0</h3>
                </div>
                <p className="bg-[#64FFDA] text-sm md:text-base p-2 md:p-6 rounded-md  ">
                  An Amazon clone website for visualizing personalized Amazon
                  website. View your products, Add your account with{" "}
                  <span className="text-textGreen">O-auth</span> and then make
                  the purchage using{" "}
                  <span className="text-textGreen">stripe</span>.
                </p>
                <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                  <li>Nextjs</li>
                  <li>Typescript</li>
                  <li>Next-auth</li>
                  <li>Stripe</li>
                  <li>Vercel Deployment</li>
                </ul>
                <div className="text-2xl flex gap-4">
                  <a
                    className="hover:text-textGreen duration-300"
                    href="https://github.com/Jhontadese"
                    target="_blank"
                  >
                    <TbBrandGithub />
                  </a>
                  <a
                    className="hover:text-textGreen duration-300"
                    href="https://github.com/Jhontadese"
                    target="_blank"
                  >
                    <RxOpenInNewWindow />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}

      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            style={{ background: "#64FFDA" }}
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            style={{ background: "#64FFDA" }}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300 "
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
