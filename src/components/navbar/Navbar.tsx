import React, { useEffect, useRef, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Logo } from "../../assets";
import Link from "./Link";
import { SelectedPage } from "../../shared/types";
import ActionButton from "../../shared/ActionButton";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

function Navbar({ selectedPage, setSelectedPage }: Props) {
  const [OpenMenu, setOpenMenu] = useState(false);
  const flexBetween = "flex items-center justify-between";

  const [isTopOFPage, setIsTopOFPage] = useState(false);
  useEffect(() => {
    function calculateOffset() {
      if (window.pageYOffset > 100) {
        setIsTopOFPage(true);
      } else {
        setIsTopOFPage(false);
        setSelectedPage(SelectedPage.Home);
      }
    }
    window.addEventListener("scroll", calculateOffset);
    return () => window.removeEventListener("scroll", calculateOffset);
  });

  const withBackground =
    "fixed top-0 z-30 w-full py-6 bg-gray-20 drop-shadow-xl";
  const withoutBackground = "fixed top-0 z-30 w-full py-6 bg-gray-20";

  return (
    <nav>
      <div
        className={`${
          isTopOFPage ? withBackground : withoutBackground
        } ${flexBetween}`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className="cursor-pointer">
            <img src={Logo} alt="Logo" />
          </div>

          <div className="hidden lg:block">
            <ul className="flex gap-x-4">
              {["Home", "Benefits", "Our Classes", "Contact us"].map((item) => (
                <Link
                  key={`link-${item}`}
                  page={item}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              ))}
            </ul>
          </div>

          <div className={`${flexBetween} lg:flex hidden`}>
            <div className="flex">
              <button className="bg-gray-20 border-b-2 border-secondary-500 hover:bg-secondary-500 duration-300">
                Sign in
              </button>
              <ActionButton
                setSelectedPage={setSelectedPage}
                variant={"desktopMenu"}
              >
                Become a Member
              </ActionButton>
            </div>
          </div>

          <div
            className="block lg:hidden rounded-full bg-secondary-500 p-2"
            onClick={() => setOpenMenu((prev) => !prev)}
          >
            <Bars3Icon className="h-6 w-6 text-black" />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {OpenMenu && (
          <motion.div
            className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: "tween" }}
          >
            <div
              className="flex justify-end p-12"
              onClick={() => setOpenMenu(false)}
            >
              <XMarkIcon className="h-6 w-6 text-black" />
            </div>
            <div>
              <ul className="flex flex-col items-center gap-12">
                {["Home", "Benefits", "Our Classes", "Contact us"].map(
                  (item) => (
                    <Link
                      key={`link-${item}`}
                      page={item}
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  )
                )}
              </ul>
              <div className="flex justify-center py-14">
                <button className="shadow-secondary-500 border-b-2 border-secondary-500 hover:bg-secondary-500 duration-300">
                  Sign in
                </button>
                <ActionButton
                  setSelectedPage={setSelectedPage}
                  variant={"mobileMenu"}
                >
                  Become a Member
                </ActionButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
