import React, { useEffect, useRef } from "react";
import { SelectedPage, BenefitType } from "../../shared/types";
import { motion, useInView } from "framer-motion";
import SingleBenefit from "./SingleBenefit";
import {
  AcademicCapIcon,
  HomeModernIcon,
  PlayIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { BenefitsPageGraphic } from "../../assets";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Benefits({ setSelectedPage }: Props) {
  const benefits: Array<BenefitType> = [
    {
      icon: <HomeModernIcon className="h-6 w-6" />,
      title: "State of the Art Facilities",
      description:
        "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
    },
    {
      icon: <UserGroupIcon className="h-6 w-6" />,
      title: "100's of Diverse Classes",
      description:
        "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
    },
    {
      icon: <AcademicCapIcon className="h-6 w-6" />,
      title: "Expert and Pro Trainers",
      description:
        "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
    },
  ];

  const myRef = useRef<any>();
  const isInView = useInView(myRef, { once: false, amount: 0.5 });

  useEffect(() => {
    const setPage = () => {
      setSelectedPage(SelectedPage.Benefits);
    };
    setPage();
  }, [isInView]);

  return (
    <section className="py-16" ref={myRef} id="benefits">
      <div className="w-5/6 mx-auto">
        <div className="md:w-3/5 pb-10">
          <h1 className="uppercase text-3xl font-bold">More than just a gym</h1>
          <p className="mt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            quibusdam id adipisci rem necessitatibus voluptates dolore natus?
            Error, laudantium architecto?
          </p>
        </div>
        <motion.div className="md:flex gap-8">
          {benefits.map((item, index) => (
            <motion.div
              key={`item-${index}`}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.8, type: "tween" }}
              viewport={{ once: true, amount: 1 }}
            >
              <SingleBenefit
                key={`benefit-${item.title}`}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </motion.div>
          ))}
        </motion.div>
        <div className="md:flex items-center py-10">
          <div>
            <img src={BenefitsPageGraphic} alt="" />
          </div>
          <motion.div
            className="md:w-4/6"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ type: "spring", duration: 1.2 }}
          >
            <h1 className="text-3xl font-bold">
              MILLIONS OF HAPPY MEMBERS GETTING
            </h1>
            <p className="my-5">
              Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
              egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
              fames vitae vitae quis. Quis amet vulputate tincidunt at in nulla
              nec. Consequat sed facilisis dui sit egestas ultrices tellus.
              Ullamcorper arcu id pretium sapien proin integer nisl. Felis orci
              diam odio.
            </p>
            <p className="mb-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
            <button className="bg-primary-500 hover:bg-primary-700 duration-300 flex gap-x-2 text-white">
              Join now <PlayIcon className="h-6 w-6 text-white" />{" "}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
