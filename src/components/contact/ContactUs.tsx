import React, { useEffect, useRef } from "react";
import { SelectedPage } from "../../shared/types";
import { ContactUsPage } from "../../assets";
import { useForm } from "react-hook-form";
import { motion, useInView } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

type FormValues = {
  name: string;
};

function ContactUs({ setSelectedPage }: Props) {
  const { register, control, handleSubmit, formState, trigger } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { errors } = formState;

  const myRef = useRef<any>();
  const isInView = useInView(myRef, { once: false });

  useEffect(() => {
    const setPage = () => {
      setSelectedPage(SelectedPage.ContactUs);
    };
    setPage();
  }, [isInView]);

  const headingsVariant = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
      },
    },
  };

  const fromBottomVariant = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        type: "tween",
      },
    },
  };

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section className="bg-primary-50" ref={myRef} id={SelectedPage.ContactUs}>
      <motion.div
        className="w-5/6 mx-auto py-16"
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* Headings */}
        <motion.div
          className="md:3/5 pb-10"
          variants={headingsVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h1 className="text-3xl uppercase">Join us now!</h1>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            facere et quae porro ex temporibus eveniet aliquam nam animi ea.
          </p>
        </motion.div>
        <div className="flex flex-col md:flex-row gap-8 justify-between mx-auto ">
          {/* Form */}
          <motion.div
            className="md:w-1/2 z-20"
            variants={fromBottomVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/0b7d9adb9598769ddea7824a888cc905"
              method="POST"
            >
              <div className="form-control mb-4">
                <label htmlFor="name"></label>
                <input
                  type="text"
                  id="name"
                  placeholder="name"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required",
                    },
                  })}
                />
                <p className="error-message">{errors.name?.message}</p>
              </div>
              <div className="form-control my-4">
                <label htmlFor="email"></label>
                <input
                  type="email"
                  id="email"
                  placeholder="email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                  })}
                />
                <p className="error-message">{errors.email?.message}</p>
              </div>
              <div className="form-control">
                <label htmlFor="message"></label>
                <textarea
                  id="message"
                  placeholder="message"
                  cols={30}
                  rows={10}
                  {...register("message")}
                ></textarea>
              </div>

              <button type="submit" className="SubmitButton my-5">
                Submit
              </button>
            </form>
          </motion.div>
          {/* IMG */}
          <motion.div
            className="relative z-10"
            variants={fromBottomVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            <img src={ContactUsPage} alt="" />
            <div className="before:absolute before:-bottom-10 before:-right-10 before:z-[-1] lg:before:content-evolvetext"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default ContactUs;
