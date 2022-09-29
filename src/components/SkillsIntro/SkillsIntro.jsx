import React from "react";

import Marquee from "./Marquee/Marquee";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import "./style.css";

const SkillsIntro = () => {
  return (
    <>
      <div className="skill-intro" style={{ marginLeft: "250px" }}>
        <motion.div
          initial={{ y: -100, x: -100 }}
          animate={{ x: 0, y: 0 }}
          transition={{
            delay: 0.8,
            type: "spring",
            duration: 0.5,
            ease: "easeIn",
            damping: 10,
          }}
        >
          <Icon icon="carbon:arrow-down-right" className="arrow" />
        </motion.div>
        <div>
          <Marquee text="Development" />
          <Marquee text="React js & React Native" />
          <Marquee text="TypeScript, JavaScript" />
        </div>
      </div>
    </>
  );
};

export default SkillsIntro;
