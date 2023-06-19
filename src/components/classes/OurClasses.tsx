import React, { useEffect, useRef, useState } from "react";
import { ClassType, SelectedPage } from "../../shared/types";
import { motion, useInView } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { image1, image2, image3, image4, image5, image6 } from "../../assets";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function OurClasses({ setSelectedPage }: Props) {
  const classes: Array<ClassType> = [
    {
      id: 1,
      name: "Weight Training Classes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: image1,
    },
    {
      id: 2,
      name: "Yoga Classes",
      img: image2,
    },
    {
      id: 3,
      name: "Ab Core Classes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: image3,
    },
    {
      id: 4,
      name: "Adventure Classes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: image4,
    },
    { id: 5, name: "Fitness Classes", img: image5 },
    {
      id: 6,
      name: "Training Classes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: image6,
    },
  ];

  const [width, setWidth] = useState(0);

  const carouselRef = useRef<any>(null);
  useEffect(() => {
    setWidth(carouselRef?.current.offsetWidth);
  }, []);

  const [progress, setProgress] = useState(1);

  const myRef = useRef<any>();
  const isInView = useInView(myRef, { once: false });

  useEffect(() => {
    const setPage = () => {
      setSelectedPage(SelectedPage.OurClasses);
    };
    setPage();
  }, [isInView]);

  return (
    <section
      className="bg-primary-300"
      ref={myRef}
      id={SelectedPage.OurClasses}
    >
      <div className="w-5/6 mx-auto py-20">
        <div className="md:w-3/5">
          <h1 className="text-3xl uppercase">Our classes</h1>
          <p className="mt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dignissimos tempore atque cupiditate corporis, unde quisquam
            officiis eveniet, aperiam quasi quia cumque magni labore dolorem
            repudiandae!
          </p>
        </div>
        {/* IMGAE CAROUSEL */}
        <div>
          {/* PROGRESS BAR */}
          <div className="hidden md:block relative w-full h-1 bg-gray-200 rounded-md my-10">
            <motion.div
              className={`${
                progress == 1 ? "left-0" : "left-1/2"
              } absolute duration-300 transition-all h-full w-1/2 bg-red-700`}
            ></motion.div>
          </div>
          {/* IMAGES */}
          <div ref={carouselRef} className="overflow-hidden py-10">
            <motion.div
              layout
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className={`${
                progress === 2 ? `-left-[100%]` : ""
              } relative grid md:grid-flow-col gap-4 md:w-[200%]`}
            >
              {classes.map((item) => (
                <img
                  key={item.img}
                  src={item.img}
                  alt={`class-${item.id}`}
                  className="h-full w-full"
                />
              ))}
            </motion.div>
          </div>
          <div className="hidden md:flex gap-4 justify-end">
            <div
              className="hover:bg-gray-20 duration-300 p-2 rounded-full"
              onClick={() => setProgress(1)}
            >
              <ArrowLeftIcon className="h-6 w-6" />
            </div>
            <div
              className="hover:bg-gray-20 duration-300 p-2 rounded-full"
              onClick={() => setProgress(2)}
            >
              <ArrowRightIcon className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurClasses;
