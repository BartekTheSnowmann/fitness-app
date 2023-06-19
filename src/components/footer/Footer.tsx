import React from "react";
import { Logo } from "../../assets";
import { SelectedPage } from "../../shared/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Footer({ setSelectedPage }: Props) {
  return (
    <section className="bg-primary-300">
      <div className="w-5/6 py-16 mx-auto md:flex gap-8">
        <div>
          <img src={Logo} alt="" />
          <p className="my-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <h4 className="font-bold">© Evogym All Rights Reserved.</h4>
        </div>
        <div className="mt-16 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
