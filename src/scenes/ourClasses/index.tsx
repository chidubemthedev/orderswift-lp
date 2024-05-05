import React from "react";
import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/v1.jpeg";
import image2 from "@/assets/v2.webp";
import image3 from "@/assets/v3.webp";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Delicious Food",
    description: "Assorted food and drinks for your delight.",
    image: image1,
  },
  {
    name: "Easy Payment",
    description: "Option to pay with card or cash while making your order.",
    image: image2,
  },
  {
    name: "Instant Access for payment issues",
    description:
      "Over the counter service representative to help with any issues you might experience.",
    image: image3,
  },
  {
    name: "Serene Environment",
    image: image1,
  },
  {
    name: "Eliminate Queues when ordering",
    image: image2,
  },
  {
    name: "Customer Support",
    image: image3,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourvision" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>Our Vision</HText>
            <p className="py-5">
              Our vision is to eliminate the need for queues when ordering food!
              We want to provide a serene environment for our customers to enjoy
              their meals. We also want to provide excellent customer support
              for any issues that may arise.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
