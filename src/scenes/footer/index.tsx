import React from "react";
import Logo from "@/assets/Logo.png";
import Link from "../navbar/Link";
import { SelectedPage } from "@/shared/types";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Footer = ({ selectedPage, setSelectedPage }: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          {/* <img src={Logo} alt="logo" /> */}
          <h1 className="font-[700] uppercase">OrderSwift</h1>

          <p className="my-5">
            Order Swift is a platform that allows you to order food from your
            table in a restaurant, without the need for a waiter.
          </p>
          <p>
            Copyright {new Date().getFullYear()} Orderswift. All Rights
            Reserved.
          </p>
        </div>
        <div className="mt-16 flex basis-1/4 flex-col space-y-[15px] md:mt-0">
          <Link
            page="Home"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="features"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="Our Vision"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="Contact Us"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Lagos, Nigeria</p>
          {/* <p className="my-5">Lorem halal matisis doghul porata</p> */}
          <p>+2349075131896</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
