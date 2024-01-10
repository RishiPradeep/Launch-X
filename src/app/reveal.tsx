import { motion } from "framer-motion";
import React from "react";
interface Props {
  children: JSX.Element;
}

export const Reveal = ({ children }: Props) => {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </div>
  );
};
