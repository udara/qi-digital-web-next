// React.
import React, { useState } from "react";

// Framer motion.
import { AnimatePresence, motion } from "framer-motion";

// Import data.
import TeamData from "../data/TeamData";

// Import components.
import LeftArrowStatic from "./LeftArrowStatic";
import RightArrowStatic from "./RightArrowStatic";

const variants = {
  hidden: (direction) => {
    return {
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    };
  },
  visible: {
    x: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 20 },
      opacity: { duration: 0.5 },
    },
  },
  exit: (direction) => {
    return {
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    };
  },
};

const Team = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextStep = () => {
    setDirection(1);
    if (index === TeamData.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  };

  const prevStep = () => {
    setDirection(-1);
    if (index === 0) {
      setIndex(TeamData.length - 1);
      return;
    }
    setIndex(index - 1);
  };

  return (
    <>
      <section>
        <div className="max-w-[1480px] mx-auto lg:px-20 md:px-12 px-6 py-24">
          <h2 className="font-CormorantGaramond lg:text-[3.3rem] sm:text-[3.3rem] text-[2.8rem] mt-4 leading-none mb-24">
            Our team
          </h2>

          <div className="relative grid content-center h-full relative max-w-[1400px] mx-auto">
            <LeftArrowStatic prev_step={prevStep} />

            <RightArrowStatic next_step={nextStep} />

            <div className="flex">
              <div
                className="mx-auto w-full relative min-h-[1350px] 300:min-h-[1300px] 350:min-h-[1200px] 
              400:min-h-[1150px] 457:min-h-[870px] md:min-h-[850px] lg:min-h-[600px] xl:min-h-[460px]
              overflow-hidden"
              >
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={index}
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    custom={direction}
                    className="min-h-96 absolute top-0 mx-auto w-full"
                  >
                    {TeamData[index]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
