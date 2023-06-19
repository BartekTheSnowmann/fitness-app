import React from "react";
import { SelectedPage } from "../../shared/types";
import ActionButton from "../../shared/ActionButton";
import {
  HomePageText,
  HomePageGraphic,
  SponsorForbes,
  SponsorFortune,
  SponsorRedBull,
} from "../../assets";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Home({ setSelectedPage }: Props) {
  const headingsVariant = {
    hidden: {
      x: 50,
    },
    show: {
      x: 0,
      transition: {
        type: "tween",
        staggerChildren: 0.8,
      },
    },
  };

  const childrenVariant = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
      },
    },
  };

  return (
    <section
      id="home"
      className="gap-16 min-h-[100vh] bg-gray-20 py-16 mx-auto md:pb-0"
    >
      <motion.div>
        <div className="w-5/6 mx-auto md:flex py-10">
          <motion.div
            className="md:basis-3/5 mt-32 flex flex-col gap-8 z-10"
            variants={headingsVariant}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={childrenVariant} className="relative">
              <div className="before:absolute lg:before:content-evolvetext before:-z-10 before:-top-20 before:-left-20">
                <img src={HomePageText} alt="" />
              </div>
            </motion.div>
            <motion.div variants={childrenVariant}>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
                soluta commodi voluptates amet asperiores quibusdam modi,
                corrupti magni nulla magnam.
              </p>
            </motion.div>
            <motion.div className="flex" variants={childrenVariant}>
              <button className="bg-primary-500">Join now</button>
              <button className="border-b-2 border-primary-500 hover:bg-primary-500 duration-300">
                Learn more
              </button>
            </motion.div>
          </motion.div>
          <div className="md:basis-3/5 mt-32">
            <img src={HomePageGraphic} alt="" />
          </div>
        </div>
        <div className="md:block hidden py-16 bg-gray-500">
          <div className="w-5/6 mx-auto">
            <div className="flex justify-between gap-8 w-3/5">
              <img src={SponsorForbes} alt="" />
              <img src={SponsorFortune} alt="" />
              <img src={SponsorRedBull} alt="" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Home;
