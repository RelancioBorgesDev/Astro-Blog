import { useState } from "react";
import logo from "../assets/logo.svg";
import { navData } from "../data/navData";
import { motion } from "framer-motion";
const navMotion = {
  visible: {
    opacity: 1,

    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  hidden: {
    opacity: 0,
  },
};
const itemMotion = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};
const itemMotionDesktop = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 1, x: 0 },
};
export default function Nav() {
  const navLinks = navData;
  const [toggled, setToggled] = useState(false);

  return (
    <nav className="border-2 p-3 flex bg-white">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="/">
            <img src={logo.src} width={60} height={60} />
          </a>

          <div className="w-px h-12 bg-black bg-opacity-20 mx-4 max-lg:hidden"></div>

          <ul className="flex gap-4 max-lg:hidden">
            {navLinks.map(({ name, path }, index) => (
              <a key={index} href={path}>
                <li className="hover:bg-slate-500/5 p-2 rounded-lg transition-all ease-in-out duration-300 text-lg font-medium">
                  {name}
                </li>
              </a>
            ))}
          </ul>
        </div>
        <h2 className="text-xl max-lg: hidden">Software Engineer</h2>
      </div>

      <div className="hidden max-lg:flex items-center justify-center relative">
        {toggled && (
          <motion.div
            variants={navMotion}
            animate="visible"
            initial="hidden"
            className="fixed left-0 top-0  z-40 flex h-screen
          w-full flex-col items-center  justify-center  gap-24 bg-white text-2xl font-bold"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map(({ name, path }, index) => (
                <a key={index} href={path}>
                  <li className="hover:bg-slate-500/5 p-2 rounded-lg transition-all ease-in-out duration-300 text-2xl font-medium">
                    {name}
                  </li>
                </a>
              ))}
            </ul>
          </motion.div>
        )}
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 25 }}
          transition={{ delay: 0.35 }}
          className="hidden xl:flex xl:items-center  xl:justify-center xl:gap-12 xl:text-lg   "
        ></motion.div>

        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 25 }}
          transition={{ delay: 0.35 }}
          onClick={() => setToggled((prevToggle) => !prevToggle)}
          className={`burger z-50 cursor-pointer space-y-1.5 xl:hidden 
        `}
        >
          <motion.span
            animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
            className="line-1 block h-0.5 w-8 bg-black"
          ></motion.span>

          <motion.span
            animate={{ width: toggled ? 0 : 24 }}
            className="line-2 block h-0.5 w-6 bg-black"
          ></motion.span>
          <motion.span
            animate={{
              rotateZ: toggled ? -45 : 0,
              y: toggled ? -8 : 0,
              width: toggled ? 32 : 24,
            }}
            className="line-3 block h-0.5 w-4 bg-black"
          ></motion.span>
        </motion.div>
      </div>
    </nav>
  );
}
